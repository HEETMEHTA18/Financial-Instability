import React from 'react';

function OfflineAccess() {
  return (
    <div className="offline-page">
      <section className="hero">
        <h2>Offline Access</h2>
        <p>Access essential services even when you are offline.</p>
      </section>
      <section className="content">
        <div className="card">
          <h3>SMS Banking</h3>
          <p>Perform basic banking operations via SMS.</p>
        </div>
        <div className="card">
          <h3>USSD Services</h3>
          <p>Use USSD codes on your mobile for instant services.</p>
        </div>
      </section>
    </div>
  );
}

export default OfflineAccess;
