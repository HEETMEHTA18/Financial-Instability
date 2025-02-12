import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpForm from './components/Auth/SignUpForm';
import Dashboard from './components/Dashboard/Dashboard';
import { AuthProvider } from './context/AuthContext';

function App() {
  console.log('App rendering'); // Debug log

  return (
    <AuthProvider>
      <div className="app">
        <Router>
          <Routes>
            <Route 
              path="/" 
              element={
                <div style={{ padding: '20px' }}>
                  <h1>Welcome to Financial Instability</h1>
                  <SignUpForm />
                </div>
              } 
            />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App; 