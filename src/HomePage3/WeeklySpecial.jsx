import React from 'react';
import { Box, Typography, Grid, Card, CardContent, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import { ImageAssets } from '../ImageAssets';
import { Snackbar, Alert } from '@mui/material';


const WeeklySpecial = () => {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  return (
    
          <Box
  sx={{
    mt: { xs: 8, sm: 10 },
    px: { xs: 2, sm: 4, md: 40 },
  }}
>
  <Typography
    sx={{
      fontSize: 12,
      fontWeight: 'bold',
      color: '#E91E63',
      mb: 1,
      textAlign: { xs: 'center', md: 'left' },
    }}
  >
    WEEKLY SPECIAL
  </Typography>

  <Typography
    sx={{
      fontSize: { xs: 22, md: 28 },
      fontWeight: 'bold',
      fontFamily: 'Fredoka One',
      mb: 4,
      textAlign: { xs: 'center', md: 'left' },
    }}
  >
    Best Seller Deals
  </Typography>

  <Grid container spacing={4} alignItems="center" justifyContent="center">
   
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          backgroundColor: '#fff',
          border: '3px solid #f44',
          borderRadius: '16px',
          p: 2,
        }}
      >
        <RadioGroup defaultValue="Buffet Vegas">
          {[
            'Fish Vegetables',
            'Buffet Vegas',
            'Fish Fry Grilled',
            'Tasty Snacks',
            'Smoked Chicken',
          ].map((item) => (
            <FormControlLabel
              key={item}
              value={item}
              control={
                <Radio
                  sx={{
                    color: '#FFD40D',
                    '&.Mui-checked': { color: '#FFD40D' },
                  }}
                />
              }
              label={item}
              sx={{
                '& .MuiTypography-root': { fontWeight: 500, fontSize: { xs: 13, sm: 14 } },
                display: 'flex',
                alignItems: 'center',
                width: '100%',
              }}
            />
          ))}
        </RadioGroup>
      </Box>
    </Grid>

    <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
      <Box
        component="img"
        src={ImageAssets.junk}
        alt="Buffet"
        sx={{
          width: { xs: '100%', sm: '60%', md: '100%' },
          maxWidth: 240,
          borderRadius: 2,
          mx: 'auto',
        }}
      />
    </Grid>

    
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          border: '2px solid #FFD40D',
          borderRadius: '16px',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 1,
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: 18, mb: 1 }}>
          Buffet Vegas
        </Typography>
        <Typography sx={{ fontSize: 13 }}>✔ Fresh & Tasty</Typography>
        <Typography sx={{ fontSize: 13 }}>✔ Best in organic foods</Typography>
        <Typography sx={{ fontSize: 13 }}>✔ 100 Fresh Ingredients</Typography>
        <Typography sx={{ fontSize: 13 }}>✔ Better for your Health</Typography>
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: 16,
            color: '#E91E63',
            mt: 1,
          }}
        >
          $10.85{' '}
          <span
            style={{
              textDecoration: 'line-through',
              color: '#aaa',
              fontWeight: 400,
            }}
          >
            $14.85
          </span>
        </Typography>
        <Button
          variant="contained"
          onClick={() => setOpenSnackbar(true)} 
          sx={{
            mt: 2,
            backgroundColor: '#E91E63',
            borderRadius: 3,
            px: 3,
            textTransform: 'none',
          }}
        >
          Product
        </Button>
      </Box>
    </Grid>
  </Grid>
  <Snackbar
  open={openSnackbar}
  autoHideDuration={3000}
  onClose={() => setOpenSnackbar(false)}
  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
>
  <Alert
    onClose={() => setOpenSnackbar(false)}
    severity="info"
    variant="filled"
    sx={{
      backgroundColor: '#FFF3CD',
      color: '#856404',
      border: '1px solid #FFEEBA',
      fontWeight: 600,
    }}
  >
    Checkout the shop for the item!
  </Alert>
</Snackbar>

</Box> 
  );
};

export default WeeklySpecial;
