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
        minHeight: { xs: '25vh', sm: '60vh', md: '100vh' },
        overflow: 'hidden',
        mx:'auto',
       margin: { xs: 1.3, sm: 2.5,md:0 },
        mt: { xs: '66px', sm: '64px' },
      }}
    >
     
      <Box
        sx={{
        
      
          backgroundColor:'#fae6e9',
          opacity: '97%',
          width: { xs: '95%', md: '100%' },
          height: { xs: '25vh', sm: '60vh', md: '100vh' },
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          borderRadius: { xs: '30px', sm: '30px', md: 0 },
          zIndex: 0,
        }}
      />

     
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: {xs:'translateY(-80%)',md:'translateY(-50%)'},
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          px: { xs: 2, sm: 6, md: 0 },
          zIndex: 1,
          flexDirection: { xs: 'row', md: 'row' },
          gap: { xs: 4, md: 10 },
        }}
      >
       
        <Box
          sx={{
            maxWidth: {xs:'300px',md:'600px'},
           
          }}
        >

          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '5.5vw', sm: '6vw', md: '48px' },
              textAlign: 'left',
             fontFamily:'Fredoka One',

              mb: {xs:0,md:2},
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
              fontSize: { xs: '2.5vw', sm: '2.5vw', md: '18px' },
              textAlign: 'left',
              mb: { xs: -30, sm: 4 },
              display:'flex',
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
          <Box sx={{display: {xs:'none',md:'flex'},
              flexDirection: 'row',
        gap:6,
              justifyContent:'flex-start',
              alignItems: 'center',}}>
          <div><ExploreButton
  name="Explore Now"
  bgcolor="#EF1B48"
  width="190px"
  to="/popular"
/></div>       <div><PlayButton/></div>
<div><Typography fontFamily="Fredoka One">HOW TO ORDER</Typography></div></Box>

          {/* </Box> */}

        
      
        </Box>

       
        <Box
          sx={{
            flexShrink: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position:'relative',
            top:{xs:'50px',md:0},
            right:{xs:'10%',md:0}
          }}
        >
          <Box
            component="img"
            src={ImageAssets.tandoorichicken}
            alt="Pizza"
            sx={{
              width: { xs: '130px', sm: '220px', md: '460px' },
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