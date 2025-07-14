import React from 'react';
import {
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Divider,
  Slider,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { FoodItems } from '../Data/FoodItems';
import { toggleCategory, setPriceRange } from '../redux/filterSlice';

const FilterSidebar = () => {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.filters.selectedCategories);
  const priceRange = useSelector((state) => state.filters.priceRange);

  const categories = [...new Set(FoodItems.map((item) => item.category))];

  return (
    <Box
      sx={{
        px: 2,
        py: 3,
        borderRadius: 2,
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        position: 'sticky',
        top: 100,
        height:'100vh',
        position:'fixed',
        minWidth: 220,
      }}
    >
      {/* Categories */}
      <Typography variant="h6" fontWeight={600} mb={1}>
        Categories
      </Typography>

      <FormGroup>
  {/* ALL Checkbox */}
  <FormControlLabel
    control={
      <Checkbox
        checked={selected.length === 0}
        onChange={() => dispatch(toggleCategory(null))} // We'll modify the reducer for this
      />
    }
    label="All"
    sx={{ mb: 0.5 }}
  />

  {/* Category checkboxes */}
  {categories.map((cat, i) => (
    <FormControlLabel
      key={i}
      control={
        <Checkbox
          checked={selected.includes(cat)}
          onChange={() => dispatch(toggleCategory(cat))}
        />
      }
      label={cat}
      sx={{ mb: 0.5 }}
    />
  ))}
</FormGroup>


      <Divider sx={{ my: 3 }} />

      {/* Price Slider */}
      <Typography variant="h6" fontWeight={600} gutterBottom>
        Price Range
      </Typography>
      <Slider
        value={priceRange}
        onChange={(e, value) => dispatch(setPriceRange(value))}
        valueLabelDisplay="auto"
        min={0}
        max={1000}
        sx={{ color: '#ff9800' }}
      />
      <Typography variant="body2" mt={1}>
        ₹{priceRange[0]} - ₹{priceRange[1]}
      </Typography>
    </Box>
  );
};

export default FilterSidebar;
