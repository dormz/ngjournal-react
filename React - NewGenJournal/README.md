# NewGenJournal - React + .NET Application

A full-stack application with React frontend and .NET backend, featuring authentication, multi-tenancy, role-based access control, and CRUD operations.

## Features

- ✅ User authentication (Login/Register)
- ✅ JWT-based authentication
- ✅ Role-based access control (Admin/User)
- ✅ Multi-tenancy support
- ✅ Booking CRUD operations (example)
- ✅ Entity Framework with SQL Server

## Project Structure

```
├── backend/
│   └── NewGenJournal.API/          # .NET Web API
├── frontend/                        # React application
└── README.md
```

## Prerequisites

- .NET 8.0 SDK
- Node.js 18+ and npm
- SQL Server (LocalDB or SQL Server Express)
- Visual Studio 2022 or VS Code (recommended)

## Backend Setup (.NET)

1. Navigate to the backend directory:
   ```bash
   cd backend/NewGenJournal.API
   ```

2. Restore dependencies:
   ```bash
   dotnet restore
   ```

3. Update the connection string in `appsettings.json` if needed (default uses LocalDB).

4. Run the application:
   ```bash
   dotnet run
   ```

   The API will be available at `https://localhost:5000` or `http://localhost:5000`

5. Swagger UI will be available at `https://localhost:5000/swagger` when running in Development mode.

## Frontend Setup (React)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`

## Database

The database will be automatically created when you first run the backend application. The application uses Entity Framework's `EnsureCreated()` method for development.

**Note:** For production, use migrations instead:
```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

## Default Data

The application seeds the following default data:
- **Roles**: Admin, User
- **Tenant**: Default Tenant (ID: 1)

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user (protected)

### Bookings (Protected)
- `GET /api/bookings` - Get all bookings for current tenant
- `GET /api/bookings/{id}` - Get a specific booking
- `POST /api/bookings` - Create a new booking
- `PUT /api/bookings/{id}` - Update a booking
- `DELETE /api/bookings/{id}` - Delete a booking

## Authentication

The application uses JWT (JSON Web Tokens) for authentication. After login/registration, the token is stored in localStorage and sent with each API request.

## Multi-Tenancy

Multi-tenancy is implemented by:
- Storing TenantId in the JWT token
- Filtering all queries by TenantId in the backend
- Ensuring users can only access data from their tenant

## Role-Based Access Control

The application supports roles:
- **Admin**: Full access (can be extended for specific permissions)
- **User**: Regular user access

## Configuration

### Backend Configuration (`appsettings.json`)
- Connection String: Configure your SQL Server connection
- JWT Settings: Configure JWT key, issuer, and audience

### Frontend Configuration (`vite.config.js`)
- API Proxy: Configured to proxy `/api` requests to `http://localhost:5000`

## Security Notes

1. **JWT Key**: Change the default JWT key in `appsettings.json` for production
2. **Password Hashing**: Currently using SHA256. For production, consider using bcrypt or PBKDF2
3. **HTTPS**: Use HTTPS in production
4. **CORS**: CORS is configured for development. Adjust for production

## Troubleshooting

1. **Database Connection Issues**: Ensure SQL Server LocalDB is installed or update the connection string
2. **CORS Errors**: Verify the frontend proxy is configured correctly
3. **Authentication Failures**: Check that JWT configuration matches between frontend and backend

## License

This project is for educational purposes.


