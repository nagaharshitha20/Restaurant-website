import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { ImageAssets } from '../ImageAssets';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import NormalButton from '../Common/NormalButton';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
const RecentNews = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '300px', sm: '400px', md: '700px', lg: '600px' },
        overflow: 'hidden',
        mt: { xs: '0px', sm: '0px', md: '24px', lg: '24px' },
        backgroundColor: '#fff',
      }}
    >
      <Box
        component="img"
        src={ImageAssets.recentbg}
        alt="cover"
        sx={{
          width: '100%',
          height: { xs: '300px', sm: '400px', md: '500px', lg: '600px' },
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />
      <Box sx={{ position: 'relative', display: 'flex', 
        justifyContent:{xs: 'flex-start',lg:'center'}, mt: { xs: 8, sm: 15, md: 20, lg: 25 } }}>
        <Box sx={{ width: { xs: '100%', sm: '80%', md: '65%', lg: '55%' }, zIndex: 2, mr: { lg: 15 },ml:{xs:'13px'}, textAlign: { xs: 'left', lg: 'left' } }}>
          <Typography
            sx={{
              color: '#F3274C',
              fontFamily: 'Fredoka One',
              fontSize: { xs: '10px', sm: '12px', md: '12px', lg: '12px' },
              mb: 1,
            }}
          >
            BEST APP FOR FOODS ORDERING
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Fredoka One',
              fontSize: { xs: '20px', sm: '30px', md: '36px', lg: '36px' },
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            Manage Your Restaurant <br />Anytime! Anywhere!
          </Typography>
          <Box sx={{ listStyle: 'none', pl: 0, fontSize: { xs: '12px', sm: '18px', md: '20px', lg: '14px' } }}>
            <li><TripOriginIcon sx={{ color: '#FFD40D', fontSize: '15px', fontFamily: 'Epilogue', mr: 1 }} /> Higher Reach - Minimal Effort</li>
            <li><TripOriginIcon sx={{ color: '#FFD40D', fontSize: '15px', fontFamily: 'Epilogue', mr: 1 }} /> Showcase your Brand</li>
            <li><TripOriginIcon sx={{ color: '#FFD40D', fontSize: '15px', fontFamily: 'Epilogue', mr: 1 }} /> Exclusive offers & discounts</li>
          </Box>

<Box
  sx={{
    display: 'flex',
    gap: { xs: '5px', sm: '20px' },
    mt: '30px',
    justifyContent: { xs: 'flex-start', lg: 'flex-start' },
    alignItems: 'center',
  }}
>
  <a
    href="https://play.google.com/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      backgroundColor: '#F3274C',
      color: '#FFFFFF',
      padding: '10px 20px',
      borderRadius: '5px',
      textDecoration: 'none',
      fontFamily: 'Fredoka One',
      display: 'inline-flex', // CHANGED
      alignItems: 'center',   // ADDED
      gap: '8px',             // ADDED for spacing between icon and text
      marginRight: '10px'
    }}
  >
    <FaGooglePlay size={20} />
    Google Play
  </a>

  <a
    href="https://www.apple.com/in/app-store/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      backgroundColor: '#000000',
      color: '#FFFFFF',
      padding: '10px 20px',
      borderRadius: '5px',
      textDecoration: 'none',
      fontFamily: 'Fredoka One',
      display: 'inline-flex', // CHANGED
      alignItems: 'center',   // ADDED
      gap: '8px'              // ADDED
    }}
  >
    <FaApple size={20} />
    App Store
  </a>
</Box>

         
          <Box
            component="img"
            src={ImageAssets.Delivery}
            alt="Delivery"
            sx={{
              width: { xs: '100px', sm: '180px', md: '200px', lg: '200px' },
              height: { xs: '100px', sm: '180px', md: '200px', lg: '200px' },
              position: 'absolute',
                 display:{xs:'none', sm:'none', md:'none', lg:'block'},
              bottom: { xs: '-100px', sm: '-120px', md: '-150px', lg: '-5px' },
              right: { xs: '10%', sm: '15%', md: '20%', lg: '550px' },
              objectFit: 'contain',
            }}
          />
       
          <Box
            component="img"
            src={ImageAssets.order}
            alt="Order Phone"
            sx={{
              width: { xs: '140px', sm: '250px', md: '300px', lg: '350px' },
              height: 'auto',
              position: 'absolute',
              bottom: { xs: '-28px', sm: '37px', md: '60px', lg: '-120px' },
              left: { xs: '80%', sm: '75%', md: '60%', lg: '970px' },
              transform: { xs: 'translateX(-50%)', sm: 'translateX(-50%)', md: 'translateX(-50%)', lg: 'none' },
              zIndex: 3,
            }}
          />
       
          <Box
            component="img"
            src={ImageAssets.cheezypizza}
            alt="Cheezy Pizza"
            sx={{
              width: { xs: '130px', sm: '180px', md: '200px', lg: '200px' },
              height: 'auto',
              position: 'absolute',
              top: { xs: '-30px', sm: '-110px', md: '-40px', lg: '-110px' },
               right: { xs: '0%', sm: '0%', md: '20%', lg: '120px' },
                 display:{xs:'none', sm:'none', md:'block', lg:'block'},
              zIndex: 2,
            }}
          />
        
          <Box
            component="img"
            src={ImageAssets.salad}
            alt="Salad"
            sx={{
              width: { xs: '150px', sm: '180px', md: '200px', lg: '200px' },
              height: 'auto',
              position: 'absolute',
              bottom: { xs: '30px', sm: '40px', md: '100px', lg: '40px' },
              right: { xs: '-10%', sm: '15%', md: '20%', lg: '20px' },
               display:{xs:'none', sm:'none', md:'block', lg:'block'},
              zIndex: 1,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default RecentNews;