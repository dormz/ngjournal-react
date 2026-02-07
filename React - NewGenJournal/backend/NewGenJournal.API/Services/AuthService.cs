using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using NewGenJournal.API.Data;
using NewGenJournal.API.DTOs;
using NewGenJournal.API.Models;

namespace NewGenJournal.API.Services;

public class AuthService
{
    private readonly ApplicationDbContext _context;
    private readonly IConfiguration _configuration;

    public AuthService(ApplicationDbContext context, IConfiguration configuration)
    {
        _context = context;
        _configuration = configuration;
    }

    public async Task<AuthResponseDto?> RegisterAsync(RegisterDto registerDto)
    {
        // Check if username or email already exists
        if (_context.Users.Any(u => u.Username == registerDto.Username || u.Email == registerDto.Email))
        {
            return null;
        }

        // Get tenant
        var tenant = await _context.Tenants.FindAsync(registerDto.TenantId);
        if (tenant == null || !tenant.IsActive)
        {
            return null;
        }

        // Hash password
        var passwordHash = HashPassword(registerDto.Password);

        // Create user with default role (User = 3)
        var user = new User
        {
                Username = registerDto.Username,
                Email = registerDto.Email,
                PasswordHash = passwordHash,
                RoleId = 3, // Default to User role
                TenantId = registerDto.TenantId,
            CreatedAt = DateTime.UtcNow
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        // Load Role navigation property
        await _context.Entry(user).Reference(u => u.Role).LoadAsync();
        var role = user.Role;

        // Generate token
        var token = GenerateJwtToken(user);

        return new AuthResponseDto
        {
            Token = token,
            Username = user.Username,
            Email = user.Email,
            Role = role?.Name ?? "User",
            TenantId = user.TenantId,
            UserId = user.Id
        };
    }

    public async Task<AuthResponseDto?> LoginAsync(LoginDto loginDto)
    {
        User? user;

        // If TenantId is provided, search by username and tenant
        // If TenantId is null/not provided (e.g., for SuperAdmin), search by username only
        if (loginDto.TenantId.HasValue && loginDto.TenantId.Value > 0)
        {
            user = _context.Users
                .Include(u => u.Role)
                .FirstOrDefault(u => u.Username == loginDto.Username && u.TenantId == loginDto.TenantId.Value);
        }
        else
        {
            // For SuperAdmin or when tenant not specified, find by username only
            user = _context.Users
                .Include(u => u.Role)
                .FirstOrDefault(u => u.Username == loginDto.Username);
        }

        if (user == null || !VerifyPassword(loginDto.Password, user.PasswordHash))
        {
            return null;
        }

        // Check tenant is active
        var tenant = await _context.Tenants.FindAsync(user.TenantId);
        if (tenant == null || !tenant.IsActive)
        {
            return null;
        }

        var token = GenerateJwtToken(user);

        return new AuthResponseDto
        {
            Token = token,
            Username = user.Username,
            Email = user.Email,
            Role = user.Role.Name,
            TenantId = user.TenantId,
            UserId = user.Id
        };
    }

    private string HashPassword(string password)
    {
        using var sha256 = SHA256.Create();
        var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
        return Convert.ToBase64String(hashedBytes);
    }

    private bool VerifyPassword(string password, string passwordHash)
    {
        var hashOfInput = HashPassword(password);
        return hashOfInput == passwordHash;
    }

    private string GenerateJwtToken(User user)
    {
        var jwtKey = _configuration["Jwt:Key"] ?? "YourSuperSecretKeyForJWTTokenGenerationMustBeAtLeast32Characters!";
        var jwtIssuer = _configuration["Jwt:Issuer"] ?? "NewGenJournal";
        var jwtAudience = _configuration["Jwt:Audience"] ?? "NewGenJournal";

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
            new Claim(ClaimTypes.Name, user.Username),
            new Claim(ClaimTypes.Email, user.Email),
            new Claim(ClaimTypes.Role, user.Role.Name),
            new Claim("TenantId", user.TenantId.ToString())
        };

        var token = new JwtSecurityToken(
            issuer: jwtIssuer,
            audience: jwtAudience,
            claims: claims,
            expires: DateTime.UtcNow.AddHours(24),
            signingCredentials: credentials
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}


