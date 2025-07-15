import React from 'react';
import { Box, Typography } from '@mui/material';
import { ImageAssets } from '../ImageAssets';
const chefs = [
  {
    role: 'Dessert specialist',
    name: 'Thomas Walim',
    image: ImageAssets.Thomas,
  },
  {
    role: 'Chef Master',
    name: 'James Jhonson',
    image: ImageAssets.james,
  },
  {
    role: 'Dessert specialist',
    name: 'Room Minal',
    image: ImageAssets.Minal,
  },
];


const Review = () => {
  return (
    <Box
      sx={{
        width: '100%',
        overflowX: 'hidden', 
        backgroundColor: '#ffffff',
        py: { xs: 8, md: 10 },
        // px: { xs: 2, md: 8 },
        mx:'auto',
      }}
    >
      <Box
        sx={{
          maxWidth: {lg:'1200px'},
          // mx: 'auto',
          display: 'flex',
           px: { xs: 6, md: 8 },
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: {sm:'center',md:'space-between',lg:'space-around'},
          alignItems: 'center',
          position: 'relative',
        }}
      >
        
        <Box sx={{ width: { xs: '100%', md: '55%' }, zIndex: 2, }}>
          <Typography
            sx={{
              color: '#F3274C',
              fontFamily: 'Fredoka One',
              fontSize: '12px',
              mb: 2,
            }}
          >
            TESTIMONIALS & REVIEWS
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Fredoka One',
              fontSize: '36px',
              lineHeight: 1.2,
              mb: 4,
            }}
          >
            Our Customer <br /> Feedbacks
          </Typography>

          <Box
            sx={{
              border: '3px solid #FFD700',
              borderRadius: '16px',
              padding: '20px',
              width: { xs: '80%', sm: '80%', md: '70%', lg: '50%' },
              position: 'relative',
              backgroundColor: '#fff',
            }}
          >
            <Typography
              sx={{
                fontSize: '16px',
                color: '#333',
                fontFamily: 'Epilogue',
                mb: 2,
              }}
            >
              A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food. All great deeds and all great thoughts
            </Typography>
            <Typography sx={{ fontFamily: 'Fredoka One', fontSize: '14px' }}>
              Bratlee Hamint
            </Typography>

            <Box
              sx={{
                position: 'absolute',
                width: '50px',
                height: '50px',
                backgroundColor: '#FFD700',
                borderRadius: '50%',
                bottom: '7px',
                right: '7px',
              }}
            />
          </Box>
        </Box>

        
        <Box
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block' },
            position: 'absolute',
            top: '20px',
            right: 200,
            width: '65%',
            height: '100%',
            pointerEvents: 'none',
          }}
        >
         
          <Box
            sx={{
              position: 'absolute',
              top: -40,
              right: -60,
              width: '180px',
              height: '180px',
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
              right: '80px',
              width: '180px',
              height: '180px',
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
              right: -120,
              width: '180px',
              height: '180px',
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
        width: {xs:'100%', sm: '100%', md: '90%',lg:'90%'},
        minHeight: { xs: '480px', sm: '600px', md: '710px' },
        overflow: 'hidden',
        mx:'auto',
        mt: { xs: '56px', sm: '64px' },
      }}
    ><Box
      sx={{
        backgroundColor: '#fff',
        py: { xs: 8, md: 10 },
        // px: { xs: 2, md: 8 },
     
        textAlign: 'center',
      }}
    >
      <Typography
        sx={{
         fontFamily: 'Fredoka One',
          fontSize: '36px',
          mb: 0.5,
        }}
      >
        Meet Our Experts
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

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: { xs: 2, md: 4 },
          flexWrap: 'wrap',
        }}
      >
        {chefs.map((chef, idx) => (
          <Box
            key={idx}
            sx={{
              position: 'relative',
              width: '280px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
         
            <Box
              component="img"
              src={chef.image}
              alt={chef.name}
              sx={{
                height: '280px',
                objectFit: 'contain',
                zIndex: 1,
              }}
            />

           
            <Box
              sx={{
                mt: -6,
                width: '200px',
                height: '220px',
                backgroundColor: '#fff',
                borderRadius: '50%',
                border: '2px solid #ddd',
                zIndex: 2,
                boxShadow: '0px 2px 6px rgba(0,0,0,0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position:'relative',
                px: 2,
                textAlign: 'center',
              }}
            >
              <Typography sx={{ color: '#F3274C', fontFamily: 'Fredoka One', fontSize: '12px' }}>
                {chef.role}
              </Typography>
              <Typography sx={{ fontFamily: 'Fredoka One', fontSize: '18px', mt: 1 }}>
                {chef.name}
              </Typography>

           
              <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                <Box
                  sx={{
                    width: '30px',
                    height: '30px',
                    backgroundColor: '#f1f1f1',
                    borderRadius: '50%',
                  }}
                />
                <Box
                  sx={{
                   width: '30px',
                    height: '30px',
                    backgroundColor: '#f1f1f1',
                    borderRadius: '50%',
                  }}
                />
                <Box
                  sx={{
                    width: '30px',
                    height: '30px',
                    backgroundColor: '#f1f1f1',
                    borderRadius: '50%',
                  }}
                />
              </Box>

             
              <Box component="img" 
              src={ImageAssets.sign}
              sx={{width:'40%',mt:2}}/>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
    </Box> 
    </Box>
  );
};

export default Review;

