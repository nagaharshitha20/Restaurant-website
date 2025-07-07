import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ImageAssets } from '../ImageAssets'; // left.jpg, right.jpg, down.png

const Kfc = () => {
  return (<>
    <Box sx={{ width: '100%',  fontFamily: 'Oswald',mt:10 }}>
      {/* Top Section */}
      
      

        {/* Right Side */}
        <Box
          sx={{
            flex: 1,
            backgroundImage: `url(${ImageAssets.kfc})`,
            backgroundSize: 'cover',
            width:'50%',
            backgroundPosition: 'center',
            minHeight: { xs: '300px', md: 'auto' },
          }}
        />
        <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          width: '60%',
          minHeight: { xs: 'auto', md: '100vh' },
        }}
      >
          {/* Left Side */}
          <Box
                component="img"
                src={ImageAssets.kfc}
                alt="Popular Dishes"
                sx={{
                  width: '100%',
                  height: 'auto',
                 
                }}
              />
          {/* Text Content Centered */}
          <Box sx={{ zIndex: 2, maxWidth: '800px', width: '100%',display:'flex',flexDirection:'column',ml:20 }}>
            <Typography
              variant="body2"
              sx={{ color: '#00A651', fontWeight: 700, mb: 1 ,fontFamily: 'Oswald'}}
            >
              CRISPY, EVERY BITE TASTE
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '8vw', sm: '5vw', md: '3vw' },
                fontFamily: 'Oswald',
                lineHeight: 1.2,
              }}
            >
              Trending Food Combo 
              Offer Less <span style={{ color: '#00C851' }}>20%</span>
            </Typography>

            <Typography variant="body2" sx={{ color: '#333', mt: 3 ,fontFamily: 'Oswald',mb:3}}>
              A team of dreamers and doers building unique interactive music and art festivals.
            </Typography>

            {/* Offers with Image Logos */}
 


            <Button
              variant="contained"
              sx={{
                mt: 3,
                bgcolor: '#F3274C',
                color: '#fff',
                px: 4,
                fontFamily: 'Oswald',
              }}
            >
              Order Now
            </Button>
          </Box>

          {/* Coke Image in Bottom Left */}
          
        </Box>
      </Box>

      {/* Bottom Section - Popular Dishes */}
     
   
    
    </>
  );
};

export default Kfc;
