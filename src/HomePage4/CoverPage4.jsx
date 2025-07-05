import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ImageAssets } from '../ImageAssets';
import NormalButton from '../Common/NormalButton';
const CoverPage4 = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '70vh', sm: '100vh', md: '100vh' },
        overflow: 'hidden',
        mt: { xs: '56px', sm: '64px' },
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={ImageAssets.cover4}
        alt="cover"
        sx={{
          position: 'absolute',
          top: 0,
          backgroundColor:'black',
          left: 0,
          width: '100%',
          height: {xs:'100vh', sm: '100vh', md: '100vh'},
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {/* Foreground Content */}
      <Box
        sx={{
          position: {
            xs: 'relative',
            sm: 'absolute',
          },
          top: {
            xs: 'auto',
            sm: '50%',
          },
          left: {
            xs: '0',
            sm: 0,
            md: '180px',
          },
          transform: {
            xs: 'none',
            sm: 'translateY(-50%)',
          },
          display: 'flex',
          flexDirection: 'row',
          alignItems: { xs: 'flex-start', sm: 'center' },
          justifyContent: 'space-between',
          width: {
            xs: '90%',
            sm: '80%',
            md: '600px',
          },
          px: { xs: 3, sm: 4 },
          zIndex: 1,
          color: '#FFFFFF',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        }}
      ><Box>
        <Typography
            sx={{
              fontSize: '16px',
              fontFamily: 'Oswald',
              
              color: '#FFD40D',
              mb: 1,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Crispy, every bite tasty
          </Typography>
        <Typography
          variant="h3"
          sx={{
            color: '#fff',
            fontFamily: 'Oswald',
            fontSize: { xs: '8vw', sm: '6vw', md: '60px' },
            textAlign: 'left',
            mt: { xs: '35vw',sm:'0vw',md:'0vw',lg:'0vw' },
            mb: 2,
            lineHeight: 1.2,
          }}
        >
       HOT SPICY CHICKEN<br/> BURGER
        </Typography>
<Box sx={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:2,}}>
     <Typography
          variant="body1"
          sx={{
            fontFamily: 'Oswald',
            fontSize: { xs: '3.5vw', sm: '2.5vw', md: '30px' },
            color: 'lightgrey',
            textAlign: 'left',
            // mb: { xs: 3, sm: 4 },
            lineHeight: 1.5,
            maxWidth: '100%',
          }}
        >
          Limited Offer/
         
        </Typography>
         < Typography 
         sx={{fontSize: { xs: '3.5vw', sm: '2.5vw', md: '40px' }, fontFamily: 'Oswald', 
         color: '#fff',}}>
            $5</Typography>
</Box>
        {/* Subheading */}
       

        {/* Buttons Row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: { xs: 2, sm: 3,md:4 },
            width: '100%',
          }}
        >
         <NormalButton name="Order Now" bgcolor="#F3274C" color="#FFFFFF" />
          
      
      </Box>
      </Box>
          <Box sx={{
            width: { xs: '100px', sm: '150px', md: '150px' },      }}>
        <img src={ImageAssets.burger4} 
     alt="Pizza" />

    </Box>
      </Box>
  
     </Box>
    
  );
};

export default CoverPage4;
