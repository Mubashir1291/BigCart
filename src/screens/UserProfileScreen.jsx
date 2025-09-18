import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import { RF } from '../Utils/Responsive';
import {
  LightGrey,
  Primary,
  Secondary,
  TextClr,
  White,
} from '../styles/colors/colorsCode';
import {
  AddressIcon,
  BellIcon,
  CameraIcon,
  CardIcon,
  CartIcon,
  HeartIcon,
  LogoutIcon,
  orderboxIcon,
  OrderIcon,
  RightIcon,
  TransactionIcon,
  UserIcon,
} from '../assets/Index';
import {
  IconSize,
  TextRegular,
  TextSemiBold,
} from '../components/IconSize/Sizes';
import { useNavigation } from '@react-navigation/native';

import AboutMeScreen from '../screens/AboutMeScreen';
import MyOrderScreen from '../screens/MyOrderScreen';
import MyAddressScreen from '../screens/MyAddressScreen';
import TransactionScreen from '../screens/TransactionScreen';
import NotificationScreen from '../screens/NotificationScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Pages = [
  {
    id: '1',
    source: UserIcon,
    name: 'About me',
    icon: RightIcon,
    screen: 'AboutMeScreen',
  },
  {
    id: '2',
    source: orderboxIcon,
    name: 'My orders',
    icon: RightIcon,
    screen: 'MyOrderScreen',
  },
  {
    id: '3',
    source: AddressIcon,
    name: 'My Address',
    icon: RightIcon,
    screen: 'MyAddressScreen',
  },
  {
    id: '4',
    source: CardIcon,
    name: 'Credit card',
    icon: RightIcon,
    screen: 'MyCardScreen',
  },
  {
    id: '5',
    source: TransactionIcon,
    name: 'Transaction',
    icon: RightIcon,
    screen: 'TransactionScreen',
  },
  {
    id: '6',
    source: BellIcon,
    name: 'Notification',
    icon: RightIcon,
    screen: 'NotificationScreen',
  },
  { id: '7', source: LogoutIcon, name: 'Logout', screen: 'SignInScreen' },
];

const UserProfileScreen = () => {
  const navigation = useNavigation();

  const backArrowHandle = item => {
    navigation.navigate(item?.screen);
  };

  // const handleCamera = async () => {
  //   const result = await launchCamera({ mediaType: 'photo' });
  // };

  const handleGallery = async () => { 
    console.log('aaaaa')
    const result = await launchImageLibrary({ mediaType: 'photo' });
    return result;
  };
  

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.MainContainer}>
          <View style={styles.TopBar}>
            <View style={styles.ImageCircle}>

              <TouchableOpacity onPress={handleGallery}>
                <View>
                  <Image  source={CameraIcon} style={styles.Camera} />
                </View>
                </TouchableOpacity>

            </View>
          </View>
           
         
          <Text style={styles.USerText}>Olivia Austin</Text>
          <Text style={styles.USerEmailText}>oliviaaustin@gmail.com</Text>
          <View style={styles.PagesContainer}>
            <FlatList
              data={Pages}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => backArrowHandle(item)}>
                  <View style={styles.PagesContainer}>
                    <View style={[styles.InfoContainer]}>
                      <Image
                        source={item.source}
                        style={[IconSize, { tintColor: Secondary }]}
                      />
                      <Text
                        style={[
                          TextSemiBold,
                          { color: 'black', flex: 1, marginLeft: RF(20) },
                        ]}
                      >
                        {item.name}
                      </Text>
                      <Image source={item.icon} style={IconSize} />
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
              horizontal={false}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfileScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#F4F5F9',
  },
  TopBar: {
    width: '100%',
    height: RF(115),
    backgroundColor: White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageCircle: {
    width: RF(120),
    height: RF(120),
    borderRadius: RF(60),
    backgroundColor: '#ebe6e6ff',
    paddingTop: RF(50),
    alignSelf: 'center',
    // marginTop:RF(100)
    // position: 'absolute',
    // top: RF(50),
  },
  Camera: {
    height: RF(25),
    width: RF(25),
    resizeMode: 'contain',
    alignSelf: 'flex-end',
    position: 'absolute',
    top: RF(45),
    right: RF(10),
  },
  USerText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: RF(20),
    alignSelf: 'center',
    paddingTop: RF(65),
  },
  USerEmailText: {
    fontFamily: 'Poppins-Regular',
    fontSize: RF(10),
    alignSelf: 'center',
    color: TextClr,
  },
  PagesContainer: {
    flex: 1,
    width: '100%',
  },
  InfoContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: RF(30),
    paddingHorizontal: RF(25),
    alignItems: 'center',
  },
  InfoIconStyle: {
    height: RF(20),
    width: RF(20),
    resizeMode: 'contain',
    tintColor: Secondary,
  },
  RightIconStyle: {
    height: RF(18),
    width: RF(18),
    resizeMode: 'contain',
    tintColor: TextClr,
  },
  InfoTextStyle: {
    fontFamily: 'Poppins-SemiBold',
    flex: 1,
    marginLeft: RF(20),
  },
});
