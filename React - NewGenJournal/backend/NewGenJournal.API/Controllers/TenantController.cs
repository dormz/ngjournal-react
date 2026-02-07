using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NewGenJournal.API.Data;
using NewGenJournal.API.DTOs;
using NewGenJournal.API.Models;
using System.Security.Claims;

namespace NewGenJournal.API.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class TenantController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public TenantController(ApplicationDbContext context)
    {
        _context = context;
    }

    // Check if current user is SuperAdmin
    private bool IsSuperAdmin()
    {
        var role = User.FindFirst(ClaimTypes.Role)?.Value;
        return role == "SuperAdmin";
    }

    // GET: api/tenant
    [HttpGet]
    public async Task<ActionResult<IEnumerable<TenantDto>>> GetTenants()
    {
        // Only SuperAdmin can view all tenants
        if (!IsSuperAdmin())
        {
            return Forbid();
        }

        var tenants = await _context.Tenants
            .OrderBy(t => t.Name)
            .Select(t => new TenantDto
            {
                Id = t.Id,
                Name = t.Name,
                Description = t.Description,
                Subdomain = t.Subdomain,
                IsActive = t.IsActive,
                CreatedAt = t.CreatedAt
            })
            .ToListAsync();

        return Ok(tenants);
    }

    // GET: api/tenant/public (for login/registration dropdown)
    [HttpGet("public")]
    [AllowAnonymous]
    public async Task<ActionResult<IEnumerable<TenantDto>>> GetActiveTenants()
    {
        var tenants = await _context.Tenants
            .Where(t => t.IsActive)
            .OrderBy(t => t.Name)
            .Select(t => new TenantDto
            {
                Id = t.Id,
                Name = t.Name,
                Description = t.Description,
                Subdomain = t.Subdomain,
                IsActive = t.IsActive,
                CreatedAt = t.CreatedAt
            })
            .ToListAsync();

        return Ok(tenants);
    }

    // GET: api/tenant/{id}
    [HttpGet("{id}")]
    public async Task<ActionResult<TenantDto>> GetTenant(int id)
    {
        // Only SuperAdmin can view tenant details
        if (!IsSuperAdmin())
        {
            return Forbid();
        }

        var tenant = await _context.Tenants.FindAsync(id);

        if (tenant == null)
        {
            return NotFound();
        }

        var tenantDto = new TenantDto
        {
            Id = tenant.Id,
            Name = tenant.Name,
            Description = tenant.Description,
            Subdomain = tenant.Subdomain,
            IsActive = tenant.IsActive,
            CreatedAt = tenant.CreatedAt
        };

        return Ok(tenantDto);
    }

    // POST: api/tenant
    [HttpPost]
    public async Task<ActionResult<TenantDto>> CreateTenant([FromBody] CreateTenantDto createDto)
    {
        // Only SuperAdmin can create tenants
        if (!IsSuperAdmin())
        {
            return Forbid();
        }

        var tenant = new Tenant
        {
            Name = createDto.Name,
            Description = createDto.Description,
            Subdomain = createDto.Subdomain,
            IsActive = createDto.IsActive,
            CreatedAt = DateTime.UtcNow
        };

        _context.Tenants.Add(tenant);
        await _context.SaveChangesAsync();

        var tenantDto = new TenantDto
        {
            Id = tenant.Id,
            Name = tenant.Name,
            Description = tenant.Description,
            Subdomain = tenant.Subdomain,
            IsActive = tenant.IsActive,
            CreatedAt = tenant.CreatedAt
        };

        return CreatedAtAction(nameof(GetTenant), new { id = tenant.Id }, tenantDto);
    }

    // PUT: api/tenant/{id}
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateTenant(int id, [FromBody] UpdateTenantDto updateDto)
    {
        // Only SuperAdmin can update tenants
        if (!IsSuperAdmin())
        {
            return Forbid();
        }

        var tenant = await _context.Tenants.FindAsync(id);

        if (tenant == null)
        {
            return NotFound();
        }

        tenant.Name = updateDto.Name;
        tenant.Description = updateDto.Description;
        tenant.Subdomain = updateDto.Subdomain;
        tenant.IsActive = updateDto.IsActive;

        await _context.SaveChangesAsync();

        return NoContent();
    }

    // DELETE: api/tenant/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTenant(int id)
    {
        // Only SuperAdmin can delete tenants
        if (!IsSuperAdmin())
        {
            return Forbid();
        }

        var tenant = await _context.Tenants.FindAsync(id);

        if (tenant == null)
        {
            return NotFound();
        }

        // Check if tenant has users or bookings
        var hasUsers = await _context.Users.AnyAsync(u => u.TenantId == id);
        var hasBookings = await _context.Bookings.AnyAsync(b => b.TenantId == id);

        if (hasUsers || hasBookings)
        {
            return BadRequest(new { message = "Cannot delete tenant with associated users or bookings." });
        }

        _context.Tenants.Remove(tenant);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
