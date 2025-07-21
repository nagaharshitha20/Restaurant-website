import React, { useState,useEffect,useRef } from 'react';
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
  setCategory,
  setSearchQuery,
  setSortType,
  toggleTag,
} from '../redux/filterSlice';
import { FoodItems } from '../Data/FoodItems';
import FilterSidebar from '../Common/FilterSidebar';
import ShopProducts from '../Common/ShopProducts';
import { useSearchParams } from 'react-router-dom';

const sortOptions = [
  { value: 'default', label: 'Default' },
  { value: 'priceLowHigh', label: 'Price: Low to High' },
  { value: 'priceHighLow', label: 'Price: High to Low' },
];

const ShopPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
const searchParam = params.get('search') || '';
const categoryParam = params.get('category');
const initializedCategory = useRef(false); 
useEffect(() => {
  dispatch(setSearchQuery(searchParam));
}, [searchParam, dispatch]);

  const { selectedCategories, searchQuery, sortType, priceRange, tags } = useSelector(
    (state) => state.filters
  );
useEffect(() => {
  if (categoryParam && !initializedCategory.current) {
    dispatch(setCategory(categoryParam)); // now it REPLACES previous ones
    dispatch(setSearchQuery('')); // optional: clear search
    setCustomFilter(null);        // optional: reset filters
    initializedCategory.current = true;
  }
}, [categoryParam, dispatch]);

  const [showCartMsg, setShowCartMsg] = useState(false); 
const [customFilter, setCustomFilter] = useState(null);
const [initialItems, setInitialItems] = useState([]);

useEffect(() => {
  // Only run once
  const randomItems = FoodItems.flatMap((cat) => cat.items).sort(() => Math.random() - 0.5);
  setInitialItems(randomItems);
}, []);

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

items = initialItems;


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
    mx: 'auto',
    width: '90%',
    borderBottom: '1px solid #eee',
  }}
>
  {/* Row 1: Search and Sort */}
  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'row', sm: 'row', md: 'row' },
      flexWrap: 'wrap',
      gap: {xs:1,md:2},
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <TextField
      placeholder="Search products..."
      variant="outlined"
      size="small"
      value={searchQuery}
      onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      sx={{
        flexGrow: 1,
        minWidth: { xs: '60%', sm: '65%', md: '70%' },
        maxWidth: { xs: '60%', sm: '65%', md: '100%' },
        fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
        '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
        },
      }}
    />

    <TextField
      select
      size="small"
      label="Sort"
      value={sortType}
      onChange={(e) => dispatch(setSortType(e.target.value))}
      sx={{
        minWidth: { xs: '35%', sm: '30%', md: 160 },
        maxWidth: { xs: '30%', sm: '30%', md: 160 },
        '& .MuiOutlinedInput-root': {
          borderRadius: '10px',
        },
      }}
    >
      {sortOptions.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  </Box>

 
  <Box
    sx={{
      display: 'flex',
      gap: 1.5,
      mt: 2,
      flexWrap: 'wrap',
    }}
  >
    {[
      { label: 'Best Sellers', key: 'bestSellers' },
      { label: 'Weekly Specials', key: 'weeklySpecials' },
      { label: 'Top Deals', key: 'topDeals' },
    ].map(({ label, key }) => (
      <Button
        key={key}
        variant={customFilter === key ? 'contained' : 'outlined'}
        size="small"
        onClick={() => setCustomFilter(customFilter === key ? null : key)}
        sx={{
          borderRadius: '20px',
          color: customFilter === key ? '#fff' : '#333',
          backgroundColor: customFilter === key ? '#f44336' : '#fff',
          borderColor: '#ccc',
          '&:hover': {
            backgroundColor: '#f44336',
            color: '#fff',
          },
        }}
      >
        {label}
      </Button>
    ))}
  </Box>

  {/* Row 3: Tags (Chips) */}
  <Box
    sx={{
      mt: 2,
      overflowX: { xs: 'auto', md: 'visible' },
      display: 'flex',
      gap: 1.5,
      pb: 1,
      whiteSpace: 'nowrap',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    }}
  >
    <Chip
      label="Veg"
      onClick={() => dispatch(toggleTag('vegOnly'))}
      color={tags.vegOnly ? 'success' : 'default'}
      variant={tags.vegOnly ? 'filled' : 'outlined'}
    />
    <Chip
      label="Non-Veg"
      onClick={() => dispatch(toggleTag('nonVegOnly'))}
      color={tags.nonVegOnly ? 'error' : 'default'}
      variant={tags.nonVegOnly ? 'filled' : 'outlined'}
    />
    <Chip
      label="50% Off"
      onClick={() => dispatch(toggleTag('halfOff'))}
      color="secondary"
      variant={tags.halfOff ? 'filled' : 'outlined'}
    />
    <Chip
      label="Under 15 mins"
      onClick={() => dispatch(toggleTag('fastDelivery'))}
      variant={tags.fastDelivery ? 'filled' : 'outlined'}
    />
    <Chip
      label="Pure Veg"
      onClick={() => dispatch(toggleTag('pureVeg'))}
      color="success"
      variant={tags.pureVeg ? 'filled' : 'outlined'}
    />
    <Chip
      label="Recommended"
      onClick={() => dispatch(toggleTag('recommended'))}
      variant={tags.recommended ? 'filled' : 'outlined'}
    />
  </Box>
</Box>

           
            <Typography variant="h6" fontWeight={600} sx={{ mb: 2, ml: 8 }}>
              Showing {itemsToRender.length} items
            </Typography>

      
           {/* Responsive Product Grid */}
{/* ===== Mobile Version: Horizontally Scrolling Rows ===== */}
<Box sx={{ display: { xs: 'block', md: 'none' }, ml: 1, mt: 4 ,}}>
  {[0, 10, 20].map((startIndex, rowIndex) => {
    const rowItems = itemsToRender.slice(startIndex, startIndex + 10);
    const isLastRow = rowIndex === 2;

    return (
     <Box
  key={rowIndex}
  sx={{
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    display: 'flex',
    gap: 2,
    mb: 3,
    pb: 1,
    scrollSnapType: 'x mandatory',
    scrollbarWidth: 'none', // Firefox
    '&::-webkit-scrollbar': {
      display: 'none', // Chrome, Safari
    },
  }}
>

        {rowItems.map((item, i) => (
          <Box
            key={i}
            component="span"
            sx={{ display: 'inline-block', scrollSnapAlign: 'start' }}
          >
            <ShopProducts
              id={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              oldPrice={item.oldPrice}
              rating={item.rating}
              badge={item.badge}
              deliveryTime={item.deliveryTime}
              discount={item.discount}
              onAddToCart={handleShowCartMessage}
              small
            />
      {/* <ShopProducts products={products} /> */}


          </Box>
        ))}
        {isLastRow && (
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '140px',
              border: '1px dashed #ccc',
              borderRadius: 2,
              mx: 1,
            }}
          >
            <Button
              variant="text"
              size="small"
              onClick={() => alert('Load more...')}
              sx={{ whiteSpace: 'nowrap' }}
            >
              View More →
            </Button>
          </Box>
        )}
      </Box>
    );
  })}
</Box>


{/* Desktop Grid */}
<Grid
  container
  spacing={4}
  marginLeft={8}
  sx={{ display: { xs: 'none', md: 'flex' } }}
>
  {itemsToRender.map((item, index) => (
    <Grid item xs={12} sm={6} md={4} lg={5} key={index}>
      <ShopProducts
        id={item.id}
        img={item.img}
        title={item.title}
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
