import React from 'react';
import { Box, Typography, IconButton,Snackbar,Alert } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/filterSlice';
import { auth } from "../Firebase"; 
import { useNavigate } from "react-router-dom"; 
import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase"; // adjust path if your Firebase config is elsewhere



const ProductCard = ({ img, title, price, oldPrice, badge, rating = 5, ...item }) => {
  const navigate = useNavigate(); 
const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const dispatch = useDispatch();

const handleAddToCart = () => {
  const isLoggedIn = !!auth.currentUser;

  if (!isLoggedIn) {
    setOpenSnackbar(true); 
    // Optionally: navigate("/login"); 
    return;
  }

  dispatch(
    addToCart({
      ...item,
      title,
      img,
      price,
      id: item.id,
      quantity: 1,
    })
  );
};


  return (
    <Box
      sx={{
        width: 200,
        height: 300,
        borderRadius: 2,
        overflow: 'hidden',
        boxShadow: 3,
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <Box sx={{ position: 'relative', height: '70%' }}>
        <Box
          component="img"
          src={img}
          alt={title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
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

      <Box sx={{ p: 2, flexGrow: 1 }}>
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

        <Typography fontWeight={600} fontSize={14} mb={0.5} noWrap>
          {title}
        </Typography>

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

          <IconButton
            size="small"
            sx={{ bgcolor: '#f5f5f5' }}
            onClick={handleAddToCart}
            title="Add to Cart"
          >
            <ShoppingBagIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
      <Snackbar
  open={openSnackbar}
  autoHideDuration={3000}
  onClose={() => setOpenSnackbar(false)}
  anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
>
  <Alert
    onClose={() => setOpenSnackbar(false)}
    variant="filled"
    sx={{
      backgroundColor: "#ffe5e5",
      color: "#d32f2f",
      border: "1px solid #f44336",
      fontWeight: 600,
    }}
  >
    Please login to add items to your cart.
  </Alert>
</Snackbar>

    </Box>
  );
};

export default ProductCard;
