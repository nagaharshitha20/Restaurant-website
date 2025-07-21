import * as React from 'react';
import { Box, Typography, TextField ,Snackbar,Alert} from '@mui/material';
import { ImageAssets } from '../ImageAssets';
import PrimaryButton from './PrimaryButton';

const Footer = () => {
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [formData, setFormData] = React.useState({
  email: '', 
});
const handleBookNow = () => {
  if (validate()) {
    setOpenSnackbar(true);
    // You can also handle actual submission here if needed
  }
};

  // Validation state
  const [errors, setErrors] = React.useState({});

  // Handle input change
  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    setErrors({ ...errors, [field]: '' }); // Clear error when typing
  };

const validate = () => {
  const newErrors = {};
if (
  !formData.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
) {
  newErrors.email = 'Enter a valid email address';
}

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};
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
        mx:'auto'
        // px: { xs: 2, sm: 4, md: 0 },
      }}
    >
    
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
    value={formData.email}
  onChange={handleChange('email')}
  error={Boolean(errors.email)}
  helperText={errors.email}
    fullWidth
    sx={{
      backgroundColor: '#fff',
   
    }}
  />
   <Box sx={{ display: { xs: 'none', sm: 'block' }, mt: 2 }}>
              <PrimaryButton name="Subscribe" width="139.91px" borderwidth="129.41px"  onClick={handleBookNow}/>
            </Box>
</Box>
            {/** Button for xs (stacked) */}
            <Box sx={{ display: { xs: 'block', sm: 'none' }, mt: 2 }}>
              <PrimaryButton name="Subscribe" width="139.91px" borderwidth="129.41px"     onClick={handleBookNow}/>
            </Box>
          </Box>
        </Box>
      </Box>

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
       <Snackbar
              open={openSnackbar}
              autoHideDuration={4000}
              onClose={() => setOpenSnackbar(false)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
              <Alert
                onClose={() => setOpenSnackbar(false)}
                variant="filled"
                sx={{
                  backgroundColor: 'rgba(144, 238, 144, 0.2)', // transparent lightgreen
                  color: 'green',
                  border: '1px solid lightgreen',
                  fontWeight: 600,
                }}
              >
                Thank you for Subscribing {formData.email.split('@')[0]}!
              </Alert>
            </Snackbar>
    </Box>
  );
};

export default Footer;
