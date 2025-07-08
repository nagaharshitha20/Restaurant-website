import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ImageAssets } from '../ImageAssets';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Learn = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '70vh', sm: '100vh', md: '50vh' },
        overflow: 'hidden',
        display:'flex',
        justifyContent:'center',
        gap:30,
        mt: { xs: '56px', sm: '64px' },
      }}
    >
      {/* Background Color */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: '#fff',
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

      {/* Foreground Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '50%',
          height: '100%',
          zIndex: 1,
          position: 'absolute',

          px: 2,
        }}
      >
        {/* Image Left */}
        <Box sx={{ mr: 10 }}>
          <Box
            component="img"
            src={ImageAssets.master}
            alt="master"
            sx={{ width: '300', height: '300px' }}
          />
        </Box>

        {/* Text Right */}
        <Box >
          <Typography variant="h8" sx={{fontFamily:'Oswald'}}>LEARN SOMETHING FOODKING</Typography>
          <Typography variant="h6" sx={{fontFamily:'Oswald'}}>Welcome to our culinary haven, where each dish is a
symphony of flavors meticulously crafted tantalize your
taste buds. Nestled in the heart of [City], our
restaurant is an inviting space that combines.</Typography>
<div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',gap:10,marginTop:'10px'}}>
  <div> <Box
        component="img"
        src={ImageAssets.grouppic}
        alt="decor"
        sx={{
          borderRadius:'50%',
          width:'50px',
          height:'50px',

        }}
      /></div>
  <div style={{fontSize:'12px'}}>Michael V. Christensen / CEO & Founder</div>
  </div>
        </Box>
      </Box>

      {/* Decorative Image */}
      <Box
        component="img"
        src={ImageAssets.decor4}
        alt="decor"
        sx={{
          position: 'absolute',
          top: { xs: '15%', md: '20%' },
          right: { xs: '8%', md: '70%' },
          opacity: 0.2,
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default Learn;
