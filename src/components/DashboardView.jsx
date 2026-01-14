import React from 'react';
import { styles } from '../styles';

const DashboardView = () => (
  <div>
    <h2 style={{...styles.header, color: '#28a745'}}>Access Granted</h2>
    <p>Identity verified successfully.</p>
    <div style={{...styles.notification, backgroundColor: '#d4edda', color: '#155724'}}>
      <strong>System Status:</strong> Monitoring for anomalies...
    </div>
    <button 
      style={{...styles.button, backgroundColor: '#14233c'}} 
      onClick={() => window.location.reload()}
    >
      Log Out
    </button>
  </div>
);

export default DashboardView;