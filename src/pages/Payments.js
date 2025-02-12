import React from 'react';

function Payments() {
  return (
    <div className="payments-page">
      <section className="hero">
        <h2>UPI/QR Payments</h2>
        <p>Make seamless payments with ease and security.</p>
      </section>
      <section className="content">
        <div className="card">
          <h3>Scan & Pay</h3>
          <p>Quickly scan a QR code to initiate a payment.</p>
        </div>
        <div className="card">
          <h3>Instant Transfers</h3>
          <p>Experience lightning-fast money transfers.</p>
        </div>
      </section>
    </div>
  );
}

export default Payments;
