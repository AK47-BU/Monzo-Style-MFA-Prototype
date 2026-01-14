import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { styles } from './styles';
import LoginView from './components/LoginView';
import MFAView from './components/MFAView';
import LockedView from './components/LockedView';
import DashboardView from './components/DashboardView';

function App() {
  // --- STATE MANAGEMENT ---
  const [step, setStep] = useState('login');        // Tracks user journey: login -> mfa -> dashboard/locked
  const [userEmail, setUserEmail] = useState('');   // Stores email for the Out-of-Band (OOB) delivery
  const [otp, setOtp] = useState('');               // The current valid 6-digit challenge code
  const [inputVal, setInputVal] = useState('');     // User's current input in the MFA field
  const [attempts, setAttempts] = useState(0);      // Counter to mitigate brute-force attacks
  const [error, setError] = useState('');           // Dynamic error feedback
  const [isLoading, setIsLoading] = useState(false); // UI state for network simulation

  // --- SECURITY LOGIC: EMAIL DELIVERY ---
  const sendEmail = (generatedOtp, recipientEmail) => {
    const templateParams = {
      user_email: recipientEmail,
      otp_code: generatedOtp,
    };

    // Using Environment Variables to protect API credentials
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
    .then(() => console.log('MFA Email Sent Successfully'))
    .catch((err) => console.error('MFA Email Delivery Failed', err));
  };

  // --- ACTION HANDLERS ---
  const handleLoginStart = (email) => {
    setUserEmail(email);
    // Secure generation: Create a 6-digit numeric string
    const generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(generatedCode);
    setStep('mfa');
    sendEmail(generatedCode, email); // Trigger delivery upon state transition
  };

  const verifyIdentity = () => {
    setIsLoading(true); // Trigger loading spinner for UX
    setError('');

    // Simulation of network latency and server-side validation
    setTimeout(() => {
      setIsLoading(false);
      if (inputVal === otp) {
        setStep('dashboard'); // Success: Transition to protected area
        setAttempts(0);       // Clear history on success
      } else {
        const newAttempts = attempts + 1;
        setAttempts(newAttempts);
        setError(`Incorrect code. ${3 - newAttempts} attempts remaining.`);
        
        // RISK MITIGATION: Lock account after 3 failed tries
        // This prevents automated "Credential Harvesting" scripts from brute-forcing
        if (newAttempts >= 3) {
          setStep('locked');
        }
      }
    }, 1500);
  };

  const resetLock = () => {
    setAttempts(0);
    setError('');
    setStep('mfa');
  };

  return (
    <div style={styles.container}>
      {step === 'login' && <LoginView onLogin={handleLoginStart} />}
      
      {step === 'mfa' && (
        <MFAView 
          otp={otp} 
          userEmail={userEmail}
          inputVal={inputVal} 
          setInputVal={setInputVal} 
          onVerify={verifyIdentity} 
          onResend={() => handleLoginStart(userEmail)}
          error={error}
          isLoading={isLoading}
        />
      )}
      
      {step === 'dashboard' && <DashboardView />}
      {step === 'locked' && <LockedView onUnlock={resetLock} />}
    </div>
  );
}

export default App;