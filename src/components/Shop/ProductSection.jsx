import React, { useState } from 'react';
import { Box, Typography, MenuItem, Select, IconButton } from '@mui/material';
import ProductCard from '../../Common/ProductCard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { FoodItems } from '../../Data/FoodItems';

const categories = ['Pizzas', 'Burgers', 'Desserts'];

const ProductSection = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const currentCategory = categories[categoryIndex];

  const handleSelectChange = (e) => {
    const index = categories.indexOf(e.target.value);
    if (index !== -1) setCategoryIndex(index);
  };

  const handleNext = () => {
    setCategoryIndex((prev) => (prev + 1) % categories.length);
  };

  const handlePrev = () => {
    setCategoryIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  const categoryData = FoodItems.find((cat) => cat.category === currentCategory);
  const products = categoryData?.items || [];

  return (
    <Box sx={{ py: 8, px: { xs: 0, md: 6 }, bgcolor: '#fff', width: '100%', mx: 'auto',marginTop:'20px' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          mx: 'auto',
          mb: 4,
          px: 2, // Add some padding for very small screens to avoid edge-cutting
        }}
      >
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Typography fontWeight="bold" fontSize={{ xs: 22, md: 26 }}>
            BEST SELLING
          </Typography>
          <Typography fontWeight="bold" fontSize={{ xs: 22, md: 26 }}>
            of
          </Typography>
          <Select
            value={currentCategory}
            onChange={handleSelectChange}
            size="small"
            sx={{ fontWeight: 600, borderRadius: 2 }}
          >
            {categories.map((cat) => (
              <MenuItem value={cat} key={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton onClick={handlePrev}>
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={handleNext}>
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* Wrapper for responsive centering on small screens */}
      <Box
        sx={{
          display: { xs: 'flex', sm: 'grid' },
          flexDirection: { xs: 'column', sm: 'initial' },
          alignItems: { xs: 'center', sm: 'initial' },
          gridTemplateColumns: {
            sm: 'repeat(auto-fit, minmax(250px, 1fr))',
          },
          gap: 3,
          maxWidth: '1200px',
          mx: 'auto',
          px: { xs: 2, sm: 0 }, // Add padding only on small screens to avoid overflow
        }}
      >
        {products.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </Box>
    </Box>
  );
};

export default ProductSection;
