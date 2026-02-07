# Configuration Guide

This document explains how to configure the application for different environments (Development and Production).

## Frontend Configuration

The frontend uses environment variables that are prefixed with `VITE_` to be accessible in the browser.

### Environment Files

- `.env.development` - Used when running `npm run dev`
- `.env.production` - Used when building for production with `npm run build`
- `.env.example` - Example template for environment variables

### Available Variables

| Variable | Description | Default | Example |
|----------|-------------|---------|---------|
| `VITE_API_BASE_URL` | Base URL for the API backend | `http://localhost:5000` | `https://api.yourdomain.com` |
| `VITE_API_TIMEOUT` | API request timeout in milliseconds | `30000` | `60000` |

### Configuration Usage

The frontend uses a centralized configuration file at `src/config.js`:

```javascript
import { apiUrl } from './config'

// Use apiUrl helper to build full API URLs
const response = await axios.get(apiUrl('/api/bookings'))
```

### Setting Up Environment Files

1. **Development**: The `.env.development` file is already configured for local development.
2. **Production**: Copy `.env.example` to `.env.production` and update the `VITE_API_BASE_URL` with your production API URL.

```bash
# Development (already configured)
VITE_API_BASE_URL=http://localhost:5000

# Production (update with your production URL)
VITE_API_BASE_URL=https://api.yourdomain.com
```

## Backend Configuration

The backend uses ASP.NET Core configuration files that are automatically loaded based on the environment.

### Configuration Files

- `appsettings.json` - Base configuration (fallback/default values)
- `appsettings.Development.json` - Development-specific settings (used when `ASPNETCORE_ENVIRONMENT=Development`)
- `appsettings.Production.json` - Production-specific settings (used when `ASPNETCORE_ENVIRONMENT=Production`)

### Configuration Settings

#### Connection Strings

- **Development**: Uses local SQL Server instance
- **Production**: Must be updated with your production database connection string

#### JWT Settings

- **Key**: Secret key for signing JWT tokens (MUST be changed in production)
- **Issuer**: Token issuer name
- **Audience**: Token audience name

#### Logging

- **Development**: More verbose logging including SQL queries
- **Production**: Minimal logging (warnings and errors only)

### Setting Environment Variables

The backend automatically loads the appropriate configuration file based on the `ASPNETCORE_ENVIRONMENT` variable:

**Windows:**
```powershell
$env:ASPNETCORE_ENVIRONMENT="Development"
dotnet run
```

**Linux/Mac:**
```bash
export ASPNETCORE_ENVIRONMENT=Development
dotnet run
```

**Production Deployment:**
```bash
export ASPNETCORE_ENVIRONMENT=Production
dotnet run
```

### Important Production Notes

⚠️ **Before deploying to production, update these settings:**

1. **Connection String**: Update `appsettings.Production.json` with your production database connection string
2. **JWT Key**: Generate a strong, random secret key (at least 32 characters) and update it in `appsettings.Production.json`
3. **Allowed Hosts**: Configure allowed hosts for security
4. **CORS Origins**: Update CORS policy in `Program.cs` to allow only your production frontend URL

## Security Best Practices

1. **Never commit sensitive data**: Add `.env.*` files to `.gitignore` (except `.env.example`)
2. **Use strong JWT keys**: Generate random, secure keys for production
3. **Use environment variables**: For production, consider using environment variables or a secure secrets manager instead of configuration files
4. **Update CORS**: Only allow trusted origins in production

## Example Production Setup

### Frontend (.env.production)
```
VITE_API_BASE_URL=https://api.yourdomain.com
VITE_API_TIMEOUT=30000
```

### Backend (appsettings.Production.json)
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=prod-server;Database=NewGenJournalDb;..."
  },
  "Jwt": {
    "Key": "YourVeryStrongRandomSecretKeyHere12345678901234567890"
  }
}
```

### Environment Variable (Backend)
```bash
export ASPNETCORE_ENVIRONMENT=Production
```
