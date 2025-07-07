import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ImageAssets } from '../ImageAssets'; // left.jpg, right.jpg, down.png
import NormalButton from '../Common/NormalButton';

const Service5 = () => {
  return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          gap: 4,
        }}
      >
        <Box sx={{ flex: 1, textAlign: 'left',ml:10 }}>
          <Typography sx={{ color: '#F3274C', fontWeight: 600,fontFamily:'Oswald' }}>About Our Food</Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              lineHeight: 1.2,
              fontFamily:'Oswald',
              mt: 1,
              mb: 2,
            }}
          >
            Where Quality Meet <br /> Excellent <span style={{ color: '#F3274C' }}>Service.</span>
          </Typography>

          <Typography sx={{ mb: 2 ,fontFamily:'Oswald',color:'#grey',width:'70%'}}>
            The perfect dining experience where every dish is crafted with fresh, high-quality Experience quick and efficient service that ensures you food is served fresh. The dining experience where every dish is crafted with fresh, high-quality ingredients
          </Typography>

          <Box sx={{ display: 'flex', gap: 10,  mb: 3 ,flexDirection:'row',width:'70%',}}>
            <Box sx={{width:'50%'}}>
              <Typography fontWeight={700}>Super Quality Food</Typography>
              <Typography fontSize={14}>A team of dreamers and doers building unique interactive music and art</Typography>
            </Box>
            <Box>
              <Typography fontWeight={700}>Well Reputation</Typography>
              <Typography fontSize={14}>A team of dreamers and doers building unique interactive music and art</Typography>
            </Box>
          </Box>
<Box sx={{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    gap:2
}}>
    <NormalButton bgcolor="#F3274C" color="#fff" name="More About Us"/>
           
         

          <Typography fontSize={12} fontWeight={600}>
            BRENDON GARETY <br /> CUSTOMER'S EXPERIENCE IS OUR HIGHEST PRIORITY.
          </Typography>
</Box>
          
        </Box>

         <Box
          component="img"
          src={ImageAssets.since}
          alt="Burger"
          sx={{ width: { xs: '100%', md: '50%' }, maxWidth: '800px' ,}}
        />
        
       
      </Box>

    
  );
};

export default Service5;
