import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PrimaryButton from '../Common/PrimaryButton';
import { ImageAssets } from '../ImageAssets';
import PlayButton from '../Common/PlayButton';

const CoverPage1 = () => {

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '25vh', sm: '60vh', md: '100vh' },
        overflowX: 'hidden',
                margin: { xs: 1.3, sm: 2.5,md:0 },
        mt: { xs: '66px', sm: '64px' },
      }}
    >
    
      <Box
        component="img"
        src={ImageAssets.cover}
        alt="cover"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          borderRadius: { xs: '30px', sm: '30px', md: '0' },
          width: {xs:'95%',md:'100%'},
          height: { xs: '25vh', sm: '60vh', md: '100vh' },
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

    
      <Box
        sx={{
          position: { xs: 'relative', sm: 'absolute' },
          top: { xs: 'auto', sm: '50%' },
          left: { xs: 0, md: '180px' },
          transform: { xs: 'none', sm: 'translateY(-50%)' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          width: { xs: '100%', sm: '90%', md: '600px' },
          px: { xs: 4, sm: 4 },
          zIndex: 1,
          color: '#FFFFFF',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Fredoka One',
            fontSize: { xs: '5.5vw', sm: '5.5vw', md: '48px' },
            textAlign: 'left',
            mt: { xs: '8vw', sm: 0 },
            mb: 1,
            lineHeight: 1.2,
          }}
        >
          The Perfect Space to
          <br />
          Enjoy Fantastic Food
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontFamily: 'Epilogue',
            fontSize: { xs: '3vw', sm: '2.3vw', md: '20px' },
            color: 'lightgrey',
            textAlign: 'left',
            mb: { xs: 0, sm: 4 },
            lineHeight: 1.5,
            maxWidth: '100%',
          }}
        >
          Festive dining at Farthings where we are strong believer
          <br />
          in using the very best produce
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: { xs: 'flex-end', sm: 'flex-start' },
            alignItems: 'center',
            gap: { xs: 1.3, sm: 3 },
            width: '100%',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mr: { xs: 10, sm: 0 } ,mb:2}}>
            <PrimaryButton
              name="See Our Menus"
              to="/shop"
              width={{ xs: '100px', sm: '160px', md: '190px' }}
              borderwidth={{ xs: '90px', sm: '150px', md: '180px' }}
            />
          </Box>

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              gap: 2,
            }}
          >
            <PlayButton onClick={() => console.log('Play video')} />
            <Typography
              sx={{
                fontSize: { sm: '14px', md: '16px' },
                fontFamily: 'Fredoka One',
              }}
            >
              VIDEO
            </Typography>
          </Box>
        </Box>
      </Box>

     
      <Box
        sx={{
          display: { xs: 'none', lg: 'flex' },
          position: 'absolute',
          bottom: '100px',
          right: '220px',
          width: '350px',
          height: '180px',
          border: '3px solid #FFD40D',
          borderRadius: '30px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '20px',
          color: '#fff',
          zIndex: 2,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontSize: '22px', fontFamily: 'Fredoka One' }}>
            $90.85
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: '18px', mt: 1, fontFamily: 'Fredoka One' }}
          >
            Sicilian Pizza
          </Typography>
          <Box sx={{ mt: 1 }}>
            {'★★★★★'.split('').map((star, idx) => (
              <span
                key={idx}
                style={{ color: '#FFD40D', fontSize: '20px', fontFamily: 'Fredoka One' }}
              >
                {star}
              </span>
            ))}
          </Box>
        </Box>

        <Box
          component="img"
          src={ImageAssets.pizza}
          alt="Pizza"
          sx={{
            width: '120px',
            height: '120px',
            objectFit: 'contain',
          }}
        />

        <Box
          sx={{
            position: 'absolute',
            top: '-18px',
            left: '70%',
            transform: 'translateX(-50%)',
            backgroundColor: '#F3274C',
            color: '#fff',
            padding: '4px 12px',
            fontSize: '14px',
            borderRadius: '5px',
            fontFamily: 'Fredoka One',
            whiteSpace: 'nowrap',
          }}
        >
          Weekly Special
        </Box>
      </Box>
    </Box>
  );
};

export default CoverPage1;