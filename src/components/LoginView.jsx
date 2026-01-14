import React, { useState } from 'react';
import { styles } from '../styles';
import Logo from './Monzo-Logo.jpg';

const LoginView = ({ onLogin }) => {
  const [email, setEmail] = useState('');

  return (
    <div>
      <img 
        src={Logo}
        alt="Monzo Logo" 
        style={styles.logo} 
      />
      <h2 style={styles.header}>Welcome to Monzo</h2>
      <p style={styles.subtext}>Enter the email address associated with your account to receive a secure code.</p>
      
      <input 
        style={styles.input} 
        type="email" 
        placeholder="Email address" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <button 
        style={{...styles.button, opacity: email.includes('@') ? 1 : 0.6}} 
        onClick={() => onLogin(email)}
        disabled={!email.includes('@')}
      >
        Continue
      </button>
    </div>
  );
};

export default LoginView;