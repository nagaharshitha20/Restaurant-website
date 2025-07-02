import * as React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { ImageAssets } from '../ImageAssets';
import PrimaryButton from './PrimaryButton'; 

const Footer = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '480px', sm: '600px', md: '470px' },
        overflow: 'hidden',
        mt: { xs: '56px', sm: '64px' },
        bgcolor: '#F5F8FD',
        // px: { xs: 2, sm: 6, md: 9 },
        pt: 10,
        pb: 6,
      }}
    >
      {/* Top decorative image (left) */}
      <Box
        component="img"
        src={ImageAssets.b1}
        alt="left-decor"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '200px',
          zIndex: 0,
        }}
      />
      {/* Top decorative image (right) */}
      <Box
        component="img"
        src={ImageAssets.b2}
        alt="right-decor"
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '200px',
          zIndex: 1,
        }}
      />

      {/* Main Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems:'center',
          gap:5,
          alignItems: 'flex-start',
          position: 'relative',
          zIndex: 1,
          // gap: { xs: 4, md: 0 },
        }}
      >
        {/* Left: Pizza Hut Card */}
        <Box
          sx={{
            width: '260px',
            height:'240px',
            backgroundColor: '#F3274C',
            color: '#fff',
            borderRadius: '30px',
            p: 3,
            fontFamily: 'Fredoka One, sans-serif',
          }}
        >
          <Typography variant="h5" fontWeight="bold" fontStyle="italic"sx={{ mb: 2 }}>
            pizza hut
          </Typography>
          <Typography sx={{ mb: 1 }}>
            Tuesday - Saturday: 12:00pm – 23:00pm
          </Typography>
          <Typography sx={{ mb: 2, color: '#fff', fontWeight: 600 }}>
            <u>Closed on Sunday</u>
          </Typography><br></br><br></br><br></br><br></br>
          <Typography sx={{fontSize:'16px', fontWeight:'bold'}}>5 star rated on TripAdvisor</Typography>
        </Box>

        {/* Center: Links */}
        <Box
          sx={{
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
             mt:'35px'
          }}
        >
          {/* About */}
          <Box >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
              <Box
                component="span"
                sx={{ borderBottom: '3px solid #FBD411', pb: '2px' }}
              >
                About
              </Box>
            </Typography>
            <Typography>› Fredoka One</Typography>
            <Typography>› Special Dish</Typography>
            <Typography>› Reservation</Typography>
            <Typography>› Contact</Typography>
          </Box>

          {/* Menu */}
          <Box>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
              <Box
                component="span"
                sx={{ borderBottom: '3px solid #FBD411', pb: '2px' }}
              >
                Menu
              </Box>
            </Typography>
            <Typography>› Steaks</Typography>
            <Typography>› Burgers</Typography>
            <Typography>› Coctails</Typography>
            <Typography>› Bar B Q</Typography>
            <Typography>› Desserts</Typography>
          </Box>

          {/* Newsletter */}
          <Box>
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
              <Box
                component="span"
                sx={{ borderBottom: '3px solid #FBD411', pb: '2px' }}
              >
                Newsletter
              </Box>
            </Typography>
            <Typography sx={{ mb: 1 }}>Get recent news and updates.</Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
              <TextField
                placeholder="Email Address"
                size="small"
                variant="outlined"
                sx={{
                  backgroundColor: '#fff',
                  height:'40px',
                  borderRadius: '6px',
                  width:'300px'
                }}
                
              />
              
             
            </Box>
            <div style={{marginTop:"30px"}}><PrimaryButton name="Subscribe" width="139.91px" borderwidth="130.41px" /></div>
             
          </Box>
        </Box>
      </Box>

      {/* Footer Bottom */}
      <Box
        sx={{
          mt: 6,
          pt: 3,
          borderTop: '4px solid #FBD411',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap:60,
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography variant="body2">
          © 2024 <strong>pizza hut</strong> | All <strong>shawonetc3</strong> Themes
        </Typography>
        <Box sx={{ display: 'flex', gap: 10, mt: { xs: 2, md: 0 } }}>
          <Typography variant="body2" fontWeight="bold">Facebook</Typography>
          <Typography variant="body2" fontWeight="bold">Instagram</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
