import React from 'react';
import { useLocation } from 'react-router-dom';

const TestRouting = () => {
  const location = useLocation();
  
  console.log('Current route:', location.pathname);
  
  return (
    <div style={{ padding: '20px', background: '#f0f0f0' }}>
      <h3>Route Testing</h3>
      <p>Current Path: {location.pathname}</p>
    </div>
  );
};

export default TestRouting; 