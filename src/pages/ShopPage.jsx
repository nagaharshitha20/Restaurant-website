import React, { useState,useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Grid,
  Container,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleCategory,
  setSearchQuery,
  setSortType,
  toggleTag,
} from '../redux/filterSlice';
import { FoodItems } from '../Data/FoodItems';
import FilterSidebar from '../Common/FilterSidebar';
import ShopProducts from '../Common/ShopProducts';

const sortOptions = [
  { value: 'default', label: 'Default' },
  { value: 'priceLowHigh', label: 'Price: Low to High' },
  { value: 'priceHighLow', label: 'Price: High to Low' },
];

const ShopPage = () => {
  const dispatch = useDispatch();
  const { selectedCategories, searchQuery, sortType, priceRange, tags } = useSelector(
    (state) => state.filters
  );

  const [showCartMsg, setShowCartMsg] = useState(false); 
const [customFilter, setCustomFilter] = useState(null);

  const handleShowCartMessage = () => {
    setShowCartMsg(true);
    setTimeout(() => setShowCartMsg(false), 2000);
  };
useEffect(() => {
  if (showCartMsg) {
    const timer = setTimeout(() => setShowCartMsg(false), 3000);
    return () => clearTimeout(timer);
  }
}, [showCartMsg]);
  const getFilteredItems = () => {
    let items = [];


    if (selectedCategories.length === 0) {
  // When 'All' is selected, shuffle the combined array
  items = FoodItems.flatMap((cat) => cat.items).sort(() => Math.random() - 0.5);
} else {
  items = FoodItems.filter((cat) =>
    selectedCategories.includes(cat.category)
  ).flatMap((cat) => cat.items);
}


    if (searchQuery) {
      items = items.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    items = items.filter(
      (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
    );

    if (tags.vegOnly) {
      items = items.filter((item) => item.type === 'veg');
    }
    if (tags.nonVegOnly) {
      items = items.filter((item) => item.type === 'nonveg');
    }
    if (tags.fastDelivery) {
      items = items.filter((item) => item.deliveryTime <= 15);
    }
    if (tags.halfOff) {
      items = items.filter((item) => item.discount >= 50);
    }
    if (tags.pureVeg) {
      items = items.filter((item) => item.pureVeg);
    }
    if (tags.recommended) {
      items = items.filter((item) => item.recommended);
    }
 if (customFilter === 'bestSellers') {
    items = items.filter((item) => item.rating > 4.5);
  } else if (customFilter === 'topDeals') {
    items = items.filter((item) => item.discount > 40);
  } else if (customFilter === 'weeklySpecials') {
    items = items.filter((item) => item.isCombo || item.isWeeklySpecial); // Customize as per your data
  }
    if (sortType === 'priceLowHigh') {
      items.sort((a, b) => a.price - b.price);
    } else if (sortType === 'priceHighLow') {
      items.sort((a, b) => b.price - a.price);
    }

    return items;
  };

  const itemsToRender = getFilteredItems();

  return (
    <Box sx={{ pt: { xs: 10, md: 12 }, pb: 6 }}>
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
       
          <Box sx={{ width: { xs: '100%', md: 260 }, flexShrink: 0 }}>
            <FilterSidebar />
          </Box>

      
          <Box sx={{ flexGrow: 1, minHeight: '100vh' }}>
         
          {showCartMsg && (
  <Box
    sx={{
      position: 'fixed',
      top: 66,
      left:'50%',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'rgba(60, 219, 75, 0.1)', 
      color: 'rgba(17, 217, 90, 1)',
      border: '1px solid rgba(17, 217, 90, 1)',
      borderRadius: '3px',
      px: 2,
      py: 0.85,
      fontSize: '14px',
      fontWeight: 500,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      zIndex: 1500,
    }}
  >
    {/* <span style={{ marginRight: 8, fontSize: 18 ,}}>❗</span> */}
    Item added to the Cart!
  </Box>
)}



        
            <Box
              sx={{
                position: 'sticky',
                top: 0,
                zIndex: 10,
                backgroundColor: '#fff',
                py: 2,
                mb: 2,
                mx:'auto',
                width:'90%',
                borderBottom: '1px solid #eee',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                }}
              >
                <TextField
                  placeholder="Search products..."
                  variant="outlined"
                  size="small"
                  value={searchQuery}
                  onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                  sx={{ flexGrow: 1, maxWidth: 600 }}
                />
               <Box sx={{ display: 'flex', gap: 3, minHeight: '40px' }}>
  <Button
    variant={customFilter === 'bestSellers' ? 'contained' : 'outlined'}
    size="small"
    sx={{ color: '#000', borderColor: '#ccc' }}
    onClick={() => setCustomFilter(customFilter === 'bestSellers' ? null : 'bestSellers')}
  >
    Best Sellers
  </Button>

  <Button
    variant={customFilter === 'weeklySpecials' ? 'contained' : 'outlined'}
    size="small"
    sx={{ color: '#000', borderColor: '#ccc' }}
    onClick={() => setCustomFilter(customFilter === 'weeklySpecials' ? null : 'weeklySpecials')}
  >
    Weekly Specials
  </Button>

  <Button
    variant={customFilter === 'topDeals' ? 'contained' : 'outlined'}
    size="small"
    sx={{ color: '#000', borderColor: '#ccc' }}
    onClick={() => setCustomFilter(customFilter === 'topDeals' ? null : 'topDeals')}
  >
    Top Deals
  </Button>
</Box>

                <TextField
                  select
                  size="small"
                  label="Sort"
                  value={sortType}
                  onChange={(e) => dispatch(setSortType(e.target.value))}
                  sx={{ minWidth: 160 }}
                >
                  {sortOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>

              
              <Stack direction="row" spacing={2} mt={2} flexWrap="wrap">
                <Chip label="Veg" onClick={() => dispatch(toggleTag('vegOnly'))} color={tags.vegOnly ? 'success' : 'default'} variant={tags.vegOnly ? 'filled' : 'outlined'} />
                <Chip label="Non-Veg" onClick={() => dispatch(toggleTag('nonVegOnly'))} color={tags.nonVegOnly ? 'error' : 'default'} variant={tags.nonVegOnly ? 'filled' : 'outlined'} />
                <Chip label="50% Off" onClick={() => dispatch(toggleTag('halfOff'))} variant={tags.halfOff ? 'filled' : 'outlined'} color="secondary" />
                <Chip label="Under 15 mins" onClick={() => dispatch(toggleTag('fastDelivery'))} variant={tags.fastDelivery ? 'filled' : 'outlined'} />
                <Chip label="Pure Veg" onClick={() => dispatch(toggleTag('pureVeg'))} variant={tags.pureVeg ? 'filled' : 'outlined'} color="success" />
                <Chip label="Recommended" onClick={() => dispatch(toggleTag('recommended'))} variant={tags.recommended ? 'filled' : 'outlined'} />
              </Stack>
            </Box>

           
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2, ml: 8 }}>
              Showing {itemsToRender.length} items
            </Typography>

      
            <Grid container spacing={4} marginLeft={8}>
              {itemsToRender.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={5} key={index}>
                  <ShopProducts
                    id={item.id}
                    img={item.img}
                    name={item.title}
                    price={item.price}
                    oldPrice={item.oldPrice}
                    rating={item.rating}
                    badge={item.badge}
                    deliveryTime={item.deliveryTime}
                    discount={item.discount}
                    onAddToCart={handleShowCartMessage} 
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ShopPage;
