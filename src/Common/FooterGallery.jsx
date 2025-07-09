import React from 'react';
import { Box } from '@mui/material';
import { ImageAssets } from '../ImageAssets'; // h1, h2, h3, h4, h5

const FooterGallery = () => {
  const galleryImgs = [ImageAssets.h1, ImageAssets.h2, ImageAssets.h3, ImageAssets.h4, ImageAssets.h5];

  return (
    <Box
      sx={{
        width: '100%',
        mt: 4,
        display: 'flex',
        justifyContent: 'space-between',
        py: 2,
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(5, 1fr)' },
          gap: 0,
          maxWidth: 1600,
          width: '100%',
          px: 0,
        }}
      >
        {galleryImgs.map((img, i) => (
          <Box
            key={i}
            component="img"
            src={img}
            alt={`gallery-${i}`}
            sx={{
              width: '100%',
              height: '80%',
              objectFit: 'cover',
              transition: '0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.03)',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default FooterGallery;
