import { createSlice } from "@reduxjs/toolkit";

// Define the Redux slice for the 'app' state
const appSlice = createSlice({
  name: "app",
  initialState: {
    category: "all",   // Initial category set to 'all'
    cart: [],         // Initial cart is an empty array
    open: false,       // Initial cart open state is false
  },
  reducers: {
    // Reducer to set the category in the state
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    
    // Reducer to add or update an item in the cart
    setCart: (state, action) => {
      // Check if the item already exists in the cart
      const existItem = state.cart.find((item) => item.id === action.payload.id);
      
      existItem ? console.log(true) : console.log(false);
      
      // If the item exists, update its quantity; otherwise, add it to the cart
      if (existItem) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    
    // Reducer to set the open/closed state of the cart
    setOpenCart: (state, action) => {
      state.open = action.payload;
    },
    
    // Reducer to remove an item from the cart
    removeCartItem: (state, action) => {
      state.cart = state.cart.filter((item) => {
        return item.id !== action.payload;
      });
    },
    
    // Reducer to clear all items from the cart
    clearAllCart: (state) => {
      state.cart = [];
    },
    
    // Reducer to increment the quantity and update the price of an item in the cart
    incrementQuantity: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              price: item.price + item.price,
              quantity: item.quantity + 1,
            }
          : item
      );
    },
    
    // Reducer to decrement the quantity of an item in the cart
    decrementQuantity: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    },
  },
});

// Export the action creators and the reducer from the slice
export const {
  setCategory,
  setCart,
  setOpenCart,
  removeCartItem,
  incrementQuantity,
  decrementQuantity,
  getTotalPrice,
  clearAllCart,
} = appSlice.actions;

export default appSlice.reducer;
