import React from 'react';
import { Box, Typography, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import { ImageAssets } from '../ImageAssets';

const NewsletterSection = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        py: 6,
        backgroundColor: '#F4F1EA',
      }}
    >
      <Box
        sx={{
          width: '1290px',
          height: '407.78px',
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
            background: 'linear-gradient(to bottom, rgba(244, 241, 234, 0.94), rgba(244, 241, 234, 0.3))',
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
            <Typography variant="h4" sx={{ fontWeight: 700, fontFamily: 'Oswald', mb: 1 }}>
              Subscribe Our Newsletter<br />To Get More Offers
            </Typography>
            <Typography sx={{ fontSize: 14 }}>
              At vero eos et accusamus et iusto odio dignissimos ducimus quae blanditiis praesentium voluptatum deleniti atque
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
              fullWidth
              sx={{ bgcolor: '#fff', borderRadius: 1 }}
            />
            <Button
              variant="contained"
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
              control={<Checkbox size="small" />}
              label={
                <Typography sx={{ fontSize: 13 }}>
                  I Agree To The <span style={{ fontWeight: 600 }}>Privacy Policy</span>
                </Typography>
              }
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsletterSection;
