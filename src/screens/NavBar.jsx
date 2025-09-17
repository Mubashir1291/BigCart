import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View, Image } from 'react-native';
import { MidGrey, Primary, SimpleText, TextClr, White } from '../styles/colors/colorsCode';
import { CartIcon, GreenCartIcon, HeartIcon, HomeIcon, SignUpIcon, UserIcon } from '../assets/Index';
import UserProfileScreen from './UserProfileScreen';
import FavItemScreen from './FavItemScreen';
import Homescreen from "./HomeScreen";
import CartEmptyScreen from "./CartEmptyScreen";
import { RF } from '../Utils/Responsive';
import { useState } from 'react';

const Tab = createBottomTabNavigator();

const Tabs = () => {

    // const [ Cart , setCart] = useState ();
    // const [ FavHeart , setFavHeart] = useState ();
    // const [ Home , setHome] = useState ();
    // const [ User , setUser] = useState ();


    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    borderTopRightRadius: RF(25),
                    borderTopLeftRadius: RF(25),
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: RF(60),
                },
            }}
        >
            <Tab.Screen
                name="Homescreen"
                component={Homescreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent:'center',
                         marginTop: RF(10),...(focused && {width:RF(55),height:RF(55),borderRadius:RF(50),
                         marginBottom:RF(20),borderColor: White, borderWidth:RF(2),
                         backgroundColor: focused ? Primary : null
                         })
                         }}>
                            <Image
                                source={HomeIcon}
                                resizeMode='contain'
                                style={{
                                    height:focused?  RF(25) : RF(25),
                                    width: focused?  RF(25):RF(25),
                                    tintColor: focused ? White : null,

                                }}
                            />
                        </View>
                    ),
                }}
            />
 <Tab.Screen
                name="UserProfile"
                component={UserProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent:'center',
                         marginTop: RF(10),...(focused && {width:RF(55),height:RF(55),borderRadius:RF(50),
                         marginBottom:RF(20),borderColor: White, borderWidth:RF(2),
                         backgroundColor: focused ? Primary : null
                         })
                         }}>
                            <Image
                                source={SignUpIcon}
                                resizeMode='contain'
                                style={{
                                    height:focused?  RF(25) : RF(25),
                                    width: focused?  RF(25):RF(25),
                                    tintColor: focused ? White : null,

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
                        <View style={{ alignItems: 'center', justifyContent:'center',
                         marginTop: RF(10),...(focused && {width:RF(55),height:RF(55),borderRadius:RF(50),
                         marginBottom:RF(20),borderColor: White, borderWidth:RF(2),
                         backgroundColor: focused ? Primary : null
                         })
                         }}>
                            <Image
                                source={HeartIcon}
                                resizeMode='contain'
                                style={{
                                    height:focused?  RF(25) : RF(25),
                                    width: focused?  RF(25):RF(25),
                                    tintColor: focused ? White : null,

                                }}
                            />
                        </View>
                    ),
                }}
            />
           <Tab.Screen
                name="CartEmptyScreen"
                component={CartEmptyScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent:'center',
                         marginTop: RF(10),...(focused && {width:RF(55),height:RF(55),borderRadius:RF(50),
                         marginBottom:RF(20),borderColor: White, borderWidth:RF(2),
                         backgroundColor: focused ? Primary : null
                         })
                         }}>
                            <Image
                                source={CartIcon}
                                resizeMode='contain'
                                style={{
                                    height:focused?  RF(25) : RF(25),
                                    width: focused?  RF(25):RF(25),
                                    tintColor: focused ? White : TextClr,

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