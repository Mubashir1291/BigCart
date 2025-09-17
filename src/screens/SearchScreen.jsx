import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import HeaderText from '../components/header/HeaderText'
import { Link, useNavigation } from '@react-navigation/native';
import { BackIcon, CardIcon, CartIcon, FilterIcon, HomeIcon, SearchIcon } from '../assets/Index';
import { IconSize, TextBold, TextRegular } from '../components/IconSize/Sizes';
import { RF } from '../Utils/Responsive';
import { LinkClr, Secondary, SimpleText, TextClr, White } from '../styles/colors/colorsCode';
import Buttons from '../components/buttons/Buttons';
import { SearchBar } from 'react-native-screens';
import { SafeAreaView } from 'react-native-safe-area-context';


const OrderSucessScreen = () => {

    const navigation = useNavigation();
    
      const backArrowHandle = () => {
        navigation.navigate('NavBar');
      };
       const FilterHandle = () => {
        navigation.navigate('FilterScreen');
      };
  return (
    <SafeAreaView>
         <ScrollView>
        <View  style={{flex:1 }}>
        <View style={styles.MainContainer}>


            <View style={styles.SearchContainer}>


         <TouchableOpacity onPress={backArrowHandle}>
          <Image source={BackIcon} style={[IconSize,{marginLeft:RF(15)}]}/>
          </TouchableOpacity>


         <View style ={styles.SearchInput}>
            <View style={{flexDirection: 'row', alignItems:'center'}}>

        <Image source={SearchIcon} style={IconSize}/>

          <TextInput
              placeholder='Search keywords...'
              placeholderTextColor={'grey'}
              color={'black'}
              width='80%'
              />
              </View>
              
              <TouchableOpacity onPress={FilterHandle}>
           <Image source={FilterIcon} style={[IconSize,{position:'relative',right:RF(10)}]}/>
           </TouchableOpacity>
          

      </View>
      </View>

       <View style ={styles.SearchHistroy}>
        <Text  style={[TextBold,{fontSize:RF(18),color:SimpleText,textAlign:'center'}]}>Search History</Text>
        <Text  style={[TextRegular,{fontSize:RF(12),color:LinkClr,textAlign:'center'}]}>
         Clear</Text>

     </View>
      <View style ={styles.SearchTabHistroy}>
        <Text  style={[TextRegular,{fontSize:RF(10),padding:RF(5),
                     color:TextClr,textAlign:'center',backgroundColor:White}]}>Fresh Grocery</Text>
        
         <Text  style={[TextRegular,{fontSize:RF(10),padding:RF(5),
                     color:TextClr,textAlign:'center',backgroundColor:White}]}>Bananas</Text>
    
    <Text  style={[TextRegular,{fontSize:RF(10),padding:RF(5),
                     color:TextClr,textAlign:'center',backgroundColor:White}]}>Cheetos</Text>
   
   <Text  style={[TextRegular,{fontSize:RF(10),padding:RF(5),
                     color:TextClr,textAlign:'center',backgroundColor:White}]}>Vegetables</Text>
   
   <Text  style={[TextRegular,{fontSize:RF(10),padding:RF(5),
                     color:TextClr,textAlign:'center',backgroundColor:White}]}>Fruits</Text>
   
   
   
     </View>
        <View style ={styles.SearchTabContHistroy}>
        <Text  style={[TextRegular,{fontSize:RF(10),padding:RF(5),
                     color:TextClr,textAlign:'center',backgroundColor:White}]}>Discounted Items</Text>
        
         <Text  style={[TextRegular,{fontSize:RF(10),padding:RF(5),
                     color:TextClr,textAlign:'center',backgroundColor:White}]}>Fresh Vegetables</Text>
  
     </View>

 <View style ={styles.SearchHistroy}>
        <Text  style={[TextBold,{fontSize:RF(18),color:SimpleText,textAlign:'center'}]}>Discover More</Text>
        <Text  style={[TextRegular,{fontSize:RF(12),color:LinkClr,textAlign:'center'}]}>
         Clear</Text>

     </View>
      <View style ={styles.SearchTabHistroy}>
        <Text  style={[TextRegular,{fontSize:RF(10),padding:RF(5),
                     color:TextClr,textAlign:'center',backgroundColor:White}]}>Fresh Grocery</Text>
        
         <Text  style={[TextRegular,{fontSize:RF(10),padding:RF(5),
                     color:TextClr,textAlign:'center',backgroundColor:White}]}>Bananas</Text>
    
    <Text  style={[TextRegular,{fontSize:RF(10),padding:RF(5),
                     color:TextClr,textAlign:'center',backgroundColor:White}]}>Cheetos</Text>
   
   <Text  style={[TextRegular,{fontSize:RF(10),padding:RF(5),
                     color:TextClr,textAlign:'center',backgroundColor:White}]}>Vegetables</Text>
   
   <Text  style={[TextRegular,{fontSize:RF(10),padding:RF(5),
                     color:TextClr,textAlign:'center',backgroundColor:White}]}>Fruits</Text>
   
   
   
     </View>
        <View style ={styles.SearchTabContHistroy}>
        <Text  style={[TextRegular,{fontSize:RF(10),padding:RF(5),
                     color:TextClr,textAlign:'center',backgroundColor:White}]}>Discounted Items</Text>
        
         <Text  style={[TextRegular,{fontSize:RF(10),padding:RF(5),
                     color:TextClr,textAlign:'center',backgroundColor:White}]}>Fresh Vegetables</Text>
  
     </View>

     
     


     </View>
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
        flex:1,
    },
    SearchContainer:{
        flexDirection:'row' ,
        justifyContent:"center",
        alignItems:'center',
        paddingVertical:RF(25),
        paddingHorizontal:RF(16),
        backgroundColor:White
    
    },
    SearchInput :{

        alignItems:'center',
        width:'100%',
        backgroundColor:'#F4F5F9',
        flexDirection:'row',
        padding:RF(5),
        paddingLeft:RF(10),
        marginLeft:RF(10),
        gap:RF(10),
        justifyContent:'space-between'

    },
    SearchHistroy:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
        paddingVertical:RF(15)
    },
    SearchTabHistroy:{

        flexDirection:'row',
        gap :RF(5),
        width:'100%',
        alignItems:'center',
        justifyContent:'space-between'
    },
       SearchTabContHistroy:{

        flexDirection:'row',
        gap :RF(5),
        width:'100%',
        alignItems:'center',
        paddingVertical:RF(10)
    }

   



})