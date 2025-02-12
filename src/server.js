const express = require('express');
const cors = require('cors');
const app = express();

// Updated CORS configuration
app.use(cors({
  origin: ['http://localhost:3000', 'https://heetmehta18.me'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

// Auth routes
app.post('/api/auth/signup', (req, res) => {
  // Handle signup logic
  console.log('Signup request received:', req.body);
  res.json({ message: 'Signup endpoint reached' });
});

app.post('/api/auth/login', (req, res) => {
  // Handle login logic
  console.log('Login request received:', req.body);
  res.json({ message: 'Login endpoint reached' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});