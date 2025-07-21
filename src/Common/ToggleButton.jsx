import React, { useState } from 'react';
export default function ToggleButton({ buttonLabel = "Subscribe", onClick }) {
  const [email, setEmail] = useState('');

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    background: 'white',
    borderRadius: '50px',
    overflow: 'hidden',
    maxWidth: '400px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  };

  const inputStyle = {
    flex: 1,
    border: 'none',
    padding: '12px 20px',
    fontSize: '16px',
    outline: 'none',
    borderRadius: '50px 0 0 50px',
  };

  const buttonStyle = {
    backgroundColor: '#EF294C',
    color: 'white',
    border: 'none',
    padding: '12px 30px',
    fontSize: '16px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    borderRadius: '30px',
    transition: 'background 0.3s ease',
  };

  const handleClick = () => {
    if (onClick) onClick(email);
    setEmail(''); // Optional: clear input after click
  };

  return (
    <div style={containerStyle}>
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />
      <button onClick={handleClick} style={buttonStyle}>
        {buttonLabel}
      </button>
    </div>
  );
}
