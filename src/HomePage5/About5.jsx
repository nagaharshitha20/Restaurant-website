import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ImageAssets } from '../ImageAssets'; // left.jpg, right.jpg, down.png

const About5 = () => {
  return (<>
    <Box sx={{ width: '100%',  fontFamily: 'Oswald',mt:10 }}>
    
        <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          width: '100%',
          minHeight: { xs: 'auto', md: '100vh' },
        }}
      >
   
          <Box
                component="img"
                src={ImageAssets.sandwich}
                alt="Popular Dishes"
                sx={{
                  width: '50%',
                  height: 'auto',
                 
                }}
              />
      
          <Box sx={{ zIndex: 1, maxWidth: '1000px', width: '40%',display:'flex',flexDirection:'column',ml:8,justifyContent:'center',}}>
            <Typography
              variant="body2"
              sx={{ color: '#00A651', fontWeight: 700, mb: 1 ,fontFamily: 'Oswald'}}
            >
              About Our Food
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
The Best Delicious food
Made From Us...
            </Typography>

            <Typography variant="body2" sx={{ color: '#5C5C5B', mt: 3 ,fontFamily: 'Oswald',mb:3}}>
Its the perfect dining experience where every dish is crafted with fresh, high-quality dining experience
Experience quick and efficient service that ensures your food is servead fresh Its the where every dining
experience where every dish is crafted with fresh, high-quality ingredients fresh, high-quality
            </Typography>

           <Box component="img"
           src={ImageAssets.sat}
          

           />
 
<Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:6,mt:4}}>
    <Box> <Box component="img"
           src={ImageAssets.grouppic}

           /></Box>
    <Box><Box component="img"
           src={ImageAssets.sign}

           /></Box>
    <Box>
     <Button
                  variant="h5"
                  sx={{
                    mt: 3,
                    bgcolor: '#212121',
                    color: '#fff',
                    borderRadius:'20px',
                    px: 8,
                    fontFamily: 'Oswald',
                  }}
                >
                  Foundation, since  
                  <span style={{color:'#FFC222',}}>  21st </span> Oct , 2019
                </Button>
    </Box>

</Box>

          </Box>

         
          
        </Box>
      </Box>

   
     
   
    
    </>
  );
};

export default  About5;
