import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Provider, useSelector} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
// import OnBoard1 from './src/screens/OnBoard1';
// import WelcomeScreen from './src/screens/WelcomeScreen';
// import SignInScreen from './src/screens/SignInScreen';
// import SignupScreen from './src/screens/SignupScreen';
// import NavBar from './src/screens/NavBar';
// import CatergoryScreen from './src/screens/CategoryScreen';
// import VegitableScreen from './src/screens/VegitableScreen';
// import ForgetPasswordScreen from './src/screens/ForgetPasswordScreen';
// import VerifyNumberScreen from './src/screens/VerifyNumberScreen';
// import OtpScreen from './src/screens/OtpScreen';
// import AboutMeScreen from './src/screens/AboutMeScreen';
// import UserProfileScreen from './src/screens/UserProfileScreen';
// import MyAddressScreen from './src/screens/MyAddressScreen';
// import NotificationScreen from './src/screens/NotificationScreen';
// import AddAddressScreen from './src/screens/AddAddressScreen';
// import OrderSucessScreen from './src/screens/OrderSucessScreen';
// import TrackOrderScreen from './src/screens/TrackOrderScreen';
// import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
// import FilterScreen from './src/screens/FilterScreen';
// // import CartScreen from './src/screens/CartScreen';
// import ShippingMethodScreen from './src/screens/ShippingMethodScreen';
// import ShippmentAddressScreen from './src/screens/ShippmentAddressScreen';
// import TransactionScreen from './src/screens/TransactionScreen';
// import CartEmptyScreen from './src/screens/CartEmptyScreen';
// import SearchScreen from './src/screens/SearchScreen';
// import WriteReviewScreen from './src/screens/WriteReviewScreen';
// import MyOrderScreen from './src/screens/MyOrderScreen';
// import MyCardScreen from './src/screens/MyCardScreen';
// import AddCardScreen from './src/screens/AddCardScreen';
// import PaymentMethodScreen from './src/screens/PaymentMethodScreen';
// import ReviewScreen from './src/screens/ReviewScreen';
// import SplashScreen from './src/screens/SplashScreen';
// import CheckoutScreen from './src/screens/CheckoutScreen';
import Routes from './src/Routes/Routes'

import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

function App() {
  const [isSplash,setIsSplash]=useState(true)
  useEffect(()=>{  
  setTimeout(()=>{
  setIsSplash(false)
  },3000)
  },[])

  return (
  <Provider store={store}>
      <PersistGate persistor={persistor}>
    <NavigationContainer>
     <Routes/>
    </NavigationContainer>
   </PersistGate>
    </Provider>
  
  );
}

export default App;
