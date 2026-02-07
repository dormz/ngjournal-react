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
public class BookingsController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public BookingsController(ApplicationDbContext context)
    {
        _context = context;
    }

    // GET: api/bookings
    [HttpGet]
    public async Task<ActionResult<IEnumerable<BookingDto>>> GetBookings()
    {
        var tenantId = GetTenantId();
        if (tenantId == null)
        {
            return Unauthorized();
        }

        var bookings = await _context.Bookings
            .Where(b => b.TenantId == tenantId)
            .OrderByDescending(b => b.CreatedAt)
            .Select(b => new BookingDto
            {
                Id = b.Id,
                Title = b.Title,
                Description = b.Description,
                StartDate = b.StartDate,
                EndDate = b.EndDate
            })
            .ToListAsync();

        return Ok(bookings);
    }

    // GET: api/bookings/5
    [HttpGet("{id}")]
    public async Task<ActionResult<BookingDto>> GetBooking(int id)
    {
        var tenantId = GetTenantId();
        if (tenantId == null)
        {
            return Unauthorized();
        }

        var booking = await _context.Bookings
            .FirstOrDefaultAsync(b => b.Id == id && b.TenantId == tenantId);

        if (booking == null)
        {
            return NotFound();
        }

        return Ok(new BookingDto
        {
            Id = booking.Id,
            Title = booking.Title,
            Description = booking.Description,
            StartDate = booking.StartDate,
            EndDate = booking.EndDate
        });
    }

    // POST: api/bookings
    [HttpPost]
    public async Task<ActionResult<BookingDto>> CreateBooking([FromBody] BookingDto bookingDto)
    {
        var tenantId = GetTenantId();
        var userId = GetUserId();

        if (tenantId == null || userId == null)
        {
            return Unauthorized();
        }

        if (bookingDto.EndDate <= bookingDto.StartDate)
        {
            return BadRequest(new { message = "End date must be after start date." });
        }

        var booking = new Booking
        {
            Title = bookingDto.Title,
            Description = bookingDto.Description,
            StartDate = bookingDto.StartDate,
            EndDate = bookingDto.EndDate,
            TenantId = tenantId.Value,
            CreatedByUserId = userId,
            CreatedAt = DateTime.UtcNow
        };

        _context.Bookings.Add(booking);
        await _context.SaveChangesAsync();

        bookingDto.Id = booking.Id;
        return CreatedAtAction(nameof(GetBooking), new { id = booking.Id }, bookingDto);
    }

    // PUT: api/bookings/5
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateBooking(int id, [FromBody] BookingDto bookingDto)
    {
        var tenantId = GetTenantId();
        if (tenantId == null)
        {
            return Unauthorized();
        }

        var booking = await _context.Bookings
            .FirstOrDefaultAsync(b => b.Id == id && b.TenantId == tenantId);

        if (booking == null)
        {
            return NotFound();
        }

        if (bookingDto.EndDate <= bookingDto.StartDate)
        {
            return BadRequest(new { message = "End date must be after start date." });
        }

        booking.Title = bookingDto.Title;
        booking.Description = bookingDto.Description;
        booking.StartDate = bookingDto.StartDate;
        booking.EndDate = bookingDto.EndDate;
        booking.UpdatedAt = DateTime.UtcNow;

        await _context.SaveChangesAsync();

        return NoContent();
    }

    // DELETE: api/bookings/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteBooking(int id)
    {
        var tenantId = GetTenantId();
        if (tenantId == null)
        {
            return Unauthorized();
        }

        var booking = await _context.Bookings
            .FirstOrDefaultAsync(b => b.Id == id && b.TenantId == tenantId);

        if (booking == null)
        {
            return NotFound();
        }

        _context.Bookings.Remove(booking);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private int? GetTenantId()
    {
        var tenantIdClaim = User.FindFirst("TenantId");
        if (tenantIdClaim != null && int.TryParse(tenantIdClaim.Value, out var tenantId))
        {
            return tenantId;
        }
        return null;
    }

    private int? GetUserId()
    {
        var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier);
        if (userIdClaim != null && int.TryParse(userIdClaim.Value, out var userId))
        {
            return userId;
        }
        return null;
    }
}


