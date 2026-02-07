using Microsoft.EntityFrameworkCore;
using NewGenJournal.API.Models;

namespace NewGenJournal.API.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Role> Roles { get; set; }
    public DbSet<Tenant> Tenants { get; set; }
    public DbSet<Booking> Bookings { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Configure relationships
        modelBuilder.Entity<User>()
            .HasOne(u => u.Role)
            .WithMany(r => r.Users)
            .HasForeignKey(u => u.RoleId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<User>()
            .HasOne(u => u.Tenant)
            .WithMany(t => t.Users)
            .HasForeignKey(u => u.TenantId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Booking>()
            .HasOne(b => b.Tenant)
            .WithMany(t => t.Bookings)
            .HasForeignKey(b => b.TenantId)
            .OnDelete(DeleteBehavior.Restrict);

        modelBuilder.Entity<Booking>()
            .HasOne(b => b.CreatedByUser)
            .WithMany()
            .HasForeignKey(b => b.CreatedByUserId)
            .OnDelete(DeleteBehavior.SetNull);

        // Seed initial data
        SeedData(modelBuilder);
    }

    private void SeedData(ModelBuilder modelBuilder)
    {
        // Seed Roles
        modelBuilder.Entity<Role>().HasData(
            new Role { Id = 1, Name = "SuperAdmin", Description = "Super Administrator with full system access including tenant management" },
            new Role { Id = 2, Name = "Admin", Description = "Administrator with full access" },
            new Role { Id = 3, Name = "User", Description = "Regular user with limited access" }
        );

        // Seed Tenants
        modelBuilder.Entity<Tenant>().HasData(
            new Tenant { Id = 1, Name = "Default Tenant", Subdomain = "default", IsActive = true, CreatedAt = DateTime.UtcNow }
        );

        // Note: SuperAdmin user is created in Program.cs after database creation
        // to properly hash the password
    }
}


