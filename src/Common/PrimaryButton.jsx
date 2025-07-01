import React from 'react';

const PrimaryButton = ({ name, color = '#fff', bgcolor = '#EE3A43', border = '#EE3A43', onClick }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Border Layer */}
      <div
        style={{
          position: 'absolute',
          top: '6px',
          left: '6px',
          width: '180.41px',
          height: '65.19px',
          border: `3px solid ${border}`,
          marginLeft: '6px',
          marginTop: '-3px',
          borderRadius: '12px',
          zIndex: 0,
        }}
      ></div>

      {/* Button */}
      <button
        onClick={onClick}
        style={{
          position: 'relative',
          backgroundColor: bgcolor,
          color: color,
          fontWeight: 'bold',
          padding: '12px 30px',
          fontFamily: 'Oswald',
          fontSize: '16px',
          border: 'none',
          width: '189.91px',
          height: '55px',
          marginTop: '10px',
          borderRadius: '12px',
          cursor: 'pointer',
          zIndex: 1,
        }}
      >
        {name}
      </button>
    </div>
  );
};

export default PrimaryButton;
