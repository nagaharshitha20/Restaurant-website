import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ImageAssets } from '../ImageAssets';
import ToggleButton from '../Common/ToggleButton';
import ExploreButton from '../Common/ExploreButton';
import PlayButton from '../Common/PlayButton';

const CoverPage7 = () => {
  return (<>
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '70vh', sm: '100vh', md: '100vh' },
        overflow: 'hidden',
        mt: { xs: '56px', sm: '64px' }, // offset for navbar
      }}
    >
     
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor:'#fae6e9',
          objectFit: 'cover',
          opacity: '97%',
          zIndex: 0,
        }}
      />

     
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: { xs: 3, sm: 6, md: 0 },
          zIndex: 1,
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 10 },
        }}
      >
       
        <Box
          sx={{
            maxWidth: '600px',
           
          }}
        >

          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '8vw', sm: '6vw', md: '48px' },
              textAlign: 'left',
             fontFamily:'Fredoka One',
              mb: 2,
              color:'#000',
              lineHeight: 1.5,
            }}
          >
            Enjoy Our <br />
          Delicious Meal
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Nunito',
              fontSize: { xs: '3.5vw', sm: '2.5vw', md: '18px' },
              textAlign: 'left',
              mb: { xs: 3, sm: 4 },
              lineHeight: 1.5,
            }}
          >
           Good slogens for food delivery business are the key to attractive the
more customers and earn money and especially food.
          </Typography>

{/*         
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: { xs: 2, sm: 0},
              width: '100%',
            }}
          > */}
          <div style={{display: 'flex',
              flexDirection: 'row',
        gap:10,
              justifyContent:'flex-start',
              alignItems: 'center',}}>
          <div><ExploreButton
  name="Explore Now"
  bgcolor="#EF1B48"
  width="190px"
  to="/popular"
/></div>       <div><PlayButton/></div>
<div><Typography>HOW TO ORDER</Typography></div></div>

          {/* </Box> */}

        
      
        </Box>

       
        <Box
          sx={{
            flexShrink: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src={ImageAssets.tandoorichicken}
            alt="Pizza"
            sx={{
              width: { xs: '180px', sm: '220px', md: '460px' },
              height: 'auto',
              borderRadius: 2,
           
            }}
          />
        </Box>
        
      </Box>
     
    </Box>

    </>
  );
};

export default CoverPage7;
