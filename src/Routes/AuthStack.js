// src/navigation/AuthStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoard1 from '../screens/OnBoard1';
import WelcomeScreen from '../screens/WelcomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import VerifyNumberScreen from '../screens/VerifyNumberScreen';
import OtpScreen from '../screens/OtpScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
   
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
      <Stack.Screen name="VerifyNumberScreen" component={VerifyNumberScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      
    </Stack.Navigator>
  );
}
