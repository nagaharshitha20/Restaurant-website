import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ImageAssets } from '../ImageAssets'; 

const Kfc = () => {
  return (<>
    <Box sx={{ width: '100%',  fontFamily: 'Oswald',mt:10,mx:'auto' }}>
 
        <Box
          sx={{
            flex: 1,
            backgroundImage: `url(${ImageAssets.kfc})`,
            backgroundSize: 'cover',
            width:'50%',
            display:{xs:'none',md:'flex'},
            backgroundPosition: 'center',
           
            minHeight: { xs: '300px', md: 'auto' },
          }}
        />
        <Box
        sx={{
          display: {xs:'flex',m:'none'},
          flexDirection: { xs: 'column', md: 'row' },
          width: '100%',
           gap:4,
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
                  display:{xs:'none',lg:'flex'},
                  height: 'auto',
                 
                }}
              />
         
          <Box sx={{ zIndex: 2, maxWidth: '800px', width: {xs:'90%',md:'100%'},display:'flex',flexDirection:'column',ml:20,mx:'auto',alignItems:'flex-start',justifyContent:'center',}}>
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

           
 


            <Button
              variant="contained"
              sx={{
                mt: {xs:1,md:3},
                bgcolor: '#F3274C',
                color: '#fff',
                px: 4,
                fontFamily: 'Oswald',
              }}
            >
              Order Now
            </Button>
          </Box>

         
          
        </Box>
      </Box>

  
   
    
    </>
  );
};

export default Kfc;
