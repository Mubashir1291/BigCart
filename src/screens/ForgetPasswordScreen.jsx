import {
  StyleSheet,Text,TextInput,View,} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RF } from '../Utils/Responsive';
import HeadertText from '../components/header/HeaderText';
import { EmailIcon } from '../assets/Index';
import InfoInput from '../components/Inputs/InfoInput'
import Buttons from '../components/buttons/Buttons';



const ForgetPasswordScreen = () => {

  const navigation = useNavigation();

  const backArrowHandle = () => {
    navigation.navigate('SignInScreen');
  };
  const SendLinkHandle = () => {
    navigation.navigate('VerifyNumberScreen');
  };

  return (
    <View style={{ flex: 1 }}>
      <HeadertText onPress={backArrowHandle} text="Password Recovery" />
      <View style={styles.Maincontainer}>
        <Text style={styles.ForgotText}>Forgot Password</Text>
        <View style={styles.LoremText}>
          <Text style={styles.loremHeadings}>
            Lorem ipsum dolor sit amet, consetetur
          </Text>
          <Text style={styles.loremHeadings}>
            sadipscing elitr, sed diam nonumy
          </Text>
        </View>


        
      <InfoInput
      Img={EmailIcon}
       placeholder={'Email Address'}
      />
      <Buttons  text={'Send Link '}  onPress={SendLinkHandle} />
        


      </View>
    </View>
  );
};

export default ForgetPasswordScreen;

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
});
