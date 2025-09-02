import { StyleSheet, Text, View, Image, ImageBackground,Switch, TouchableOpacity, TextInput, StatusBar} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { EmailIcon, PasswordIcon, WelcomeImage, EyeIcon,EyeOffIcon, TeleIcon} from '../assets/Index';
import { BorderClr, Link, MidGrey, Primary, primaryClr, Secondary, SimpleText, TextClr } from '../styles/colors/colorsCode';
import { RF } from '../Utils/Responsive';
import Buttons from '../components/buttons/Buttons';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';


  
// Form validation schema

const signupValidationSchema = Yup.object().shape({
  email: Yup
    .string()
    .email("Please Enter The Valid Email")
    .required("Email Address is Required"),
    phone: Yup
    .string()
    .required("Phone Number is Required"),
  password: Yup
    .string()
    .min(8, ({ min }) => "Password Must be " + min+  " Characters")
    .required("Password is required"),

}) 

const SignupScreen = () => {

  const [rememberMe, setRememberMe] = React.useState(false);

  const [showPass, setShowPass] = useState(false);



  const navigation = useNavigation();

  const SignupHandler = () => {

    navigation.navigate('HomeScreen');
  }



  return (


    <ImageBackground source = {WelcomeImage}

      style={styles.ImageBackground}>

      <Text style={styles.welcome}>Welcome</Text>
      <View  style={{flex: 1, justifyContent: 'flex-end', width: '100%'}}>
      <View style={styles.DetailsCont}>
        
        <View style={styles.WelcomeCont}>    
         <Text style={styles.welcomeBottom}> Welcome </Text> 
        <Text style={styles.welcomeBottom}> Back!</Text> 

         </View>   

        <View style={styles.WelcomeCont}>    
        <Text style={styles.SignInHeadings} >Sign in to your account </Text>
        </View>   


        {/* // Formik for form validation */}

         <Formik
            validationSchema={signupValidationSchema}
            initialValues={{ email: '', password: '', phone:'' }}
            onSubmit={values => console.log(values)}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
              <>

              {/* Email Input  */}

              <View style={ styles.TextInputContainer }>
                <Image source={EmailIcon} style={styles.IconSize} />

                <TextInput
                  name="email"
                  placeholder="Email Address"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                </View>
                <View style = {{marginTop: RF (5) ,flexDirection:'row', justifyContent:'flex-start', width:RF(350)}}>

                {errors.email && 
                 <Text style={{ fontSize: RF(10), color: 'red' }}>{errors.email}</Text>
                }

              </View>

              {/* Phone Number Input */}
               <View style={ styles.TextInputContainer }>
                <Image source={TeleIcon} style={styles.IconSize} />

                <TextInput
                  name="phone"
                  placeholder="Phone Number"
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                  keyboardType='numeric'
                />
                </View>
                <View style = {{marginTop: RF (5) ,flexDirection:'row', justifyContent:'flex-start', width:RF(350)}}>

                {errors.phone && 
                 <Text style={{ fontSize: RF(10), color: 'red' }}>{errors.phone}</Text>
                }

              </View>

              {/* Password Input */}

               <View style={ styles.TextInputContainer }>
                <Image source={PasswordIcon} style={styles.IconSize} />
                <TextInput
                  name="password"
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry = {!showPass}
                  />
                  

                  <TouchableOpacity onPress={() => setShowPass(!showPass)} style={{marginLeft:RF(310) ,position:'absolute'}} >
                  <Image source={showPass ? EyeOffIcon : EyeIcon} style={styles.IconSize} />
                  </TouchableOpacity>
                </View>

                 <View style = {{marginTop: RF (5) ,flexDirection:'row', justifyContent:'flex-start', width:RF(350)}}> 
                  {errors.password &&
                 <Text style={{ fontSize: RF (10) , color: 'red' }}>{errors.password}</Text>}
                  </View>

                  {/* Confirm Password Input */}

                {/* Remember Me & Forget  */}

                   <View style={styles.SwitchContainer} >
               <Switch
                 trackColor={{false: '#767577', true: Primary}}
                 thumbColor={rememberMe ? Secondary : '#f4f3f4'}
                 ios_backgroundColor="#3e3e3e"
                 onValueChange={setRememberMe}
                 value={rememberMe}
                 />
               <Text style={styles.rememberMeText}>Remember me</Text>

               <TouchableOpacity>

              <Text style={styles.ForgetText}> Forget Password </Text>

               </TouchableOpacity>
              </View>
                  
                 
                 {/* Login Button */}
                <Buttons text={'Signup'} onPress={SignupHandler} />

              </>
            )}
          </Formik>
         



        
      <View style={styles.BottomTextCont} >
            <Text style={styles.SimpleText}>Already have an account? </Text>
            <TouchableOpacity>
            <Text style={styles.LoginText}>Login </Text>
            </TouchableOpacity>
          </View>


      </View>
      </View>
      
      

    </ImageBackground>



  )
}

export default SignupScreen

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
    marginTop: RF (20),
    fontFamily: 'Poppins-Bold',

  },
  SignInHeadings: {
    color: '#868889',
    fontSize: RF (15),
    marginTop: RF (5),
    marginLeft: RF (8),
    
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
    marginBottom: RF (30),
    alignItems: 'center',
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

  WelcomeCont: {
    flexDirection: 'row',
     width: '100%', 
    alignItems: 'center',
    paddingLeft: RF (19),
    },
    SwitchContainer:{

      flexDirection: 'row',
      alignItems: 'center',
      marginTop: RF (10),
    },
    ForgetText :{
      color: Link,
      fontSize: RF (15),
      marginLeft: RF (90)
    },
    rememberMeText:{
      color: TextClr,
      fontSize: RF (15),

    },
       TextInputContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    width: RF (350),
    height: RF (50),
    borderRadius: RF (7),
    marginTop: RF (10),
    elevation: RF (1),
    paddingInline: RF (22)
},

  IconSize: {
    width: RF(18),
    height: RF(18),
    resizeMode: 'contain'}

})
