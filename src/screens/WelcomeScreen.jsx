import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { GoogleIcon, UserIcon, WelcomeImage } from '../assets/Index';
import { BorderClr, MidGrey, Primary, Secondary, SimpleText, TextClr } from '../styles/colors/colorsCode';
import { RF } from '../Utils/Responsive';
import { RFP } from '../Utils/Responsive';
import Buttons from '../components/buttons/Buttons';




const WelcomeScreen = () => {

  const navigation = useNavigation();
  const CreateAccountHandle = () => {

    navigation.navigate('SignInScreen');
  }
  return (


    <ImageBackground source = {WelcomeImage}

      style={styles.ImageBackground}>

      <Text style={styles.welcome}>Welcome</Text>
      <View  style={{flex: 1, justifyContent: 'flex-end', width: '100%'}}>
      <View style={styles.DetailsCont}>
        <Text style={styles.welcomeBottom}>Welcome</Text>


        <Text style={styles.loremHeadings} >Lorem ipsum dolor sit amet, consetetur</Text>
        <Text style={styles.loremHeadings2}>sadipscing elitr, sed diam nonumy</Text>

        <TouchableOpacity>
        <View style={styles.GoogleContainer}>
          <Image source={GoogleIcon} style={styles.googleLogo} />
          <Text style={styles.GoogleLogoText}>Continue with Google</Text>
        </View>
        </TouchableOpacity>

        <View style={styles.BtnContainer} >
          <Buttons style ={{position: 'absolute'}}text={'Create an Account'} onPress={CreateAccountHandle}/>
          <Image source={UserIcon} style={styles.UserBtnLogo} />

        
        </View>




        
      <View style={styles.BottomTextCont} >
            <Text style={styles.SimpleText}>Already have an account? </Text>
            <Text style={styles.LoginText}>Login</Text>
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
  welcome: {
    color: '#ffffff',
    fontSize: RF (20),
    marginTop: RF (63),

  },
  DetailsCont: {
    backgroundColor: MidGrey,
    width: '100%',
    borderTopEndRadius: RF (20),
    borderTopLeftRadius: RF (20),
    alignItems: 'center',
  },
  welcomeBottom: {
    color: '#000000',
    fontSize: RF (20),
    marginTop: RF (30),
    marginRight: RF (250),
    fontFamily: 'Poppins-Bold',

  },
  loremHeadings: {
    color: '#868889',
    fontSize: RF (15),
    marginTop: RF (5),
    marginRight: RF (85)
  },
  loremHeadings2: {
    color: '#868889',
    fontSize: RF (15),
    marginRight: RF (120)
  },

  GoogleContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    width: RF (350),
    height: RF (50),
    borderRadius: RF (7),
    marginTop: RF (20),
    elevation: RF (1),
  },
  googleLogo: {
    width: RF (24),
    height: RF (24),
    marginLeft: RF (10),
    marginRight: RF (10),
  },

  GoogleLogoText: {

    fontSize: RF (14),
    marginLeft: RF (50),
    color: '#000000',
    fontFamily: 'Poppins-Medium',
  },
  BtnContainer: {
    marginTop: RF (10),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  BottomTextCont: {
    flexDirection: 'row',
    marginTop: RF (20),
    marginBottom: RF (30)
  },

  SimpleText: {
    color: TextClr,
    fontSize: RF (14),

    
  },
    LoginText: {
    color: SimpleText,
    fontSize: RF (14),
    fontFamily: 'Poppins-SemiBold',

    
    
  },

  UserBtnLogo: {
       width: RF (24),
    height: RF (24),
    marginRight: RF (300),
    position: 'absolute',
  },  

})