import React from 'react';
import { Box, Typography } from '@mui/material';
import { ImageAssets } from '../ImageAssets';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Review = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#fffff',
        py: { xs: 8, md: 10 },
        px: { xs: 2, md: 8 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box sx={{   maxWidth:'1200px',position: 'relative',display:'flex',justifyContent:'center' }}>
      
        <Box sx={{ width: { xs: '100%', md: '55%' }, zIndex: 2 }}>
          <Typography
            sx={{
              color: '#F3274C',
              fontWeight: 'bold',
              fontSize: '12px',
              mb: 2,
            }}
          >
            TESTIMONIALS & REVIEWS
          </Typography>
          <Typography
            sx={{
              fontWeight: 'bold',
              fontSize: '36px',
              lineHeight: 1.2,
              mb: 4,
            }}
          >
            Our Customar <br /> Feedbacks
          </Typography>

          <Box
            sx={{
              border: '3px solid #FFD700',
              borderRadius: '16px',
              padding: '20px',
              width: '50%',
              position: 'relative',
            }}
          >
            <Typography
              sx={{
                fontSize: '16px',
                color: '#333',
                mb: 2,
              }}
            >
              A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food. All great deeds and all great thoughts
            </Typography>
            <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
              Bratlee Hamint
            </Typography>

        
            <Box
              sx={{
                position: 'absolute',
                width: '30px',
                height: '30px',
                backgroundColor: '#FFD700',
                borderRadius: '50%',
                bottom: '-15px',
                right: '-15px',
              }}
            />
          </Box>
        </Box>

      
        <Box
          sx={{
            position: 'absolute',
            top: '20px',
            right: 250,
            display: { xs: 'none', md: 'block' },
            width: '65%',
            height: '100%',
            pointerEvents: 'none', 
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '150px',
              height: '150px',
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            <img
              src={ImageAssets.r1}
              alt="Coffee"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>

          <Box
            sx={{
              position: 'absolute',
              top: '100px',
              right: '70px',
            width: '150px',
              height: '150px',
              borderRadius: '20px',
              overflow: 'hidden',
              backgroundColor: '#F3274C',
              opacity: 0.9,
            }}
          >
            <img
              src={ImageAssets.r2}
              alt="Steak"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                mixBlendMode: 'multiply',
              }}
            />
          </Box>

          <Box
            sx={{
              position: 'absolute',
              top: '160px',
              right: -100,
              width: '150px',
              height: '150px',
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            <img
              src={ImageAssets.r3}
              alt="Dessert"
              style={{
                width: '100%',
                height: '100%',
                
                objectFit: 'cover',
              }}
            />
          </Box>
        </Box>
      </Box>
       <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '480px', sm: '600px', md: '710px' },
        overflow: 'hidden',
        mt: { xs: '56px', sm: '64px' },
      }}
    >hi</Box>
    </Box>
    
  );
};

export default Review;
