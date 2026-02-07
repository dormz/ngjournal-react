import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import axios from 'axios'
import { apiUrl } from '../config'
import { useNavigate } from 'react-router-dom'

const Tenants = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [tenants, setTenants] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [editingTenant, setEditingTenant] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    subdomain: '',
    isActive: true
  })

  useEffect(() => {
    // Check if user is SuperAdmin
    if (user?.role !== 'SuperAdmin') {
      navigate('/bookings')
      return
    }

    fetchTenants()
  }, [user, navigate])

  const fetchTenants = async () => {
    try {
      setLoading(true)
      const response = await axios.get(apiUrl('/api/tenant'))
      setTenants(response.data)
      setError('')
    } catch (err) {
      setError('Failed to load tenants')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleOpenModal = (tenant = null) => {
    if (tenant) {
      setEditingTenant(tenant)
      setFormData({
        name: tenant.name,
        description: tenant.description || '',
        subdomain: tenant.subdomain || '',
        isActive: tenant.isActive
      })
    } else {
      setEditingTenant(null)
      setFormData({
        name: '',
        description: '',
        subdomain: '',
        isActive: true
      })
    }
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setEditingTenant(null)
    setFormData({
      name: '',
      description: '',
      subdomain: '',
      isActive: true
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      if (editingTenant) {
        await axios.put(apiUrl(`/api/tenant/${editingTenant.id}`), formData)
      } else {
        await axios.post(apiUrl('/api/tenant'), formData)
      }

      handleCloseModal()
      fetchTenants()
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save tenant')
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this tenant? This action cannot be undone if the tenant has users or bookings.')) {
      return
    }

    try {
      await axios.delete(apiUrl(`/api/tenant/${id}`))
      fetchTenants()
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete tenant')
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString()
  }

  if (user?.role !== 'SuperAdmin') {
    return null
  }

  return (
    <div>
      <div className="navbar">
        <div className="navbar-content">
          <div className="navbar-brand">NewGenJournal</div>
          <div className="navbar-actions">
            <span>Welcome, {user?.username} ({user?.role})</span>
            <button 
              className="btn btn-secondary" 
              onClick={() => navigate('/bookings')}
              style={{ marginRight: '10px' }}
            >
              Bookings
            </button>
            <button className="btn btn-secondary" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h1>Tenant Management</h1>
          <button className="btn btn-primary" onClick={() => handleOpenModal()}>
            + New Tenant
          </button>
        </div>

        {error && !showModal && (
          <div className="alert alert-error">{error}</div>
        )}

        {loading ? (
          <div>Loading...</div>
        ) : tenants.length === 0 ? (
          <div className="card">
            <p>No tenants found. Create your first tenant!</p>
          </div>
        ) : (
          <div className="card">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Subdomain</th>
                  <th>Status</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tenants.map((tenant) => (
                  <tr key={tenant.id}>
                    <td>{tenant.name}</td>
                    <td>{tenant.description || '-'}</td>
                    <td>{tenant.subdomain || '-'}</td>
                    <td>
                      <span style={{ 
                        padding: '4px 8px', 
                        borderRadius: '4px',
                        backgroundColor: tenant.isActive ? '#d4edda' : '#f8d7da',
                        color: tenant.isActive ? '#155724' : '#721c24'
                      }}>
                        {tenant.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td>{formatDate(tenant.createdAt)}</td>
                    <td>
                      <button
                        className="btn btn-secondary"
                        style={{ marginRight: '10px', padding: '5px 10px' }}
                        onClick={() => handleOpenModal(tenant)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        style={{ padding: '5px 10px' }}
                        onClick={() => handleDelete(tenant.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>&times;</span>
              <h2>{editingTenant ? 'Edit Tenant' : 'New Tenant'}</h2>

              {error && (
                <div className="alert alert-error" style={{ marginTop: '10px' }}>{error}</div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subdomain">Subdomain</label>
                  <input
                    type="text"
                    id="subdomain"
                    value={formData.subdomain}
                    onChange={(e) => setFormData({ ...formData, subdomain: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input
                      type="checkbox"
                      checked={formData.isActive}
                      onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    />
                    Active
                  </label>
                </div>

                <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                  <button type="submit" className="btn btn-primary">
                    {editingTenant ? 'Update' : 'Create'}
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Tenants
