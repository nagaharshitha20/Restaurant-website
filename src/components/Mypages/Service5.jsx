import React from 'react';
import { Box, Typography } from '@mui/material';
import { ImageAssets } from '../../ImageAssets';
import NormalButton from '../../Common/NormalButton';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import { useNavigate } from 'react-router-dom';


const Service5 = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: { xs: 4, md: 6 },
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 6, md: 8 },
      }}
    >
      {/* Left Text Section */}
      <Box sx={{ flex: 1, textAlign: 'left', ml: { xs: 0, md: 6 } }}>
        <Typography
          sx={{
            color: '#F3274C',
            fontWeight: 600,
            fontFamily: 'Oswald',
            fontSize: { xs: 14, sm: 16 },
          }}
        >
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
            fontSize: { xs: 24, sm: 28, md: 32 },
          }}
        >
          Where Quality Meet <br />
          Excellent <span style={{ color: '#F3274C' }}>Service.</span>
        </Typography>

        <Typography
          sx={{
            mb: 3,
            fontFamily: 'Oswald',
            color: 'grey',
            width: { xs: '100%', sm: '85%', md: '70%' },
            fontSize: { xs: 14, sm: 15 },
          }}
        >
          The perfect dining experience where every dish is crafted with fresh, high-quality ingredients. Experience quick and efficient service that ensures your food is served fresh.
        </Typography>

        {/* Features Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 2, sm: 4 },
            mb: 4,
            width: '100%',
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography fontWeight={700} fontSize={15} sx={{ mb: 0.5 }}>
              <FastfoodOutlinedIcon style={{ color: '#FFC222', marginRight: 4 }} />
              Super Quality Food
            </Typography>
            <Typography fontSize={13} color="text.secondary">
              A team of dreamers and doers building unique interactive music and art.
            </Typography>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography fontWeight={700} fontSize={15} sx={{ mb: 0.5 }}>
              <PeopleOutlineOutlinedIcon style={{ color: '#FFC222', marginRight: 4 }} />
              Well Reputation
            </Typography>
            <Typography fontSize={13} color="text.secondary">
              A team of dreamers and doers building unique interactive music and art.
            </Typography>
          </Box>
        </Box>

        {/* CTA Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 2,
          }}
        >
          <NormalButton bgcolor="#F3274C" color="#fff" name="More About Us"  onClick={() => navigate('/about1')} />
          <Typography fontSize={12} fontWeight={600} sx={{ mt: { xs: 1, sm: 0 } }}>
            <span style={{ color: '#FFC222' }}>BRENDON GARETY</span>
            <br />
            CUSTOMER'S EXPERIENCE IS OUR HIGHEST PRIORITY.
          </Typography>
        </Box>
      </Box>

      {/* Right Image Section */}
      <Box
        component="img"
        src={ImageAssets.since}
        alt="Burger"
        sx={{
          display:{xs:'none',md:'block'},
          width: { xs: '100%', sm: '90%', md: '50%' },
          maxWidth: { xs: '100%', sm: '480px', md: '600px', lg: '800px' },
          height: 'auto',
          objectFit: 'contain',
        }}
      />
    </Box>
  );
};

export default Service5;
