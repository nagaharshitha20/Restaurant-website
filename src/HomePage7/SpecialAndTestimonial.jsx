import React from 'react';
import { Box, Typography } from '@mui/material';
import { ImageAssets } from '../ImageAssets';
import ExploreButton from '../Common/ExploreButton';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const SpecialAndTestimonial = () => {
   return ( <>
    <Box sx={{ width: '100%', px: { xs: 2, md: 0 }, py: { xs: 6, md: 10 }, bgcolor: '#fff',mx:'auto'
 }}>
     
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
        //   mx:'auto',

          gap: 4,
          mb: 30,
        }}
      >
      
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ fontFamily: 'Playball', color: '#008000', fontSize: 22, mb: 1 }}>
            Special Offer
          </Typography>
          <Typography sx={{ fontWeight: 600, fontSize: 20, mb: 1 }}>
            Burgers With Onion Dip and Potato Chips
          </Typography>
          <Typography sx={{ fontSize: 12, color: '#555', mb: 2 }}>
            Per Serving: 510 calories, 26g fat, 16g cholesterol, 810mg sodium,
            23g protein, 35g carbs, 5g sugar. High in calcium & fiber.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <ExploreButton name="Order Now" />
            <Typography sx={{ fontWeight: 700, fontSize: 20, color: '#EF1B48' }}>
              $12.99{' '}
              <Typography
                component="span"
                sx={{
                  fontSize: 14,
                  textDecoration: 'line-through',
                  color: '#999',
                  ml: 1,
                }}
              >
                $25.00
              </Typography>
            </Typography>
          </Box>
        </Box>

        
     <Box
  sx={{
    flex: 1,
    position: 'relative',
    height: 450,
    width:'100%',
    backgroundImage: `url(${ImageAssets.yellowbg})`,
    backgroundSize: 'cover',
     borderTopLeftRadius:'20px',
    // backgroundPosition: '',
    borderRadius:'30px',
    // borderTopLeftRadius: '20px',
    // borderBottomLeftRadius: '50px',
    // display:'flex',
    

  }}
>
         
          <Box
            component="img"
            src={ImageAssets.combo}
            alt="Combo"
            sx={{
              position: 'absolute',
              right: '260px',
              bottom: '20px',
              width: { xs: '220px', md: '470px' },
              zIndex: 2,
            }}
          />

      
          <Box
            component="img"
            src={ImageAssets.y1}
            alt="50 Off"
            sx={{
              position: 'absolute',
              top: '20px',
              left: '-80px',
              width: 100,
            }}
          />

       
          <Box
            component="img"
            src={ImageAssets.y2}
            alt="Free Delivery"
            sx={{
              position: 'absolute',
              top: '100px',
              right: '180px',
              width: 100,
            }}
          />
        </Box>
      </Box>

      
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
         
          gap: 4,
          mb: 6,
        }}
      >
     
        <Box
          sx={{
            flex: 1,
            backgroundImage: `url(${ImageAssets.greybg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: 400,
            width:'80%',
            borderTopRightRadius:'30px',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
          }}
        >
          <Box
            component="img"
            src={ImageAssets.family}
            alt="Family"
            sx={{
              width: { xs: '80%', md: '55%' },
            
            }}
          />
        </Box>

      
        <Box sx={{ flex: 1, px: { xs: 2, md: 4 }, textAlign: { xs: 'center', md: 'center' } }}>
        
          <Typography sx={{ fontFamily: 'Playball', color: '#008000', fontSize: 22, mb: 1 }}>
            Testimonial
          </Typography>
          <Typography sx={{ fontWeight: 600, fontSize: 20, mb: 2 }}>
            Customer Say About Us
          </Typography>
          <Typography sx={{ fontSize: 14, color: '#555', mb: 2 }}>
             <FormatQuoteIcon sx={{ fontSize: 40, color: '#ccc', mb: -2 }} /> Customer service is really fast, and this developer makes great quality themes!
            I would recommend this theme for all Shopify platforms.
          </Typography>

          {/* Stars */}
          <Box sx={{ display: 'flex', gap: 0.5, justifyContent: { xs: 'center', md: 'center' }, mb: 1 }}>
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} fontSize="small" sx={{ color: '#FFD700' }} />
            ))}
          </Box>

          <Typography sx={{ fontSize: 14, fontStyle: 'italic' }}>
            Customer – From Envato
          </Typography>
        </Box>
      </Box>
    </Box>
   </>
  );
};

export default SpecialAndTestimonial;
