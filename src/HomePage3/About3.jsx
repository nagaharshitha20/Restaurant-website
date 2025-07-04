import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { ImageAssets } from '../ImageAssets';

const topTextItems = [
  {
    icon: '🍽️',
    title: 'Online Food Ordering',
    desc: 'Easy food delivery from the best restaurants.',
  },
  {
    icon: '🥗',
    title: '100% Healthy Food',
    desc: 'Eating a wide variety of nutritious Healthy foods.',
  },
];

const categoryItems = [
  { img: ImageAssets.food1, title: 'Organic Food', subtitle: '12 Dishes in the Menu' },
  { img: ImageAssets.food2, title: 'Zinger Burgers', subtitle: '04 Dishes in the Menu' },
  { img: ImageAssets.food3, title: 'Grill Food', subtitle: '12 Dishes in the Menu' },
  { img: ImageAssets.food4, title: 'Bar B Q', subtitle: '12 Dishes in the Menu' },
];

const About3 = () => (
  <Box sx={{ px: { xs: 2, md: 10 }, py: 8 }}>
    {/* Top Section */}
    <Typography sx={{ color: '#F3274C', textAlign: 'center', fontSize: '12px', mb: 1 ,fontFamily: 'Fredoka One'}}>
      ABOUT THE FOOD RESTAURANT
    </Typography>
    <Typography sx={{ fontFamily: 'Fredoka One', textAlign: 'center', fontSize: { xs: 24, md: 32 }, mb: 6 }}>
      Perfect Place For An Exceptional Experience
    </Typography>

   <Grid container spacing={4} alignItems="center" justifyContent="center">
  {/* LEFT - Circular Images */}
  <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
    <Box
      component="img"
      src={ImageAssets.twoinone}
      sx={{
        width: { xs: '150px', sm: '200px', md: '500px' },
       
        objectFit: 'cover',
       
      }}
    />
  </Grid>

  {/* RIGHT - Paragraph + Feature Items */}
  <Grid item xs={12} md={6}>
    <Typography
      sx={{
        fontSize: 14,
        color: '#444',
        lineHeight: 1.8,
        mb: 3,
        maxWidth: 400,
      }}
    >
      Nisl quam nestibulum ac quam nec odio elementu sceisue the aucan ligula.
      Orci varius natoque pena culus mus nellentesque ha um ac quam nec odio
      aibulum ac quam nec odio elrbine.
    </Typography>

    {[
      {
        icon: '🍴',
        title: 'Online Food Ordering',
        desc: 'Easy food delivery from the best restaurants.',
      },
      {
        icon: '🥗',
        title: '100% Healthy Food',
        desc: 'Eating a wide variety of nutritious Healthy foods.',
      },
    ].map((item, i) => (
      <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
        <Box
          sx={{
            backgroundColor: '#FFD700',
            width: 40,
            height: 40,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
            mr: 2,
          }}
        >
          {item.icon}
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 700, fontSize: 16 }}>{item.title}</Typography>
          <Typography sx={{ fontSize: 13, color: '#666' }}>{item.desc}</Typography>
        </Box>
      </Box>
    ))}
  </Grid>
</Grid>


    {/* Choose a Category Section */}
    <Typography sx={{ fontFamily: 'Fredoka One', textAlign: 'center', fontSize: { xs: 24, md: 32 }, mt: 10, mb:1 }}>
      Choose a Category
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
    <Grid container spacing={1} justifyContent="center">
      {categoryItems.map((item, i) => (
        <Grid key={i} item xs={6} sm={4} md={2.5}>
          <Box sx={{ textAlign: 'center' }}>
          
            <Box
              component="img"
              src={item.img}
              alt={item.title}
              sx={{
                width: '80%',
                borderRadius: '180px',
                border: '3px solid #fff',
                boxShadow: '0px 5px 15px rgba(0,0,0,0.1)',
              }}
            />
            <Typography sx={{ fontFamily: 'Fredoka One', mt: 1 }}>{item.title}</Typography>
            <Typography sx={{ fontSize: 13, color: '#F3274C', fontFamily: 'Fredoka One' }}>{item.subtitle}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default About3;
