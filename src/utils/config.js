// API Configuration
// Automatically detect environment and use appropriate API URL
const getApiBaseUrl = () => {
  // Use environment variable if set
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }
  
  // Production backend URL
  const PRODUCTION_API = 'https://mishrilal-portfolio-backend.onrender.com';
  
  // For local development
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return process.env.REACT_APP_API_URL || 'http://localhost:5000';
  }
  
  return PRODUCTION_API;
};

export const API_BASE_URL = getApiBaseUrl();

export default API_BASE_URL;
