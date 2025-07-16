import React from 'react';
import { Box, Typography, Grid, Card, CardContent, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import { ImageAssets } from '../ImageAssets';
import InstagramIcon from '@mui/icons-material/Instagram';
import InstaFollow from '../Common/InstaFollow';

const menuItems = [
  {
    img: ImageAssets.grillchicken,
    title: 'Crispy Fried Chicken',
    weight: '100 grams',
    price: '$10.85',
    oldPrice: '$18.85',
  },
  {
    img: ImageAssets.junk,
    title: 'BBQ Chicken Pizza New',
    weight: '100 grams',
    price: '$13.17',
    oldPrice: '',
  },
  {
    img: ImageAssets.blackcoffee,
    title: 'Delicious Black Coffee',
    weight: '100 grams',
    price: '$11.76',
    oldPrice: '$21.65',
  },
  {
    img: ImageAssets.pizza,
    title: 'Margherita Pizza New',
    weight: '100 grams',
    price: '$15.80',
    oldPrice: '',
  },
];

const BestSellers = () => {
  return (<>
    <Box sx={{ px: { xs: 2, sm: 4, md: 10 }, py: 10, backgroundColor: '#f8fbff' }}>
     
      <Typography
        sx={{
          fontFamily: 'Fredoka One',
          fontSize: { xs: 20, md: 30 },
          textAlign: 'center',
          mb: 4,
        }}
      >
        A Complimentary Cocktail, Coffee,<br/> Ice-Tea For You.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {menuItems.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i} display="flex" flexDirection="column">
            <Card
              sx={{
                p: 3,
                borderRadius: 3,
              textAlign:'center',
              width :'180px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                height: '100%',
                
              }}
            >
               
                
              <Box component="img" src={item.img} alt={item.title} sx={{ width: 120, height: 120,  mb: 2, }} />
              <Box sx={{textAlign:'left'}}>
                <Typography sx={{ fontSize: 13, color: '#888',fontFamily:'Fredoka One' }}>{item.weight}</Typography>
              <Typography sx={{ fontFamily:'Fredoka One' }}>{item.title}</Typography>
              <Typography>
                {item.oldPrice && (
                  <span style={{ textDecoration: 'line-through', color: '#aaa', marginRight: 5,fontFamily:'Fredoka One' }}>{item.oldPrice}</span>
                )}
                <span style={{ color: '#E91E63', fontFamily:'Fredoka One'}}>{item.price}</span>
              </Typography></Box>
              
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography
        sx={{
          mt: 3,
          textAlign: 'center',
          fontSize: 13,
          fontFamily:'Fredoka One',
          color: '#E91E63',
          marginTop:10,
        }}
      >
        Booking Calling 24/7:  <span style={{color:'#000',textDecorationLine:'underline'}}>+12 985 67890</span> 
      </Typography>

      
     
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
    {/* Left Column: Radio Options */}
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

    {/* Center Column: Image */}
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

    {/* Right Column: Info */}
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
</Box>


    </Box> 
    <InstaFollow/>
    </>
  );
};

export default BestSellers;
