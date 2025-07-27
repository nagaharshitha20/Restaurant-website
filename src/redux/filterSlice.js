import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  selectedCategories: [],
  searchQuery: '',
  sortType: 'default',
  priceRange: [0, 1000],
  tags: {
    vegOnly: false,
    fastDelivery: false,
    halfOff: false,
  },
  cart: [],
};
const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
    setCategory: (state, action) => {
  state.selectedCategories = [action.payload]; 
},

    toggleCategory: (state, action) => {
      const category = action.payload;
      if (category === null) {
        state.selectedCategories = [];
        return;
      }
      if (state.selectedCategories.includes(category)) {
        state.selectedCategories = state.selectedCategories.filter((c) => c !== category);
      } else {
        state.selectedCategories.push(category);
      }
    },
    toggleTag: (state, action) => {
      const tag = action.payload;
      state.tags[tag] = !state.tags[tag];
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
    },

    
    setCart: (state, action) => {
      state.cart = action.payload; 
    },
      addToCart: (state, action) => {
      const item = action.payload;
      const exists = state.cart.find((i) => i.id === item.id);

      if (exists) {
        exists.qty += 1;
      } else {
        state.cart.push({ ...item, qty: 1 });
      }
    },

    increaseQty: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item) item.qty += 1;
    },

    decreaseQty: (state, action) => {
      const item = state.cart.find((i) => i.id === action.payload);
      if (item && item.qty > 1) {
        item.qty -= 1;
      } else {
        state.cart = state.cart.filter((i) => i.id !== action.payload);
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((i) => i.id !== action.payload);
    },
    clearCart: (state) => {
      state.cart = [];
    }
  },
});

export const {
  setSearchQuery,
  setSortType,
  toggleCategory,
  setCategory,
  toggleTag,
  setPriceRange,
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
  setCart 
} = filterSlice.actions;

export default filterSlice.reducer;
