import React, { useState } from 'react';
import { Box, Typography, MenuItem, Select, IconButton } from '@mui/material';
import ProductCard from '../Common/ProductCard';
import { ImageAssets } from '../ImageAssets';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const productData = {
  Vegetables: [
    { img: ImageAssets.v1, name: 'Green Broccoli', price: 8, oldPrice: 10, badge: '-15%' },
    { img: ImageAssets.v2, name: 'Purple Onion', price: 10, oldPrice: 12, badge: '-20%' },
    { img: ImageAssets.v3, name: 'Chile Bell Pepper', price: 18 },
    { img: ImageAssets.v4, name: 'Green Cabbage', price: 15 },
     { img: ImageAssets.v5, name: 'Apple Fuji', price: 6 },
    { img: ImageAssets.v6, name: 'Orange', price: 9 },
    { img: ImageAssets.v7, name: 'Grapes', price: 12, oldPrice: 14, badge: '-10%' },
    { img: ImageAssets.v8, name: 'Cherry', price: 13 },
  ],
  Fruits: [
    { img: ImageAssets.v5, name: 'Apple Fuji', price: 6 },
    { img: ImageAssets.v6, name: 'Orange', price: 9 },
    { img: ImageAssets.v7, name: 'Grapes', price: 12, oldPrice: 14, badge: '-10%' },
    { img: ImageAssets.v8, name: 'Cherry', price: 13 },
  ],
  Bakery: [
    { img: ImageAssets.v3, name: 'Croissant', price: 4 },
    { img: ImageAssets.v1, name: 'Baguette', price: 6 },
    { img: ImageAssets.v2, name: 'Chocolate Donut', price: 5, badge: '-5%' },
    { img: ImageAssets.v6, name: 'Brownie', price: 7 },
  ],
};

const categories = Object.keys(productData);

const ProductSection = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);

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

  const currentCategory = categories[categoryIndex];
  const products = productData[currentCategory];

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 6 }, bgcolor: '#fff' }}>
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          mx: 'auto',
          mb: 4,
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

      
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 3,
          justifyContent: 'center',
          maxWidth: '1200px',
          mx: 'auto',
        }}
      >
        {products.map((item, index) => (
          <ProductCard key={index} {...item} />
          
        ))}
      </Box>
    </Box>
  );
};

export default ProductSection;
