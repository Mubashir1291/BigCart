import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RF } from '../Utils/Responsive';
import HeadertText from '../components/header/HeaderText';
import { ArrowDownIcon, EmailIcon, FlagIcon } from '../assets/Index';
import InfoInput from '../components/Inputs/InfoInput';
import Buttons from '../components/buttons/Buttons';
import { White } from '../styles/colors/colorsCode';

const OtpScreen = () => {
  const navigation = useNavigation();

  const backArrowHandle = () => {
    navigation.navigate('ForgetPasswordScreen');
  };
  const SendOtpScreenHandle = () => {
    navigation.navigate('OtpScreen');
  };

  return (
    <View style={{ flex: 1 }}>
      <HeadertText onPress={backArrowHandle} text="Verify Number " />
      <View style={styles.Maincontainer}>
        <Text style={styles.ForgotText}> Verify your number</Text>
        <Text style={styles.loremHeadings}>Enter you OTP code below</Text>

        <View style={styles.LinkTextContainer}>
          <View style={styles.FlagContainer}>

            <View style={styles.OtpContainersSize} />

            <View style={styles.OtpContainersSize} />

            <View style={styles.OtpContainersSize} />

            <View style={styles.OtpContainersSize} />

            <View style={styles.OtpContainersSize} />

            <View style={styles.OtpContainersSize} />
          </View>
        </View>

        <Buttons text={'Next '} onPress={SendOtpScreenHandle} />

        <Text style={styles.newCode}>Did'nt recieve a new code ? (1:23)</Text>
                <Text style={styles.resendCode}>Resend a new code (1:23)</Text>

      </View>
    </View>
  );
};

export default OtpScreen;

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
  newCode: {
    fontFamily: 'Poppins-Regular',
    paddingTop: RF(10),
    alignSelf: 'center',
  },
   resendCode: {
    fontFamily: 'Poppins-SemiBold',
    alignSelf: 'center',
  },
  LinkTextContainer: {
    flexDirection: 'row',
  },
  FlagContainer: {
    width:'100%',
    flexDirection: 'row',
    gap: RF(10),
    paddingTop:RF(70),
    paddingHorizontal:RF(10),
    justifyContent:'center'
  },



  OtpContainersSize: {
    height: RF(60),
    width: '15%',
    backgroundColor: '#FFFFFF',
  },
});
