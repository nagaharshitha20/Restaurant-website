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

      
     


    </Box> 
  
    </>
  );
};

export default BestSellers;
