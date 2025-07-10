import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrimaryButton = ({ name, color = '#fff', bgcolor = '#EE3A43',width= '189.91px',   height= '55px',borderwidth="180.41px", border = '#EE3A43', to, onClick}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (to) {
      navigate(to);
    } else if (onClick) {
      onClick();
    }
  }; 
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
   
      <div
        style={{
          position: 'absolute',
          top: '6px',
          left: '6px',
          width: borderwidth,
          height: '65.19px',
        
          border: `3px solid ${border}`,
          marginLeft: '6px',
          marginTop: '-3px',
          borderRadius: '12px',
          zIndex: 0,
        }}
      ></div>

      <button
        onClick={handleClick}
        style={{
          position: 'relative',
          backgroundColor: bgcolor,
          color: color,
          // fontWeight: 'bold',
          padding: '12px 30px',
            fontFamily: 'Fredoka One',
          fontSize: '16px',
          border: 'none',
          width: width,
          height: height,
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
