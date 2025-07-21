import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ImageAssets } from '../ImageAssets';

const styles = {
  threeImages: {
    width: { xs: '70%', sm: '240px', md: '260px' },
    height: 'auto',
    borderRadius: '20px',
    overflow: 'hidden',
    backgroundColor: '#000',
    border: '5px solid #FFD700',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },

  image: {
    width: '100%',
    height: { xs: '200px', sm: '240px', md: '260px' },
    objectFit: 'cover',
    borderRadius: '15px',
    display: 'block',
  },

  label: {
    width: '100%',
    backgroundColor: '#FFD700',
    color: '#000',
    fontSize: '15px',
    textAlign: 'center',
    padding: '10px 0',
    fontFamily: 'Fredoka One',
    borderBottomLeftRadius: '15px',
    borderBottomRightRadius: '15px',
  },

  chiefImage: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    overflow: 'hidden',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },
  },
};

const ImageCard = ({ image, label, customStyle = {} }) => (
  <Box sx={{ ...styles.threeImages, ...customStyle }}>
    <Box component="img" src={image} alt={label} sx={styles.image} />
    <Box sx={styles.label}>{label}</Box>
  </Box>
);

const ChiefCard = ({ image, name, role }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
    <Box sx={styles.chiefImage}>
      <img src={image} alt="Chief" />
    </Box>
    <Box sx={{ ml: 2 }}>
      <Typography variant="h6" sx={{ fontFamily: 'Fredoka One', }}>
        {name}
      </Typography>
      <Typography sx={{ fontSize: { xs: '12px', sm: '14px' }, fontFamily: 'Epilogue' }}>{role}</Typography>
    </Box>
  </Box>
);

const About1 = () => {
  return (
    <Box sx={{ width: '100%', mx:'auto',mt: { xs: '0px', md: '64px' } }}>
     
     <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    justifyContent: 'center',
    alignItems: {
      xs: 'flex-start',
      md: 'flex-start',
      lg: 'flex-start', 
    },
    gap: 2,
    mt:{xs:5,md:10},
    px: { xs: 3,sm:18, md: 12 ,lg:45},
    minHeight: { lg: '150px' }, 
  }}
>

       
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontFamily: 'Fredoka One',
              color: '#EE3A43',
              fontSize: '12px',
              mb: 1,
              textAlign: { xs: 'left', md: 'left' }, 
            }}
          >
            ABOUT THE FOOD RESTAURANT
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Fredoka One',
              fontSize: { xs: '22px', md: '32px' },
              maxWidth: { xs: '100%', md: '300px' },
              mb: 1,
              lineHeight: 1.3,
              textAlign: { xs: 'left', md: 'left' },
            }}
          >
            New Ground with Dishes to be Enjoyed
          </Typography>
        </Box>

       
        <Box sx={{ flex: 1, maxWidth: '480px' }}>
          <Typography
            sx={{
              fontSize: { xs: '12px', md: '15px' },
              fontFamily: 'Epilogue',
              mb: 2,
              lineHeight: 1.6,
              textAlign: { xs: 'left', md: 'left' },
            }}
          >
            Nisl quam nestibu lum ac quam nec odio eleme aucan ligula. Orci varius nat oque pena
            tibus et urient monte nascete ridiculus mus nellentesq um ac quam nec odio ribne. Nisl
            quam nestibu aucan ligula.
          </Typography>
          <ChiefCard
            image={ImageAssets.cheif}
            name="Willimes James"
            role="Director and Chief Operations Officer"
          />
        </Box>
      </Box>

      
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'center',
          
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 4,
          mt: 8,
          mx:'auto',
          px: { xs: 0, md: 0 },
        }}
      >
        <ImageCard image={ImageAssets.restaurant} label="Restaurant" />
        <ImageCard
          image={ImageAssets.cocktail}
          label="Cocktail Bar"
          customStyle={{ mt: { xs: 0, sm: '30px' } }}
        />
        <ImageCard image={ImageAssets.dining} label="Private Dining" />
      </Box>
    </Box>
  );
};

export default About1;
