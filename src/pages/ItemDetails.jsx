import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/filterSlice';
import { FoodItems } from '../Data/FoodItems';
import { ImageAssets } from '../ImageAssets';

import {
  Container,
  Typography,
  Box,
  Rating,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  Button,
  RadioGroup,
  Radio,
} from '@mui/material';

const TOPPING_PRICES = {
  cheese: 20,
  olives: 15,
};

const DIP_PRICES = {
  mayo: 10,
  ketchup: 5,
};

export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productId = parseInt(id);

  let product = null;
  let category = '';

  for (const foodCategory of FoodItems) {
    const found = foodCategory.items.find((item) => item.id === productId);
    if (found) {
      product = { ...found, img: ImageAssets[found.img] || found.img };
      category = foodCategory.category;
      break;
    }
  }

  const [toppings, setToppings] = useState({ cheese: false, olives: false });
  const [dips, setDips] = useState({ mayo: false, ketchup: false });
  const [note, setNote] = useState('');
  const [size, setSize] = useState('medium');

  if (!product) return <Typography>Product not found</Typography>;

  const calculateExtrasPrice = () => {
    let extra = 0;
    for (const key in toppings) {
      if (toppings[key]) extra += TOPPING_PRICES[key];
    }
    for (const key in dips) {
      if (dips[key]) extra += DIP_PRICES[key];
    }
    return extra;
  };

  const handleAddToCart = () => {
    const selectedToppings = Object.entries(toppings)
      .filter(([_, value]) => value)
      .map(([key]) => ({ name: key, price: TOPPING_PRICES[key] }));

    const selectedDips = Object.entries(dips)
      .filter(([_, value]) => value)
      .map(([key]) => ({ name: key, price: DIP_PRICES[key] }));

    const extras = {
      toppings: selectedToppings,
      dips: selectedDips,
      note,
      size,
    };

    const totalPrice = product.price + calculateExtrasPrice();

    const cartItem = {
      ...product,
      extras,
      size,
      price: totalPrice,
      qty: 1,
    };

    dispatch(addToCart(cartItem));
  };

  return (
    <Container maxWidth="sm" style={{ textAlign: 'center', padding: '2rem 0' ,marginTop:35}}>
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <Box width="100%" height="300px" position="relative">
          <img
            src={product.img}
            alt={product.title}
            style={{
              width: '100%',
              height: '300px',
              objectFit: 'contain',
              borderRadius: 16,
            }}
          />
        </Box>

        <Typography variant="h4" gutterBottom>{product.title}</Typography>
        <Rating value={product.rating} precision={0.1} readOnly />
        <Typography color="textSecondary">{product.description}</Typography>
        <Typography variant="body2" color="textSecondary">
          Serves approx. {Math.ceil(product.calories / 100)} person(s)
        </Typography>

        {category.toLowerCase() === 'pizzas' && (
          <FormControl component="fieldset" style={{ marginTop: 20 }}>
            <FormLabel component="legend">Select Size</FormLabel>
            <RadioGroup row value={size} onChange={(e) => setSize(e.target.value)}>
              <FormControlLabel value="small" control={<Radio />} label="Small" />
              <FormControlLabel value="medium" control={<Radio />} label="Medium" />
              <FormControlLabel value="large" control={<Radio />} label="Large" />
            </RadioGroup>
          </FormControl>
        )}

        <FormControl component="fieldset" style={{ marginTop: 20 }}>
          <FormLabel component="legend">Extra Toppings</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox checked={toppings.cheese} onChange={(e) => setToppings({ ...toppings, cheese: e.target.checked })} />}
              label={`Cheese (+₹${TOPPING_PRICES.cheese})`}
            />
            <FormControlLabel
              control={<Checkbox checked={toppings.olives} onChange={(e) => setToppings({ ...toppings, olives: e.target.checked })} />}
              label={`Olives (+₹${TOPPING_PRICES.olives})`}
            />
          </FormGroup>
        </FormControl>

        <FormControl component="fieldset" style={{ marginTop: 20 }}>
          <FormLabel component="legend">Extra Dips</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={<Checkbox checked={dips.mayo} onChange={(e) => setDips({ ...dips, mayo: e.target.checked })} />}
              label={`Mayo (+₹${DIP_PRICES.mayo})`}
            />
            <FormControlLabel
              control={<Checkbox checked={dips.ketchup} onChange={(e) => setDips({ ...dips, ketchup: e.target.checked })} />}
              label={`Ketchup (+₹${DIP_PRICES.ketchup})`}
            />
          </FormGroup>
        </FormControl>

        <TextField
          label="Add a cooking request"
          multiline
          rows={3}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          fullWidth
          margin="normal"
        />

        <Button variant="contained" color="primary" size="large" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Box>
    </Container>
  );
}
