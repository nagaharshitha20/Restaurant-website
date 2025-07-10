import React from 'react';
import { Box, Typography } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const CarouselCard = ({ dish }) => {
  return (
    <Box
      sx={{
        width: '260px',
        border: '3px solid #FFD700',
        borderRadius: '20px',
        backgroundColor: 'white',
        padding: '16px',
        position: 'relative',
        textAlign: 'center',
        margin: 'auto',
      }}
    >
      {/* SALE Tag */}
      <Box
        sx={{
          width: '50px',
          height: '50px',
          position: 'absolute',
          top: '10px',
          left: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFD700',
          color: 'black',
         fontFamily: 'Fredoka One',
          fontSize: '13px',
          borderRadius: '50%',
        }}
      >
        SALE
      </Box>

      {/* Dish image */}
      <Box
        component="img"
        src={dish.image}
        alt={dish.name}
        sx={{
          width: '222.22px',
          height: '190px',
          borderRadius: '50%',
          objectFit: 'cover',
          position: 'relative',
          zIndex: 2,
          top: '45px',
          marginBottom: '-40px',
        }}
      />

      {/* Red Ellipse Background */}
      <Box
        sx={{
          width: '50%',
          height: '120px',
          backgroundColor: '#F3274C',
          borderRadius: '50%',
          position: 'relative',
          zIndex: 1,
          float: 'left',
          mt: -10,
          mb: 6,
        }}
      />
      <Box
        sx={{
          width: '50%',
          height: '120px',
          backgroundColor: '#F3274C',
          borderRadius: '50%',
          position: 'relative',
          zIndex: 1,
          float: 'right',
          mt: -10,
          mb: 6,
        }}
      />

      {/* Dish Info */}
      <Typography
        sx={{
          
          fontFamily: 'Fredoka One',
          fontSize: '14px',
          mb: 0.5,
        }}
      >
        {dish.name}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
        <Typography
          sx={{
            fontSize: '13px',
            fontFamily: 'Fredoka One',
            textDecoration: 'line-through',
            color: '#888',
          }}
        >
          {dish.originalPrice}
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            // fontWeight: 'bold',
            fontFamily: 'Fredoka One',
          }}
        >
          {dish.price}
        </Typography>
      </Box>

      {/* Cart Icon */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          backgroundColor: '#FFD700',
          width: '30px',
          height: '30px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ShoppingBagIcon sx={{ fontSize: '16px', color: 'black', }} />
      </Box>
    </Box>
  );
};

export default CarouselCard;
