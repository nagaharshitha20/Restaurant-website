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

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '14px',
  outline: 'none',
  boxSizing: 'border-box',
};

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
];

const DiscoverMenu = () => {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: { xs: '480px', sm: '600px', md: '710px' },
        mt: { xs: '56px', sm: '64px' },
        px: { xs: 2, md: 8 },
      }}
    >
      
      <Typography
        sx={{
          fontWeight: 'bold',
          fontSize: '25px',
          textAlign: 'center',
          marginTop: '50px',
          marginBottom: '50px',
        }}
      >
        Discover Menu
      </Typography>

     
      <Box sx={{ display: 'flex', gap: '25px', justifyContent: 'center' }}>
        {[{
          img: ImageAssets.classicsbbq,
          title: 'Steaks & BBQ',
          desc: 'canonical classics to obscure tiki drinks',
          price: '$120',
        }, {
          img: ImageAssets.drinksbbq,
          title: 'Cocktails',
          desc: 'canonical classics to obscure tiki drinks',
          price: '$120',
        }].map((item, idx) => (
          <Box
            key={idx}
            sx={{
              position: 'relative',
              width: '405px',
              height: '220px',
              borderRadius: '20px',
              overflow: 'visible',
            }}
          >
            <Box
              component="img"
              src={item.img}
              alt={item.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '20px',
                display: 'block',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                padding: '20px',
                width: '210px',
                top: '20px',
                left: '20px',
                color: '#fff',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{item.title}</Typography>
              <Typography variant="body2" sx={{ color: 'lightgrey' }}>{item.desc}</Typography>
            </Box>

            <Box
              sx={{
                position: 'absolute',
                bottom: '-30px',
                left: '50px',
                backgroundColor: '#FFD700',
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#F3274C',
                fontWeight: 'bold',
                boxShadow: '0px 2px 8px rgba(0,0,0,0.2)',
                zIndex: 2,
              }}
            >
              <Typography sx={{ fontSize: '16px', lineHeight: 1 }}>{item.price}</Typography>
              <Typography sx={{ fontSize: '12px' }}>person</Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Reservation Box */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
        <Box
          sx={{
            width: '776.66px',
            height: '240px',
            borderRadius: '20px',
            backgroundImage: `url(${ImageAssets.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            px: 4,
            py: 4,
            gap: 4,
          }}
        >
          
          <Box sx={{ width: '32%' }}>
            <Typography
              sx={{
                color: 'white',
                fontSize: '28px',
                fontWeight: 'bold',
                mb: 1,
                lineHeight: 1.3,
              }}
            >
              RESERVE <br /> A TABLE
            </Typography>
            <Typography sx={{ color: 'white', fontSize: '14px' }}>
              Discover our New Menu !
            </Typography>
          </Box>

          
          <Box
            sx={{
              width: '65%',
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', gap: 2 }}>
              <input placeholder="No of Guest" style={inputStyle} />
              <input placeholder="Date" style={inputStyle} />
              <input placeholder="Time" style={inputStyle} />
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <input placeholder="Full Name" style={inputStyle} />
              <input placeholder="Phone No" style={inputStyle} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <PrimaryButton
                name="Submit"
                bgcolor="#FFD40D"
                color="black"
                border="#FFD40D"
              />
            </Box>
          </Box>
        </Box>
      </Box>

      
      <Box
        sx={{
          backgroundColor: '#F5F8FD',
          width: '1600px',
         mt: 10,

          py: { xs: 8, md: 10 },
          display: 'flex',
          mt:-20,
          ml:-10,

          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: '36px',
            textAlign: 'center',
            mb: 6,
            mt:20,
          }}
        >
          Featured Dishes
        </Typography>

        <Box sx={{ width: '1000px', display:'flex',justifyContent:'center',px: { xs: 2, md: 8 }}}>
          <Swiper
  modules={[Navigation, Autoplay,Pagination]}
  spaceBetween={10} // ⬅️ 10 or 20px gap
 
  slidesPerView={1}
  slidesPerGroup={1}
// navigation
  autoplay={{ delay: 2000, disableOnInteraction: false }}
  pagination={{ clickable: true}}
  loop={true}
  breakpoints={{
    1024: {
      slidesPerView: 3,      // ⬅️ Show 3 at a time
      slidesPerGroup: 3,     // ⬅️ Move 3 at a time (not 1)
         // ⬅️ 20px gap on lg screens
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
  {[...featuredDishes, ...featuredDishes].map((dish, idx) => (
    <SwiperSlide key={idx}>
      <CarouselCard dish={dish} />
    </SwiperSlide>
  ))}
</Swiper>

        </Box>
      </Box>
    </Box>
  );
};

export default DiscoverMenu;
