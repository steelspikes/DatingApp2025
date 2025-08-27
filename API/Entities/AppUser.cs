namespace API.Entities;

public class AppUser
{
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string DisplayName { get; set; } = "aRTURO BaRaJas";
    public required string Email { get; set; }    
}