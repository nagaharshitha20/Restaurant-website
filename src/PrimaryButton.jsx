import React from 'react';

const PrimaryButton = ({ name, onClick }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      
      <div
        style={{
          position: 'absolute',
          top: '6px',
          left: '6px',
          width: '180.41px',
          height: '65.19px',
          border: '3px solid #EE3A43',
            marginLeft:'6px',
            marginTop:'-3px',

          borderRadius: '12px',
          zIndex: 0,
        }}
      ></div>

    
      <button
        onClick={onClick}
        style={{
          position: 'relative',
          backgroundColor: '#EE3A43',
          color: '#fff',
          fontWeight: 'bold',
          padding: '12px 30px',
          fontFamily: 'Oswald',
          fontSize: '16px',
          border: 'none',
          width:'189.91px',
          height:'55px',
          marginTop:'10px',
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
