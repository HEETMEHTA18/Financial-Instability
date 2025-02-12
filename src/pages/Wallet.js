import React from 'react';

function Wallet() {
  return (
    <div className="wallet-page">
      <section className="hero">
        <h2>Digital Wallet</h2>
        <p>Securely manage your funds and track your transactions.</p>
      </section>
      <section className="content">
        <div className="card">
          <h3>Easy Transfers</h3>
          <p>Send money instantly to friends and family.</p>
        </div>
        <div className="card">
          <h3>Transaction History</h3>
          <p>Review your transaction history in detail.</p>
        </div>
      </section>
    </div>
  );
}

export default Wallet;
