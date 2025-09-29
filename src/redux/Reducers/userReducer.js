import {createSlice} from '@reduxjs/toolkit';
 
const initialState = {
  isLogin: false,
 isOnboarding:true,
 favourites:[],
cartItems:[]


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

      setCartItems: (state, action) => {
      state. cartItems = action.payload;
    },

  

    logout: () => initialState,
    
  },

  });
 
export const {
 setIsLogin,
 setIsOnBoarding,
 setFavourites,
 setDecrease,
 setIncrease,
 setCartItems
 } = userReducer.actions;
 
export default userReducer.reducer;



 

