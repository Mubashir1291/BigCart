import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnBoard1 from "./src/screens/OnBoard1";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignupScreen from "./src/screens/SignupScreen";
import NavBar from "./src/screens/NavBar";
import CatergoryScreen from "./src/screens/CategoryScreen";
import VegitableScreen from "./src/screens/VegitableScreen";
import ForgetPasswordScreen from "./src/screens/ForgetPasswordScreen"
import VerifyNumberScreen from "./src/screens/VerifyNumberScreen"
import OtpScreen from "./src/screens/OtpScreen"
import AboutMeScreen from "./src/screens/AboutMeScreen";
import UserProfileScreen from "./src/screens/UserProfileScreen";
import MyAddressScreen from "./src/screens/MyAddressScreen";
import CreditCardScreen from "./src/screens/CreditCardScreen";
import NotificationScreen from "./src/screens/NotificationScreen";
import AddAddressScreen from "./src/screens/AddAddressScreen";
















const Stack = createNativeStackNavigator();


function App() {
    return (
        <NavigationContainer>


            <Stack.Navigator screenOptions={{ headerShown: false }} >
                {/* <Stack.Screen name="OnBoard1" component={OnBoard1} />
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                <Stack.Screen name="SignInScreen" component={SignInScreen} />
                <Stack.Screen name="SignupScreen" component={SignupScreen} />
                <Stack.Screen name="NavBar" component={NavBar} /> */}
                 {/* <Stack.Screen name="AboutMeScreen" component={AboutMeScreen} />
                <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
                <Stack.Screen name="MyAddressScreen" component={MyAddressScreen} />
                <Stack.Screen name="CreditCardScreen" component={CreditCardScreen} /> */}
                <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
                {/* <Stack.Screen name="AddAddressScreen" component={AddAddressScreen} /> */}


{/* 
                 <Stack.Screen name="CategoryScreen" component={CatergoryScreen} />
                 <Stack.Screen name="VegitableScreen" component={VegitableScreen} />
                 <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} />
                 <Stack.Screen name="VerifyNumberScreen" component={VerifyNumberScreen} />
                 <Stack.Screen name="OtpScreen" component={OtpScreen} /> */}


















            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default App
