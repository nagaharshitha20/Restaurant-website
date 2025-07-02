import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PrimaryButton from '../Common/PrimaryButton';
import { ImageAssets } from '../ImageAssets';
import PlayButton from '../Common/PlayButton';



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
      height:{
        xs:'300px',
        sm:'100%',
        md:'100%',
        lg:'100%',
      }
    }}
  />


  <Box
  sx={{
    position: {
      xs: 'relative',      
      sm: 'absolute',      
    },
    top: {
      xs: '60px',
      sm: '50%',
    },
    left: {
      xs: '20px',
      sm: 0,
      md: '180px',
    },
    transform: {
      xs: 'none',
      sm: 'translateY(-50%)',
    },
    width: {
      xs: '90%',
      sm: '85%',
      md: '600px',
    },
     color:'black',
    zIndex: 1,
    // textShadow: '0px 2px 0px rgba(0, 0, 0, 0.7)',
    px: { xs: 2, sm: 2 },
    mx: { xs: 'auto', sm: '0' }, 
  }}
>

    <Typography
      variant="h3"
      sx={{
        // fontWeight: 'bold',
        fontSize: { xs: '24px', sm: '36px', md: '48px' },
        fontFamily: 'Fredoka One',
        mb: 2,
      
        lineHeight: 1.2,
      }}
    >
      Best Food for
 <br/>
     <span style={{backgroundColor:'#FFD40D',padding:'4px 15px',marginLeft:'-16px', borderRadius:'100px'}}>Best Restaurants</span>
    </Typography>

    <Typography
      variant="h6"
      sx={{
        fontSize: { xs: '14px', sm: '18px', md: '20px' },
        color:'lightgrey',
        mb: { xs: 2, sm: 3 },
        fontFamily: 'Epilogue',
        lineHeight: 1.4,
      }}
    >
      Festive dining at Farthings where we are strong believers in
      using the very best produce
    </Typography>

    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: { xs: 1.5, sm: 2 },
        maxWidth: '100%',
      }}
    >
      <PrimaryButton
        name="See Our Menus"
        onClick={() => console.log('Menu button clicked')}
      />
      <PlayButton onClick={() => console.log('Play video')} />
      <Typography
        sx={{
          fontSize: '16px',
          fontFamily: 'Arial',
          ml:'40px',
          display: { xs: 'none', sm: 'block' },
          
          
        }}
      >
        VIDEO
      </Typography>
    </Box>
  </Box>

     
      <Box
        sx={{
          display: { xs: 'none', lg:'flex'},
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
          boxSizing: 'border-box',
        }}
      >

        <Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '22px' }}>
            $90.85
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: '18px', mt: '4px' }}>
            Sicilian Pizza
          </Typography>
          <Box sx={{ mt: 1 }}>
            {'★★★★★'.split('').map((star, idx) => (
              <span key={idx} style={{ color: '#FFD40D', fontSize: '20px' }}>{star}</span>
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
            fontWeight: 'bold',
            fontSize: '14px',
            borderRadius: '5px',
            fontFamily: 'Arial',
            whiteSpace: 'nowrap',
          }}
        >
          Weekly Special
        </Box>
      </Box>
    </Box>
  );
};

export default CoverPage2;
