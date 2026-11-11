using System.ComponentModel.DataAnnotations;

namespace TaskManagement.API.Models;

public class TaskItem
{
    public int Id { get; set; }

    [Required]
    [MaxLength(100)]
    public string Title { get; set; } = string.Empty;

    public string? Description { get; set; }

    public TaskStatus Status { get; set; }

    public DateTime CreatedAt { get; set; }
}
