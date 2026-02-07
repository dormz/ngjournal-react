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

// Configure Entity Framework
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection") 
        ?? "Server=DORMZ-PC\\SQLEXPRESS;Database=NewGenJournalDb;Persist Security Info=False;user id=sa;password=sa; TrustServerCertificate=true"));

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

app.UseHttpsRedirection();

// Use CORS
app.UseCors("AllowReactApp");

// Use custom tenant middleware
app.UseMiddleware<TenantMiddleware>();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

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


