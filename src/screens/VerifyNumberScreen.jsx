import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RF } from '../Utils/Responsive';
import HeadertText from '../components/header/HeaderText';
import { ArrowDownIcon, FlagIcon } from '../assets/Index';
import Buttons from '../components/buttons/Buttons';
import { White } from '../styles/colors/colorsCode';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CountryPicker } from 'react-native-country-codes-picker';  // 📌 Import package

const VerifyNumberScreen = () => {
  const navigation = useNavigation();

  // States for picker
  const [showPicker, setShowPicker] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    code: '+1',
    flag: '🇺🇸',
  });

  const SendOtpScreenHandle = () => {
    navigation.navigate('OtpScreen');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeadertText navigation={navigation} text="Verify Number" />
      <View style={styles.Maincontainer}>
        <Text style={styles.ForgotText}>Verify your number</Text>
        <View style={styles.LoremText}>
          <Text style={styles.loremHeadings}>
            Lorem ipsum dolor sit amet, consetetur
          </Text>
          <Text style={styles.loremHeadings}>
            sadipscing elitr, sed diam nonumy
          </Text>
        </View>

        {/* Flag + Code + Input */}
        <View style={styles.LinkTextContainer}>
          <TouchableOpacity
            style={styles.FlagContainer}
            onPress={() => setShowPicker(true)}>
            <Text style={styles.flagEmoji}>{selectedCountry.flag}</Text>
            <Text style={styles.Flagtext}>{selectedCountry.code}</Text>
            <Image source={ArrowDownIcon} style={styles.ArrowDownText} />
          </TouchableOpacity>

          <View style={styles.MobileText}>
            <TextInput
              placeholder="Enter Your Mobile"
              placeholderTextColor={'grey'}
              color={'black'}
              keyboardType="numeric"
            />
          </View>
        </View>

        {/* Next Button */}
        <Buttons text={'Next '} onPress={SendOtpScreenHandle} />

        {/* Country Picker */}
        <CountryPicker
          show={showPicker}
          pickerButtonOnPress={(item) => {
            setSelectedCountry({
              code: item.dial_code,
              flag: item.flag,
            });
            setShowPicker(false);
          }}
          onBackdropPress={() => setShowPicker(false)}
        />
      </View>
    </SafeAreaView>
  );
};

export default VerifyNumberScreen;

const styles = StyleSheet.create({
  Maincontainer: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: RF(80),
    paddingHorizontal: RF(10),
  },

  ForgotText: {
    fontSize: RF(25),
    fontFamily: 'Poppins-Bold',
    alignSelf: 'center',
  },
  loremHeadings: {
    color: '#868889',
    fontSize: RF(15),
    alignSelf: 'center',
  },
  LoremText: {
    paddingBottom: RF(50),
  },

  LinkTextContainer: {
    flexDirection: 'row',
  },
  FlagContainer: {
    height: RF(60),
    backgroundColor: White,
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: RF(5),
  },

  MobileText: {
    height: RF(60),
    width: '69%',
    backgroundColor: White,
    borderLeftWidth: RF(1),
    alignSelf: 'center',
    justifyContent: 'center',
    paddingLeft: RF(10),
  },

  ArrowDownText: {
    height: RF(10),
    width: RF(10),
    resizeMode: 'contain',
  },
  Flagtext: {
    fontSize: RF(15),
    fontFamily: 'Poppins-Medium',
  },
  flagEmoji: {
    fontSize: RF(15),
  },
});
