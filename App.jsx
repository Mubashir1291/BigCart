import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnBoard1 from './src/screens/OnBoard1';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignupScreen from './src/screens/SignupScreen';
import NavBar from './src/screens/NavBar';
import CatergoryScreen from './src/screens/CategoryScreen';
import VegitableScreen from './src/screens/VegitableScreen';
import ForgetPasswordScreen from './src/screens/ForgetPasswordScreen';
import VerifyNumberScreen from './src/screens/VerifyNumberScreen';
import OtpScreen from './src/screens/OtpScreen';
import AboutMeScreen from './src/screens/AboutMeScreen';
import UserProfileScreen from './src/screens/UserProfileScreen';
import MyAddressScreen from './src/screens/MyAddressScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import AddAddressScreen from './src/screens/AddAddressScreen';
import OrderSucessScreen from './src/screens/OrderSucessScreen';
import TrackOrderScreen from './src/screens/TrackOrderScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import FilterScreen from './src/screens/FilterScreen';
// import CartScreen from './src/screens/CartScreen';
import ShippingMethodScreen from './src/screens/ShippingMethodScreen';
import ShippmentAddressScreen from './src/screens/ShippmentAddressScreen';
import TransactionScreen from './src/screens/TransactionScreen';
import CartEmptyScreen from './src/screens/CartEmptyScreen';
import SearchScreen from './src/screens/SearchScreen';
import WriteReviewScreen from './src/screens/WriteReviewScreen';
import MyOrderScreen from './src/screens/MyOrderScreen';
import MyCardScreen from './src/screens/MyCardScreen';
import AddCardScreen from './src/screens/AddCardScreen';
import PaymentMethodScreen from './src/screens/PaymentMethodScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import SplashScreen from './src/screens/SplashScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';


import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

function App() {
  const [isSplash,setIsSplash]=useState(true)
  useEffect(()=>{  
  setTimeout(()=>{
  setIsSplash()
  },3000)
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {  isSplash?  ( <Stack.Screen name="SplashScreen" component={SplashScreen} />) : ( <Stack.Screen name="OnBoard1" component={OnBoard1}/>)}

        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="NavBar" component={NavBar} />

        <Stack.Screen name="AboutMeScreen" component={AboutMeScreen} />
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
        <Stack.Screen name="MyAddressScreen" component={MyAddressScreen} />
        <Stack.Screen name="NotificationScreen"component={NotificationScreen}
        />
        <Stack.Screen name="AddAddressScreen" component={AddAddressScreen} />
        <Stack.Screen name="OrderSucessScreen" component={OrderSucessScreen} />
        <Stack.Screen name="TrackOrderScreen" component={TrackOrderScreen} />
        <Stack.Screen name="ProductDetailsScreen"component={ProductDetailsScreen}
        />
        <Stack.Screen name="FilterScreen" component={FilterScreen} />
        {/* <Stack.Screen name="CartScreen" component={CartScreen} /> */}
        <Stack.Screen name="ShippingMethodScreen"component={ShippingMethodScreen}
        />
        <Stack.Screen name="ShippmentAddressScreen"component={ShippmentAddressScreen}
        />
        <Stack.Screen name="TransactionScreen" component={TransactionScreen} />
        <Stack.Screen name="CartEmptyScreen" component={CartEmptyScreen} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
        <Stack.Screen name="WriteReviewScreen" component={WriteReviewScreen} />
        <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
        <Stack.Screen name="MyOrderScreen" component={MyOrderScreen} />
        <Stack.Screen name="MyCardScreen" component={MyCardScreen} />
        <Stack.Screen name="AddCardScreen" component={AddCardScreen} />
        <Stack.Screen name="PaymentMethodScreen"component={PaymentMethodScreen}
        />

        <Stack.Screen name="CategoryScreen" component={CatergoryScreen} />
        <Stack.Screen name="VegitableScreen" component={VegitableScreen} />
        <Stack.Screen name="ForgetPasswordScreen"component={ForgetPasswordScreen}
        />
        <Stack.Screen name="VerifyNumberScreen"component={VerifyNumberScreen}
        />
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />

        <Stack.Screen name="OtpScreen" component={OtpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
