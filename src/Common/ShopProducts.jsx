import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Chip,
  Button,
  Tooltip,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/filterSlice';
import { useNavigate } from 'react-router-dom';

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
  onAddToCart,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
  e.stopPropagation(); // Prevent card click navigation

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if (!isLoggedIn) {
    navigate('/login');
    return;
  }

  if (!added) {
    dispatch(
      addToCart({
        id,
        img,
        name,
        price,
        oldPrice,
        rating,
        deliveryTime,
        discount,
        qty: 1,
      })
    );
    setAdded(true);
    if (onAddToCart) onAddToCart();
    setTimeout(() => setAdded(false), 2000);
  }
};

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <Card
      onClick={handleCardClick}
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        width:'190px',
        height:'290px',
        // height:'90%',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.02)',
          cursor: 'pointer',
        },
        position: 'relative',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: '60%',
          backgroundColor: '#f7f7f7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
           
        }}
      >
        <img
          src={img}
          alt={name}
          style={{
          
            width: '100%',
            objectFit: 'contain',
            
            // borderRadius:'50%'

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
              fontSize: '0.7rem',
            }}
          />
        )}
      </Box>

      <CardContent sx={{ pt: 1.5 ,height:'30%'}}>
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
            mb: 1,
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
            <Button
              sx={{
                backgroundColor: added ? '#2e7d32' : '#00A149',
                color: '#fff',
                px: 0.7,
                py: 0.3,
                borderRadius: 3,
                transition: 'background-color 0.3s',
                '&:hover': {
                  backgroundColor: added ? '#2e7d32' : '#008C40',
                },
              }}
              onClick={handleAdd}
            >
              Add
              {added ? (
                <CheckIcon sx={{ fontSize: 18, ml: 0.5 }} />
              ) : (
                <AddIcon sx={{ fontSize: 18, ml: 0.5 }} />
              )}
            </Button>
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ShopProducts;
