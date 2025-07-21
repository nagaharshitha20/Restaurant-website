import React from 'react';
import { Box, Typography, Grid, Button, TextField, Snackbar, Alert } from '@mui/material';
import { ImageAssets } from '../ImageAssets';

const news = [
  { img: ImageAssets.img1, title: 'Creamy Chicken Alfredo', date: 'April 6, 2025' },
  { img: ImageAssets.img2, title: 'Air Fryer Salmon', date: 'April 6, 2025' },
  { img: ImageAssets.img1, title: 'Supporting food flavors', date: 'April 6, 2025' },
];

const RecentNews2 = () => {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  // Form state
  const [formData, setFormData] = React.useState({
    guests: '',
    name: '',
    phone: '',
    date: '',
    time: '',
  });
const handleBookNow = () => {
  if (validate()) {
    setOpenSnackbar(true);

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

  if (!formData.guests || isNaN(formData.guests) || formData.guests < 1 || formData.guests > 20) {
    newErrors.guests = 'Enter 1 to 20 guests';
  }

  if (!formData.name.trim()) {
    newErrors.name = 'Name is required';
  }

  if (!formData.phone.match(/^\d{10}$/)) {
    newErrors.phone = 'Enter a valid 10-digit number';
  }

  if (!formData.date || isNaN(new Date(formData.date).getTime())) {
    newErrors.date = 'Enter a valid date';
  }

  if (!formData.time || !/^([01]\d|2[0-3]):?([0-5]\d)$/.test(formData.time)) {
    newErrors.time = 'Enter time in HH:MM format (24hr)';
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


  return (
    <Box>

      {/* News Section */}
      <Box sx={{ px: { xs: 2, md: 12 }, py: 6, textAlign: 'center' }}>
        <Typography
          sx={{
            fontFamily: 'Fredoka One',
            fontSize: { xs: '24px', md: '30px' },
            mb: 4,
          }}
        >
          Recent <span style={{ color: '#FFD700' }}>News</span>
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {news.map((item, idx) => (
            <Grid key={idx} item xs={12} sm={6} md={4}>
              <Box sx={{ borderRadius: 2, bgcolor: '#fff' }}>
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{
                    width: '100%',
                    height: { xs: 180, sm: 200 },
                    objectFit: 'cover',
                    borderRadius: '20px',
                  }}
                />
                <Box sx={{ p: 2, textAlign: 'left' }}>
                  <Typography sx={{ fontSize: '12px', color: '#888' }}>
                    {item.date}
                  </Typography>
                  <Typography
                    sx={{ fontFamily: 'Fredoka One', fontSize: '16px', mt: 1 }}
                  >
                    {item.title}
                  </Typography>
                  <Box
                    sx={{
                      fontSize: '12px',
                      mt: 1,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Box
                      component="img"
                      src={ImageAssets.cheif}
                      alt="User Icon"
                      sx={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        mr: 1,
                      }}
                    />
                    <strong>William Thomas</strong>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Contact Section */}
      <Box sx={{ px: { xs: 2, md: 30 }, pb: 10 }}>
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: 600,
            color: '#F3274C',
            mb: 1,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          GET IN TOUCH
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Fredoka One',
            width: { xs: '100%', md: '50%' },
            fontSize: { xs: '20px', md: '36px' },
            mb: 4,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Reservation Table & Enjoy Dining Table
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 6,
          }}
        >
          {/* Contact Info */}
          <Box sx={{ flex: 1 }}>
            {[
              { icon: '📞', label: 'For Booking', value: '+1 (888) 999 66' },
              { icon: '✉️', label: 'Email Address', value: 'info@domain.com' },
              { icon: '📍', label: 'New Location', value: 'New Street Town 5785 (US)' },
            ].map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  mb: 5,
                }}
              >
                <Box
                  sx={{
                    backgroundColor: '#FFD700',
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    mr: 2,
                  }}
                >
                  {item.icon}
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 600, fontSize: '14px', color: '#F3274C' }}>
                    {item.label}
                  </Typography>
                  <Typography sx={{ fontSize: '14px' }}>{item.value}</Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* Reservation Form */}
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
             <TextField
  fullWidth
  placeholder="No. of Guest"
  size="small"
  variant="outlined"
  value={formData.guests}
  onChange={handleChange('guests')}
  error={Boolean(errors.guests)}
  helperText={errors.guests}
/>

              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                <TextField
                  fullWidth
                  placeholder="Full Name"
                  size="small"
                  variant="outlined"
                  value={formData.name}
                  onChange={handleChange('name')}
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                />
                <TextField
                  fullWidth
                  placeholder="Phone No"
                  size="small"
                  variant="outlined"
                  value={formData.phone}
                  onChange={handleChange('phone')}
                  error={Boolean(errors.phone)}
                  helperText={errors.phone}
                />
              </Box>

              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                <TextField
  fullWidth
  placeholder="Date"
  size="small"
  variant="outlined"
  value={formData.date}
  onChange={handleChange('date')}
  error={Boolean(errors.date)}
  helperText={errors.date}
/>
                <TextField
  fullWidth
  placeholder="Time (e.g. 18:30)"
  size="small"
  variant="outlined"
  value={formData.time}
  onChange={handleChange('time')}
  error={Boolean(errors.time)}
  helperText={errors.time}
/>
              </Box>

              <Box>
                <Button
                  variant="contained"
                  onClick={handleBookNow}
                  sx={{
                    backgroundColor: '#F3274C',
                    height: '40px',
                    fontWeight: 600,
                    px: 4,
                    '&:hover': {
                      backgroundColor: '#d81e3e',
                    },
                  }}
                >
                  Book Now
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Snackbar */}
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
          Table Reserved Successfully
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default RecentNews2;
