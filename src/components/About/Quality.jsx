import React from 'react';
import { Box, Typography } from '@mui/material';
import { ImageAssets } from '../../ImageAssets';
import NormalButton from '../../Common/NormalButton';
import { useNavigate } from 'react-router-dom';

const Quality = () => {
  const navigate=useNavigate();
  return (
    <Box sx={{ width: '100%', fontFamily: 'Oswald', mx:'auto', py: 6 }}>
      {/* Top Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 4, md: 6 },
        }}
      >
        {/* Burger Image */}
        <Box
          component="img"
          src={ImageAssets.burger4}
          alt="Burger"
          sx={{
            width: { xs: '100%', md: '50%' },
            maxWidth: { xs: '100%', md: '600px' },
            borderRadius: 2,
          }}
        />

        {/* Text Content */}
        <Box sx={{ flex: 1, textAlign: 'left', width: '90%' }}>
          <Typography sx={{ color: '#00A149', fontWeight: 600 }}>
            About Our Food
          </Typography>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              lineHeight: 1.2,
              fontFamily: 'Oswald',
              mt: 1,
              mb: 2,
              fontSize: { xs: '7vw', sm: '5vw', md: '32px' },
            }}
          >
            Where Quality Meet <br /> Excellent{' '}
            <span style={{ color: '#00A149' }}>Service.</span>
          </Typography>

          <Typography
            sx={{
              mb: 3,
              fontFamily: 'Oswald',
              color: '#555',
              width: { xs: '100%', sm: '100%', md: '70%' },
              fontSize: { xs: '4vw', sm: '3vw', md: '16px' },
            }}
          >
            The perfect dining experience where every dish is crafted with fresh,
            high-quality Experience quick and efficient service that ensures your food
            is served fresh.
          </Typography>

          {/* Two-column features */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 4,
              mb: 4,
              width: { xs: '100%', md: '70%' },
            }}
          >
            <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
              <Typography fontWeight={700}>Super Quality Food</Typography>
              <Typography fontSize={14}>
                A team of dreamers and doers building unique interactive music and art
              </Typography>
            </Box>
            <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
              <Typography fontWeight={700}>Well Reputation</Typography>
              <Typography fontSize={14}>
                A team of dreamers and doers building unique interactive music and art
              </Typography>
            </Box>
          </Box>

          {/* Button and Name */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              justifyContent: 'flex-start',
              gap: 2,
            }}
          >
            <NormalButton bgcolor="#00A149" color="#fff" name="More About Us" onClick={() => navigate('/about1')}/>
            <Typography fontSize={12} fontWeight={600}>
              BRENDON GARETY <br />
              CUSTOMER'S EXPERIENCE IS OUR HIGHEST PRIORITY.
            </Typography>
          </Box>
        </Box>
      </Box>


      <Box
        sx={{
          mt: 6,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          mx:'auto',
          width:'100%',
          alignItems: 'center',
          gap: {md:4},
        }}
      >
        <Box
          component="img"
          src={ImageAssets.s1}
          sx={{
            borderRadius: 2,
            width: { xs: '90%', sm: '45%', md: '500px' },
            height: '365px',
            objectFit: {xs:'contain',md:'cover'},
            boxShadow: {xs:'none',md:3},
          }}
        />
        <Box
          component="img"
          src={ImageAssets.s2}
          sx={{
            borderRadius: 2,
            width: { xs: '90%', sm: '45%', md: '400px' },
            height: { xs: 'auto', md: '365px' },
         objectFit: {xs:'contain',md:'cover'},
          boxShadow: {xs:'none',md:3},
          }}
        />
      </Box>
    </Box>
  );
};

export default Quality;
