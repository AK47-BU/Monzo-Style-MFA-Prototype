import React, { useState, useEffect } from 'react';
import { styles } from '../styles'
import Logo from './Monzo-Logo.jpg';

const MFAView = ({ otp, userEmail, inputVal, setInputVal, onVerify, onResend, error, isLoading }) => {
  // TIMERS: Used for Rate Limiting and Session Expiry
  const [resendTimer, setResendTimer] = useState(60); // Prevents SMS/Email gateway spamming
  const [expiryTimer, setExpiryTimer] = useState(120); // Code validity window (120 seconds)

  useEffect(() => {
    const timer = setInterval(() => {
      setResendTimer((prev) => (prev > 0 ? prev - 1 : 0));
      setExpiryTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [otp]); // Reset timers whenever a new challenge (OTP) is issued

  const handleResend = () => {
    setResendTimer(60);
    setExpiryTimer(120);
    onResend();
  };

  return (
        <div>
          {/* Monzo Logo for brand consistency */}
          <img 
            src={Logo}
            alt="Monzo Logo" 
            style={styles.logo} 
          />
          
          <h2 style={styles.header}>Verify It's You</h2>
      <p style={{ fontSize: '14px', color: '#555' }}>
        Code sent to: <strong>{userEmail}</strong>
      </p>

      {/* EXPIRY LOGIC: Disabling input after timeout */}
      {expiryTimer > 0 ? (
        <p style={{ fontSize: '12px', color: '#888' }}>
          Code expires in: {Math.floor(expiryTimer / 60)}:{(expiryTimer % 60).toString().padStart(2, '0')}
        </p>
      ) : (
        <p style={{ ...styles.error, fontWeight: 'bold' }}>Security Timeout: Code has expired.</p>
      )}

      {isLoading ? (
        <div style={styles.spinner} className="spinner-animate"></div>
      ) : (
        <>
          <input
            style={{ ...styles.input, opacity: expiryTimer === 0 ? 0.5 : 1 }}
            disabled={expiryTimer === 0}
            type="text"
            maxLength="6"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="000000"
          />
          <button 
            style={{ ...styles.button, opacity: (expiryTimer === 0 || inputVal.length < 6) ? 0.5 : 1 }} 
            onClick={onVerify}
            disabled={expiryTimer === 0 || inputVal.length < 6}
          >
            Verify Identity
          </button>
        </>
      )}

      {error && <p style={styles.error}>{error}</p>}

      {/* RATE LIMITING: Prevent frequent API calls */}
      <button 
        style={{ ...styles.secondaryButton, opacity: resendTimer > 0 ? 0.5 : 1 }} 
        onClick={handleResend}
        disabled={resendTimer > 0}
      >
        {resendTimer > 0 ? `Resend available in ${resendTimer}s` : "Resend code"}
      </button>
    </div>
  );
};

export default MFAView;