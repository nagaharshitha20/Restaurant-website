import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NormalButton from '../Common/NormalButton';
import { ImageAssets } from '../ImageAssets';
import ToggleButton from '../Common/ToggleButton';

const CoverPage5 = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '35vh', sm: '60vh', md: '100vh' },
        overflow: 'hidden',
       margin: { xs: 2.5, sm: 2.5, md: 0 },
        mt: { xs: '66px', sm: '64px' },
        mb: { xs: 4, sm: 4, md: 0 },
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src={ImageAssets.cover}
        alt="cover"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: { xs: '95%', sm: '100%' },
          height: { xs: '35vh', sm: '60vh', md: '100vh' },
          objectFit: 'cover',
          opacity: '97%',
          borderRadius: { xs: '30px', sm: '30px', md: 0 },
          zIndex: 0,
        }}
      />

      {/* Content */}
    <Box
  sx={{
    position: { xs: 'relative', lg: 'absolute' },
    top: { lg: '50%' },
    left: { lg: 0 },
    transform: { lg: 'translateY(-50%)' },
    width: '100%',
    zIndex: 1,
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: { xs: 'flex-start', md: 'space-around' },
    alignItems: { xs: 'flex-start', md: 'center' }, // ← this fixes it
    px: { xs: 3, sm: 6, md: 12 },
    gap: { xs: 4, md: 0 },
  }}
>

        {/* Text Section */}
        <Box
          sx={{
            maxWidth: '600px',
            color: '#FFFFFF',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            mt: { xs: 3, sm: 6, md: 10, lg: 0 },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: '3.5vw', sm: '2.8vw', md: '16px' },
              textAlign: 'left',
            mb: {xs:1,md:2},
             lineHeight: 1.2,
              fontFamily: 'Oswald',
              color: '#FFD40D',
            }}
          >
            Starting at $24.00
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '6vw', sm: '5.5vw', md: '48px', lg: '48px' },
              textAlign: 'left',
              fontWeight: 'bold',
              mb: {xs:1,md:2},
               lineHeight: 1.2,
              fontFamily: 'Oswald',
            }}
          >
            The best Food <br />
            Collection 2024
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Oregano',
              fontSize: { xs: '3vw', sm: '2.5vw', md: '20px' },
              color: 'lightgrey',
              textAlign: 'left',
              mb: { xs: 2, sm: 4 },
              lineHeight: 1.5,
            }}
          >
            Exclusive offer <span style={{ color: '#FFD43A' }}>-35%</span> off this week
          </Typography>

          {/* Button */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: { xs: 2, sm: 3 },
              width: '100%',
            }}
          >
            <NormalButton
              name="Order Now"
              bgcolor="#EF294C"
              color="#fff"
              onClick={() => console.log('Menu button clicked')}
            />
          </Box>

          {/* Toggle Button: hidden for xs and sm */}
          <Box
            sx={{
              mt: 6,
              display: { xs: 'none', sm: 'none', md: 'block' },
            }}
          >
            <ToggleButton buttonLabel="Subscribe" />
          </Box>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            flexShrink: 0,
           display:{xs:'none',md:'flex'},
            justifyContent: 'center',
            alignItems: 'center',
            mt: { xs: 0, sm: 0, md: 2, lg: 10 },
          }}
        >
          <Box
            component="img"
            src={ImageAssets.dis}
            alt="Dish"
            sx={{
              width: {
                xs: '80%',
                sm: '80%',
                md: '560px',
              },
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CoverPage5;
