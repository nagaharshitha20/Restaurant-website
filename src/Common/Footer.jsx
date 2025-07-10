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
        minHeight: { xs: 'auto', md: '470px' },
        overflow: 'hidden',
        mt: { xs: '56px', sm: '64px' },
        bgcolor: '#F5F8FD',
        pt: 10,
        pb: 6,
        px: { xs: 2, sm: 4, md: 0 },
      }}
    >
      {/* Left & Right Decorative Images */}
      <Box
        component="img"
        src={ImageAssets.b1}
        alt="left-decor"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '160px',
          zIndex: 0,
        }}
      />
      <Box
        component="img"
        src={ImageAssets.b2}
        alt="right-decor"
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '160px',
          zIndex: 0,
        }}
      />

      {/* Main Footer Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'center',
          alignItems: { xs: 'center', lg: 'flex-start' },
          gap: { xs: 6, md: 8, lg: 12 },
          zIndex: 1,
          position: 'relative',
        }}
      >
        {/* Left Box */}
        <Box
          sx={{
            width: '260px',
            backgroundColor: '#F3274C',
            color: '#fff',
            borderRadius: '30px',
            p: 3,
            fontFamily: 'Fredoka One, sans-serif',
            textAlign: 'left',
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, fontFamily: 'Fugaz One' }}>
            pizza hut
          </Typography>
          <Typography sx={{ mb: 1, fontFamily: 'Fredoka One' }}>
            Tuesday - Saturday: 12:00pm – 23:00pm
          </Typography>
          <Typography sx={{ mb: 4, fontFamily: 'Fredoka One', textDecoration: 'underline' }}>
            Closed on Sunday
          </Typography>
          <Typography sx={{ fontSize: '16px', fontFamily: 'Fredoka One' }}>
            5 star rated on TripAdvisor
          </Typography>
        </Box>

        {/* Links + Newsletter */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            flexWrap: 'wrap',
            gap: { xs: 4, md: 8, lg: 10 },
            justifyContent: 'center',
            mt: { xs: 4, lg: '35px' },
          }}
        >
        
          <Box >
            <Typography variant="h6" sx={{ mb: 1, fontFamily: 'Fredoka One' }}>
              <Box component="span" sx={{ borderBottom: '3px solid #FBD411', pb: '2px' }}>
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
            <Typography variant="h6" sx={{ mb: 1, fontFamily: 'Fredoka One' }}>
              <Box component="span" sx={{ borderBottom: '3px solid #FBD411', pb: '2px' }}>
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
          <Box sx={{ minWidth: { xs: '100%', sm: '300px' }, maxWidth: '360px' }}>
            <Typography variant="h6" sx={{ mb: 1, fontFamily: 'Fredoka One' }}>
              <Box component="span" sx={{ borderBottom: '3px solid #FBD411', pb: '2px' }}>
                Newsletter
              </Box>
            </Typography>
            <Typography sx={{ mb: 1 }}>Get recent news and updates.</Typography>
         <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
  <TextField
    placeholder="Email Address"
    size="small"
    variant="outlined"
    fullWidth
    sx={{
      backgroundColor: '#fff',
   
    }}
  />
   <Box sx={{ display: { xs: 'none', sm: 'block' }, mt: 2 }}>
              <PrimaryButton name="Subscribe" width="139.91px" borderwidth="129.41px" />
            </Box>
</Box>
            {/** Button for xs (stacked) */}
            <Box sx={{ display: { xs: 'block', sm: 'none' }, mt: 2 }}>
              <PrimaryButton name="Subscribe" width="139.91px" borderwidth="129.41px" />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Bottom Strip */}
      <Box
        sx={{
          mt: 6,
          pt: 3,
          borderTop: '4px solid #FBD411',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: 2, md: 10, lg: 60 },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography variant="body2" sx={{ fontFamily: 'Fugaz One',color:'#F3274C' }}>
          © 2024 pizza hut <span style={{color:'#000',fontFamily: 'Fredoka One'}}>| All shawonetc3 Themes</span>
        </Typography>
        <Box sx={{ display: 'flex', gap: 20 ,textDecoration:'underline'}}>
          <Typography variant="body2" fontFamily="Fredoka One" >
            Facebook
          </Typography>
          <Typography variant="body2" fontFamily="Fredoka One">
            Instagram
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
