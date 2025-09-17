import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RF } from '../Utils/Responsive';
import HeadertText from '../components/header/HeaderText';
import Buttons from '../components/buttons/Buttons';
import { TextBold, TextRegular } from '../components/IconSize/Sizes';
import { SafeAreaView } from 'react-native-safe-area-context';

const OtpScreen = () => {
  const navigation = useNavigation();
  const [timeLeft, setTimeLeft] = useState(10); 
  const [isResendEnabled, setIsResendEnabled] = useState(false);

  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else {
      setIsResendEnabled(true); 
    }
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const SendOtpScreenHandle = () => {
    navigation.navigate('NavBar');
  };

  const resendOtpHandle = () => {
    setTimeLeft(10); 
    setIsResendEnabled(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeadertText navigation={navigation} text="Verify Number " />
      <View style={styles.Maincontainer}>
        <Text style={styles.ForgotText}>Verify your number</Text>
        <Text style={styles.loremHeadings}>Enter your OTP code below</Text>

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

        <Buttons text={'Next'} onPress={SendOtpScreenHandle} />

        <Text style={[TextRegular, { alignSelf: 'center', fontSize: 15 }]}>
          Didn’t receive a code?
        </Text>

        {isResendEnabled ? (
          <Text
            style={[TextBold, { fontSize: RF(15), color: 'blue', alignSelf: 'center' }]}
            onPress={resendOtpHandle}
          >
            Resend a new code
          </Text>
        ) : (
          <Text style={[TextBold, { fontSize: RF(15), color: 'black', alignSelf: 'center' }]}>
            Resend a new code ({formatTime(timeLeft)})
          </Text>
        )}
      </View>
    </SafeAreaView>
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
  LinkTextContainer: {
    flexDirection: 'row',
  },
  FlagContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: RF(10),
    paddingTop: RF(70),
    paddingHorizontal: RF(10),
    justifyContent: 'center',
  },
  OtpContainersSize: {
    height: RF(60),
    width: '15%',
    backgroundColor: '#FFFFFF',
  },
});
