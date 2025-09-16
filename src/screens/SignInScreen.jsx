import { StyleSheet, Text, View, Image, ImageBackground,Switch, TouchableOpacity, TextInput, StatusBar} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { EmailIcon, PasswordIcon, WelcomeImage, EyeIcon,EyeOffIcon} from '../assets/Index';
import { BorderClr, LightGrey, Link, LinkClr, MidGrey, Primary, primaryClr, Secondary, SimpleText, TextClr, White } from '../styles/colors/colorsCode';
import { RF } from '../Utils/Responsive';
import Buttons from '../components/buttons/Buttons';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { TextMedium } from '../components/IconSize/Sizes';


  
// Form validation schema

const loginValidationSchema = Yup.object().shape({
  email: Yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: Yup
    .string()
    .min(8, ({ min }) => "Password must be at least " + min + " sCharacters")
    .required('Password is required'),
});

const WelcomeScreen = () => {

  const [rememberMe, setRememberMe] = React.useState(false);

  const [showPass, setShowPass] = useState(false);


  const navigation = useNavigation();

  const SignInHandler = () => {

    navigation.navigate('NavBar');
  }
    const SignupHandle = () => {

    navigation.navigate('SignupScreen');
    
  }
  const ForgetScreenHandle=()=>{
  
    navigation.navigate("ForgetPasswordScreen")

  }



  return (


    <ImageBackground source = {WelcomeImage}

      style={styles.ImageBackground}>

      <View  style={{flex: 1, justifyContent: 'flex-end', width: '100%'}}>
      <View style={styles.DetailsCont}>
        
        <Text style={styles.welcomeBottom}> Welcome Back </Text>   
        <Text style={styles.SignInHeadings} >Sign in to your account </Text>
          


        {/* // Formik for form validation */}

         <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ email: '', password: '' }}
            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <>
              <View style={ styles.TextInputContainer }>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                <Image source={EmailIcon} style={styles.IconSize} />

                <TextInput 
                  name="email"
                  placeholder="Email Address"
                  placeholderTextColor={'grey'}
                  color={'black'}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  width='95%'
                />

                </View>
                </View>

                <View style = {{flexDirection:'row',  width:'100%'}}>

                {errors.email && 
                 <Text style={{ fontSize: RF(10), color: 'red' }}>{errors.email}</Text>
                }

              </View>

               <View style={ styles.TextInputContainer }>
                <View style = {{flexDirection :'row' , alignItems:'center'}}>
                <Image source={PasswordIcon} style={styles.IconSize} />
                <TextInput
                  name="password"
                  placeholder="Password"
                   placeholderTextColor={'grey'}
                   color={'black'}
                   width= "80%"

                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry = {!showPass}
                  />
                  </View>

                  <TouchableOpacity onPress={() => setShowPass(!showPass)} style={{  alignSelf:'center'}} >
                  <Image source={showPass ? EyeOffIcon : EyeIcon} style={styles.IconSize} />
                  </TouchableOpacity>
                </View>

                 <View style = {{flexDirection:'row', width:'100%'}}> 
                  {errors.password &&
                 <Text style={{ fontSize: RF(10) , color: 'red' }}>{errors.password}</Text>}
                  </View>
                  
                


              </>
            )}
          </Formik>
          <View style={styles.SwitchContainer} >
            <View style ={{flexDirection: 'row' ,alignItems:'center'}}>
               <Switch
                 trackColor={{false: White, true: Primary}}
                 thumbColor={rememberMe ? Secondary : '#f4f3f4'} 
                 ios_backgroundColor="#3e3e3e"
                 onValueChange={setRememberMe}
                 value={rememberMe}
                 BorderClr = {{MidGrey}}
                 
          
                 />
               <Text style={styles.rememberMeText}>Remember me</Text>
               </View>
             


               <TouchableOpacity onPress={ForgetScreenHandle}>

              <Text style={[TextMedium,{color:LinkClr}]}> Forgot Password </Text>

               </TouchableOpacity>
              </View>
              
               <Buttons text={'Login'} onPress={SignInHandler} />



        
      <View style={styles.BottomTextCont} >
            <Text style={styles.SimpleText}>Don't have an account? </Text>
            <TouchableOpacity onPress={SignupHandle} >
            <Text style={styles.LoginText}>Sign up</Text>
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
    padding: RF(20),
    gap:RF(5)

  },
  welcomeBottom: {
    color: '#000000',
    fontSize: RF(20),
    fontFamily: 'Poppins-Bold',
    alignSelf:'flex-start'

  },
  SignInHeadings: {
    color: '#868889',
    fontSize: RF(15), 
     alignSelf:'flex-start'
 },
 

 

  BottomTextCont: {
    flexDirection: 'row',
    marginTop: RF(10),
    marginBottom: RF(30),
    alignItems: 'center',
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

  WelcomeCont: {
    flexDirection: 'row',
     width: '100%', 
    alignItems: 'center',
    paddingLeft: RF(19),
    },
    SwitchContainer:{
       width: '100%', 
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf:'flex-start',
      justifyContent:"space-between",
      
    },
    ForgetText :{
      color: Link,
      fontSize: RF(13),
      fontFamily:'Poppins-Regular'
    },
    rememberMeText:{
      fontFamily : 'Poppins-Regular',
      color: TextClr,
      fontSize: RF(11.5),
    },
    TextInputContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    width: '100%',
    height: RF(50),
    borderRadius: RF(5),
    elevation: RF(1),
    paddingHorizontal:RF(10),
    gap:RF(10)
  },

  IconSize: {
    width: RF(18),
    height: RF(18),
    resizeMode: 'contain'}

})
