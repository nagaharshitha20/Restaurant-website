import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  IconButton,
  Button,
  Tooltip
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/filterSlice'; 



const ShopProducts = ({
  id, 
  img,
  name,
  price,
  oldPrice,
  rating,
  badge,
  deliveryTime,
  discount,
}) => {
  const dispatch = useDispatch();

const handleAdd = () => {
  dispatch(addToCart({ id, name, price, img, qty: 1 }));
};

  return (
    
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)'
        },
        position: 'relative'
      }}
    >
  
      <Box
        sx={{
          position: 'relative',
          height: 140,
          backgroundColor: '#f7f7f7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8
        }}
      >
        <img
          src={img}
          alt={name}
          style={{
            maxHeight: '100%',
            width: '180px',
            objectFit: 'contain'
          }}
        />

       

       
        {discount && discount >= 10 && (
          <Chip
            label={`${discount}% OFF`}
            color="error"
            size="small"
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              fontWeight: 600,
              fontSize: '0.7rem'
            }}
          />
        )}

      
       
      </Box>

   
  <CardContent sx={{ pt: 1.5 }}>

  <Typography
    variant="subtitle1"
    fontWeight={700}
    sx={{
      fontSize: '1rem',
      mb: 1,
      textTransform: 'capitalize',
      color: '#333',
    }}
  >
    {name}
  </Typography>





       
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 1
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <StarIcon sx={{ color: '#FFC107', fontSize: 18 }} />
            <Typography variant="body2" fontWeight={500}>
              {rating ?? 4.5}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <AccessTimeIcon sx={{ fontSize: 18, color: '#666' }} />
            <Typography variant="body2" color="text.secondary">
              {deliveryTime ?? 20} mins
            </Typography>
          </Box>
        </Box>

<Box
  sx={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mt: 1,
  }}
>
  <Box>
    <Typography variant="body1" fontWeight={600}>
      ₹{price}
      {oldPrice && (
        <Typography
          variant="body2"
          component="span"
          sx={{
            ml: 1,
            textDecoration: 'line-through',
            color: 'text.secondary',
            fontSize: '0.9rem',
          }}
        >
          ₹{oldPrice}
        </Typography>
      )}
    </Typography>
  </Box>

  <Tooltip title="Add to Cart">
  <Button sx={{backgroundColor:'#00A149',color:'#fff',px:0.7,py:0.3,borderRadius:3}}
   onClick={() =>
  dispatch(
    addToCart({
      img,
      name,
      price,
      oldPrice,
      rating,
      deliveryTime,
      discount,
    })
  )
}
  >
    Add +
  </Button>
</Tooltip>

</Box>

      </CardContent>
    </Card>
  );
};

export default ShopProducts;
