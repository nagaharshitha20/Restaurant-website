import React, { useState } from 'react';

export default function ToggleButton({ leftLabel, rightLabel }) {
  const [activeLeft, setActiveLeft] = useState(false); // right is active by default

  const toggle = () => setActiveLeft(!activeLeft);

  const containerStyle = {
    position: 'relative',
    width: '340px',
    height: '50px',
    fontFamily: 'sans-serif',
  };

  const sharedBtnStyle = {
    height: '100%',
    fontSize: '14px',
    borderRadius: '9999px',
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    cursor: 'pointer',
    border: 'none',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
  };

  const isLeftActive = activeLeft;
  const isRightActive = !activeLeft;

  return (
    <div style={containerStyle}>
      {/* Left Button */}
      <button
        onClick={toggle}
        style={{
          ...sharedBtnStyle,
          left: 0,
          width: '100%',
          paddingLeft: '16px',
          paddingRight: '130px',
          backgroundColor: isLeftActive ? '#f43f5e' : '#ffffff',
          color: isLeftActive ? '#ffffff' : '#333',
          boxShadow: isLeftActive ? '0 2px 6px rgba(0,0,0,0.1)' : 'none',
          zIndex: 2,
          justifyContent: 'flex-start',
        }}
      >
        ✉️ <span style={{ marginLeft: '8px' }}>{leftLabel}</span>
      </button>

      {/* Right Button */}
      <button
        onClick={toggle}
        style={{
          ...sharedBtnStyle,
          right: 0,
          width: '130px',
          backgroundColor: isRightActive ? '#f43f5e' : '#ffffff',
          color: isRightActive ? '#ffffff' : '#333',
          boxShadow: isRightActive ? '0 2px 6px rgba(0,0,0,0.1)' : 'none',
          zIndex: 3, // always higher to appear tucked in
          justifyContent: 'center',
        }}
      >
        {rightLabel}
      </button>
    </div>
  );
}
