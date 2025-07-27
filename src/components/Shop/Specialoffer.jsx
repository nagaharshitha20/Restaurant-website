import React from 'react';
import { Box, Typography } from '@mui/material';
import { ImageAssets } from '../../ImageAssets';
import ExploreButton from '../../Common/ExploreButton';
import { useNavigate } from 'react-router-dom';

const Specialoffer = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: '100%',
        px: { xs:0, md: 0 },
        py: { xs: 3, md: 7 },
        bgcolor: '#fff',
       
        mx: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          width:'100%',
          mx:'auto',
          gap: 4,
          
          mb: 8,
        }}
      >
        {/* LEFT TEXT SECTION */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            mx: 'auto',
            justifyContent: 'center',
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
            px: { xs: 0, md: 10 },
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Playball',
              color: '#008000',
              fontSize: {xs:22,md:24},
              mb: 1,
            }}
          >
            Special Offer
          </Typography>

          <Typography
            sx={{
              fontWeight: 700,
             fontSize: {xs:22,md:28},
              mb: 1,
            }}
          >
            Burgers With Onion Dip and Potato Chips
          </Typography>

          <Typography
            sx={{
              fontSize: {xs:10,md:13},
              color: '#555',
              mb: 2,
              maxWidth: 500,
            }}
          >
            <strong>Per Serving:</strong> 510 calories; fat 26g; saturated fat 10g; cholesterol
            88mg; sodium 883mg; protein 31g; carbohydrates 36g; sugars 9g; fiber 1g; iron 4mg;
            calcium 97mg.
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
            <ExploreButton name="Order Now" onClick={() => navigate('/productsection')} />
            <Typography sx={{ fontWeight: 700, fontSize: 22, color: '#EF1B48' }}>
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

        {/* RIGHT IMAGE SECTION */}
        <Box
          sx={{
            flex: 1,
            position: 'relative',
            display:{xs:'none',md:'block'},
            height: 450,
            width: '100%',
            backgroundImage: `url(${ImageAssets.yellowbg})`,
            backgroundSize: 'cover',
            borderRadius: '30px',
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
              left: '-100px',
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
    </Box>
  );
};

export default Specialoffer;
