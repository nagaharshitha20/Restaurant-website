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
        minHeight: { xs: '480px', sm: '600px', md: '710px' },
        overflow: 'hidden',
        mt: { xs: '56px', sm: '64px' },
      }}
    >
     
      <Box
        component="img"
        src={ImageAssets.cover2}
        alt="cover"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0,
          height: { xs: '300px', sm: '100%', md: '100%', lg: '100%' },
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
          px: { xs: 2,  },
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
          <Box sx={{ flex: 1 ,display: 'flex',flexDirection:'column', justifyContent:'center', alignItems: 'center', textAlign: 'left',mt:15}}>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '24px', sm: '36px', md: '48px' },
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
                fontSize: { xs: '14px', sm: '18px', md: '16px' },
                color: '#555555',
                mb: { xs: 2, sm: 3 },
                fontFamily: 'Fredoka One',
               marginLeft: '-156px',
                lineHeight: 1.4,
              }}
            >
              ARRIVING FROM PARIS IN 1986
            </Typography>

         
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                placeholder="No of Guest"
                size="small"
                variant="outlined"
                fullWidth
                sx={{ backgroundColor: '#fff', borderRadius: '6px' }}
              />

              <Box sx={{ display: 'flex', gap: 2 }}>
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

              <Box sx={{ mt: 1 }}>
                <PrimaryButton
                  name="Reserve a Table"
                  onClick={() => console.log('Reserve button clicked')}
                />
              </Box>
            </Box>
          </Box>

         
          <Box
  sx={{
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    mt: { xs: 4, lg: 0 },
    position: 'relative',
  }}
>
  <Box
    component="img"
    src={ImageAssets.carrot}
    alt="carrot"
    sx={{
      width: { xs: '120px', sm: '150px', md: '180px' },
      height: '300px',
      borderRadius: '180px',
      objectFit: 'cover',
    }}
  />

  {/* Container with badge overlay */}
  <Box sx={{ position: 'relative', mt: '160px' }}>
    <Box
      component="img"
      src={ImageAssets.sidedish}
      alt="sidedish"
      sx={{
        width: { xs: '120px', sm: '150px', md: '180px' },
        height: '300px',
        borderRadius: '180px',
        objectFit: 'cover',
      }}
    />

    {/* Free Delivery Badge (freedel image) */}
    <Box
      component="img"
      src={ImageAssets.freedel}
      alt="Free Delivery"
      sx={{
        position: 'absolute',
        top: '-130px',
        right: '-30px',
        width: { xs: '70px', sm: '80px', md: '230px' },
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
