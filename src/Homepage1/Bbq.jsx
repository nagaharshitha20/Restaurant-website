import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { ImageAssets } from '../ImageAssets';

const categories = [
  { label: 'Dessert', img: ImageAssets.dessert, active: true },
  { label: 'Steak', img: ImageAssets.steak },
  { label: 'Coffee', img: ImageAssets.coffee },
  { label: 'Burger', img: ImageAssets.burger },
];

const bbqItems = [
  {
    title: 'Sake BBQ sauce',
    desc: 'radish, black sesame seeds, coriander',
    price: '$9.00',
  },
  {
    title: 'BBQ baby back ribs',
    desc: 'sticky Asian glaze, charred lime, chilli cashews',
    price: '$16.00',
  },
  {
    title: 'Half smoked chicken',
    desc: 'miso butter glaze, charred lime wedge, sake bbq',
    price: '$34.00',
  },
  {
    title: 'Dusted chicken wings',
    desc: 'tossed in Korean hot sauce, pickled radish',
    price: '$40.00',
  },
];

const Bbq = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '90%',
        mt: { xs: '56px', sm: '64px' },
        px: { xs: 2, sm: 4, md: 6, lg: 8 },
        py: { xs: 4, md: 6 },
      }}
    >
      {/* Category Selector */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 3,
          flexWrap: 'wrap',
          mb: 5,
        }}
      >
        {categories.map((item, idx) => (
          <Box
            key={idx}
            sx={{
              textAlign: 'center',
              borderRadius: '12px',
              px: 3,
              py: 2,
              width: { xs: '40px', sm: '80px' },
              height: { xs: '70px', sm: '120px' },
              backgroundColor: item.active ? '#F3274C' : '#fff',
              border: item.active ? 'none' : '2px solid #ccc',
              boxShadow: item.active ? '0px 4px 12px rgba(0,0,0,0.1)' : 'none',
              transition: 'all 0.3s ease',
            }}
          >
            <Box
              component="img"
              src={item.img}
              alt={item.label}
              sx={{ width: '40px', height: '40px', 
                mb: {xs:0.5,sm:1},
                 mt: {xs:1,sm:2} }}
            />
            <Typography
              sx={{
                color: item.active ? '#fff' : '#000',
                fontFamily: 'Fredoka One',
                fontSize: { xs: '12px', sm: '16px' },
              
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* BBQ Content Section */}
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{
          flexDirection: {
            xs: 'column',
            md: 'column',
            lg: 'row', // keep row only for lg and up
          },
        }}
      >
        {/* Image Section */}
        <Grid item xs={12} md={12} lg={5}>
          <Box
            component="img"
            src={ImageAssets.grillchicken}
            alt="Grilled Chicken"
            sx={{
              width: {
                xs: '100%',
                sm: '420px',
                md: '450px',
                lg: '450px',
              },
              height: {
                xs: 'auto',
                md: 'auto',
                lg: '358.69px',
              },
              borderRadius: '12px',
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
            }}
          />
        </Grid>

        {/* BBQ Box */}
        <Grid item xs={12} md={12} lg={6}>
          <Box
            sx={{
              backgroundColor: '#f8fbff',
              borderRadius: '20px',
              width: '90%',
              maxWidth: { xs: '100%', lg: '600px' },
              mx: 'auto',
              p: { xs: 3, md: 4, lg: 5 },
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '20px', md: '24px' },
                mb: 2,
                fontFamily: 'Fredoka One',
                textAlign: { xs: 'center', md: 'left' },
                ml: { xs: 0, lg: 20 },
              }}
            >
              BBQ
            </Typography>

            {bbqItems.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  borderBottom: '1px dashed #ccc',
                  pb: 2,
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
