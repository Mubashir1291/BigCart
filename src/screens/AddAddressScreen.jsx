import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RF } from '../Utils/Responsive';
import HeadertText from '../components/header/HeaderText';
import {
  EmailIcon,
  PasswordIcon,
  TeleIcon,
  UserIcon,
  EyeIcon,
  EyeOffIcon,
  AddressIcon,
  ZipCodeIcon,
  CityIcon,
  CountryIcon
} from '../assets/Index';
import InfoInput from '../components/Inputs/InfoInput';
import Buttons from '../components/buttons/Buttons';
import { SimpleText } from '../styles/colors/colorsCode';
import { IconSize, TextSemiBold } from '../components/IconSize/Sizes';
import { SafeAreaView } from 'react-native-safe-area-context';




const AddAddresScreen = () => {
  const navigation = useNavigation();



  const BackArrowHandle = () => {
    navigation.navigate('UserProfileScreen');
  };

  const AddAddressHandle = () => {
    Alert.alert(
      "Address",
      "Address Added",
      [
        { text: "OK", onPress: () => navigation.navigate('AboutMeScreen') }
      ]
    );
  };

  return (
    <SafeAreaView>
    <ScrollView>
    <View style={{ flex: 1 }}>
      <HeadertText navigation={navigation} text="Add Address" />
      <View style={styles.Maincontainer}>
        
         <View style={{ gap: RF(5) }}>
          <Text style={[TextSemiBold, { color: SimpleText, fontSize: RF(16) }]}>
            Personal Details
          </Text>
          <InfoInput Img={UserIcon} placeholder={'Name'} />
          <InfoInput Img={EmailIcon} placeholder={'Email address'} />
          <InfoInput Img={TeleIcon} placeholder={'Phone number'} keyboardType={'numeric'} />
            <InfoInput Img={AddressIcon} placeholder={'Address'} />
          <InfoInput Img={ZipCodeIcon} placeholder={'Zip code'} keyboardType={'numeric'} />
          <InfoInput Img={CityIcon} placeholder={'City'} />
          <InfoInput Img={CountryIcon} placeholder={'Country'} />

        </View>
        {/* Add Button */}
        <Buttons onPress={AddAddressHandle} text={'Add Address'} />

     </View>

        
      </View>
      </ScrollView>
      </SafeAreaView>
  );
};

export default AddAddresScreen;

const styles = StyleSheet.create({
  Maincontainer: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: RF(30),
    paddingHorizontal: RF(10),
  },
   TextInputContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: RF(50),
    borderRadius: RF(5),
    elevation: RF(1),
    paddingHorizontal:RF(10),
  },
});
