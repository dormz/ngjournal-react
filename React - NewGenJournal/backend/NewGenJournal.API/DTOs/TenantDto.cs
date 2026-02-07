namespace NewGenJournal.API.DTOs;

public class TenantDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string? Description { get; set; }
    public string? Subdomain { get; set; }
    public bool IsActive { get; set; }
    public DateTime CreatedAt { get; set; }
}
