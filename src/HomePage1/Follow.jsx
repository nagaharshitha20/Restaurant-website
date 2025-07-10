import * as React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { ImageAssets } from '../ImageAssets';

const Follow = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        mt: { xs: '56px', sm: '64px' },
      }}
    >
    
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

   
      <Box
        sx={{
          position: 'relative',
          backgroundColor: '#fff',
          py: { xs: 8, md: 10 },
          px: { xs: 2, sm: 4, md: 8 },
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Fredoka One',
            fontSize: { xs: '28px', sm: '32px', md: '36px' },
            mb: 1,
          }}
        >
          Recent News
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
            flexDirection: { xs: 'column', md: 'row' },
            gap: '40px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {[ImageAssets.img1, ImageAssets.img2].map((img, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'center', sm: 'center' },
                gap: '24px',
                maxWidth: '500px',
                width: '100%',
              }}
            >
              <Box
                component="img"
                src={img}
                alt={`img${index + 1}`}
                sx={{
                  width: '100%',
                  maxWidth: '250px',
                  borderRadius: '20px',
                  alignSelf: 'center',
                }}
              />
              <Box sx={{ textAlign: 'left' }}>
                <Box
                  sx={{
                    backgroundColor: '#FFD700',
                    display: 'inline-block',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: '5px',
                    fontFamily: 'Fredoka One',
                    fontSize: '14px',
                    mb: 1,
                  }}
                >
                  April 6, 2023
                </Box>
                <Typography
                  sx={{
                    fontFamily: 'Fredoka One',
                    fontSize: '20px',
                    mt: 1,
                  }}
                >
                  {index === 0 ? 'Creamy Chicken Alfredo' : 'Air Fryer Salmon'}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                  <Avatar
                    src={ImageAssets.cheif}
                    alt="William"
                    sx={{ width: 30, height: 30, mr: 1 }}
                  />
                  <Typography sx={{ fontFamily: 'Fredoka One', fontSize: '14px' }}>
                    Willimes Thomas
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        
        <Box
          sx={{
            mt: { xs: 8, md: 10 },
            position: 'relative',
            minHeight: { xs: '300px', md: '520px' },
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          
          <Box
            component="img"
            src={ImageAssets.followbg}
            alt="cover"
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.3,
              top: 0,
              left: 0,
              zIndex: 0,
            }}
          />

          
          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              textAlign: 'center',
              px: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '24px', sm: '32px', md: '40px' },
                fontFamily: 'Fredoka One',
                color: '#000',
              }}
            >
              Follow @shawonetc3
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '14px', sm: '16px', md: '18px' },
                fontFamily: 'Epilogue',
                color: '#000',
              }}
            >
              Join our community to inspire your desires
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Follow;
