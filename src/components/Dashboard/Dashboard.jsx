import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { firebaseService } from '../../services/firebase.service';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await firebaseService.getUserByEmail(user.email);
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (user) {
      fetchUserData();
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome, {userData?.email}</h1>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </header>
      <main className="dashboard-content">
        {/* Add your dashboard content here */}
      </main>
    </div>
  );
};

export default Dashboard; 