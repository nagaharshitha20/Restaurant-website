import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Snackbar,
  Alert,
} from '@mui/material';
import { ImageAssets } from '../ImageAssets';

const NewsletterSection = () => {
  const [formData, setFormData] = React.useState({
    email: '',
  });

  const [isChecked, setIsChecked] = React.useState(false);

  const [errors, setErrors] = React.useState({});

  const [snackbar, setSnackbar] = React.useState({
    open: false,
    type: 'success', // 'success' or 'error'
    message: '',
  });

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    setErrors({ ...errors, [field]: '' });
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    setErrors({ ...errors, checkbox: '' });
  };

  const handleBookNow = () => {
    const newErrors = {};

    if (
      !formData.email ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!isChecked) {
      newErrors.checkbox = 'You must agree to the Privacy Policy';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSnackbar({
        open: true,
        type: 'success',
        message: `Thank you for Subscribing ${formData.email.split('@')[0]}!`,
      });
    } else {
      setSnackbar({
        open: true,
        type: 'error',
        message: newErrors.email ? newErrors.email : newErrors.checkbox,
      });
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        py: 6,
        mx: 'auto',
        backgroundColor: '#F4F1EA',
      }}
    >
      <Box
        sx={{
          width: '1290px',
          height: '407.78px',
          mx: 'auto',
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        {/* Background Image */}
        <Box
          component="img"
          src={ImageAssets.subscribe}
          alt="Subscribe"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        />

        {/* Gradient Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(to bottom, rgba(244, 241, 234, 0.94), rgba(244, 241, 234, 0.3))',
            zIndex: 1,
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
            px: 6,
            flexDirection: { xs: 'column', md: 'row' },
            gap: 3,
          }}
        >
          {/* Left Text */}
          <Box sx={{ maxWidth: 500 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, fontFamily: 'Oswald', mb: 1 }}
            >
              Subscribe Our Newsletter<br />To Get More Offers
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              At vero eos et accusamus et iusto odio dignissimos ducimus quae
              blanditiis praesentium voluptatum deleniti atque
            </Typography>
          </Box>

          {/* Right Input + Button */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '100%',
              maxWidth: 400,
            }}
          >
            <TextField
              placeholder="Enter Email Address"
              variant="outlined"
              size="small"
              value={formData.email}
              onChange={handleChange('email')}
              error={Boolean(errors.email)}
              helperText={errors.email}
              fullWidth
              sx={{ bgcolor: '#fff', borderRadius: 1 }}
            />
            <Button
              variant="contained"
              onClick={handleBookNow}
              sx={{
                bgcolor: '#FFC222',
                color: '#000',
                fontWeight: 'bold',
                textTransform: 'none',
                px: 4,
                py: 1,
                borderRadius: 0,
                fontFamily: 'Oswald',
              }}
            >
              Subscribe Now
            </Button>
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
              }
              label={
                <Typography sx={{ fontSize: 13 }}>
                  I Agree To The{' '}
                  <span style={{ fontWeight: 600 }}>Privacy Policy</span>
                </Typography>
              }
            />
          </Box>
        </Box>
      </Box>

      {/* Snackbar Alert */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          variant="filled"
          severity={snackbar.type}
          sx={{
            backgroundColor:
              snackbar.type === 'success'
                ? 'rgba(144, 238, 144, 0.2)'
                : 'rgba(255, 0, 0, 0.1)',
            color: snackbar.type === 'success' ? 'green' : 'red',
            border:
              snackbar.type === 'success'
                ? '1px solid lightgreen'
                : '1px solid red',
            fontWeight: 600,
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default NewsletterSection;
