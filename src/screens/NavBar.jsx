import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreen from "./HomeScreen";
import { View, Image } from 'react-native';
import { SimpleText } from '../styles/colors/colorsCode';
import { HeartIcon, HomeIcon, UserIcon } from '../assets/Index';
import UserProfileScreen from './UserProfileScreen';
import FavItemScreen from './FavItemScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopRightRadius: 25,
                    borderTopLeftRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 60,
                },
            }}
        >
            <Tab.Screen
                name="Homescreen"
                component={Homescreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <Image
                                source={HomeIcon}
                                resizeMode='contain'
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: focused ? SimpleText : null,
                                }}
                            />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="UserProfileScreen"
                component={UserProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', marginTop: 8, width: 70 }}>
                            <Image
                                source={UserIcon}
                                resizeMode='contain'
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: focused ? SimpleText : null,
                                }}
                            />
                        </View>
                    ),
                }}
            />

            <Tab.Screen
                name="FavItemScreen"
                component={FavItemScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', marginTop: 12, width: 70 }}>
                            <Image
                                source={HeartIcon}
                                resizeMode='contain'
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: focused ? SimpleText : null,
                                }}
                            />
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;