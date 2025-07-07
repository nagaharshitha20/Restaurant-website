import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NormalButton from '../Common/NormalButton';
import { ImageAssets } from '../ImageAssets';
import ToggleButton from '../Common/ToggleButton';

const CoverPage5 = () => {
  return (<>
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '70vh', sm: '100vh', md: '100vh' },
        overflow: 'hidden',
        mt: { xs: '56px', sm: '64px' }, // offset for navbar
      }}
    >
     
      <Box
        component="img"
        src={ImageAssets.cover}
        alt="cover"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: '97%',
          zIndex: 0,
        }}
      />

     
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          px: { xs: 3, sm: 6, md: 12 },
          zIndex: 1,
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 0 },
        }}
      >
       
        <Box
          sx={{
            maxWidth: '600px',
            color: '#FFFFFF',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: '8vw', sm: '6vw', md: '16px' },
              textAlign: 'left',
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            Starting at $24.00
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '8vw', sm: '6vw', md: '48px' },
              textAlign: 'left',
              fontWeight: 'bold',
              mb: 2,
              lineHeight: 1.2,
            }}
          >
            The best Food <br />
            Collection 2024
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Oregano',
              fontSize: { xs: '3.5vw', sm: '2.5vw', md: '20px' },
              color: 'lightgrey',
              textAlign: 'left',
              mb: { xs: 3, sm: 4 },
              lineHeight: 1.5,
            }}
          >
            Exclusive offer <span style={{ color: '#FFD43A' }}>-35%</span> off this week
          </Typography>

        
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

        
          <Box sx={{ mt: 6 }}>
            <ToggleButton leftLabel="Your email address" rightLabel="Subscribe" />
          </Box>
        </Box>

       
        <Box
          sx={{
            flexShrink: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src={ImageAssets.dis}
            alt="Pizza"
            sx={{
              width: { xs: '180px', sm: '220px', md: '560px' },
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
        </Box>
        
      </Box>
     
    </Box>
    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'center',gap:4,mt:10}}>
 <Box
            component="img"
            src={ImageAssets.order1}
            alt="Pizza"
            sx={{
              width: { xs: '180px', sm: '220px', md: '20%' },
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
 <Box
            component="img"
            src={ImageAssets.order2}
            alt="Pizza"
            sx={{
              width: { xs: '180px', sm: '220px', md: '20%' },
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
 <Box
            component="img"
            src={ImageAssets.order3}
            alt="Pizza"
            sx={{
              width: { xs: '180px', sm: '220px', md: '20%' },
              height: 'auto',
              borderRadius: 2,
              boxShadow: 3,
            }}
          />
    </Box>
    </>
  );
};

export default CoverPage5;
