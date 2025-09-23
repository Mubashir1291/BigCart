import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  TextInput,
  ScrollView,
  Alert,
  Switch

} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RF } from '../Utils/Responsive';
import HeadertText from '../components/header/HeaderText';
import Buttons from '../components/buttons/Buttons';
import {
  UserIcon,
  AddressIcon,
  ZipCodeIcon,
  CityIcon,
  CountryIcon,
  TeleIcon,
  AddIcon,
  LocationCircleIcon,
  ScrollDownIcon,
  ScrollUpIcon,
  MasterIcon,
  VisaIcon,
  CardIcon,
  CalndarIcon,
  PasswordIcon,
  GreenCartIcon,
  RectangleIcon,
  Masterlogo,
  TickICon,
  PaypayIcon,
  PayPalIcon,
  AppleIcon,
} from '../assets/Index';
import {
  LightGrey,
  MidGrey,
  Primary,
  Secondary,
  SimpleText,
  TextClr,
  White,
} from '../styles/colors/colorsCode';
import {
  IconSize,
  TextSemiBold,
  TextBold,
  TextRegular,
  TextMedium,
} from '../components/IconSize/Sizes';
import InfoInput from '../components/Inputs/InfoInput';
import { SafeAreaView } from 'react-native-safe-area-context';

import DateTimePicker from '@react-native-community/datetimepicker';

// ✅ Address Data with details inside

const AboutMeScreen = () => {
  const navigation = useNavigation();

  
      const [ccv, setCcv] = useState('');
        const [showDatePicker, setShowDatePicker] = useState(false);
        

      const formatCardNumber = (text) => {
    const digitsOnly = text.replace(/\D/g, ''); 
    const limitedDigits = digitsOnly.slice(0, 16); 
    const groups = limitedDigits.match(/.{1,4}/g); 
    return groups ? groups.join(' ') : '';
  };

    const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
      const year = selectedDate.getFullYear().toString().slice(-2);
      setDate(`${month}/${year}`);
    }
  };

  const AddCardHandler = () => {
    navigation.navigate('AddCardScreen');
  };
    const AddCreditHandle = () => {
    navigation.navigate('OrderSucessScreen');
  };
   const [selectedDelivery, setSelectedDelivery] = useState(null);
 

  const [name, setName] = useState('');
    const [number, setNumber] = useState('');

      const [date, setDate] = useState('');
        const [rememberMe, setRememberMe] = React.useState(false);



  return (
    <SafeAreaView>
    <ScrollView>
    <View style={{ flex: 1}}>
         <HeadertText
       navigation={navigation}
        tintColor={SimpleText}
        text="Payment Method"
        Img={AddIcon}
        tintColor2={White}
        onClick={AddCardHandler}
      />
    
      <View style={styles.Maincontainer}>
         <View style={styles.CountContainer}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: RF(25),
          }}
        >
                      <View style={styles.Line}></View>

          <View style={styles.circle}>
            
        <Image source={TickICon}  style={[IconSize,{tintColor:White, width:RF(14),height:RF(14)}]}/>
          </View>

          <Text style={TextMedium}>DELIVERY</Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: RF(25),
          }}
        >
          <View style={styles.Line2}></View>

           <View style={styles.circle}>
            
        <Image source={TickICon}  style={[IconSize,{tintColor:White, width:RF(14),height:RF(14)}]}/>
          </View>

          <Text style={TextMedium}>ADDRESS</Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: RF(25),
          }}
        >
          <View style={styles.circle3}>
            <Text style={[TextMedium, { color: White,fontSize: RF(15) }]}>
              3
            </Text>
          </View>
          <Text style={[TextMedium, { marginTop: RF(5) }]}>PAYMENT</Text>
        </View>
      </View>

      <View  style={{flexDirection:'row',width:'100%',alignItems:'center' ,justifyContent:'space-between',paddingHorizontal:RF(10),marginBottom:RF(15)}}>
     <TouchableOpacity
               onPress={() => setSelectedDelivery('paypal')}
               style={[
                 styles.PaymentBox,
                 {
                   borderWidth: RF(1),
                   borderColor: selectedDelivery === 'paypal' ? Secondary : White,
                 },
               ]}
             >
            <Image  source={PayPalIcon} style={[IconSize,{tintColor:null,marginBottom:RF(10)}]}/>
            <Text style={TextMedium}>Paypal</Text>


</TouchableOpacity>       


  <TouchableOpacity
               onPress={() => setSelectedDelivery('credit')}
               style={[
                 styles.PaymentBox,
                 {
                   borderWidth: RF(1),
                   borderColor: selectedDelivery === 'credit' ? Secondary : White,
                 },
               ]}
             >            <Image  source={CardIcon} style={[IconSize,{tintColor:null,marginBottom:RF(10)}]}/>
            <Text style={TextMedium}>Credit Card</Text>


</TouchableOpacity>       

  <TouchableOpacity
               onPress={() => setSelectedDelivery('apple')}
               style={[
                 styles.PaymentBox,
                 {
                   borderWidth: RF(1),
                   borderColor: selectedDelivery === 'apple' ? Secondary : White,
                 },
               ]}
             >            <Image  source={AppleIcon} style={[IconSize,{tintColor:null,marginBottom:RF(10)}]}/>
            <Text style={TextMedium}>Apple Pay</Text>


</TouchableOpacity>       


      </View>
        
         
        <View style={styles.CardContainer}>
            <ImageBackground source ={RectangleIcon} style={styles.CardImage}>
                <Image source={Masterlogo} style={[IconSize,{tintColor:null,width:RF(84),height:RF(84)}]}/>
                <Text style={[TextMedium,{color:White, marginLeft:RF(5),fontSize:RF(15)}]}>  {number ? number : "XXXX XXXX XXXX 8790"}
</Text>
                <View style={styles.TextContainer}>

                <View >

                    <Text style={[TextMedium,{color:White }]}>Card Holder</Text>
                   <Text style={[TextMedium,{color:White}]}>{name ? name : "Russel"}</Text>     
                </View>

                 <View >

                    <Text style={[TextMedium,{color:White}]}>Expire </Text>
                   <Text style={[TextMedium,{color:White}]}>{date ? date : "01/22"}</Text>     
                </View>
                </View>


            </ImageBackground>




        </View>
        <View style={styles.details}>

            <InfoInput
            Img={UserIcon} style={IconSize}
            placeholder={'Card Holder Name'}
              value={name}
            onChange={(name)=> setName(name)}
            />

           <InfoInput
                Img={CardIcon}
                style={IconSize}
                placeholder={'Card Number'}
                value={number}
                keyboardType="number-pad"
                maxLength={19} 
                onChange={text => setNumber(formatCardNumber(text))}
              />
            <View style={styles.rowContainer}>
            <View style={{flex: 1, marginLeft: RF(5)}}>
          
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                    <InfoInput
                      Img={CalndarIcon}
                      style={IconSize}
                      placeholder={'Month / Year'}
                      value={date}
                      editable={false} 
                      showSoftInputOnFocus={false} 
                      pointerEvents="none" 
                    />
                  </TouchableOpacity>

                  {showDatePicker && (
                    <DateTimePicker
                      value={new Date()}
                      mode="date"
                      display="calendar"
                      onChange={handleDateChange}
                    />
                  )}
            </View>
            <View style={{flex: 1, marginLeft: RF(5)}}>


            <InfoInput
                    Img={PasswordIcon}
                    style={IconSize}
                    placeholder={'CCV'}
                    value={ccv}
                    keyboardType="number-pad"
                    maxLength={3}
                    onChange={text => {
                      const digitsOnly = text.replace(/\D/g, '');
                      const finalValue = digitsOnly.slice(0, 3);
                      setCcv(finalValue);
                    }}
                  />
            </View>
            </View>
          <View style={styles.SwitchContainer} >

            <Switch
                 trackColor={{false: White, true: Secondary}}
                 thumbColor={rememberMe ? White : '#f4f3f4'} 
                 onValueChange={setRememberMe}
                 value={rememberMe}
                 BorderClr = {{MidGrey}}
                  
                 
          
                 />
               <Text style={[TextMedium,{color:'black'}]}>Save This Card</Text>
               </View>
                              </View>


           
            <Buttons onPress={AddCreditHandle} text={'Make a Payment'}/>


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

  CardContainer:{

    width:'100%',
    height:RF(180),
    backgroundColor :White,
    borderRadius:RF(13),
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:Secondary


  },
 CardImage:{

   width:'100%',
     height:RF(160),

   },
   TextContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:RF(15)
   },
  DetailCard: {
    backgroundColor: White,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderRadius: RF(5),
    elevation: RF(1),
    padding: RF(10),
    paddingHorizontal: RF(15),
  },
  TextDetails: {
    justifyContent: 'center',
    paddingLeft: RF(15),
    flex: 1,
  },
  LocationCircleIconsizes: {
    width: RF(50),
    height: RF(50),
    resizeMode: 'contain',
  },
  details: {
    width: '100%',
    paddingHorizontal: RF(10),
    paddingVertical: RF(10),
    justifyContent: 'center',
    alignItems: 'center',
    gap: RF(8),
  },
  Textitems: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    gap: RF(20),
    padding: RF(10),
    elevation: 1,
  },
  Textitems2: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: RF(10),
    elevation: 1,
    gap: RF(10),
  },
  rowContainer: {
  flexDirection: 'row',
  width: '100%',
},
 CountContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
    },
  
    circle: {
      width: RF(40),
      height: RF(40),
      borderRadius: RF(90),
      backgroundColor: Secondary,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    circle2: {
      width: RF(40),
      height: RF(40),
      borderRadius: RF(20),
      backgroundColor: Secondary,
      justifyContent: 'center',
      alignItems: 'center',
    },
       circle3: {
      width: RF(40),
      height: RF(40),
      borderRadius: RF(20),
      backgroundColor: Secondary,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    Line: {
      width: '200%',
      height: RF(2),
      backgroundColor: Secondary,
      position: 'absolute',
      top: RF(45),
      left: RF(50),
    },
  
    Line2: {
      width: '200%',
      height: RF(2),
      backgroundColor: Secondary,
      position: 'absolute',
      top: RF(45),
      left: RF(50),
    },
   PaymentBox: {
    height: RF(102),
    width:'30%',
    backgroundColor: White,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: RF(5),
   
},
 SwitchContainer:{
       width: '100%', 
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf:'flex-start',
      gap:RF(5)
    
      
    },
});
