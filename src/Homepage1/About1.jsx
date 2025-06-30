import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ImageAssets } from '../ImageAssets'; // centralized image access

// ✅ Shared styles for card image layout
const styles = {
  threeImages: {
    width: '260px',
    height:'290px',
        borderRadius: '20px',
    overflow: 'hidden',
    backgroundColor: '#000', // for spacing between border and image
    border: '5px solid #FFD700', // outer yellow border
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },

  image: {
    width: '100%',
    height: '260px',
    objectFit: 'cover',
    borderRadius: '15px',
    display: 'block',
  },

  label: {
    width: '100%',
    backgroundColor: '#FFD700',
    color: '#000',
    fontWeight: 700,
    fontSize: '15px',
    textAlign: 'center',
    padding: '10px 0',
    fontFamily: 'Arial',
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

// ✅ Generic card component with optional offset style
const ImageCard = ({ image, label, customStyle = {} }) => (
  <Box sx={{ ...styles.threeImages, ...customStyle }}>
    <Box component="img" src={image} alt={label} sx={styles.image} />
    <Box sx={styles.label}>{label}</Box>
  </Box>
);

// ✅ For Chief image
const ChiefCard = ({ image, name, role }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
    <Box sx={styles.chiefImage}>
      <img src={image} alt="Chief" />
    </Box>
    <Box sx={{ ml: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{name}</Typography>
      <Typography sx={{ fontSize: '14px' }}>{role}</Typography>
    </Box>
  </Box>
);

// ✅ Main Component
const About1 = () => {
  return (
    <Box sx={{ width: '100%', mt: '64px' }}>
      {/* Header Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: { xs: 'flex-start', md: 'flex-start' },
          gap: 4,
          mt:{xs:'-200px',md:'0px'},
          px: { xs: 2, md: 12 },
        }}
      >
        {/* Left Text */}
        <Box>
          <Typography
            sx={{
              fontFamily: 'Arial',
              fontWeight: 'bold',
              color: '#EE3A43',
              fontSize: '12px',
              mb: 1,
            }}
          >
            ABOUT THE FOOD RESTAURANT
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Arial',
              fontWeight: 'bolder',
              fontSize: { xs: '22px', md: '32px' },
              maxWidth: '300px',
              mb: 2,
              lineHeight: 1.3,
            }}
          >
            New Ground with Dishes to be Enjoyed
          </Typography>
        </Box>

        {/* Right Text and Chief */}
        <Box sx={{ maxWidth: '480px' }}>
          <Typography
            sx={{
              fontSize: '15px',
              fontFamily: 'Arial',
              mb: 2,
            }}
          >
            Nisl quam nestibu lum ac quam nec odio eleme aucan ligula. Orci varius nat oque pena tibus et urient monte nascete ridiculus mus nellentesq um ac quam nec odio ribne. Nisl quam nestibu aucan ligula.
          </Typography>
          <ChiefCard
            image={ImageAssets.cheif}
            name="Willimes James"
            role="Director and Chief Operations Officer"
          />
        </Box>
      </Box>

      {/* Image Cards Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 4,
          mt: 8,
          px: { xs: 2, md: 0 },
        }}
      >
        <ImageCard image={ImageAssets.restaurant} label="Restaurant" />
        <ImageCard image={ImageAssets.cocktail} label="Cocktail Bar" customStyle={{ mt: '30px' }} />
        <ImageCard image={ImageAssets.dining} label="Private Dining" />
      </Box>
    </Box>
  );
};

export default About1;
