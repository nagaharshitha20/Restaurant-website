import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

const ProductCard = ({ img, name, price, oldPrice, badge, rating = 5 }) => {
  return (
    <Box
      sx={{
        width: 230,
        height: 350,
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 3,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* Image Section */}
      <Box sx={{ position: 'relative', height: '70%' }}>
        {/* Product Image */}
        <Box
          component="img"
          src={img}
          alt={name}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Badge */}
        {badge && (
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              left: 8,
              backgroundColor: '#E3F8E0',
              color: '#2E7D32',
              fontSize: 12,
              px: 1,
              py: 0.3,
              borderRadius: 1,
              fontWeight: 600,
            }}
          >
            {badge}
          </Box>
        )}

        {/* Favorite Icon */}
        <IconButton
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            bgcolor: '#fff',
            p: 0.5,
            '&:hover': { bgcolor: '#f0f0f0' },
          }}
        >
          <FavoriteBorderIcon fontSize="small" />
        </IconButton>
      </Box>

      {/* Content */}
      <Box sx={{ p: 2, flexGrow: 1 }}>
        {/* Rating */}
        <Box sx={{ display: 'flex', gap: 0.3, mb: 0.6 }}>
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              sx={{
                fontSize: 14,
                color: '#ccc',
              }}
            />
          ))}
        </Box>

        {/* Name */}
        <Typography fontWeight={600} fontSize={14} mb={0.5} noWrap>
          {name}
        </Typography>

        {/* Price + Cart */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
  <Typography fontWeight={700} fontSize={14} color="primary">
    ${price}
  </Typography>
  {oldPrice && (
    <Typography
      fontSize={12}
      sx={{ color: '#888', textDecoration: 'line-through' }}
    >
      ${oldPrice}
    </Typography>
  )}
</Box>


          <IconButton size="small" sx={{ bgcolor: '#f5f5f5' }}>
            <ShoppingBagIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;
