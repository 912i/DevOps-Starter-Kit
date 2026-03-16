var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});

var app = builder.Build();

app.UseCors("AllowAll");

app.MapGet("/api/health", () => Results.Ok(new { status = "Healthy", timestamp = DateTime.UtcNow }))
    .WithName("GetHealth");

app.MapGet("/api/data", () => 
    new[] { 
        new { Id = 1, Name = "Docker", Type = "Containerization" },
        new { Id = 2, Name = "Angular", Type = "Frontend" },
        new { Id = 3, Name = ".NET", Type = "Backend" }
    })
    .WithName("GetData");

app.Run();
