import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PrimaryButton from '../Common/PrimaryButton';
import { ImageAssets } from '../ImageAssets';

const CoverPage3 = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '35vh', sm: '60vh', md: '100vh' },
        overflow: 'hidden',
        margin: { xs: 2.5, sm: 2.5, md: 0 },
        mt: { xs: '66px', sm: '64px' },
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={ImageAssets.bg3}
        alt="cover"
        sx={{
          width: { xs: '95%', md: '100%' },
          height: { xs: '35vh', sm: '60vh', md: '100vh' },
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          borderRadius: { xs: '30px', sm: '30px', md: 0 },
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: { xs: 'absolute', lg: 'absolute' },
          top: { lg: '50%' },
          left: { lg: '180px' },
          transform: { lg: 'translateY(-50%)' },
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          px: { xs: 3 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row', lg: 'row' },
            justifyContent: 'center',
            alignItems: { xs: 'center', lg: 'center' },
            gap: { xs: 4, lg: 6 },
            maxWidth: { xs: '100%', lg: '100%' },
            width: '100%',
          }}
        >
          {/* Left Section */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: { xs: 'flex-start', sm: 'flex-start', lg: 'flex-start' },
              textAlign: 'left',
              mt: { xs: 3.5, sm: 10, md: 15, lg: 0 },
              color: '#FFFFFF',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
              width: '100%',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '12px', sm: '14px' },
                fontFamily: 'Fredoka One',
                color: '#F3274C',
                mb: { xs: 0, sm: 1 },
              }}
            >
              Fastest Delivery & Easy Pickup
            </Typography>

            <Typography
              variant="h3"
              sx={{
                color: '#FFD40D',
                fontFamily: 'Fredoka One',
                fontSize: { xs: '6.5vw', sm: '5.5vw', md: '48px', lg: '50px' },
                mb: { xs: 1, sm: 2 },
                lineHeight: 1.3,
              }}
            >
              Kings Burger
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Epilogue',
                fontSize: { xs: '2.6vw', sm: '2.3vw', md: '16px', lg: '20px' },
                color: 'lightgrey',
                mb: { xs: 2, sm: 3, lg: 4 },
                lineHeight: { xs: 1, md: 1.5 },
              }}
            >
              Good food starts with good ingredients.
              <br />
              We only bring you the best.
            </Typography>

            {/* Button and Rating */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: { xs: 3, sm: 3, md: 4 },
                width: '100%',
              }}
            >
              <PrimaryButton
                name="View Our Menu"
                onClick={() => console.log('Menu button clicked')}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box
                  component="img"
                  src={ImageAssets.star5}
                  alt="5 star"
                  sx={{ width: { xs: '60px', sm: '80px' } }}
                />
                <Typography
                  sx={{
                    fontSize: { xs: '4vw', sm: '16px' },
                    fontFamily: 'Fredoka One',
                    color: '#fff',
                  }}
                >
                  4.8
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Right Image */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'flex-end', sm: 'center', lg: 'flex-end' },
              alignItems:'center',
              width: {
                xs: '160px',
                sm: '100%',
                md: '90%',
                lg: '90%',
              },
             
              mt: { xs: 0, sm: 0, md: 2, lg: 10 },
            }}
          >
            <Box
              component="img"
              src={ImageAssets.chickenburger}
              alt="Chicken Burger"
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

export default CoverPage3;
