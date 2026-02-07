# Troubleshooting Guide

## Network Error When Trying to Login

If you're experiencing a "Network Error" when trying to login, follow these steps:

### 1. Check if Backend is Running

**Verify the backend API is running:**
```bash
cd backend/NewGenJournal.API
dotnet run
```

You should see output like:
```
Now listening on: http://localhost:5000
```

### 2. Check Backend Port

The backend is configured to run on:
- HTTP: `http://localhost:5000`
- HTTPS: `https://localhost:5001` (if enabled)

**If using a different port**, update the frontend `.env.development`:
```
VITE_API_BASE_URL=http://localhost:YOUR_PORT
```

### 3. Test Backend Connectivity

Open a browser and navigate to:
- `http://localhost:5000/swagger` - Should show Swagger UI if backend is running
- `http://localhost:5000/api/tenant/public` - Should return tenant list

### 4. Check CORS Configuration

The backend CORS is configured for:
- `http://localhost:3000` (Vite default)
- `http://localhost:5173` (Vite alternative)

**If your frontend runs on a different port**, update `backend/NewGenJournal.API/Program.cs`:
```csharp
policy.WithOrigins("http://localhost:YOUR_PORT")
```

### 5. Frontend Port Check

Vite is configured to run on port 3000. Check what port it's actually using when you run `npm run dev`.

**If different**, either:
- Update vite.config.js: `port: YOUR_PORT`
- Or update backend CORS to include your port

### 6. Verify API URL Configuration

Check that `frontend/.env.development` exists and contains:
```
VITE_API_BASE_URL=http://localhost:5000
```

If the file doesn't exist, create it with the above content.

### 7. Browser Console Check

Open browser DevTools (F12) → Console tab:
- Look for CORS errors
- Look for connection refused errors
- Check the Network tab to see what URL is being called

### 8. Common Issues

**Issue: "ERR_CONNECTION_REFUSED"**
- Backend is not running
- Backend is on a different port
- Solution: Start backend with `dotnet run`

**Issue: CORS Error**
- Frontend origin not in CORS allowed list
- Solution: Update CORS in `Program.cs`

**Issue: SSL Certificate Error (HTTPS)**
- Backend running on HTTPS with self-signed cert
- Solution: Use HTTP in development or accept the certificate

### 9. Quick Fix - Use Proxy (Recommended)

If you're using Vite, it has a proxy configured. Instead of using full URLs, use relative paths:

The proxy in `vite.config.js` will forward `/api/*` requests to the backend automatically.

**Make sure your `apiUrl` function is working correctly** - it should return the full URL when not using proxy.

### 10. Reset Everything

1. Stop both frontend and backend
2. Delete `frontend/node_modules` and reinstall: `npm install`
3. Restart backend: `cd backend/NewGenJournal.API && dotnet run`
4. Restart frontend: `cd frontend && npm run dev`
5. Clear browser cache or use incognito mode

## Still Having Issues?

Check the browser Network tab:
1. Open DevTools (F12)
2. Go to Network tab
3. Try to login
4. Look for the login request
5. Check:
   - Request URL (should be `http://localhost:5000/api/auth/login`)
   - Status code (200 = success, 404 = not found, CORS = blocked)
   - Response (should show error details)
