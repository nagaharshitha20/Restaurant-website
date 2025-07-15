import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { ImageAssets } from '../ImageAssets';

const categories = [

  { label: 'Steak', img: ImageAssets.steak },
    { label: 'Dessert', img: ImageAssets.dessert },
  { label: 'Coffee', img: ImageAssets.coffee },
  { label: 'Burger', img: ImageAssets.burger },
];
const categoryImages = {
  Dessert: ImageAssets.r2,
  Steak: ImageAssets.grillchicken,
  Coffee: ImageAssets.v4,
  Burger: ImageAssets.chickenburger,
};

const menuData = {
  Steak: [
    { title: 'Sake BBQ sauce', desc: 'radish, black sesame seeds, coriander', price: '$9.00' },
    { title: 'BBQ baby back ribs', desc: 'sticky Asian glaze, charred lime, chilli cashews', price: '$16.00' },
    { title: 'Half smoked chicken', desc: 'miso butter glaze, charred lime wedge, sake bbq', price: '$34.00' },
    { title: 'Dusted chicken wings', desc: 'tossed in Korean hot sauce, pickled radish', price: '$40.00' },
  ],
  Dessert: [
    { title: 'Ribeye Steak', desc: 'marbled beef, black pepper crust', price: '$42.00' },
    { title: 'Sirloin Grill', desc: 'chimichurri, garlic butter', price: '$38.00' },
    { title: 'Beef Tenderloin', desc: 'red wine reduction, thyme', price: '$50.00' },
    { title: 'BBQ Skirt Steak', desc: 'pico de gallo, lime zest', price: '$36.00' },
  ],
  Coffee: [
    { title: 'Espresso Roast', desc: 'dark, rich espresso blend', price: '$6.00' },
    { title: 'Iced Latte', desc: 'milk, ice, espresso', price: '$7.50' },
    { title: 'Cappuccino', desc: 'steamed milk, thick foam', price: '$7.00' },
    { title: 'Cold Brew', desc: 'slow-steeped smooth coffee', price: '$6.50' },
  ],
  Burger: [
    { title: 'Cheese Burger', desc: 'cheddar, onion, tomato', price: '$12.00' },
    { title: 'BBQ Bacon Burger', desc: 'smoked bacon, bbq sauce', price: '$14.00' },
    { title: 'Double Patty Melt', desc: 'grilled onions, swiss cheese', price: '$16.00' },
    { title: 'Veggie Delight', desc: 'black bean patty, avocado', price: '$11.00' },
  ],
};

const Bbq = () => {
  const [activeCategory, setActiveCategory] = useState('Steak');

  return (
    <Box
      sx={{
        position: 'relative',
        width: '90%',
        mx:'auto',
        mt: { xs: '56px', sm: '64px' },
        px: { xs: 0, sm: 4, md: 6, lg: 8 },
        py: { xs: 4, md: 6 },
      }}
    >
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 3,
          flexWrap: 'wrap',
          mb: 5,
        }}
      >
        {categories.map((item, idx) => {
          const isActive = activeCategory === item.label;

          return (
            <Box
              key={idx}
              onClick={() => setActiveCategory(item.label)}
              sx={{
                position: 'relative',
                textAlign: 'center',
                borderRadius: '12px',
                px: 3,
                py: 2,

                width: { xs: '15%', sm: '80px' },
                height: { xs: '50%', sm: '100px' },
                backgroundColor: isActive ? '#F3274C' : '#fff',
                border: isActive ? 'none' : '2px solid #ccc',
                boxShadow: isActive ? '0px 4px 12px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',

                // '&::before': isActive
                //   ? {
                //       content: '""',
                //       position: 'absolute',
                //       top: 0,
                //       left: '50%',
                //       transform: 'translateX(-50%)',
                //       width: '12px',
                //       height: '12px',
                //       backgroundColor: '#F3274C',
                //       borderRadius: '2px 2px 0 0',
                //     }
                //   : undefined,

                // '&::after': isActive
                //   ? {
                //       content: '""',
                //       position: 'absolute',
                //       bottom: '-8px',
                //       left: '50%',
                //       transform: 'translateX(-50%) rotate(45deg)',
                //       width: '12px',
                //       height: '12px',
                //       backgroundColor: '#F3274C',
                //     }
                //   : undefined,
              }}
            >
              <Box
                component="img"
                src={item.img}
                alt={item.label}
                sx={{
                  width: '40px',
                  height: '40px',
                  mt: { xs: 1, sm: 2 },
                  mb: { xs: 0.5, sm: 1 },
                  filter: isActive
                    ? 'brightness(0) invert(1)'
                    : 'invert(35%) sepia(95%) saturate(6500%) hue-rotate(-10deg)',
                }}
              />
              <Typography
                sx={{
                  color: isActive ? '#fff' : '#000',
                  fontFamily: 'Fredoka One',
                  fontSize: { xs: '12px', sm: '16px' },
                }}
              >
                {item.label}
              </Typography>
            </Box>
          );
        })}
      </Box>

      
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{
          flexDirection: {
            xs: 'column',
            md: 'column',
            lg: 'row',
          },
        }}
      >
       
        <Grid item xs={12} md={12} lg={5}>
         <Box
  component="img"
  src={categoryImages[activeCategory]}
  alt={activeCategory}

            sx={{
              width: {
                xs: '100%',
                sm: '420px',
                md: '350px',
                lg: '400px',
              },
              height: {
                xs: 'auto',
                md: 'auto',
                lg: '350.69px',
              },
              borderRadius: '50%',
              mx: {
                xs: 'auto',
                sm: 'auto',
                md: 'auto',
                lg: 0,
              },
              position: {
                xs: 'static',
                md: 'static',
                lg: 'relative',
              },
              left: {
                lg: '230px',
              },
              marginLeft: {
                lg: '-290px',
              },
              backgroundSize:{
                lg:'cover'
              }
            }}
          />
        </Grid>

       
        <Grid item xs={12} md={12} lg={6}>
          <Box
            sx={{
              backgroundColor: '#f8fbff',
              borderRadius: '20px',
              width: '100%',
              maxWidth: { xs: '100%', lg: '700px' },
              mx: 'auto',
              
              p: { xs: 0, md: 4, lg: 5 },
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '20px', md: '24px' },
                mb: 2,
                px:3,
                fontFamily: 'Fredoka One',
                textAlign: { xs: 'center', md: 'left' },
                ml: { xs: 0, lg: 20 },
              }}
            >
              {activeCategory}
            </Typography>

            {menuData[activeCategory].map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  borderBottom: '1px dashed #000',
                  pb: 2,
                  px:3,
                  mb: 2,
                  ml: { xs: 0, lg: 20 },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    flexWrap: 'wrap',
                    
                  }}
                >
                  <Typography sx={{ fontFamily: 'Fredoka One' }}>
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#F3274C',
                      fontFamily: 'Fredoka One',
                    }}
                  >
                    {item.price}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: '14px',
                    color: '#666',
                    fontFamily: 'Epilogue',
                    mt: 0.5,
                  }}
                >
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Bbq;
