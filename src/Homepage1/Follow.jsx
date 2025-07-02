import * as React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { ImageAssets } from '../ImageAssets';


const Follow = () => {
  return (
    <Box
      sx={{
        position: 'relative',
       width: '100%',
        minHeight: { xs: '480px', sm: '600px', md: '710px' },
        overflow: 'hidden',
        mt: { xs: '56px', sm: '64px' },
      }}
    >
      {/* Background Box */}
      <Box
        sx={{
          width: '100%',
          height: '100%',
          backgroundColor: 'white',
          position: 'absolute',
          // marginBottom:'40px',
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      />

      {/* Content Section */}
      <Box
        sx={{
          backgroundColor: '#fff',
          py: { xs: 8, md: 10 },
          px: { xs: 2, md: 8 },
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: '36px',
            mb: 0.5,
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

        {/* Cards */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '40px',
           justifyContent: 'center',
         
          }}
        >
          {/* Card 1 */}
          <Box
            sx={{
              display: 'flex',
              gap: '30px',
              alignItems: 'center',
              width: '50%',
              maxWidth: '500px',
            }}
          >
            <Box
              component="img"
              src={ImageAssets.img1}
              alt="img1"
              sx={{
                width: '250px',
                height: 'auto',
                borderRadius: '20px',
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
                  fontWeight: 600,
                  fontSize: '14px',
                  mb: 1,
                }}
              >
                April 6, 2023
              </Box>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: '20px',
                  mt: 1,
                }}
              >
                Creamy Chicken Alfredo
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <Avatar
                  src={ImageAssets.cheif}
                  alt="William"
                  sx={{ width: 30, height: 30, mr: 1 }}
                />
                <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                  Willimes Thomas
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Card 2 */}
          <Box
            sx={{
              display: 'flex',
              gap: '30px',
              alignItems: 'center',
              width: '50%',
              maxWidth: '500px',
            }}
          >
            <Box
              component="img"
              src={ImageAssets.img2}
              alt="img2"
              sx={{
                width: '250px',
                height: 'auto',
                borderRadius: '20px',
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
                  fontWeight: 600,
                  fontSize: '14px',
                  mb: 1,
                }}
              >
                April 6, 2023
              </Box>
              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: '20px',
                  mt: 1,
                }}
              >
                Air Fryer Salmon
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                <Avatar
                  src={ImageAssets.cheif}
                  alt="William"
                  sx={{ width: 30, height: 30, mr: 1 }}
                />
                <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                  Willimes Thomas
                </Typography>
              </Box>
              
            </Box>
            
          </Box>
          
        </Box>
            <Box
             sx={{
               position: 'relative',
               width: '100%',
               
               minHeight: { xs: '480px', sm: '600px', md: '520px', },
               overflow: 'hidden',
               mt: { xs: '56px', sm: '64px' },
                display:'flex',
              justifyContent:'center',
              alignItems:'center',
             }}
           >
             
             <Box
               component="img"
               src={ImageAssets.followbg}
               alt="cover"
               sx={{
                 width: '100%',
                 height: '704px',
                 objectFit: 'cover',
                 opacity:'30%',
                 position: 'absolute',
              
                 top: 0,
                 left: 0,
                 zIndex: 0,
                 height:{
                   xs:'300px',
                   sm:'100%',
                   md:'100%',
                   lg:'100%',
                 }
               }}
             />
             <Typography  style={{fontSize:'40px',fontWeight:'bold'
           }}>Follow @shawonetc3
           <div style={{fontSize:'18px'}}>Join our community to inspire your desires</div></Typography>
           
      </Box>
      </Box>
    
    </Box>
  );
};

export default Follow;
