import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { ImageAssets } from '../ImageAssets';
import PrimaryButton from '../Common/PrimaryButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import CarouselCard from '../Common/CarouselCard';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Menu = () => {
  return (
    <Box
      sx={{
        width: '90%',
        minHeight: { xs: '480px', sm: '600px', md: '710px' },
        mt: { xs: '56px', sm: '64px' },
        
        px: { xs: 2, md: 8 },
      }}
    >
      
      <Typography
        sx={{
         fontFamily: 'Fredoka One',
          fontSize: '35px',
          textAlign: 'center',
          marginTop: '50px',
          
        }}
      >
        Discover Menu
      </Typography>
      <Box
              sx={{
                width: '155px',
                height: '6px',
                backgroundColor: '#FFD700',
                mx: 'auto',
                mb: 6,
                borderRadius: '3px',
              }}
            />
    </Box>
  );
};

export default Menu;
