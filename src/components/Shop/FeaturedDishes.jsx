import React from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import CarouselCard from '../../Common/CarouselCard';// Assuming CarouselCard is in the same folder
import { ImageAssets } from '../../ImageAssets';

const FeaturedDishes = () => {
  const featuredDishes = [
    {
      name: 'Crispy Fried Chicken',
      originalPrice: '$14.85',
      price: '$10.85',
      image: ImageAssets.grillchicken,
    },
    {
      name: 'Shroom Bacon Burger',
      originalPrice: '$21.76',
      price: '$11.76',
      image: ImageAssets.bacon,
    },
    {
      name: 'Delicious Black Coffee',
      originalPrice: '$21.76',
      price: '$11.76',
      image: ImageAssets.blackcoffee,
    },
    {
      name: 'Chicken Burger',
      originalPrice: '$21.76',
      price: '$11.76',
      image: ImageAssets.chickenburger,
    },
    {
      name: 'Delicious Black Coffee',
      originalPrice: '$21.76',
      price: '$11.76',
      image: ImageAssets.i2,
    },
    {
      name: 'French Fries',
      originalPrice: '$21.76',
      price: '$11.76',
      image: ImageAssets.i3,
    },
  ];

  const dishes = Array.isArray(featuredDishes) ? featuredDishes : [];

  return (
    <Box
      sx={{
        backgroundColor: '#F5F8FD',
        width: '100%',
        py: { xs: 8, md: 10 },
        display: 'flex',
        mt:-20,
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Fredoka One',
          fontSize: '36px',
          textAlign: 'center',
          mb: 0.5,
          mt: 20,
        }}
      >
        Featured Dishes
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

      <Box
        sx={{
          width: {xs:'100%',md:'70%'},
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          px: { xs: 0, md: 8 },
        }}
      >
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: '.custom-swiper-pagination',
          }}
          style={{
            width: '100%',
            paddingBottom: '50px',
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
        >
          {[...dishes, ...dishes].map((dish, idx) => (
            <SwiperSlide key={idx}>
              <CarouselCard dish={dish} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Box
          className="custom-swiper-pagination"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            mt: '-30px',
            '& .swiper-pagination-bullet': {
              width: '10px',
              height: '10px',
              backgroundColor: '#888',
              opacity: 0.4,
              borderRadius: '50%',
              transition: 'all 0.3s ease',
            },
            '& .swiper-pagination-bullet-active': {
              backgroundColor: '#FFD700',
              opacity: 1,
              transform: 'scale(1.2)',
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default FeaturedDishes;
