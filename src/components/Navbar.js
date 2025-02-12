import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul style={styles.navList}>
        {[
          { path: "/", text: "Home" },
          { path: "/wallet", text: "Digital Wallet" },
          { path: "/payments", text: "UPI/QR Payments" },
          { path: "/microloans", text: "Microloans & Credit Scoring" },
          { path: "/literacy", text: "Financial Literacy" },
          { path: "/bills", text: "Bill Payments & Remittances" },
          { path: "/offline", text: "Offline Access" }
        ].map((item, index) => (
          <li key={index} style={styles.navItem}>
            <Link to={item.path} className="nav-link">{item.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const styles = {
  navList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  navItem: {
    fontSize: '1rem'
  }
};

export default Navbar;
