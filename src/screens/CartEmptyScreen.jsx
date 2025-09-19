import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import HeaderText from '../components/header/HeaderText'
import { useNavigation } from '@react-navigation/native';
import { CardIcon, CartIcon, HomeIcon } from '../assets/Index';
import { IconSize, TextBold, TextRegular } from '../components/IconSize/Sizes';
import { RF } from '../Utils/Responsive';
import { Secondary, SimpleText } from '../styles/colors/colorsCode';
import Buttons from '../components/buttons/Buttons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Screen } from 'react-native-screens';


const CartEmptyScreen = () => {

    const navigation = useNavigation();
    
   
       const StartShoppingHandler = () => {
        navigation.navigate('VegitableScreen');
      };

  return (
    <SafeAreaView  style={{flex:1 }}>
         

        
       <View style={styles.MainContainer}>
       <HeaderText navigation={navigation} text="Shopping Cart " />
       <View style ={styles.CenterContainer}>

        <Image  source={CartIcon} style={[IconSize,{width:RF(99),height:RF(115),tintColor:Secondary,marginBottom:RF(20)}]}/>
        <Text  style={[TextBold,{fontSize:RF(20),color:SimpleText,textAlign:'center'}]}>Your cart is empty</Text>
        <Text  style={[TextRegular,{fontSize:RF(15),color:SimpleText,textAlign:'center'}]}>
         You will get a response within
         {'\n'} a few minutes.</Text>

     </View>
              <Buttons onPress={StartShoppingHandler} text={'Start Shopping'}/>

     </View>
     </SafeAreaView>
  )
}

export default CartEmptyScreen

const styles = StyleSheet.create({
    MainContainer:{
        width:'100%',
        paddingHorizontal:RF(10),
        alignItems:'center',
        flex:1,
        justifyContent:'space-between'
    },
    CenterContainer:{

        alignItems:'center'
    }
   




})