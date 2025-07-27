import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ImageAssets } from '../ImageAssets'; // order1, order2, order3, sandwich, sat, grouppic, sign
import { useNavigate } from 'react-router-dom';

const About5 = () => {
   const navigate = useNavigate();
  return (
  
    <>
      
      {/* --- Top Image Row --- */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 2, sm: 3, md: 4 },
          mt: 10,
          px: { xs: 2, sm: 4 },
        }}
      >
        {[ImageAssets.order1, ImageAssets.order2, ImageAssets.order3].map((img, i) => (
          <Box
            key={i}
            component="img"
            src={img}
            alt={`order-${i}`}
            sx={{
              width: { xs: '80%', sm: '220px', md: '20%' },
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        ))}
      </Box>

      {/* --- About Section --- */}
      <Box sx={{ width: '100%', fontFamily: 'Oswald', mt: 10, mx:'auto' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            width: '100%',
            minHeight: { xs: 'auto', md: '100vh' },
            gap: { xs: 4, md: 0 },
          }}
        >
          {/* Left Side Image */}
          <Box
            component="img"
            src={ImageAssets.sandwich}
            alt="Popular Dishes"
            sx={{
              width: { xs: '100%', md: '50%' },
              height: 'auto',
              // borderRadius: 2,
              objectFit: 'cover',
            }}
          />

          {/* Text Content */}
          <Box
            sx={{
              zIndex: 1,
              width: { xs: '100%', md: '50%' },
              px: { xs: 2, sm: 4 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              mt: { xs: 4, md: 0 },
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: '#00A651', fontWeight: 700, mb: 1, fontFamily: 'Oswald' }}
            >
              About Our Food
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '8vw', sm: '5vw', md: '3vw' },
                fontFamily: 'Oswald',
                lineHeight: 1.2,
              }}
            >
              The Best Delicious food
              <br />
              Made From Us...
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: '#5C5C5B',
                mt: 3,
                mb: 3,
                fontFamily: 'Oswald',
                maxWidth: { xs: '100%', md: '90%' },
              }}
            >
              It's the perfect dining experience where every dish is crafted with fresh,
              high-quality ingredients. Enjoy efficient service that ensures your food is served
              fresh every time.
            </Typography>

            <Box
              component="img"
              src={ImageAssets.sat}
              alt="satisfaction"
              sx={{ width: { xs: '100%', sm: '80%', md: '70%' }, mb: 3 }}
            />

            {/* Signature Section */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: { xs: 3, sm: 4, md: 6 },
              }}
            >
              <Box component="img" src={ImageAssets.grouppic} alt="group" sx={{ width: '80px' }} />
              <Box component="img" src={ImageAssets.sign} alt="signature" sx={{ width: '100px' }} />
              <Button
                variant="contained"
                onClick={() => navigate('/about1')}
                sx={{
                  mt: { xs: 2, sm: 0 },
                  bgcolor: '#212121',
                  color: '#fff',
                  borderRadius: '20px',
                  px: 6,
                  fontFamily: 'Oswald',
                  fontSize: '14px',
                  textTransform: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                Foundation, since <span style={{ color: '#FFC222' }}> 21st </span> Oct, 2019
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About5;
