import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import axios from 'axios'
import { apiUrl } from '../config'

const Bookings = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [editingBooking, setEditingBooking] = useState(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: ''
  })

  useEffect(() => {
    fetchBookings()
  }, [])

  const fetchBookings = async () => {
    try {
      setLoading(true)
      const response = await axios.get(apiUrl('/api/bookings'))
      setBookings(response.data)
      setError('')
    } catch (err) {
      setError('Failed to load bookings')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleOpenModal = (booking = null) => {
    if (booking) {
      setEditingBooking(booking)
      setFormData({
        title: booking.title,
        description: booking.description || '',
        startDate: new Date(booking.startDate).toISOString().slice(0, 16),
        endDate: new Date(booking.endDate).toISOString().slice(0, 16)
      })
    } else {
      setEditingBooking(null)
      setFormData({
        title: '',
        description: '',
        startDate: '',
        endDate: ''
      })
    }
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setEditingBooking(null)
    setFormData({
      title: '',
      description: '',
      startDate: '',
      endDate: ''
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    try {
      if (editingBooking) {
        await axios.put(apiUrl(`/api/bookings/${editingBooking.id}`), {
          title: formData.title,
          description: formData.description,
          startDate: new Date(formData.startDate).toISOString(),
          endDate: new Date(formData.endDate).toISOString()
        })
      } else {
        await axios.post(apiUrl('/api/bookings'), {
          title: formData.title,
          description: formData.description,
          startDate: new Date(formData.startDate).toISOString(),
          endDate: new Date(formData.endDate).toISOString()
        })
      }

      handleCloseModal()
      fetchBookings()
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save booking')
    }
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this booking?')) {
      return
    }

    try {
      await axios.delete(apiUrl(`/api/bookings/${id}`))
      fetchBookings()
    } catch (err) {
      setError('Failed to delete booking')
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString()
  }

  return (
    <div>
      <div className="navbar">
        <div className="navbar-content">
          <div className="navbar-brand">NewGenJournal</div>
          <div className="navbar-actions">
            <span>Welcome, {user?.username} ({user?.role})</span>
            {user?.role === 'SuperAdmin' && (
              <button 
                className="btn btn-secondary" 
                onClick={() => navigate('/tenants')}
                style={{ marginRight: '10px' }}
              >
                Tenants
              </button>
            )}
            <button className="btn btn-secondary" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h1>Bookings</h1>
          <button className="btn btn-primary" onClick={() => handleOpenModal()}>
            + New Booking
          </button>
        </div>

        {error && !showModal && (
          <div className="alert alert-error">{error}</div>
        )}

        {loading ? (
          <div>Loading...</div>
        ) : bookings.length === 0 ? (
          <div className="card">
            <p>No bookings found. Create your first booking!</p>
          </div>
        ) : (
          <div className="card">
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>{booking.title}</td>
                    <td>{booking.description || '-'}</td>
                    <td>{formatDate(booking.startDate)}</td>
                    <td>{formatDate(booking.endDate)}</td>
                    <td>
                      <button
                        className="btn btn-secondary"
                        style={{ marginRight: '10px', padding: '5px 10px' }}
                        onClick={() => handleOpenModal(booking)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        style={{ padding: '5px 10px' }}
                        onClick={() => handleDelete(booking.id)}
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
              <h2>{editingBooking ? 'Edit Booking' : 'New Booking'}</h2>

              {error && (
                <div className="alert alert-error" style={{ marginTop: '10px' }}>{error}</div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="title">Title *</label>
                  <input
                    type="text"
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
                  <label htmlFor="startDate">Start Date *</label>
                  <input
                    type="datetime-local"
                    id="startDate"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="endDate">End Date *</label>
                  <input
                    type="datetime-local"
                    id="endDate"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    required
                  />
                </div>

                <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                  <button type="submit" className="btn btn-primary">
                    {editingBooking ? 'Update' : 'Create'}
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

export default Bookings


