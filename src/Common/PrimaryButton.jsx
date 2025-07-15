import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';

const PrimaryButton = ({
  name,
  color = '#fff',
  bgcolor = '#EE3A43',
  width = { xs: '135px', sm: '190px' },
  height = { xs: '48px', sm: '55px' },
  borderwidth = { xs: '125px', sm: '180px' },
  border = '#EE3A43',
  to,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) navigate(to);
    else if (onClick) onClick();
  };

  return (
    <Box sx={{ position: 'relative', display: 'inline-block' }}>
      {/* Border Layer */}
      <Box
        sx={{
          position: 'absolute',
          top: '6px',
          left: '6px',
          width: borderwidth,
          height: { xs: '58px', sm: '65.19px' },
          border: `3px solid ${border}`,
          ml: '6px',
          mt: '-3px',
          borderRadius: '12px',
          zIndex: 0,
        }}
      />

      {/* Actual Button */}
      <Box
        component="button"
        onClick={handleClick}
        sx={{
          position: 'relative',
          backgroundColor: bgcolor,
          color: color,
          padding:{ xs:'8px 20px',sm:'12px 30px'},
          fontFamily: 'Fredoka One',
          fontSize: { xs: '3.2vw', sm: '16px' },
          border: 'none',
          width: width,
          height: height,
          mt: '10px',
          borderRadius: '12px',
          cursor: 'pointer',
          zIndex: 1,
        }}
      >
        {name}
      </Box>
    </Box>
  );
};

export default PrimaryButton;
