import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RF } from '../Utils/Responsive';
import HeadertText from '../components/header/HeaderText';
import {
  EmailIcon,
  PasswordIcon,
  TeleIcon,
  UserIcon,
  EyeIcon,
  EyeOffIcon
} from '../assets/Index';
import InfoInput from '../components/Inputs/InfoInput';
import Buttons from '../components/buttons/Buttons';
import { SimpleText } from '../styles/colors/colorsCode';
import { IconSize, TextSemiBold } from '../components/IconSize/Sizes';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const loginValidationSchema = Yup.object().shape({
  password: Yup
    .string()
    .min(8, ({ min }) => "Password must be at least " + min + " Characters")
    .required('Password is required'),
     ConfirmPassword: Yup
    .string()
    .min(8, ({ min }) => "Password must be at least " + min + " Characters")
    .oneOf([Yup.ref('password'), null], 'Passwords do not match')
    
   

});


const AboutMeScreen = () => {
  const navigation = useNavigation();
  
    const [showPass, setShowPass] = useState(false);
        const [confshowPass, setconfShowPass] = useState(false);


  const BackArrowHandle = () => {
    navigation.navigate('UserProfileScreen');
  };

  const SaveSettingHandle = () => {
    Alert.alert(
      "Setting",
      "Setting Saved",
      [
        { text: "OK", onPress: () => navigation.navigate('AboutMeScreen') }
      ]
    );
  };

  return (
    <SafeAreaView>
    <ScrollView>
    <View style={{ flex: 1 }}>
      <HeadertText navigation={navigation} text="About me" />
      <View style={styles.Maincontainer}>
        
        {/* Personal Details */}
        <View style={{ gap: RF(5) }}>
          <Text style={[TextSemiBold, { color: SimpleText, fontSize: RF(16) }]}>
            Personal Details
          </Text>
          <InfoInput Img={UserIcon} placeholder={'Russell Austin'} />
          <InfoInput Img={EmailIcon} placeholder={'Russell.partner@gmail.com'} />
          <InfoInput Img={TeleIcon} placeholder={'+92 123456789'} keyboardType={'numeric'} />
        </View>

        {/* Change Password */}
        <View style={{ gap: RF(2) , paddingTop:RF(20)}}>
           <Text style={[TextSemiBold, { color: SimpleText, fontSize: RF(16) }]}>Change password</Text>
           <InfoInput
           Img={PasswordIcon}
           placeholder={'Current Password'}           
           />

         <Formik
                    validationSchema={loginValidationSchema}
                    initialValues={{ password:'', ConfirmPassword: '' }}
                    onSubmit={values => console.log(values)}
                  >
                    {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                      <>
                      <View style={ styles.TextInputContainer }>
                        <View style={{flexDirection:'row', alignItems:'center',gap:RF(10)}}>
                        <Image source={PasswordIcon} style={IconSize} />
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
                          <Image source={showPass ? EyeOffIcon : EyeIcon} style={IconSize} />
                          </TouchableOpacity>
                        </View>
                          <View style = {{flexDirection:'row', width:'100%'}}> 
                          {errors.password &&
                         <Text style={{ fontSize: RF(10) , color: 'red' }}>{errors.password}</Text>}
                          </View>
        
                        <View style = {{flexDirection:'row',  width:'100%'}}>
        
                        {errors.email && 
                         <Text style={{ fontSize: RF(10), color: 'red' }}>{errors.email}</Text>
                        }
        
                      </View>
        
                       <View style={ styles.TextInputContainer }>
                        <View style = {{flexDirection :'row' , alignItems:'center',gap:RF(10)}}>
                        <Image source={PasswordIcon} style={IconSize} />
                        <TextInput
                          name="ConfirmPassword"
                          placeholder="Confirm Password"
                           placeholderTextColor={'grey'}
                           color={'black'}
                           width= "80%"
                          onChangeText={handleChange('ConfirmPassword')}
                          onBlur={handleBlur('ConfirmPassword')}
                          value={values.ConfirmPassword}
                          secureTextEntry = {!confshowPass}
                          />
                          </View>
        
                          <TouchableOpacity onPress={() => setconfShowPass(!confshowPass)} style={{  alignSelf:'center'}} >
                          <Image source={confshowPass ? EyeOffIcon : EyeIcon} style={[IconSize, {justifyContent:'center'}]} />
                          </TouchableOpacity>
                        </View>
        
                         <View style = {{flexDirection:'row', width:'100%'}}> 
                          {errors.ConfirmPassword &&
                         <Text style={{ fontSize: RF(10) , color: 'red' }}>{errors.ConfirmPassword}</Text>}
                          </View>
                          
                        
        
        
                      </>
                    )}
                              </Formik>
                    
        </View>

        {/* Save Button */}
        <Buttons onPress={SaveSettingHandle} text={'Save settings'} />
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default AboutMeScreen;

const styles = StyleSheet.create({
  Maincontainer: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: RF(30),
    paddingHorizontal: RF(10),
  },
   TextInputContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: RF(50),
    borderRadius: RF(5),
    elevation: RF(1),
    paddingHorizontal:RF(10),
    marginTop:RF(5)
  },
});
