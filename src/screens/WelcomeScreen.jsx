import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { GoogleIcon, UserIcon, WelcomeImage } from '../assets/Index';
import {  MidGrey, Primary, Secondary, SimpleText, TextClr } from '../styles/colors/colorsCode';
import { RF } from '../Utils/Responsive';
import LinearGradient from 'react-native-linear-gradient';




const WelcomeScreen = () => {

  const navigation = useNavigation();
  const LoginHandle = () => {

    navigation.navigate('SignInScreen');
  }

const CreateAccountHandle = () => {

    navigation.navigate('SignupScreen');
  }



  return (


    <ImageBackground source = {WelcomeImage}

      style={styles.ImageBackground}>

     
      <View  style={{flex: 1, justifyContent: 'flex-end', width: '100%'}}>
      <View style={styles.DetailsCont}>
        <Text style={styles.welcomeBottom}>Welcome</Text>
        <Text style={styles.loremHeadings} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</Text>
      

        
        <TouchableOpacity style={styles.GoogleContainer}>
          <Image source={GoogleIcon} style={styles.googleLogo} />
          <Text style={styles.GoogleLogoText}>Continue with Google</Text>
          <View></View>
        </TouchableOpacity>
        

       <TouchableOpacity style={{width:'100%'}} onPress={CreateAccountHandle} >
        <LinearGradient
         style={styles.GetStartedBtn}
         colors={[Primary, Secondary]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}>
          <Image source={UserIcon} style={styles.googleLogo} />
          <Text style={styles.CreatAcntText}> Create an account</Text>
      
        </LinearGradient>
        </TouchableOpacity>


        
      <View style={styles.BottomTextCont} >
            <Text style={styles.SimpleText}> Already have an account? </Text>
            <TouchableOpacity onPress={LoginHandle} >
            <Text style={styles.LoginText}>Login</Text>
            </TouchableOpacity>
          </View>

      </View>
      </View>
      
      

    </ImageBackground>



  )
}

export default WelcomeScreen

const styles = StyleSheet.create({

  ImageBackground: {
    flex: 1,
    alignItems: 'center'
  },

  DetailsCont: {
    backgroundColor: MidGrey,
    width: '100%',
    borderTopEndRadius: RF(20),
    borderTopLeftRadius: RF(20),
    alignItems: 'center',
    padding:RF(20),
    gap:RF(10)
  },
  welcomeBottom: {
    color: '#000000',
    fontSize: RF(20),
    marginTop: RF(30),
    alignSelf:'flex-start',
    fontFamily: 'Poppins-Bold',

  },
  loremHeadings: {
    color: '#868889',
    fontSize: RF(15),
 
   
  },

  GoogleContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    width:'100%',
    height: RF(50),
    borderRadius: RF(5),
    paddingHorizontal:RF(10),
    justifyContent:'space-between'
   
  },
  
  googleLogo: {
    width: RF(24),
    height: RF(24),

  },

  GoogleLogoText: {

    fontSize: RF(14),
  
    color: '#000000',
    fontFamily: 'Poppins-Medium',
  },
  BtnContainer: {
    marginTop: RF(10),
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingInline: RF(10),
    paddingLeft: RF(30),
  },
  BottomTextCont: {
    flexDirection: 'row',
    marginTop: RF(20),
    marginBottom: RF(30)
  },

  SimpleText: {
    color: TextClr,
    fontSize: RF(14),

    
  },
    LoginText: {
    color: SimpleText,
    fontSize: RF(14),
    fontFamily: 'Poppins-SemiBold',

    
    
  },

  UserBtnLogo: {
    width: RF(24),
    height: RF(24),
    position: 'absolute',
  },  

  GetStartedBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: RF(50),
    borderRadius: RF(5),
    marginTop: RF(10),
    paddingInline : RF(10),
    paddingLeft: RF(30),
  },
  CreatAcntText: {

    fontSize: RF(14),
    marginLeft: RF(50),
    color: 'white',
    fontFamily: 'Poppins-Medium',
  },

})