using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using NewGenJournal.API.Data;
using NewGenJournal.API.Middleware;
using NewGenJournal.API.Models;
using NewGenJournal.API.Services;
using System.Security.Cryptography;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();

// Configure Entity Framework - use fallback if config is missing/invalid (e.g. user secrets placeholder)
const string fallbackConnectionString = "Server=localhost;Database=NewGenJournalDb;Trusted_Connection=True;TrustServerCertificate=True";
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
if (string.IsNullOrWhiteSpace(connectionString) ||
    (!connectionString.Contains("Server=", StringComparison.OrdinalIgnoreCase) && !connectionString.Contains("Data Source=", StringComparison.OrdinalIgnoreCase)))
{
    connectionString = fallbackConnectionString;
}
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString));

// Configure JWT Authentication
var jwtKey = builder.Configuration["Jwt:Key"] ?? "Q@Vzt3&JtgxFj0*$dlh%Rrdhk2D$U91mBt";
var jwtIssuer = builder.Configuration["Jwt:Issuer"] ?? "NewGenJournal";
var jwtAudience = builder.Configuration["Jwt:Audience"] ?? "NewGenJournal";

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = jwtIssuer,
            ValidAudience = jwtAudience,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey))
        };
    });

builder.Services.AddAuthorization();

// Register services
builder.Services.AddScoped<AuthService>();

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:3000", "http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials();
    });
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "NewGenJournal API", Version = "v1" });
    
    // Add JWT authentication to Swagger
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Description = "JWT Authorization header using the Bearer scheme. Example: \"Authorization: Bearer {token}\"",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer"
    });

    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            Array.Empty<string>()
        }
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// CORS must run before HTTPS redirection so preflight and responses get CORS headers
app.UseCors("AllowReactApp");

// Only redirect HTTP→HTTPS in production; in Development use HTTP (e.g. http://localhost:5000)
if (!app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}

// Use custom tenant middleware
app.UseMiddleware<TenantMiddleware>();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

// Root: in Development redirect to Swagger; otherwise return API info
app.MapGet("/", (IWebHostEnvironment env) => env.IsDevelopment()
    ? Results.Redirect("/swagger")
    : Results.Ok(new { name = "NewGenJournal API", status = "running", docs = "Not available in production" }))
    .ExcludeFromDescription();

// Ensure database is created and seeded
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<ApplicationDbContext>();
    context.Database.EnsureCreated();

    // Create default SuperAdmin user if it doesn't exist
    if (!context.Users.Any(u => u.Username == "superadmin"))
    {
        var superAdminRole = context.Roles.FirstOrDefault(r => r.Name == "SuperAdmin");
        var defaultTenant = context.Tenants.FirstOrDefault(t => t.Id == 1);

        if (superAdminRole != null && defaultTenant != null)
        {
            // Hash password for "SuperAdmin123!"
            string HashPassword(string password)
            {
                using var sha256 = SHA256.Create();
                var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
                return Convert.ToBase64String(hashedBytes);
            }

            var passwordHash = HashPassword("SuperAdmin123!");
            
            var superAdmin = new User
            {
                Username = "superadmin",
                Email = "superadmin@newgenjournal.com",
                PasswordHash = passwordHash,
                RoleId = superAdminRole.Id,
                TenantId = defaultTenant.Id,
                CreatedAt = DateTime.UtcNow
            };

            context.Users.Add(superAdmin);
            context.SaveChanges();
        }
    }
}

app.Run();


