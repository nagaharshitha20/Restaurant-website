import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { ImageAssets } from '../ImageAssets';
const styles = {
  bbqimages: {
    width: '405px',
    height: '220px',
    '& img': {
      width: '100%',
      height: '100%',
      borderRadius: '20px',
      objectFit: 'cover',
      display: 'block',
    },
  },
};
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

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '14px',
  outline: 'none',
  boxSizing: 'border-box',
};


const Bbq = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '480px', sm: '600px', md: '710px' },
        overflow: 'hidden',
        mt: { xs: '56px', sm: '64px' },
        px: { xs: 2, md: 8 },
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
              width: '80px',
              height: '120px',
              backgroundColor: item.active ? '#F3274C' : '#fff',
              border: item.active ? 'none' : '2px solid #ccc',
              boxShadow: item.active ? '0px 4px 12px rgba(0,0,0,0.1)' : 'none',
              minWidth: 100,
              transition: 'all 0.3s ease',
            }}
          >
            <Box
              component="img"
              src={item.img}
              alt={item.label}
              sx={{ width: '40px', height: '40px', mb: 1, mt: 2 }}
            />
            <Typography
              sx={{
                color: item.active ? '#fff' : '#000',
                fontWeight: 600,
              }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* BBQ Info Section */}
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src={ImageAssets.grillchicken}
            alt="Grilled Chicken"
            sx={{
              width: '450px',
              height: '358.69px',
              borderRadius: '12px',
              position: 'relative',
              left: '230px',
              marginLeft: '-290px',
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: '#f8fbff',
              borderRadius: '20px',
              width: '600px',
              p: { xs: 3, md: 5 },
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            }}
          >
            <Typography
              sx={{
                fontSize: '24px',
                fontWeight: 'bold',
                mb: 2,
                fontFamily: 'Arial',
                ml: 20,
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
                  ml: 20,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                  }}
                >
                  <Typography sx={{ fontWeight: 'bold', fontSize: '16px' }}>
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#F3274C',
                      fontWeight: 'bold',
                      fontFamily: 'Arial',
                    }}
                  >
                    {item.price}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: '14px',
                    color: '#666',
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

      
{/* <Box
  sx={{
    backgroundColor: '#F5F8FD',
    width: '100%',
    height:'710px',

  mt:-20,
    py: { xs: 8, md: 10 },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }}
></Box> */}
{/* Red background reservation box with inputs on right */}

      </Box>
   
  );
};

export default Bbq;
