import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Wallet from './pages/Wallet';
import Payments from './pages/Payments';
import Microloans from './pages/Microloans';
import Literacy from './pages/Literacy';
import Bills from './pages/Bills';
import OfflineAccess from './pages/OfflineAccess';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Financial In stability</h1>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/microloans" element={<Microloans />} />
            <Route path="/literacy" element={<Literacy />} />
            <Route path="/bills" element={<Bills />} />
            <Route path="/offline" element={<OfflineAccess />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
