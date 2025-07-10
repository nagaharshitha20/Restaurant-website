import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PrimaryButton from '../Common/PrimaryButton';
import { ImageAssets } from '../ImageAssets';
import PlayButton from '../Common/PlayButton';

const CoverPage = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '70vh', sm: '100vh', md: '100vh' },
        overflow: 'hidden',
        mt: { xs: '56px', sm: '64px' },
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
          width: '100%',
          height: {xs:'100vh', sm: '100vh', md: '100vh'},
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

    
      <Box
        sx={{
          position: {
            xs: 'relative',
            sm: 'absolute',
          },
          top: {
            xs: 'auto',
            sm: '50%',
          },
          left: {
            xs: '0',
            sm: 0,
            md: '180px',
          },
          transform: {
            xs: 'none',
            sm: 'translateY(-50%)',
          },
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'flex-start', sm: 'flex-start' },
          justifyContent: 'center',
          width: {
            xs: '90%',
            sm: '80%',
            md: '600px',
          },
          px: { xs: 3, sm: 4 },
          zIndex: 1,
          color: '#FFFFFF',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        }}
      >
      
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Fredoka One',
            fontSize: { xs: '8vw', sm: '6vw', md: '48px' },
            textAlign: 'left',
            mt: { xs: '35vw',sm:'0vw',md:'0vw',lg:'0vw' },
            mb: 2,
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
            fontSize: { xs: '3.5vw', sm: '2.5vw', md: '20px' },
            color: 'lightgrey',
            textAlign: 'left',
            mb: { xs: 3, sm: 4 },
            lineHeight: 1.5,
            maxWidth: '100%',
          }}
        >
          Festive dining at Farthings where we are strong believers in using the very best produce
        </Typography>

     
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: { xs: 2, sm: 3 },
            width: '100%',
          }}
        >
          <PrimaryButton
            name="See Our Menus"
            to='/home7'
          />
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <PlayButton onClick={() => console.log('Play video')} />
            <Typography
              sx={{
                fontSize: { xs: '4vw', sm: '16px' },
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

export default CoverPage;
