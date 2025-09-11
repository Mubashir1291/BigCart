import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import HeaderText from '../components/header/HeaderText'
import { useNavigation } from '@react-navigation/native';
import { CardIcon, CartIcon } from '../assets/Index';
import { IconSize, TextBold, TextRegular } from '../components/IconSize/Sizes';
import { RF } from '../Utils/Responsive';
import { Secondary, SimpleText } from '../styles/colors/colorsCode';
import Buttons from '../components/buttons/Buttons';


const OrderSucessScreen = () => {

    const navigation = useNavigation();
    
      const backArrowHandle = () => {
        navigation.navigate('HomeScreen');
      };
       const TrackOrderHandler = () => {
        navigation.navigate('TrackOrderScreen');
      };
  return (
         
        <View  style={{flex:1 }}>

        <HeaderText onPress={backArrowHandle} text="Order Success " />
       <View style={styles.MainContainer}>
        <Image  source={CartIcon} style={[IconSize,{width:RF(99),height:RF(115),tintColor:Secondary}]}/>
        <Text  style={[TextBold,{fontSize:RF(20),color:SimpleText,textAlign:'center'}]}>Your order was{'\n'} successfull !</Text>
     <Text  style={[TextRegular,{fontSize:RF(15),color:SimpleText,textAlign:'center'}]}>
         You will get a response within
         {'\n'} a few minutes.</Text>
         <Buttons onPress={TrackOrderHandler} text={'Track Order'}/>

     </View>
     </View>
  )
}

export default OrderSucessScreen

const styles = StyleSheet.create({
    MainContainer:{
        width:'100%',
        paddingHorizontal:RF(10),
        alignItems:'center',
        justifyContent:'center',
        flex:1,

    }




})