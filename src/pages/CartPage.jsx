import React from 'react';
import {
  Box,
  Typography,
  Container,
  IconButton,
  Button,
  Divider,
  TextField,
  Link,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from '../redux/filterSlice';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const cart = useSelector((state) => state.filters.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const calculateExtras = (item) => {
    const extras = item.extras || {};
    const toppingPrice = extras.toppings?.reduce((acc, t) => acc + t.price, 0) || 0;
    const dipPrice = extras.dips?.reduce((acc, d) => acc + d.price, 0) || 0;
    return toppingPrice + dipPrice;
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + (item.price * item.qty),
    0
  );

  const shippingBase = 10.0;
  const additionalPerItem = 5.0;
  const shipping = shippingBase + (cart.length > 0 ? (cart.length - 1) * additionalPerItem : 0);
  const grandTotal = subtotal + shipping;

  const [coupon, setCoupon] = React.useState('');
  const [discount, setDiscount] = React.useState(0);
  const applyCoupon = () => {
    if (coupon === 'SAVE10' && subtotal > 0) {
      setDiscount(subtotal * 0.10);
    } else {
      setDiscount(0);
    }
  };
  const finalTotal = grandTotal - discount;

  const handleSeeMore = () => {
    navigate('/shop');
  };

  return (
    <Box sx={{ pt: 14, pb: 6, backgroundColor: '#f9f9f9', fontFamily: 'Roboto, sans-serif', minHeight: '80vh'}}>
      <Container maxWidth={false} sx={{ padding: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, width: '90%', flexWrap: 'wrap', mx:'auto', }}>
          
          <Box
            sx={{
              width: { xs: '100%', md: '60%' },
              p: 3,
              backgroundColor: '#fff',
              borderRadius: 6,
              border: '1px solid #e0e0e0',
              maxHeight: 'auto',
              position: 'relative',
              overflowY: 'auto',
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, fontSize: '1.1rem', color: '#444' }}>
              Total Items in Cart: {cart.length}
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1fr 0.5fr',
                gap: 1,
                mb: 2,
                p: 1,
                borderBottom: '1px solid #e0e0e0',
              }}
            >
              <Typography sx={{ fontWeight: 'bold', fontSize: '1rem', color: '#444', textAlign: 'left' }}>
                Product Details
              </Typography>
              <Typography sx={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#444', textAlign: 'center' }}>
                Price
              </Typography>
              <Typography sx={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#444', textAlign: 'center' }}>
                Quantity
              </Typography>
              <Typography sx={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#444', textAlign: 'center' }}>
                Total
              </Typography>
            </Box>

            {cart.length === 0 ? (
              <Typography sx={{ textAlign: 'center', color: '#757575', fontSize: '1rem', mt: 4 }}>
                No items in the cart
              </Typography>
            ) : (
              cart.map((item, index) => {
                const extras = item.extras || {};
                const totalItemPrice = item.qty * item.price;

                return (
                  <Box
                    key={index}
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: '2fr 1fr 1fr 1fr 0.5fr',
                      gap: 1,
                      p: 1,
                      mb: 1,
                      backgroundColor: '#fff',
                      borderRadius: 2,
                      boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                      alignItems: 'center',
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <img
                          src={item.img}
                          alt={item.name}
                          style={{
                            width: 50,
                            height: 50,
                            objectFit: 'contain',
                            borderRadius: 4,
                          }}
                        />
                       <Typography variant="body1" sx={{ fontSize: '0.95rem', color: '#333' }}>
  {item.title || item.name || 'Unnamed Item'}
</Typography>

                      </Box>

                     
                      <Box sx={{ pl: 7, mt: 0.5 }}>
                        {item.size && (
                          <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#888' }}>
                            Size: {item.size}
                          </Typography>
                        )}
                        {extras.toppings?.length > 0 && (
                          <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#888' }}>
                            Toppings: {extras.toppings.map(t => t.name).join(', ')}
                          </Typography>
                        )}
                        {extras.dips?.length > 0 && (
                          <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#888' }}>
                            Dips: {extras.dips.map(d => d.name).join(', ')}
                          </Typography>
                        )}
                        {extras.note && (
                          <Typography variant="body2" sx={{ fontSize: '0.75rem', color: '#888' }}>
                            Note: {extras.note}
                          </Typography>
                        )}
                      </Box>
                    </Box>

                    <Typography sx={{ fontSize: '0.95rem', color: '#333', textAlign: 'center' }}>
                      ₹{item.price}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, justifyContent: 'center' }}>
                      <Button onClick={() => dispatch(decreaseQty(item.id))}>-</Button>
                      <Typography sx={{ fontSize: '0.9rem' }}>{item.qty}</Typography>
                      <Button onClick={() => dispatch(increaseQty(item.id))}>+</Button>
                    </Box>

                    <Typography sx={{ fontSize: '0.95rem', color: '#333', textAlign: 'center' }}>
                      ₹{totalItemPrice}
                    </Typography>

                    <IconButton onClick={() => dispatch(removeFromCart(item.id))}>
                      <DeleteIcon sx={{ color: '#ff4444' }} />
                    </IconButton>
                  </Box>
                );
              })
            )}

            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Link
                component="button"
                onClick={handleSeeMore}
                sx={{ color: '#36aa13ff', fontSize: '1rem', textDecoration: 'none' }}
              >
                ← See more items
              </Link>
            </Box>
          </Box>

         
          <Box
            sx={{
              width: { xs: '100%', md: '30%' },
              p: 3,
              backgroundColor: '#fff',
              borderRadius: 6,
              border: '1px solid #e0e0e0',
              height: 'fit-content',
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ fontSize: '1.2rem', mb: 2 }}>
              Order Summary
            </Typography>
            <Divider sx={{ my: 1 }} />

            <Typography sx={{ fontSize: '0.9rem', mb: 1 }}>Apply Coupons</Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                sx={{ flexGrow: 1 }}
              />
              <Button variant="contained" onClick={applyCoupon}>
                Apply
              </Button>
            </Box>

            {discount > 0 && (
              <Typography sx={{ fontSize: '0.9rem', color: '#2e7d32', mt: 1 }}>
                Discount: ₹{discount.toFixed(2)}
              </Typography>
            )}

            <Typography sx={{ mt: 2, fontSize: '0.9rem' }}>
              Subtotal: ₹{subtotal.toFixed(2)}
            </Typography>
            <Typography sx={{ fontSize: '0.9rem' }}>
              Shipping: ₹{shipping.toFixed(2)}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography sx={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
              Grand Total: ₹{finalTotal.toFixed(2)}
            </Typography>

            <Button
              variant="contained"
              fullWidth
              sx={{ mt: 3, backgroundColor: '#f00453ff', '&:hover': { backgroundColor: '#c51162' } }}
            >
              Proceed to Checkout →
            </Button>

            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Typography variant="body2" sx={{ fontSize: '0.8rem', color: '#757575' }}>
                Get 15% off on your next order with code NEXT15!
              </Typography>
              <Link
                href="/support"
                sx={{ fontSize: '0.8rem', color: '#9a1b1bff', textDecoration: 'none' }}
              >
                Need Help? Contact Support
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CartPage;
