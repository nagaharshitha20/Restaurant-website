import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { ImageAssets } from '../ImageAssets';
import { useNavigate } from 'react-router-dom';

const categoryItems = [
  { img: ImageAssets.food1, title: 'Pizzas', subtitle: '12 Dishes in the Menu' },
  { img: ImageAssets.food2, title: 'Burgers', subtitle: '04 Dishes in the Menu' },
  { img: ImageAssets.food3, title: 'Fried Chicken', subtitle: '12 Dishes in the Menu' },
  { img: ImageAssets.food4, title: 'Desserts', subtitle: '12 Dishes in the Menu' },
];

const About3 = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (title) => {
    const encodedTitle = encodeURIComponent(title);
    navigate(`/shop?category=${encodedTitle}`);
  };

  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 0 }}>
      <Typography
        sx={{
          color: '#F3274C',
          textAlign: 'center',
          fontSize: '12px',
          mb: 1,
          fontFamily: 'Fredoka One',
        }}
      >
        ABOUT THE FOOD RESTAURANT
      </Typography>

      <Typography
        sx={{
          fontFamily: 'Fredoka One',
          textAlign: 'center',
          fontSize: { xs: 24, md: 32 },
          mb: 6,
        }}
      >
        Perfect Place For An Exceptional Experience
      </Typography>

      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        display="flex"
        flexDirection="row"
      >
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Box
            component="img"
            src={ImageAssets.twoinone}
            sx={{
              width: { xs: '250px', sm: '200px', md: '500px' },
              objectFit: 'cover',
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontSize: 14,
              color: '#444',
              lineHeight: 1.8,
              mb: 5,
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

      <Typography
        sx={{
          fontFamily: 'Fredoka One',
          textAlign: 'center',
          fontSize: { xs: 24, md: 32 },
          mt: 10,
          mb: 1,
        }}
      >
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

      <Grid container spacing={1} justifyContent="center" width="100%">
        {categoryItems.map((item, i) => (
          <Grid key={i} item xs={6} sm={6} md={4} lg={2.5}>
            <Box sx={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => handleCategoryClick(item.title)}>
              <Box
                component="img"
                src={item.img}
                alt={item.title}
                sx={{
                  width: { xs: '60%', sm: '60%', md: '80%' },
                  borderRadius: '180px',
                  border: '3px solid #fff',
                  boxShadow: '0px 5px 15px rgba(0,0,0,0.1)',
                }}
              />
              <Typography sx={{ fontFamily: 'Fredoka One', mt: 1 }}>{item.title}</Typography>
              <Typography
                sx={{
                  fontSize: { xs: 10, sm: 13 },
                  color: '#F3274C',
                  fontFamily: 'Fredoka One',
                }}
              >
                {item.subtitle}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About3;
