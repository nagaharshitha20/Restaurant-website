import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { ImageAssets } from '../ImageAssets';
import PrimaryButton from '../Common/PrimaryButton';

const countdownData = [
  { value: '482', label: 'Days' },
  { value: '04', label: 'Hours' },
  { value: '28', label: 'Mins' },
  { value: '05', label: 'Sec' },
];

const DealOfWeek = () => {
  return (
    <Box
      sx={{
        px: { xs: 3, sm: 6, md: 0 },
        py: { xs: 6, md: 10 },
        bgcolor: '#fff',
        width: '100%',
      }}
    >
     
      <Typography
        sx={{
          textAlign: 'center',
          fontFamily: 'Fredoka One',
          fontSize: { xs: '26px', md: '36px' },
          mb: 2,
        }}
      >
        Deal of the Week
      </Typography>
      <Box
        sx={{
          width: '155px',
          height: '6px',
          backgroundColor: '#FFD700',
          mx: 'auto',
          mb: 6,
          borderRadius: '3px',
        }}
      />

      
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        
        <Grid item xs={12} md={5}>
          <Box>
            <Box
              sx={{
                display: 'inline-block',
                backgroundColor: '#FFD700',
                color: '#000',
                fontSize: '12px',
              
                fontWeight: 700,
                px: 1.5,
                py: 0.5,
                borderRadius: '4px',
                mb: 2,
              }}
            >
              SALE UP TO 7% OFF
            </Box>

            <Typography
              sx={{
                fontFamily: 'Fredoka One',
                fontSize: { xs: '24px', md: '28px' },
                mb: 2,
              }}
            >
              Shroom Bacon Burger
            </Typography>

            <Grid container spacing={2} width="60%" >
              {[
                'Fresh & Tasty',
                'Best in organic foods',
                '100 Fresh Ingredients',
                'Better for your Health',
              ].map((text, i) => (
                <Grid item xs={6} key={i}>
                  <Typography sx={{ fontSize: '14px', mb: 0.5 }}>
                    ✅ {text}
                  </Typography>
                </Grid>
              ))}
            </Grid>

      
            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography
                sx={{
                  fontSize: '14px',
                  color: '#888',
                  textDecoration: 'line-through',
                }}
              >
                $21.76
              </Typography>
              <Typography
                sx={{
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#F3274C',
                }}
              >
                $11.76
              </Typography>
            </Box>

            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: '#F3274C',
                fontWeight: 600,
                fontSize: '14px',
                px: 3,
                py: 1,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#d81e3e',
                },
              }}
            >
              Add to cart
            </Button>
          </Box>
        </Grid>

       
        <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
          <Box
            component="img"
            src={ImageAssets.Shroom}
            alt="Grill Chicken"
            sx={{
              width: '100%',
              maxWidth: '550px',
              borderRadius: '12px',
              zIndex:0,
            }}
          />
        </Grid>

    
        <Grid item xs={12} md={3} >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              zIndex:1,
            }}
          >
            {countdownData.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  width: '70px',
                  height: '70px',
                  backgroundColor: '#FFD700',
                  borderRadius: '50%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Fredoka One',
                  color: '#000',
                  fontSize: '14px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              >
                <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  {item.value}
                </div>
                <div style={{ fontSize: '10px' }}>{item.label}</div>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
      <Box
  sx={{
    backgroundColor: '#fff',
    px: { xs: 2, sm: 4, md: 40 },
    pt: { xs: 6, md: 10 },
    pb: { xs: 8, md: 12 },
  }}
>
  <Box
    sx={{
      border: '2px solid #FFD700',
      borderRadius: '10px',
      width:{ xs: '100%', md: '720px' },
      height: { xs: 'auto', md: '270px' },
      p: { xs: 2, md: 8 },
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'center',
      alignItems: 'center',
      gap: 3,
      backgroundColor: '#f8fbff',
    }}
  >
  
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(2, 1fr)' },
        gap: 1.5,
        flexShrink: 0,
       
      }}
    >
      {[1, 2, 3, 4].map((_, index) => (
        <Box
          key={index}
          component="img"
          src={ImageAssets.d1}
          alt={`Dining ${index}`}
          sx={{
            width: { xs: '100px', sm: '140px', md: '210px' },
            height: { xs: '100px', sm: '120px', md: '130px' },
            borderRadius: '25px',
          
            objectFit: 'cover',
          }}
        />
      ))}
    </Box>

  
    <Box sx={{ flex: 1, ml: { md: 3 } }}>
      <Typography
        sx={{
          fontFamily: 'Fredoka One',
          fontSize: { xs: '20px', md: '34px' },
          mb: 1,
        }}
      >
        Private Dining and Events
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Epilogue',
          fontSize: '14px',
          color: '#333',
          mb: 2,
        }}
      >
        With many private dining spaces, M is the perfect place to host your event or gathering
      </Typography>

       <PrimaryButton name="Enquire Now" width="139.91px" borderwidth="130.41px" />

      <Typography
        sx={{
          mt: 3,
          fontSize: '13px',
          fontFamily: 'Epilogue',
          color: '#000',
        }}
      >
        Booking: +44 1298 123 987
      </Typography>
    </Box>
  </Box>
</Box>

    </Box>
  );
};

export default DealOfWeek;
