import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PrimaryButton from '../Common/PrimaryButton';
import { ImageAssets } from '../ImageAssets';
import TextField from '@mui/material/TextField';

const CoverPage2 = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '25vh', sm: '60vh', md: '100vh' },
        overflow: 'hidden',
        margin: { xs: 1.3, sm: 2.5,md:0 },
        mt: { xs: '66px', sm: '64px' },
      }}
    >
   
      <Box
        component="img"
        src={ImageAssets.cover2}
        alt="cover"
        sx={{
          width: { xs: '95%', md: '100%' },
          height: { xs: '25vh', sm: '60vh', md: '100vh' },
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          borderRadius: { xs: '30px', sm: '30px', md: 0 },
          zIndex: 0,
        }}
      />

     
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          px: { xs: 3 },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: 4, lg: 4 },
            maxWidth: '1100px',
            width: '100%',
          }}
        >
       
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              textAlign: { xs: 'left', sm: 'left' },
              mt: { xs: 2, sm: 6, md: 15 },
              width: '100%',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '5.5vw', sm: '5.5vw', md: '48px' },
                fontFamily: 'Fredoka One',
                mb: 2,
                lineHeight: 1.4,
              }}
            >
              Best Food for <br />
              <span
                style={{
                  backgroundColor: '#FFD40D',
                  padding: '4px 15px',
                  marginLeft: '-16px',
                  borderRadius: '100px',
                }}
              >
                Best Restaurants
              </span>
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '3.5vw', sm: '2.3vw', md: '16px' },
                color: '#555555',
                mb: { xs: 1, sm: 3 },
                fontFamily: 'Fredoka One',
                lineHeight: 1.4,
              }}
            >
              ARRIVING FROM PARIS IN 1986
            </Typography>

           
            <Box
              sx={{
                display: { xs: 'none', sm: 'flex' },
                flexDirection: 'column',
                gap: 2,
                width:{xs:'80%',md:'100%'}
              }}
            >
              <TextField
                placeholder="No of Guest"
                size="small"
                variant="outlined"
                fullWidth
                sx={{ backgroundColor: '#fff', borderRadius: '6px' }}
              />

              <Box sx={{ display: 'flex', gap: 2}}>
                <TextField
                  placeholder="Date"
                  size="small"
                  variant="outlined"
                  fullWidth
                  sx={{ backgroundColor: '#fff', borderRadius: '6px' }}
                />
                <TextField
                  placeholder="Time"
                  size="small"
                  variant="outlined"
                  fullWidth
                  sx={{ backgroundColor: '#fff', borderRadius: '6px' }}
                />
              </Box>
            </Box>

        
            <Box sx={{ mt: { xs: 0, sm: 2 } }}>
              <PrimaryButton
                name="Reserve a Table"
                onClick={() => console.log('Reserve button clicked')}
              />
            </Box>
          </Box>

          
          <Box
            sx={{
              display: { xs: 'none', lg: 'flex' }, 
              flexDirection: 'row',
              gap: 5,
              alignItems: 'center',
              mt: { sm: 4, lg: 0 },
              position: 'relative',
            }}
          >
            <Box
              component="img"
              src={ImageAssets.carrot}
              alt="carrot"
              sx={{
                width: { sm: '150px', md: '180px' },
                height: '300px',
                borderRadius: '180px',
                objectFit: 'cover',
              }}
            />

            <Box sx={{ position: 'relative', mt: '160px' }}>
              <Box
                component="img"
                src={ImageAssets.sidedish}
                alt="sidedish"
                sx={{
                  width: { sm: '150px', md: '180px' },
                  height: '300px',
                  borderRadius: '180px',
                  objectFit: 'cover',
                }}
              />

              <Box
                component="img"
                src={ImageAssets.freedel}
                alt="Free Delivery"
                sx={{
                  position: 'absolute',
                  top: '-130px',
                  right: '-30px',
                  width: { sm: '80px', md: '230px' },
                  height: 'auto',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CoverPage2;
