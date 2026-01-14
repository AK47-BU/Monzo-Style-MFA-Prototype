export const styles = {
  container: {
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    maxWidth: '420px',
    margin: '60px auto',
    padding: '40px 30px',
    borderRadius: '24px', // Softer corners for a modern feel
    boxShadow: '0 20px 40px rgba(0,0,0,0.08)', // Deep, soft shadow
    textAlign: 'center',
    backgroundColor: '#ffffff',
    border: '1px solid #f0f2f5',
  },
  logo: {
    width: '120px',
    marginBottom: '30px',
  },
  header: { 
    color: '#14233c', 
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '12px' 
  },
  subtext: {
    color: '#6c788a',
    fontSize: '15px',
    lineHeight: '1.5',
    marginBottom: '25px',
  },
  input: {
    padding: '16px',
    fontSize: '20px',
    width: '100%',
    marginBottom: '20px',
    borderRadius: '12px',
    border: '2px solid #eef0f2',
    textAlign: 'center',
    letterSpacing: '4px',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
    outline: 'none',
  },
  button: {
    padding: '16px 24px',
    fontSize: '16px',
    backgroundColor: '#ff4d4d', // Monzo Hot Coral
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    width: '100%',
    fontWeight: 'bold',
    boxShadow: '0 4px 12px rgba(255, 77, 77, 0.3)',
  },
  secondaryButton: {
    marginTop: '20px',
    background: 'none',
    border: 'none',
    color: '#1a73e8',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
  },
  error: { 
    color: '#d93025', 
    fontSize: '14px', 
    marginTop: '15px',
    backgroundColor: '#fff1f0',
    padding: '10px',
    borderRadius: '8px'
  },
  notification: {
    backgroundColor: '#f4f9ff',
    padding: '15px',
    borderRadius: '12px',
    fontSize: '13px',
    color: '#14233c',
    marginBottom: '25px',
    border: '1px solid #e1eefe',
  }
};