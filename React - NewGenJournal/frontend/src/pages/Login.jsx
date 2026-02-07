import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import axios from 'axios'
import { apiUrl } from '../config'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [tenantId, setTenantId] = useState('')
  const [tenants, setTenants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const { login, user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    // Fetch active tenants for dropdown
    const fetchTenants = async () => {
      try {
        const response = await axios.get(apiUrl('/api/tenant/public'))
        setTenants(response.data)
        if (response.data.length > 0) {
          setTenantId(response.data[0].id.toString())
        }
      } catch (err) {
        console.error('Failed to load tenants:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchTenants()
  }, [])

  useEffect(() => {
    if (user) {
      navigate('/bookings')
    }
  }, [user, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    // Allow SuperAdmin to login without tenant selection
    const isSuperAdmin = username.toLowerCase() === 'superadmin'
    const selectedTenantId = tenantId ? parseInt(tenantId) : null

    // Require tenant selection for non-superadmin users
    if (!isSuperAdmin && !tenantId) {
      setError('Please select a tenant')
      return
    }

    const result = await login(username, password, selectedTenantId)
    
    if (result.success) {
      navigate('/bookings')
    } else {
      setError(result.message)
    }
  }

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div className="card" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Login</h2>
        
        {error && (
          <div className="alert alert-error">{error}</div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tenantId">
              Tenant {username.toLowerCase() !== 'superadmin' && <span style={{ color: 'red' }}>*</span>}
            </label>
            {loading ? (
              <div>Loading tenants...</div>
            ) : (
              <select
                id="tenantId"
                value={tenantId}
                onChange={(e) => setTenantId(e.target.value)}
                required={username.toLowerCase() !== 'superadmin'}
              >
                <option value="">Select a tenant{username.toLowerCase() === 'superadmin' ? ' (optional)' : ''}</option>
                {tenants.map((tenant) => (
                  <option key={tenant.id} value={tenant.id}>
                    {tenant.name}
                  </option>
                ))}
              </select>
            )}
            {username.toLowerCase() === 'superadmin' && (
              <small style={{ display: 'block', marginTop: '5px', color: '#666' }}>
                Tenant selection is optional for SuperAdmin
              </small>
            )}
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
            Login
          </button>
        </form>

        <p style={{ marginTop: '15px', textAlign: 'center' }}>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  )
}

export default Login


