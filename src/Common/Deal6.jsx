import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ImageAssets } from '../ImageAssets';
import { useNavigate } from 'react-router-dom';

const featuredItems = [
  { img: ImageAssets.i1, title: 'Delicious Classic Italian Pizza' },
  { img: ImageAssets.i2, title: 'Tasty Vegetable Hamburger' },
  { img: ImageAssets.i3, title: 'Roasted Chicken Drumsticks Italian Pizza' },
  { img: ImageAssets.i4, title: 'Roll Shaped Cigar Samosa' },
];

const Deal6 = () => {
  const navigate=useNavigate();
  return (
    <>
      {/* Deal Section */}
      <Box sx={{ width: '100%', fontFamily: 'Oswald' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            width: '100%',
            minHeight: { xs: 'auto', md: '100vh' },
          }}
        >
          <Box
            component="img"
            src={ImageAssets.starter}
            alt="Popular Dishes"
            sx={{
              width: { xs: '100%', md: '60%' },
              height: 'auto',
              objectFit: 'cover',
            }}
          />
          <Box
            sx={{
              width: { xs: '100%', md: '40%' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: '#FFC222',
              px: { xs: 3, sm: 6, md: 8 },
              py: { xs: 4, md: 0 },
            }}
          >
            <Typography variant="body2" sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>
              Deal Of The Day
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '9vw', sm: '6vw', md: '3vw' },
                lineHeight: 1.2,
                color: '#fff',
              }}
            >
              TODAY’S the<br /> hamburger’ DAY
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '6vw', sm: '4vw', md: '1.3vw' },
                mt: 3,
                mb: 4,
                color: '#fff',
              }}
            >
              Special price <span style={{ fontSize: '2.5vw' }}>$55</span>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#fff',
                mb: 3,
                fontSize: { xs: 14, sm: 16 },
              }}
            >
              Savor the perfect symphony of flavors. Experience quick and efficient service with our signature hamburger — a true culinary masterpiece.
            </Typography>
            <Button
               onClick={()=>{navigate('/shop')}}
              sx={{
                backgroundColor: '#000',
                color: '#fff',
                borderRadius: 0,
                px: 5,
                py: 2,
                fontFamily: 'Oswald',
                fontWeight: 600,
                width: 'fit-content',
                '&:hover': { backgroundColor: '#222' },
              }}
            >
              Order Now
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Featured Items */}
      <Box
        sx={{
          py: 8,
          px: { xs: 2, sm: 4, md: 10 },
          display: 'flex',
          flexDirection: {xs:'column',md:'row'},
          gap: 6,
          backgroundColor: '#fff',
        }}
      >
        {featuredItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: 3,
              mx: 'auto',
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src={item.img}
              alt={item.title}
              sx={{
                width: { xs: '80%', sm: '140px' },
                height: '140px',
                objectFit: 'contain',
              }}
            />
            {/* Text */}
            <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: 18, sm: 20 },
                  fontFamily: 'Oswald',
                  mb: 1,
                }}
              >
                {item.title}
              </Typography>
              <Button
              onClick={()=>{navigate('/products')}}
                sx={{
                  fontWeight: 'bold',
                  fontSize: 14,
                  textTransform: 'none',
                  fontFamily: 'Oswald',
                  color: '#000',
                }}
              >
                Order Now →
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Client Testimonials */}
      <Box sx={{ textAlign: 'center', py: 4, background: '#fff' }}>
        <Box
          component="img"
          src={ImageAssets.client}
          alt="client"
          sx={{
            width: { xs: '90%', sm: '70%', md: '85%' },
            mx: 'auto',
            borderRadius: 2,
          }}
        />
      </Box>

      {/* Testimonial Text Section */}
      <Box
        sx={{
          px: { xs: 3, sm: 6, md: 20 },
          py: 8,
          backgroundColor: '#fff',
        }}
      >
        <Box sx={{ maxWidth: 600, mx: 'auto' }}>
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 'bold',
              color: '#000',
              fontFamily: 'Oswald',
              mb: 3,
              textTransform: 'uppercase',
            }}
          >
            Quality Food <span style={{ color: 'gold' }}>★★★★★</span>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: 16, sm: 18, md: 20 },
              fontWeight: 400,
              color: '#000',
              fontFamily: 'Oswald',
              lineHeight: 1.7,
              mb: 3,
            }}
          >
            Nestled within a fresh, toasted bun, each bite unveils a perfect harmony of textures,
            complemented by layers of crisp lettuce, ripe tomatoes, and crunchy pickles.
            <br />
            Our secret sauce is a proprietary savory blend that makes it unforgettable.
          </Typography>

          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: 14,
              color: '#000',
              fontFamily: 'Oswald',
            }}
          >
            Richard D. Baker <span style={{ fontWeight: 400 }}>/ CEO & Founder</span>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Deal6;
