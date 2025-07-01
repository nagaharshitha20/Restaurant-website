import React from 'react';
import { Box, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
          width: '40px',
          height: '50px',
          position: 'absolute',
          top: '10px',
          left: '10px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFD700',
          color: 'black',
          fontWeight: 'bold',
          fontSize: '12px',
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
          fontWeight: 'bold',
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
            textDecoration: 'line-through',
            color: '#888',
          }}
        >
          {dish.originalPrice}
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 'bold',
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
          width: '28px',
          height: '28px',
          borderRadius: '6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ShoppingCartIcon sx={{ fontSize: '16px', color: 'black' }} />
      </Box>
    </Box>
  );
};

export default CarouselCard;
