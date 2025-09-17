import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,Switch
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
  EyeOffIcon,
  AddressIcon,
  ZipCodeIcon,
  CityIcon,
  CountryIcon,
  FilterIcon,
  TickICon
} from '../assets/Index';
import InfoInput from '../components/Inputs/InfoInput';
import Buttons from '../components/buttons/Buttons';
import { LightGrey, MidGrey, Primary, Secondary, SimpleText, TextClr, White } from '../styles/colors/colorsCode';
import { IconSize, TextMedium, TextSemiBold } from '../components/IconSize/Sizes';
import { SafeAreaView } from 'react-native-safe-area-context';




const ShippmentAddressScreen = () => {
  const navigation = useNavigation();
    const [SaveAddress, setSaveAddress] = React.useState(false);




  const BackArrowHandle = () => {
    navigation.navigate('ShippingMethodScreen');
  };

  const AddAddressHandle = () => {
    navigation.navigate('PaymentMethodScreen') 
   
  };

  return (
    <SafeAreaView>
    <ScrollView>
    <View style={{ flex: 1 }}>

       <View style={styles.HeaderContainer}>
        <HeadertText
navigation={navigation}          tintColor1={'black'}
          text="Shipping Address"
          Img={FilterIcon}
          tintColor2={White}
        />
      </View>
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

          <View style={styles.circle2}>
            <Text style={[TextMedium, { color: White,fontSize:RF(15), fontSize: RF(15) }]}>
              2
            </Text>
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
            <Text style={[TextMedium, { color: TextClr,fontSize: RF(15) }]}>
              3
            </Text>
          </View>
          <Text style={[TextMedium, { marginTop: RF(5) }]}>PAYMENT</Text>
        </View>
      </View>
      <View style={styles.Maincontainer}>
        
         <View style={{ gap: RF(5) }}>
          <Text style={[TextSemiBold, { color: SimpleText, fontSize: RF(16) }]}>
            Personal Details
          </Text>
          <InfoInput Img={UserIcon} placeholder={'Name'} />
          <InfoInput Img={EmailIcon} placeholder={'Email address'} />
          <InfoInput Img={TeleIcon} placeholder={'Phone number'} />
            <InfoInput Img={AddressIcon} placeholder={'Address'} />
          <InfoInput Img={ZipCodeIcon} placeholder={'Zip code'} />
          <InfoInput Img={CityIcon} placeholder={'City'} />
          <InfoInput Img={CountryIcon} placeholder={'Country'} />

        </View>
            <View style ={{flexDirection: 'row' ,alignItems:'center' ,paddingVertical:RF(15)}}>
                       <Switch
                         trackColor={{false: White, true: Primary}}
                         thumbColor={SaveAddress ? Secondary : '#f4f3f4'} 
                         ios_backgroundColor="#3e3e3e"
                         onValueChange={setSaveAddress}
                         value={SaveAddress}
                         BorderClr = {{MidGrey}}
                         
                  
                         />
                       <Text style={[TextMedium,{color:'black'}]}>Save this address</Text>
                       </View>
        {/* Add Button */}
        <Buttons onPress={AddAddressHandle} text={'Next'} />

     </View>

        
      </View>
      </ScrollView>
      </SafeAreaView>
  );
};

export default ShippmentAddressScreen;

const styles = StyleSheet.create({
  Maincontainer: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: RF(30),
    paddingHorizontal: RF(10),
  },

    screenContainer: {
      flex: 1,
      backgroundColor: LightGrey,
      paddingBottom:RF(10),
      paddingHorizontal:RF(10)
    },
   
    HeaderContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: RF(75),
      backgroundColor: '#FFFFFF',
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
      backgroundColor: White,
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
      backgroundColor: TextClr,
      position: 'absolute',
      top: RF(45),
      left: RF(50),
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
  },
 
});
