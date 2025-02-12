const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.heetmehta18.me';

export const apiConfig = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://heetmehta18.me'
  }
};

export const authService = {
  async signup(userData) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  async login(credentials) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }
}; 