import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { ImageAssets } from '../ImageAssets';

const menuItems = [
  { img: ImageAssets.pizza, title: 'Shroom Bacon Burger', price: '$11.76' },
  { img: ImageAssets.blackcoffee, title: 'Delicious Black Coffee', price: '$11.76' },
  { img: ImageAssets.grillchicken, title: 'BBQ Chicken Pizza New', price: '$13.17' },
  { img: ImageAssets.good, title: 'Crispy Fried Chicken', price: '$15.10' },
  { img: ImageAssets.grillchicken, title: 'Zinger Double Burger', price: '$20.10' },
  { img: ImageAssets.pizza, title: 'Margherita Pizza New', price: '$15.80' },
  { img: ImageAssets.grillchicken, title: 'Crispy Fried Chicken', price: '$10.85' },
  { img: ImageAssets.good, title: 'Black Pepper Burger', price: '$10.85' },
];

const MenuSection = () => (
  <Box>
    {/* --- HOW WE WORK SECTION --- */}
    <Box
      sx={{
        background: `url(${ImageAssets.bg4}) no-repeat center/cover`,
        width: {xs:'100%',md:'70%'},
        height: { xs: 'auto', md: '50vh' },
        pt: { xs:6, md: 10 },
        pb: { xs: 6, md: 10 },
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1,
        borderTopRightRadius: { xs: 0, md: 250 },
        borderBottomRightRadius: { xs: 0, md: 250 },
        position: 'relative',
        mt:10
      }}
    >
      {/* LEFT CONTENT */}
      <Box
        sx={{
          width: { xs: '90%', md: '100%' },
          color: '#fff',
          fontFamily: 'Fredoka One',
          textAlign: { xs: 'center', md: 'left' },
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          left: { xs: 0, md: '250px' },
          alignItems: { xs: 'center', md: 'flex-start' },
          mx: { xs: 'auto', md: 0 },
        }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 1, fontSize: { xs: '1rem', md: '1.25rem' } }}
        >
          Easy Order In 3 Steps
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Fredoka One',
            mb: 5,
            textAlign: { xs: 'center', md: 'left' },
            fontSize: { xs: '1.5rem', md: '2rem' },
          }}
        >
          How We Work
        </Typography>

        <Grid container spacing={3} justifyContent="center" >
          {[
            { label: 'Explore Menu', desc: 'Viewing, ordering and filtering your desire', img: ImageAssets.tea },
            { label: 'Choose a Dish', desc: 'Viewing, ordering and filtering your desire', img: ImageAssets.juice },
            { label: 'Place Order', desc: 'Viewing, ordering and filtering your desire', img: ImageAssets.shop },
          ].map((item, index) => (
            <Grid item xs={6} sm={4} key={index}>
              <Box
                sx={{
                  color: '#fff',
                  p: 2,
                  borderRadius: 4,
                  maxWidth: 100 ,
                  mx: 'auto',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt="icon"
                  sx={{
                    width: {xs:80,sm:50},
                    height: {xs:80,sm:50},
                    borderRadius: '50%',
                    backgroundColor: '#FFD700',
                    p: 1,
                    mb: 2,
                  }}
                />
                <Typography variant="subtitle1" sx={{ fontFamily: 'Fredoka One',fontSize:{xs:14,sm:'auto'} }}>
                  {item.label}
                </Typography>
                <Box sx={{display:{xs:'none',md:'block'}}}>
                   <Typography variant="body2" >{item.desc}</Typography>
                </Box>
               
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* IMAGE (only for md and up) */}
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'relative',
          left: '0%',
        }}
      >
        <Box
          component="img"
          src={ImageAssets.work}
          alt="How We Work"
          sx={{
            width: '80%',
            maxWidth: 400,
            borderRadius: '50%',
            zIndex: 2,
            transform: 'translateX(200px)',
          }}
        />
      </Box>
    </Box>

    {/* --- MENU SECTION --- */}
    <Box sx={{ background: '#fff', pt: 8, pb: 10 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', mb: 1, fontFamily: 'Fredoka One' }}>
        Fast Food Menus
      </Typography>
      <Box sx={{ width: '150px', height: '4px', backgroundColor: '#FFD700', mx: 'auto', mb: 5, borderRadius: '2px' }} />

      <Grid container spacing={4} justifyContent="center" width="100%">
        {menuItems.map((item, i) => (
          <Grid key={i} item xs={12} sm={6} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <Box
                sx={{
                  backgroundColor: '#fff',
                  padding: 2,
                  borderRadius: 4,
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  justifyContent: { xs: 'center', sm: 'flex-start' },
                  alignItems: 'center',
                  gap: 2,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  textAlign: 'left',
                }}
              >
                <Box>
                  <Box
                    component="img"
                    src={item.img}
                    alt={item.title}
                    sx={{ width: 120, height: 120, borderRadius: '50%', p: 1 }}
                  />
                </Box>
                <Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#f14d54' }}>
                    {item.price}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}

        {/* Opening Times */}
        <Grid item xs={12} sm={6} md={6}>
          <Box sx={{ backgroundColor: '#FFD700', p: 3, borderRadius: 4, height: '100%' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 1 }}>
              OPENING TIMES
            </Typography>
            <Typography variant="body2">Mon: 17:00 to 23:00</Typography>
            <Typography variant="body2">Tue: 17:00 to 23:00</Typography>
            <Typography variant="body2" sx={{ mt: 2, color: '#f14d54' }}>
              +2341 567 891
            </Typography>
            <Typography variant="body2">Avenue New Town 13th United States</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

export default MenuSection;
