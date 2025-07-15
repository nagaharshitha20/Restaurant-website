import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { ImageAssets } from '../ImageAssets';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import NormalButton from '../Common/NormalButton';

const RecentNews = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '380px', sm: '600px', md: '700px', lg: '600px' },
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
          height: { xs: '350px', sm: '400px', md: '500px', lg: '600px' },
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />
      <Box sx={{ position: 'relative', display: 'flex', 
        justifyContent:{xs: 'flex-start',lg:'center'}, mt: { xs: 8, sm: 15, md: 20, lg: 25 } }}>
        <Box sx={{ width: { xs: '90%', sm: '80%', md: '65%', lg: '55%' }, zIndex: 2, mr: { lg: 15 },ml:{xs:'13px'}, textAlign: { xs: 'left', lg: 'left' } }}>
          <Typography
            sx={{
              color: '#F3274C',
              fontFamily: 'Fredoka One',
              fontSize: { xs: '10px', sm: '12px', md: '12px', lg: '12px' },
              mb: 2,
            }}
          >
            BEST APP FOR FOODS ORDERING
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Fredoka One',
              fontSize: { xs: '24px', sm: '30px', md: '36px', lg: '36px' },
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            Manage Your Restaurant <br />Anytime! Anywhere!
          </Typography>
          <Box sx={{ listStyle: 'none', pl: 0, fontSize: { xs: '14px', sm: '18px', md: '20px', lg: '14px' } }}>
            <li><TripOriginIcon sx={{ color: '#FFD40D', fontSize: '15px', fontFamily: 'Epilogue', mr: 1 }} /> Higher Reach - Minimal Effort</li>
            <li><TripOriginIcon sx={{ color: '#FFD40D', fontSize: '15px', fontFamily: 'Epilogue', mr: 1 }} /> Showcase your Brand</li>
            <li><TripOriginIcon sx={{ color: '#FFD40D', fontSize: '15px', fontFamily: 'Epilogue', mr: 1 }} /> Exclusive offers & discounts</li>
          </Box>
          <Box sx={{ display: 'flex', gap: '20px', mt: '30px', justifyContent: { xs: 'flex-start', lg: 'flex-start' } }}>
            <NormalButton name="Google Play" bgcolor="#F3274C" color="#FFFFFF" style={{fontFamily:'Fredoka One'}}/>
            <NormalButton name="App Store" bgcolor="#000000" color="#FFFFFF" style={{fontFamily:'Fredoka One'}}/>
          </Box>
         
          <Box
            component="img"
            src={ImageAssets.Delivery}
            alt="Delivery"
            sx={{
              width: { xs: '150px', sm: '180px', md: '200px', lg: '200px' },
              height: { xs: '150px', sm: '180px', md: '200px', lg: '200px' },
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
              width: { xs: '160px', sm: '250px', md: '300px', lg: '350px' },
              height: 'auto',
              position: 'absolute',
              bottom: { xs: '-52px', sm: '40px', md: '60px', lg: '-120px' },
              left: { xs: '70%', sm: '55%', md: '60%', lg: '970px' },
              transform: { xs: 'translateX(-50%)', sm: 'translateX(-50%)', md: 'translateX(-50%)', lg: 'none' },
              zIndex: 3,
            }}
          />
       
          <Box
            component="img"
            src={ImageAssets.cheezypizza}
            alt="Cheezy Pizza"
            sx={{
              width: { xs: '150px', sm: '180px', md: '200px', lg: '200px' },
              height: 'auto',
              position: 'absolute',
              top: { xs: '-30px', sm: '-30px', md: '-40px', lg: '-110px' },
              right: { xs: '0%', sm: '15%', md: '20%', lg: '120px' },
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
              zIndex: 1,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default RecentNews;