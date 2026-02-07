using System.Security.Claims;

namespace NewGenJournal.API.Middleware;

public class TenantMiddleware
{
    private readonly RequestDelegate _next;

    public TenantMiddleware(RequestDelegate next)
    {
        _next = next;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        // Extract tenant ID from JWT claims
        var tenantIdClaim = context.User.FindFirst("TenantId");
        if (tenantIdClaim != null && int.TryParse(tenantIdClaim.Value, out var tenantId))
        {
            context.Items["TenantId"] = tenantId;
        }

        await _next(context);
    }
}


