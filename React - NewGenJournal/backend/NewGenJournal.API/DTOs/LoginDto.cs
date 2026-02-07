using System.ComponentModel.DataAnnotations;

namespace NewGenJournal.API.DTOs;

public class LoginDto
{
    [Required]
    public string Username { get; set; } = string.Empty;

    [Required]
    public string Password { get; set; } = string.Empty;

    public int? TenantId { get; set; }
}


