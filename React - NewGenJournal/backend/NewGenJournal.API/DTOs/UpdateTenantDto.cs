using System.ComponentModel.DataAnnotations;

namespace NewGenJournal.API.DTOs;

public class UpdateTenantDto
{
    [Required]
    [StringLength(100)]
    public string Name { get; set; } = string.Empty;

    [StringLength(255)]
    public string? Description { get; set; }

    [StringLength(50)]
    public string? Subdomain { get; set; }

    public bool IsActive { get; set; } = true;
}
