import React, { useState } from 'react'; // Fixes 'useState' is not defined
import { styles } from '../styles';       // Fixes 'styles' is not defined

const LoginView = ({ onLogin }) => {
  const [email, setEmail] = useState('');

  return (
    <div>
      <h2 style={styles.header}>Welcome to Monzo</h2>
      <input 
        style={styles.input} 
        type="email" 
        placeholder="Enter your email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button 
        style={styles.button} 
        onClick={() => onLogin(email)}
        disabled={!email.includes('@')} 
      >
        Log In
      </button>
    </div>
  );
};

export default LoginView; // Fixes 'LoginView' was not found in './components/LoginView'