import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  IconButton,
  Button,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from '../redux/filterSlice';
import DeleteIcon from '@mui/icons-material/Delete';

const CartPage = () => {
  const cart = useSelector((state) => state.filters.cart);
  const dispatch = useDispatch();

  return (
    <Box sx={{ pt: 14, pb: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Shopping Cart
        </Typography>

        {cart.length === 0 ? (
          <Typography>No items added to cart yet.</Typography>
        ) : (
          cart.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: 2,
                mb: 2,
                border: '1px solid #ddd',
                borderRadius: 2,
                flexWrap: 'wrap',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: 80, height: 80, objectFit: 'contain' }}
                />
                <Box>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₹{item.price} x {item.qty}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Button onClick={() => dispatch(decreaseQty(item.name))}>-</Button>
                <Typography>{item.qty}</Typography>
                <Button onClick={() => dispatch(increaseQty(item.name))}>+</Button>
              </Box>

              <Box>
                <Typography variant="h6">
                  ₹{item.qty * item.price}
                </Typography>
              </Box>

              <IconButton onClick={() => dispatch(removeFromCart(item.name))}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ))
        )}
      </Container>
    </Box>
  );
};

export default CartPage;
