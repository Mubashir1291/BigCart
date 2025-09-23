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

    navigation.navigate('NavBar');
  }
   const SigninHandler = () => {

    navigation.navigate('SignInScreen');
  }



  return (


    <ImageBackground source = {WelcomeImage}

      style={styles.ImageBackground}>

      <View  style={{flex: 1, justifyContent: 'flex-end', width: '100%'}}>
      <View style={styles.DetailsCont}>
        
         <Text style={styles.welcomeBottom}> Welcome Back! </Text> 


        <Text style={styles.SignInHeadings} >Sign in to your account </Text>


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
              <View style={{flexDirection:'row', alignItems:'center',gap:RF(10)}}>
                
                <Image source={EmailIcon} style={styles.IconSize} />

                <TextInput
                  name="email"
                  placeholder="Email Address"
                  onChangeText={handleChange('email')}
                     placeholderTextColor={'grey'}
                color={'black'}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  width='90%'
                />
                </View>
                </View>
                <View style = {{flexDirection:'row',  width:'100%'}}>

                {errors.email && 
                 <Text style={{ fontSize: RF(10), color: 'red' }}>{errors.email}</Text>
                }

              </View>

              {/* Phone Number Input */}
               <View style={ styles.TextInputContainer }>
              <View style={{flexDirection:'row', alignItems:'center',gap:RF(10)}}>
                
                <Image source={TeleIcon} style={styles.IconSize} />

                <TextInput
                  name="phone"
                  placeholder="Phone Number"
                     placeholderTextColor={'grey'}
                color={'black'}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  value={values.phone}
                  width='96%'

                  keyboardType='numeric'
                />
                </View>
                </View>
                <View style = {{flexDirection:'row',  width:'100%'}}>

                {errors.phone && 
                 <Text style={{ fontSize: RF(10), color: 'red' }}>{errors.phone}</Text>
                }

              </View>

              {/* Password Input */}

               <View style={ styles.TextInputContainer }>
                <View style={{flexDirection:'row', alignItems:'center' ,gap:RF(10)}}>
                
                <Image source={PasswordIcon} style={styles.IconSize} />
                <TextInput
                  name="password"
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                     placeholderTextColor={'grey'}
                color={'black'}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry = {!showPass}
                                    width='80%'

                  />
                  </View>
                  

                  <TouchableOpacity onPress={() => setShowPass(!showPass)} style={{ }} >
                  <Image source={showPass ? EyeOffIcon : EyeIcon} style={styles.IconSize} />
                  </TouchableOpacity>
                </View>

                 <View style = {{flexDirection:'row',  width:'100%'}}> 
                  {errors.password &&
                 <Text style={{ fontSize: RF(10) , color: 'red' }}>{errors.password}</Text>}
                  </View>
                 
                 {/* Login Button */}
                <Buttons text={'Signup'} onPress={SignupHandler} />

              </>
            )}
          </Formik>
         



        
      <View style={styles.BottomTextCont} >
            <Text style={styles.SimpleText}>Already have an account? </Text>
            
            <TouchableOpacity onPress={SigninHandler}>
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
 
  DetailsCont: {
   backgroundColor: MidGrey,
    width: '100%',
    borderTopEndRadius: RF(20),
    borderTopLeftRadius: RF(20),
    alignItems: 'center',
    padding: RF(20),
    gap:RF(4)
  },
  welcomeBottom: {
   color: '#000000',
    fontSize: RF(20),

    alignSelf:'flex-start',
    fontFamily: 'Poppins-Bold',

  },
  SignInHeadings: {
    color: '#868889',
    fontSize: RF(15),
    alignSelf:'flex-start'

    
 },
  GoogleContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    width: RF(350),
    height: RF(50),
    borderRadius: RF(7),
    elevation: RF(1),
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

  BottomTextCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop :RF(10)
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

      flexDirection: 'row',
      alignItems: 'center',
    },
    ForgetText :{
      color: Link,
      fontSize: RF(15),
    },
    rememberMeText:{
      color: TextClr,
      fontSize: RF(15),

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
