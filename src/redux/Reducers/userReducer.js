import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogin: false,
  isOnboarding: true,
  favourites: [],
  cartItems: [], // [{id, name, price, quantity}]
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLogin = action.payload;
    },

    setIsOnBoarding: (state, action) => {
      state.isOnboarding = action.payload;
    },

    setFavourites: (state, action) => {
      state.favourites = action.payload;
    },

    // ✅ Only stores updated cart array
    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },

    clearCart: (state) => {
      state.cartItems = [];
    },

    logout: () => initialState,
  },
});

export const {
  setIsLogin,
  setIsOnBoarding,
  setFavourites,
  setCartItems,
  clearCart,
} = userReducer.actions;

export default userReducer.reducer;
