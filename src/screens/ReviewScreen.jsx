import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native'
import React from 'react'
import HeaderText from '../components/header/HeaderText'
import { Link, useNavigation } from '@react-navigation/native';
import { AddIcon, BackIcon, CardIcon, CartIcon, FilterIcon, Girl1, Girl2, Girl3, Girl4, HomeIcon, PenIcon, SearchIcon, StarGroup, StarIcon, UserIcon } from '../assets/Index';
import { IconSize, TextBold, TextRegular } from '../components/IconSize/Sizes';
import { RF } from '../Utils/Responsive';
import { LightGrey, LinkClr, MidGrey, Secondary, SimpleText, TextClr, White } from '../styles/colors/colorsCode';
import Buttons from '../components/buttons/Buttons';
import {AirbnbRating,Rating} from 'react-native-ratings';


const ReviewArr =[
{ id:1 , icon : Girl1 , name : 'Haylie Aminoff',time:'32 minutes ago'  ,ratingtxt:'4.5' , lorem:'Lorem ipsum dolor sit amet, consetetur sadi sspscing elitr, sed diam nonumy' },
{ id:2 , icon : Girl2, name : 'Carla Septimus', time:'32 minutes ago' ,ratingtxt:'4.5' , lorem:'Lorem ipsum dolor sit amet, consetetur sadi sspscing elitr, sed diam nonumy' },
{ id:3 , icon : Girl3 , name : 'Carla George',time:'32 minutes ago'  ,ratingtxt:'4.5' , lorem:'Lorem ipsum dolor sit amet, consetetur sadi sspscing elitr, sed diam nonumy' },
{ id:4 , icon : Girl4 , name : 'Maren Kenter', time:'32 minutes ago' ,ratingtxt:'4.5' , lorem:'Lorem ipsum dolor sit amet, consetetur sadi sspscing elitr, sed diam nonumy' }

]


const OrderSucessScreen = () => {

    const navigation = useNavigation();
    
      const backArrowHandle = () => {
        navigation.navigate('HomeScreen');
      };
       const StartShoppingHandle = () => {
        navigation.navigate('HomeScreen');
      };
  return (
    <ScrollView>
         
        <View  style={{flex:1, paddingHorizontal:RF(10)}}>

      

        <View style={styles.MainContainer}>
              <HeaderText
        onPress={backArrowHandle}
        text={'Write Reviews'}
        Img={AddIcon}
         />

         <FlatList

         data={ReviewArr}
         renderItem={({item}) => (


<View style={styles.MainReviewCont}>
            <View  style={{flexDirection:'row' }}>
            <Image source={item.icon} style={[IconSize,{tintColor:null,width:RF(42), height:RF(42)}]}/>

            <View style={{marginLeft:RF(10)}}> 
            <Text style={[TextBold, { color: 'black', fontSize: RF(15) }]}>{item.name}</Text>
            <Text style={[TextRegular, { color: 'black', fontSize: RF(10) }]}>{item.time}</Text>
            </View>
            </View>
            <View   style={styles.Seprator}/>

            <View style={{flexDirection:'row' , alignItems:'center', gap:RF(10)}}>
            <Text style={[TextBold, { color: 'black', fontSize: RF(18) }]}>{item.ratingtxt}</Text>
            <Image source={StarGroup} style={[IconSize,{width:RF(87),height:RF(15),tintColor:null}]}/>
            </View>


             <Text style={[TextRegular, { color: 'black', fontSize: RF(10) }]}>{item.lorem}</Text>


            </View>
    
     


         )} 
                   keyExtractor={item => item.id}

         />

         

      </View>
            </View>

      </ScrollView>
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
    MainReviewCont:{

        width:'100%',
        backgroundColor:White,
        padding:RF(15),
        marginTop:RF(10)

    },
    Seprator:{

        height:RF(2),
        width:'100%',
        backgroundColor:MidGrey,
        marginTop:RF(10)
    }

})