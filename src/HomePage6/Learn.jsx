import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ImageAssets } from '../ImageAssets';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Learn = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '90vh', sm: '100vh', md: '60vh' },
        overflow: 'hidden',
        display: 'flex',
        mx:'auto',
        justifyContent: 'center',
        mt: { xs: '56px', sm: '64px' },
        // px: 2,
      }}
    >
      {/* Background Color */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundColor: '#fff',
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

      {/* Content Wrapper */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          zIndex: 1,
          gap: { xs: 4, md: 0 },
        }}
      >
        {/* Left Image */}
        <Box
          sx={{
            width: { xs: '100%', md: '30%' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: { xs: 2, md: 0 },
          }}
        >
          <Box
            component="img"
            src={ImageAssets.master}
            alt="master"
            sx={{
              width: { xs: '80%', sm: '60%', md: '70%', lg: '300px' },
              height: 'auto',
              maxWidth: '350px',
            }}
          />
        </Box>

        {/* Right Text Section */}
        <Box
          sx={{
            width: { xs: '100%', md: '40%' },
            textAlign: { xs: 'center', md: 'left' },
            // px: { xs: 2, md: 4 },
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ fontFamily: 'Oswald', color: '#F3274C', fontWeight: 600 }}
          >
            LEARN SOMETHING FOODKING
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontFamily: 'Oswald',
              mt: 1,
              mb: 2,
              fontSize: { xs: 16, sm: 18, md: 20 },
              color: '#333',
              lineHeight: 1.6,
            }}
          >
            Welcome to our culinary haven, where each dish is a symphony of flavors meticulously
            crafted to tantalize your taste buds. Nestled in the heart of your city, our restaurant
            is an inviting space that combines ambiance and passion.
          </Typography>

          {/* Signature Row */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: { xs: 'center', md: 'flex-start' },
              alignItems: 'center',
              gap: 2,
              mt: 2,
            }}
          >
            <Box
              component="img"
              src={ImageAssets.grouppic}
              alt="CEO"
              sx={{
                borderRadius: '50%',
                width: '50px',
                height: '50px',
              }}
            />
            <Typography fontSize={12}>
              Michael V. Christensen / CEO & Founder
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Decorative Image */}
      <Box
        component="img"
        src={ImageAssets.decor4}
        alt="decor"
        sx={{
          position: 'absolute',
          top: { xs: '15%', md: '20%' },
          right: { xs: '8%', md: '70%' },
          opacity: 0.2,
          zIndex: 0,
          width: { xs: '100px', md: '120px' },
        }}
      />
    </Box>
  );
};

export default Learn;
