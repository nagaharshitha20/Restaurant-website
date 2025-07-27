import React from 'react';
import { Box, Typography, Grid, Button, TextField } from '@mui/material';
import { ImageAssets } from '../../ImageAssets';

const news = [
  { img: ImageAssets.img1, title: 'Creamy Chicken Alfredo', date: 'April 6, 2025' },
  { img: ImageAssets.img2, title: 'Air Fryer Salmon', date: 'April 6, 2025' },
  { img: ImageAssets.img1, title: 'Supporting food flavors', date: 'April 6, 2025' },
];

const Experience = () => (
  <Box>

    {/* Hero Section */}
    <Box
      sx={{
        backgroundImage: `url(${ImageAssets.bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height:{xs:'200px'},
        py: { xs: 10, sm: 10, md: 30 },
        px: { xs: 2, sm: 4, md: 12 },
        color: '#fff',
      }}
    >
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ width: { xs: '100%', sm: '80%', md: '60%' }, mx: 'auto' }}>
            <Typography sx={{ fontSize: '12px', fontWeight: 'bold', mb: 1 }}>
              THANKS FOR WATCH VIDEO
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Fredoka One',
                fontSize: { xs: '24px', md: '36px' },
                mb: 2,
                color: '#fff',
              }}
            >
              Highlighting Its Unique Features and Experiences
            </Typography>
            <Box
              sx={{
                backgroundColor: '#FFD700',
                display: 'inline-block',
                px: 2,
                py: 1.5,
                color: '#000',
                fontWeight: 600,
                fontSize: '14px',
                borderRadius: '4px',
                mt: 1,
              }}
            >
              14 Years Experience <br /> ⭐⭐⭐⭐⭐
            </Box>
          </Box>
        </Grid>

        {/* Images Section */}
        <Grid item xs={12} md={6} sx={{ position: 'relative', minHeight: '320px' }}>
          <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
            <Box
              component="img"
              src={ImageAssets.e1}
              alt="e1"
              sx={{
                position: 'absolute',
                top: { xs: -60, md: -120 },
                right: { xs: '10%', md: '-100px' },
                display:{xs:'none',md:'block'},
                width: { xs: 80, sm: 100, md: 150 },
                height: { xs: 80, sm: 100, md: 150 },
                borderRadius: '50%',
                border: '4px solid #FFD700',
                p: 0.5,
              }}
            />
            <Box
              component="img"
              src={ImageAssets.e2}
              alt="e2"
              sx={{
                position: 'absolute',
                top: { xs: '70px', md: '70px' },
                right: { xs: '0%', md: '-100px' },
                display:{xs:'none',md:'block'},
                width: { xs: 80, sm: 100, md: 150 },
                height: { xs: 80, sm: 100, md: 150 },
                borderRadius: '50%',
                border: '4px solid #FFD700',
                p: 0.5,
              }}
            />
            <Box
              component="img"
              src={ImageAssets.e3}
              alt="e3"
              sx={{
                position: 'absolute',
                display:{xs:'none',md:'block'},
                 top: { xs: '-30px', sm: '-20px' },
                left: { xs: '30%', sm: '20%', md: '100px' },
                width: { xs: 80, sm: 100, md: 150 },
                height: { xs: 80, sm: 100, md: 150 },
                borderRadius: '50%',
                border: '4px solid #FFD700',
                p: 0.5,
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Box> 
);

export default Experience;
