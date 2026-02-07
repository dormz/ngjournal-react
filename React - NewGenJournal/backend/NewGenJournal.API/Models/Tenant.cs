using System.ComponentModel.DataAnnotations;

namespace NewGenJournal.API.Models;

public class Tenant
{
    [Key]
    public int Id { get; set; }

    [Required]
    [StringLength(100)]
    public string Name { get; set; } = string.Empty;

    [StringLength(255)]
    public string? Description { get; set; }

    [StringLength(50)]
    public string? Subdomain { get; set; }

    public bool IsActive { get; set; } = true;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public virtual ICollection<User> Users { get; set; } = new List<User>();
    public virtual ICollection<Booking> Bookings { get; set; } = new List<Booking>();
}


