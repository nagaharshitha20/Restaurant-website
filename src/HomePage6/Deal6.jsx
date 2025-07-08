import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ImageAssets } from '../ImageAssets';
import NormalButton from '../Common/NormalButton';

const featuredItems = [
  { img: ImageAssets.i1, title: 'Delicious Classic Italian Pizza' },
  { img: ImageAssets.i2, title: 'Tasty Vegetable Hamburger' },
  { img: ImageAssets.i3, title: 'Roasted Chicken Drumsticks Italian Pizza' },
  { img: ImageAssets.i4, title: 'Roll Shaped Cigar Samosa' },
];

const Deal6 = () => {
  return (
    <>
      {/* Deal Section */}
      <Box sx={{ width: '100%', fontFamily: 'Oswald', }}>
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
              width: '60%',
              height: 'auto',
            }}
          />
          <Box
            sx={{
              zIndex: 1,
              maxWidth: '1000px',
              width: '40%',
              display: 'flex',
              flexDirection: 'column',
              ml: 0,
              justifyContent: 'center',
              backgroundColor: '#FFC222',
              px: 8,
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: '#fff', fontWeight: 700, mb: 1, fontFamily: 'Oswald' }}
            >
              Deal Of The Day
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '8vw', sm: '5vw', md: '3vw' },
                fontFamily: 'Oswald',
                lineHeight: 1.2,
                color: '#fff',
              }}
            >
              TODAY’S the<br />
              hamburger’ DAY
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '8vw', sm: '5vw', md: '1.3vw' },
                fontFamily: 'Oswald',
                lineHeight: 1.2,
                color: '#fff',
                mb: 4,
                mt: 4,
              }}
            >
              Special price<span style={{ fontSize: '2.5vw' }}> $55</span>
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: '#fff', mt: 3, fontFamily: 'Oswald', mb: 3 }}
            >
              Savor the perfect symphony of flavors It’s the perfect dining
              experience where Experience quick and efficient with our
              signature hamburger, a culinary
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <Button
                style={{
                  border: 'none',
                  padding: '20px 45px',
                  borderRadius: 0,
                  color: '#fff',
                  fontFamily: 'Oswald',
                }}
              >
                Order Now
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Featured Items - Image Left, Text Right */}
      <Box
        sx={{
          py: 8,
          backgroundColor: '#fff',
          px: { xs: 2, md: 10 },
          display: 'flex',
          flexDirection: 'row',
          gap: 6,
        }}
      >
        {featuredItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 3,
              maxWidth: '1000px',
              mx: 'auto',
            }}
          >
            {/* Left image */}
            <Box
              component="img"
              src={item.img}
              alt={item.title}
              sx={{
                width: { xs: '60%', sm: '140px' },
                height: '140px',
                objectFit: 'contain',
              }}
            />
            {/* Right text & button */}
            <Box sx={{  textAlign: 'left' }}>
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
                sx={{
                  fontWeight: 'bold',
                  fontSize: '14px',
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

      {/* Clients Testimonials */}
      <Box sx={{ textAlign: 'center', py: 2, background: '#fff' ,}}>
        <Box
          component="img"
          src={ImageAssets.client}
          alt="client"
          sx={{
            width: { xs: '90%', sm: '60%', md: '90%' },
            mx: 'auto',
            borderRadius: 2,
          }}
        />
      </Box>
      {/* <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',width:'500px'}}>
        <div style={{display:'flex',flexDirection:'row'}}>
            <Typography>Quality Food   <Box sx={{ mt: 1 }}>
                    {'★★★★★'.split('').map((star, idx) => (
                      <span
                        key={idx}
                        style={{ color: '#FFD40D', fontSize: '20px', fontFamily: 'Fredoka One' }}
                      >
                        {star}
                      </span>
                    ))}
                  </Box>
                  </Typography ></div>
        <Typography variant="body1"
          sx={{
            fontFamily: 'Oswald',
            fontSize: { xs: '3.5vw', sm: '2.5vw', md: '20px' },
            textAlign: 'left',
            mb: { xs: 3, sm: 2 },
            lineHeight: 1.5,
            maxWidth: '100%'}}>Nestled within a fresh, toasted bun, each bite unveils a
perfect harmony of textures, complemented by layers
of crisp lettuce, ripe tomatoes, and the crunch pickles
Our secret sauce proprietary blend savory</Typography>
<Typography>Richard D. Baker/ </Typography>
      </Box>
       */}
       {/* Testimonial Section */}
<Box sx={{ px: 20, py: 8, textAlign: 'left', backgroundColor: '#fff',justifyContent:'flex-start' }}>

  <Box
    sx={{
      maxWidth: 450,
    //   display:'flex',
    //   flexDirection:'column',
    //     justifyContent:'flex-start',
    //     alignItems:'center',
    //     textAlign:'left',
      bgcolor: '#fff',
      px: 4,
      py: 4,
      
    }}
  >
    <Typography
      sx={{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        fontFamily:'Oswald',
        mb: 3,
        ml:2,
        textAlign:'left',
        textTransform: 'uppercase',
      }}
    >
      Quality Food <span style={{ color: 'gold' }}>★★★★★</span>
    </Typography>

    <Typography
      sx={{
        fontSize: 20,
        fontWeight: 400,
        color: '#000',
        fontFamily: 'Oswald',
        lineHeight: 1.7,
        mb: 3,
      }}
    >
      Nestled within a fresh, toasted bun, each bite unveils a perfect harmony of textures,
      complemented by layers of crisp lettuce, ripe tomatoes, and the crunch pickles. <br />
      Our secret sauce proprietary blend savory
    </Typography>

    <Typography sx={{ fontWeight: 'bold', fontSize: 14, color: '#000',  fontFamily:'Oswald',ml:6 }}>
      Richard D. Baker <span style={{ fontWeight: 400 ,  fontFamily:'Oswald',}}>/ CEO & Founder</span>
    </Typography>

   
  </Box>
</Box>

    </>
  );
};

export default Deal6;
