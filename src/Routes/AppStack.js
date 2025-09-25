// src/navigation/AppStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavBar from '../screens/NavBar';
import AboutMeScreen from '../screens/AboutMeScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import MyAddressScreen from '../screens/MyAddressScreen';
import NotificationScreen from '../screens/NotificationScreen';
import AddAddressScreen from '../screens/AddAddressScreen';
import OrderSucessScreen from '../screens/OrderSucessScreen';
import TrackOrderScreen from '../screens/TrackOrderScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import FilterScreen from '../screens/FilterScreen';
import ShippingMethodScreen from '../screens/ShippingMethodScreen';
import ShippmentAddressScreen from '../screens/ShippmentAddressScreen';
import TransactionScreen from '../screens/TransactionScreen';
import CartEmptyScreen from '../screens/CartEmptyScreen';
import SearchScreen from '../screens/SearchScreen';
import WriteReviewScreen from '../screens/WriteReviewScreen';
import ReviewScreen from '../screens/ReviewScreen';
import MyOrderScreen from '../screens/MyOrderScreen';
import MyCardScreen from '../screens/MyCardScreen';
import AddCardScreen from '../screens/AddCardScreen';
import PaymentMethodScreen from '../screens/PaymentMethodScreen';
import CategoryScreen from '../screens/CategoryScreen';
import VegitableScreen from '../screens/VegitableScreen';
import CheckoutScreen from '../screens/CheckoutScreen';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="NavBar" component={NavBar} />
      <Stack.Screen name="AboutMeScreen" component={AboutMeScreen} />
      <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
      <Stack.Screen name="MyAddressScreen" component={MyAddressScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="AddAddressScreen" component={AddAddressScreen} />
      <Stack.Screen name="OrderSucessScreen" component={OrderSucessScreen} />
      <Stack.Screen name="TrackOrderScreen" component={TrackOrderScreen} />
      <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
      <Stack.Screen name="FilterScreen" component={FilterScreen} />
      <Stack.Screen name="ShippingMethodScreen" component={ShippingMethodScreen} />
      <Stack.Screen name="ShippmentAddressScreen" component={ShippmentAddressScreen} />
      <Stack.Screen name="TransactionScreen" component={TransactionScreen} />
      <Stack.Screen name="CartEmptyScreen" component={CartEmptyScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="WriteReviewScreen" component={WriteReviewScreen} />
      <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
      <Stack.Screen name="MyOrderScreen" component={MyOrderScreen} />
      <Stack.Screen name="MyCardScreen" component={MyCardScreen} />
      <Stack.Screen name="AddCardScreen" component={AddCardScreen} />
      <Stack.Screen name="PaymentMethodScreen" component={PaymentMethodScreen} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="VegitableScreen" component={VegitableScreen} />
      <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
    </Stack.Navigator>
  );
}
