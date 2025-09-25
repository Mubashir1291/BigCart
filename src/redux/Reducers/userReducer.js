import {createSlice} from '@reduxjs/toolkit';
 
const initialState = {
  isLogin: false,
 isOnboarding:true,

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
  
    logout: () => initialState,
    
  },
});
 
export const {
  setIsLogin,
 setIsOnBoarding,
} = userReducer.actions;
 
export default userReducer.reducer;
export const selectLanguage = state => state.user.appLanguage;