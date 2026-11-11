using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManagement.API.Data;
using TaskManagement.API.Models;

namespace TaskManagement.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TasksController : ControllerBase
{
    private readonly AppDbContext _context;

    public TasksController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetTasks(
        string? status,
        string? search)
    {
        var tasks = await _context.Tasks.ToListAsync();

        if (!string.IsNullOrWhiteSpace(status))
        {
            tasks = tasks
                .Where(t =>
                    t.Status.ToString()
                    .Equals(
                        status,
                        StringComparison.OrdinalIgnoreCase))
                .ToList();
        }

        if (!string.IsNullOrWhiteSpace(search))
        {
            tasks = tasks
                .Where(t =>
                    t.Title.Contains(
                        search,
                        StringComparison.OrdinalIgnoreCase))
                .ToList();
        }

        return Ok(tasks);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetTask(int id)
    {
        var task = await _context.Tasks.FindAsync(id);

        if (task == null)
            return NotFound();

        return Ok(task);
    }

    [HttpPost]
    public async Task<IActionResult> CreateTask(TaskItem task)
    {
        task.CreatedAt = DateTime.UtcNow;

        _context.Tasks.Add(task);

        await _context.SaveChangesAsync();

        return Ok(task);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateTask(
        int id,
        TaskItem updatedTask)
    {
        var task = await _context.Tasks.FindAsync(id);

        if (task == null)
            return NotFound();

        task.Title = updatedTask.Title;
        task.Description = updatedTask.Description;
        task.Status = updatedTask.Status;

        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTask(int id)
    {
        var task = await _context.Tasks.FindAsync(id);

        if (task == null)
            return NotFound();

        _context.Tasks.Remove(task);

        await _context.SaveChangesAsync();

        return NoContent();
    }
}