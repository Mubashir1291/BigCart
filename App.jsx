import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnBoard1 from "./src/screens/OnBoard1";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignupScreen from "./src/screens/SignupScreen";
import NavBar from "./src/screens/NavBar";
import CatergoryScreen from "./src/screens/CategoryScreen";
import VegitableScreen from "./src/screens/VegitableScreen";









const Stack = createNativeStackNavigator();


function App() {
    return (
        <NavigationContainer>


            <Stack.Navigator screenOptions={{ headerShown: false }} >
                {/* <Stack.Screen name="OnBoard1" component={OnBoard1} />
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                <Stack.Screen name="SignInScreen" component={SignInScreen} />
                <Stack.Screen name="SignupScreen" component={SignupScreen} /> */}
                {/* <Stack.Screen name="NavBar" component={NavBar} />
                 <Stack.Screen name="CategoryScreen" component={CatergoryScreen} /> */}
                 <Stack.Screen name="VegitableScreen" component={VegitableScreen} />
















            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default App
