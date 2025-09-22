import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import HeaderText from '../components/header/HeaderText'
import { Link, useNavigation } from '@react-navigation/native';
import { BackIcon, CardIcon, CartIcon, FilterIcon, HomeIcon, PenIcon, SearchIcon, StarIcon, UserIcon } from '../assets/Index';
import { IconSize, TextBold, TextRegular } from '../components/IconSize/Sizes';
import { RF } from '../Utils/Responsive';
import { LightGrey, LinkClr, MidGrey, Secondary, SimpleText, TextClr, White } from '../styles/colors/colorsCode';
import Buttons from '../components/buttons/Buttons';
import {AirbnbRating,Rating} from 'react-native-ratings';
import { SafeAreaView } from 'react-native-safe-area-context';


const OrderSucessScreen = () => {

    const navigation = useNavigation();
    
      const backArrowHandle = () => {
        navigation.navigate('HomeScreen');
      };
       const StartShoppingHandle = () => {
        navigation.navigate('NavBar');
      };
  return (
    <SafeAreaView>
    <ScrollView>
         
        <View  style={{flex:1, paddingHorizontal:RF(10)}}>

      

        <View style={styles.MainContainer}>
              <HeaderText navigation={navigation}
        
        text={'Write Reviews'}
         />

    
     
 
     
      <View style ={styles.ReviewTextContainer}>
        <Text  style={[TextBold,{fontSize:RF(20), 
                     color:'black',textAlign:'center'}]}>What do you think ?</Text>

         <Text  style={[TextRegular,{fontSize:RF(15),
                     color:'black',textAlign:'center'}]}>please give your rating by clicking on {'\n'}
the stars below</Text>
     </View>

     <View style={styles.starsContainer}>
        <Rating    
        
        reviewColor='#FFC107'
        ratingCount={5}
        ratingBackgroundColor='red'
        startingValue={3}
        />
        

        {/* <Image source={StarIcon} style={[IconSize,{tintColor:'#FFC107', width:RF(35),height:RF(33)}]}/>
        <Image source={StarIcon} style={[IconSize,{tintColor:'#FFC107', width:RF(35),height:RF(33)}]}/>
        <Image source={StarIcon} style={[IconSize,{tintColor:'#FFC107', width:RF(35),height:RF(33)}]}/>
        <Image source={StarIcon} style={[IconSize,{tintColor:'#FFC107', width:RF(35),height:RF(33)}]}/>
        <Image source={StarIcon} style={[IconSize,{tintColor: null, width:RF(35),height:RF(33)}]}/> */}
     </View>
     <View style={styles.paragraph}>
      <View style={{flexDirection: 'row', alignItems:'center'}}>

        <Image source={PenIcon} style={[IconSize,{marginLeft:RF(15),width:RF(15),height:RF(15)}]}/>
       
        <TextInput
        placeholder=' Tell us about your experience'
        placeholderTextColor={TextClr}
        color={'black'}
        width='90%'
        multiline={true}
        textAlignVertical='top' 
        />

     </View>

     </View>

     </View>
     
      <Buttons onPress={StartShoppingHandle} text={'Start Shopping'}/>

      </View>
      </ScrollView>
      </SafeAreaView>
  )
}

export default OrderSucessScreen

const styles = StyleSheet.create({
    MainContainer:{
        width:'100%',
        paddingHorizontal:RF(10),
        alignItems:'center',
        flex:1
    },
    ReviewTextContainer:{

       marginTop:RF(100)
    },
    starsContainer:{
        marginTop:RF(20),
            },

 paragraph:{
    width:'100%',
    backgroundColor:White,
    flexDirection:'row',
    height:RF(150),
    marginTop:RF(30),
    alignItems: 'flex-start',
    }
})