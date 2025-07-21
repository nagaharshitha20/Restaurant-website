import React from 'react';
import Button from '@mui/material/Button'; 
const NormalButton= ({ name, color , bgcolor,  onClick }) => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      
     <Button
              variant="contained"
              onClick={onClick}
              sx={{
                backgroundColor: bgcolor,
                color: color,
                fontWeight: 600,
                fontSize: { xs: '14px', sm: '15px', md: '17px' },
                fontFamily: 'Oswald',
                borderRadius: '7px',
                padding: { xs: '6px 14px', sm: '7px 18px', md: '8px 25px' },
                textTransform: 'none',
                boxShadow: 'none',
                // '&:hover': {
                //   backgroundColor: color,
                //   color:bgcolor,
                //   boxShadow: 'none',
                // },
              }}
            >
             {name}
           
            </Button>
    </div>
  );
};

export default NormalButton;
