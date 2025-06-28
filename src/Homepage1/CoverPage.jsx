import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// ✅ Correct image import
import cover from './cover.jpg';

const CoverPage = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '300px', md: '710px' }, // Responsive height
        overflow: 'hidden',
        mt: '64px', // Offset for fixed navbar height
      }}
    >
      <Box
        component="img"
        src={cover}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover', // Ensures image scales responsively
          display: 'block',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '0', // Align to the left edge
          transform: 'translateY(-50%)', // Only vertical translation
          textAlign: 'left', // Align text to the left
          color: '#FFFFFF',
          width:'615px',
          height:'355px',
          marginLeft:'40px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          paddingLeft: '20px', // Add some padding to match the image spacing
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 'bold', fontSize: { xs: '24px', md: '48px' }, textAlign: 'left', fontFamily: 'Fredoka One',width: { xs: '609.45px', md: '600px' } }}>
          The Perfect Space to
Enjoy Fantastic Food
        </Typography>
        <Typography variant="h6" sx={{ fontSize: { xs: '16px', md: '24px' }, textAlign: 'left', width: { xs: '609.45px', md: '600px' }, height: '150px', display: 'flex', alignItems: 'center' }}>
         Festive dining at Farthings where we are strong believers in
using the very best produce
        </Typography>
      </Box>
    </Box>
  );
};

export default CoverPage;