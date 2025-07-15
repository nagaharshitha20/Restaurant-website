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
        minHeight: { xs: '25vh', sm: '60vh', md: '100vh' },
        overflow: 'hidden',
        margin: { xs: 1.3, sm: 2.5,md:0 },
        mt: { xs: '66px', sm: '64px' },
      }}
    >
      <Box
        component="img"
        src={ImageAssets.cover4}
        alt="cover"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: { xs: '95%', md: '100%' },
          height: { xs: '25vh', sm: '60vh', md: '100vh' },
          objectFit: 'cover',
          backgroundColor: 'black',
          borderRadius: { xs: '30px', sm: '30px', md: 0 },
          zIndex: 0,
        }}
      />

   
      <Box
        sx={{
          position: { xs: 'relative', lg: 'absolute' },
          top: { lg: '50%' },
          left: { lg: '180px' },
          transform: { lg: 'translateY(-50%)' },
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          
          px: { xs: 1.5 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row', lg: 'row' },
            justifyContent: 'center',
            alignItems: { xs: 'center', lg: 'center' },
            gap: { xs: 0, lg: 6 },
            maxWidth: { xs: '100%', lg: '100%' },
            width: '100%',
          }}
        >
       
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: { xs: 'flex-start', sm: 'flex-start', lg: 'flex-start' },
              textAlign: 'left',
              mt: { xs: 3, sm: 10, md: 15, lg: 10 },
              color: '#FFFFFF',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              width: '100%',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '12px', sm: '14px' },
                fontFamily: 'Oswald',
                color: '#FFD40D',
                mb: { xs: 1, sm: 1 },
              }}
            >
              Crispy, every bite tasty
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: '#fff',
                fontFamily: 'Oswald',
                fontSize: { xs: '5.5vw', sm: '5.5vw', md: '48px', lg: '60px' },
                mb: { xs: 1, sm: 2 },
                lineHeight: 1.3,
              }}
            >
              HOT SPICY CHICKEN<br />BURGER
            </Typography>

            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: { xs: 0.5, sm: 3 } }}>
              <Typography
                sx={{
                  fontFamily: 'Oswald',
                  fontSize: { xs: '3.2vw', sm: '2.5vw', md: '20px' },
                  color: 'lightgrey',
                }}
              >
                Limited Offer/
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '3.2vw', sm: '2.5vw', md: '28px' },
                  fontFamily: 'Oswald',
                  color: '#fff',
                }}
              >
                $5
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: { xs: 0, sm: 3, md: 4 },
                width: '100%',
              }}
            >
              <NormalButton name="Order Now" bgcolor="#F3274C" color="#FFFFFF" />
            </Box>
          </Box>

          
          <Box
            sx={{
              display: 'flex' ,
              justifyContent: { xs: 'flex-end', sm: 'center', lg: 'flex-end' },
              alignItems: 'center',
              width: {
                xs: '170px',
                sm: '50%',
                md: '60%',
                lg: '55%',
              },
              mt: { xs: 0, sm: 5, md: 10 },
            }}
          >
            <Box
              component="img"
              src={ImageAssets.burger4}
              alt="Burger"
              sx={{
                width: '100%',
                height: 'auto',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CoverPage4;