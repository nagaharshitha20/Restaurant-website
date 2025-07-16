import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ImageAssets } from '../ImageAssets';
import NormalButton from '../Common/NormalButton';

const Popular2 = () => {
  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          minHeight: { xs: 'auto', sm: '100vh', md: '100vh' },
          overflow: 'hidden',
          mt: { xs: '56px', sm: '64px', md: 0 },
        }}
      >
        {/* Background Image */}
        <Box
          component="img"
          src={ImageAssets.blackbg}
          alt="cover"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />

        {/* Text Box */}
        <Box
          sx={{
            position: {
              xs: 'relative',
              sm: 'absolute',
              md: 'absolute',
            },
            top: {
              xs: 'auto',
              sm: '50%',
              md: '50%',
            },
            left: {
              xs: '0',
              sm: 0,
              md: '180px',
            },
            transform: {
              xs: 'none',
              sm: 'translateY(-50%)',
              md: 'translateY(-50%)',
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'flex-start', sm: 'flex-start', md: 'flex-start' },
            justifyContent: 'center',
            width: {
              xs: '100%',
              sm: '90%',
              md: '600px',
            },
            px: { xs: 3, sm: 4 },
            py: { xs: 6, sm: 0 },
            zIndex: 1,
            color: '#FFFFFF',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          }}
        >
          <Typography
            sx={{
              fontSize: '16px',
              fontFamily: 'Oswald',
              color: '#FFD40D',
              mb: 1,
              textAlign: 'left',
            }}
          >
            Save 20%
          </Typography>

          <Typography
            variant="h3"
            sx={{
              color: '#fff',
              fontFamily: 'Oswald',
              fontSize: { xs: '8vw', sm: '6vw', md: '60px' },
              textAlign: 'left',
              mb: 2,
              lineHeight: 1,
            }}
          >
            Today's Astackin Day
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'Oswald',
                fontSize: { xs: '4vw', sm: '2.5vw', md: '30px' },
                color: '#fff',
                textAlign: 'left',
                lineHeight: 1.5,
              }}
            >
              Grilled <span style={{ color: '#FFC222' }}>Chicken $5</span>
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: { xs: 2, sm: 3, md: 4 },
              width: '100%',
              mt: 2,
            }}
          >
            <NormalButton name="Order Now" bgcolor="#F3274C" color="#FFFFFF" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Popular2;
