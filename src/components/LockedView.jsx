import React, { useState, useEffect } from 'react';
import { styles } from '../styles';

const LockedView = ({ onUnlock }) => {
  const [seconds, setSeconds] = useState(30); // Mandatory 30-second lockout

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  return (
    <div>
      <h2 style={{...styles.header, color: '#d93025'}}>Account Locked</h2>
      <p>Too many failed attempts detected. This is a measure to prevent unauthorized access.</p>
      
      {/* Visual countdown to provide feedback on throttling */}
      <div style={{...styles.notification, backgroundColor: '#fff5f5', color: '#d93025', fontSize: '24px', fontWeight: 'bold'}}>
        00:{seconds < 10 ? `0${seconds}` : seconds}
      </div>

      <button 
        style={{...styles.button, backgroundColor: seconds > 0 ? '#ccc' : '#ff4d4d'}} 
        disabled={seconds > 0}
        onClick={onUnlock}
      >
        {seconds > 0 ? 'Wait to Retry' : 'Try Again'}
      </button>
    </div>
  );
};

export default LockedView;