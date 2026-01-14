import React from 'react';
import { styles } from '../styles'; 
import Logo from './Monzo-Logo.jpg';

const DashboardView = () => (
  <div>
    <img src={Logo} alt="Monzo Logo" style={styles.logo} />
    
    <div style={{ fontSize: '60px', marginBottom: '20px' }}>✅</div>
    
    <h2 style={{ ...styles.header, color: '#00a082' }}>Identity Verified</h2>
    
    <p style={styles.subtext}>
      Access granted. Your session is now secure and monitored for your protection.
    </p>
    
    <div style={styles.notification}>
      <strong>Security Status:</strong> Account active. No unusual activity detected.
    </div>

    <button 
      style={{ ...styles.button, backgroundColor: '#14233c' }} 
      onClick={() => window.location.reload()}
    >
      Log Out Securely
    </button>
  </div>
);

export default DashboardView;