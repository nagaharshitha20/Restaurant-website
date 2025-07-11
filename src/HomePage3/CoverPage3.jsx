import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PrimaryButton from '../Common/PrimaryButton';
import { ImageAssets } from '../ImageAssets';
import PlayButton from '../Common/PlayButton';

const CoverPage3 = () => {
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

      <Box
        component="img"
        src={ImageAssets.bg3}
        alt="cover"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: {xs:'100vh', sm: '100vh', md: '100vh'},
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

     
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
              fontSize: '14px',
              fontFamily: 'Fredoka One',
              color: '#F3274C',
              mb: 1,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Fastest Delivery & Easy Pickup
          </Typography>
        <Typography
          variant="h3"
          sx={{
            color: '#FFD40D',
            fontFamily: 'Fredoka One',
            fontSize: { xs: '8vw', sm: '6vw', md: '50px' },
            textAlign: 'left',
            mt: { xs: '35vw',sm:'0vw',md:'0vw',lg:'0vw' },
            mb: 2,
            lineHeight: 1.2,
          }}
        >
        Kings Burger
        </Typography>

        
        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Epilogue',
            fontSize: { xs: '3.5vw', sm: '2.5vw', md: '20px' },
            color: 'lightgrey',
            textAlign: 'left',
            mb: { xs: 3, sm: 4 },
            lineHeight: 1.5,
            maxWidth: '100%',
          }}
        >
          Good food starts with good ingridients. We only
bring you the best.
        </Typography>

      
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
          <PrimaryButton
            name="View Our Menu"
            onClick={() => console.log('Menu button clicked')}
          />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
           <img src={ImageAssets.star5} alt="5 star" />
            
          </Box>
        <Typography
              sx={{
                fontSize: { xs: '4vw', sm: '16px' },
                fontFamily: 'Fredoka One',
              }}
            >
              4.8
            </Typography>
      </Box>
      </Box>
          <Box sx={{
            width: { xs: '100px', sm: '150px', md: '100px' },      }}>
        <img src={ImageAssets.chickenburger} 
     alt="Pizza" />

    </Box>
      </Box>
  
     </Box>
    
  );
};

export default CoverPage3;
