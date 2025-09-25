// src/navigation/Routes.js
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SplashScreen from '../screens/SplashScreen';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoard1 from '../screens/OnBoard1';

const Stack = createNativeStackNavigator();

export default function Routes() {

  const [isSplash, setIsSplash] = useState(true);

  const { isOnboarding, isLogin } = useSelector(state => state.user);

  console.log(isLogin);

  useEffect(() => {
    const timer = setTimeout(() => setIsSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        

      {isSplash ? (
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : isOnboarding === true ? (
        <Stack.Screen name="OnBoard1" component={OnBoard1} />
      ) : isLogin ? (
        <Stack.Screen name="AppStack" component={AppStack} />
      ) : (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      )}




    </Stack.Navigator>
  );
}
