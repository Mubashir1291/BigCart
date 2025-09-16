import {
  StyleSheet,Text,TextInput,View,Image} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RF } from '../Utils/Responsive';
import HeadertText from '../components/header/HeaderText';
import { ArrowDownIcon, EmailIcon, FlagIcon } from '../assets/Index';
import InfoInput from '../components/Inputs/InfoInput';
import Buttons from '../components/buttons/Buttons';
import { White } from '../styles/colors/colorsCode';



const VerifyNumberScreen = () => {

  const navigation = useNavigation();

  const backArrowHandle = () => {
    navigation.navigate('ForgetPasswordScreen');
  };
  const SendOtpScreenHandle = () => {
    navigation.navigate('OtpScreen');
  };

  return (
    <View style={{ flex: 1 }}>
      <HeadertText onPress={backArrowHandle} text="Verify Number" />
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

        <View style={styles.LinkTextContainer} >
            <View style ={styles.FlagContainer}>
                <Image source = {FlagIcon} style ={styles.flagSize}/>
                <Text style={styles.Flagtext}>+1</Text>
                <Image source = {ArrowDownIcon} style ={styles.ArrowDownText}/>


                </View>
            
                 <View style={styles.MobileText}>
                        
                        <TextInput 
                        placeholder='Enter Your Mobile'
                        placeholderTextColor={'grey'}
                        color={'black'}
                        keyboardType='numeric'
                        
                        />
                </View>

        </View>


        
    
      <Buttons  text={'Next '}  onPress={SendOtpScreenHandle} />

        


      </View>
    </View>
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
  ResendText :{
       fontFamily:'Poppins-Regular',
       paddingTop: RF(10),
       alignSelf:'center'

  },
  LinkTextContainer:{
flexDirection:'row'    
  },
  FlagContainer :{
    height:RF(60),
    backgroundColor: White,
    width:'30%',
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    gap:RF(5)
  },

  MobileText:{
      
 height:RF(60),
 width:'68%',
 backgroundColor: White,
 borderLeftWidth:RF(1),
 alignSelf:'center',
 justifyContent:'center',
 paddingLeft:RF(10)

  },
  flagSize:{
height:RF(25),
width:(25),
resizeMode:'contain'

  },
  ArrowDownText:{
    height:RF(10),
width:(10),
resizeMode:'contain'
  },
  Flagtext:{
     fontSize:RF(18),
     fontFamily:'Font-Medium'
  }
});
