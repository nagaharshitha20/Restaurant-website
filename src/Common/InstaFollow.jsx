import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { ImageAssets } from '../ImageAssets';

const instaImages = [
  ImageAssets.f1,
  ImageAssets.f2,
  ImageAssets.f3,
  ImageAssets.f4,
  ImageAssets.f1,
];

const InstaFollow = () => {
  return (
    <Box
      sx={{
        px: 2,
        py: 8,
        backgroundColor: '#fff',
        textAlign: 'center',
      }}
    >
      <Typography
        sx={{
          fontSize: 30,
          color: '#000',
          fontFamily: 'Fredoka One',
          mb: 1,
        }}
      >
        <InstagramIcon
          style={{
            backgroundColor: '#EF294C',
            padding: '15px',
            borderRadius: '50%',
            width: '35px',
            height: '35px',
            color: '#fff',
          }}
        />
        <br />
        Follow <b>@shawonetc3</b>
      </Typography>

      <Typography sx={{ fontSize: 12, mb: 4 }}>
        Join our community to inspire your desires
      </Typography>

      {/* Scrollable row on small screens */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: { xs: 'flex-start', lg: 'center' },
          gap: 2,
          overflowX: { xs: 'auto', md: 'auto', lg: 'visible' },
          px: 1,
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {instaImages.map((img, idx) => (
          <Box
            key={idx}
            component="img"
            src={img}
            alt={`insta-${idx}`}
            sx={{
              minWidth: { xs: '200px', sm: '240px', md: '260px', lg: '280px' },
              height: '240px',
              objectFit: 'cover',
              borderRadius: 1,
              flexShrink: 0,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default InstaFollow;
