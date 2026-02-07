// Configuration based on environment variables
const config = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000',
  environment: import.meta.env.MODE || 'development',
  apiTimeout: import.meta.env.VITE_API_TIMEOUT || 30000
}

// Helper to build API URLs
export const apiUrl = (path) => {
  const baseUrl = config.apiBaseUrl.replace(/\/$/, '') // Remove trailing slash
  const cleanPath = path.startsWith('/') ? path : `/${path}` // Ensure leading slash
  return `${baseUrl}${cleanPath}`
}

export default config
