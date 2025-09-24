import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View,ImageBackground} from 'react-native'
import React, { useState } from 'react'
import { BackIcon, CartIcon, HeartFilIcon, HeartIcon, LemonIcon, MinusIcon, PlusIcon, StarIcon } from '../assets/Index'
import { Primary, Secondary, White } from '../styles/colors/colorsCode'
import { RF } from '../Utils/Responsive'
import { IconSize, TextBold, TextMedium, TextRegular, TextSemiBold } from '../components/IconSize/Sizes'
import { useNavigation, useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context'

const ProductDetailsScreen = () => {
    const [HeartPress, setHeartPress] = useState(true);
const route=useRoute()


      const navigation = useNavigation();
    
      const AddCartHandle = () => {
        navigation.navigate('CartScreen')
      };
       const ReviewHandle = () => {
        navigation.navigate('ReviewScreen')
      };
        const backscreen = () => {
        navigation.navigate('NavBar')
      };
 const [counts, setCounts] = useState(1);


const increaseQuantity = () => {
  setCounts(prev => prev + 1);
};

const decreaseQuantity = () => {
  if (counts > 1) { 
    setCounts( prev => prev - 1);
  }
};








  return (
    <SafeAreaView>
    <ScrollView>
    <View style={{flex:1 }}>
        <View  style={styles.ProductImageContainer}>
            <View style={[styles.ImageBackgroundCon,{backgroundColor: route?.params?.Detail?.color}]}></View>

        <ImageBackground source={route?.params?.Detail?.source} style={[IconSize,{tintColor:null,height:RF(300),width:'100%',marginTop:RF(30)}]}>
        <TouchableOpacity onPress={backscreen}> <Image source={BackIcon} style={[IconSize,{tintColor:'black', marginLeft:RF(10)}]}/> </TouchableOpacity>  
         </ImageBackground > 
         </View>
         <View style ={styles.DetailsContainer}>

              {/* Price Container */}
            <View style ={styles.PriceContainer} >
            <Text style={[TextMedium,{color:Secondary , fontSize:RF(18) ,flex:1}]}> {route?.params?.Detail?.price} </Text>
            <TouchableOpacity  onPress={() => setHeartPress(!HeartPress)}>
            <Image source={HeartPress? HeartIcon: HeartFilIcon} style={[IconSize,{tintColor:null}]}/>
            </TouchableOpacity>
         </View>
            <Text style={[TextBold,{color:'black' , fontSize:RF(20)}]}> {route?.params?.Detail?.name}</Text>
            <Text style={[TextRegular,{color:'black' , fontSize:RF(12)}]}> {route?.params?.Detail?.Size} </Text>
            <TouchableOpacity onPress={ReviewHandle}>
            <View style ={styles.ReviewContainer} >
            <Text style={[TextSemiBold,{color:Secondary ,fontSize:RF(12)}]}> 4.5 </Text>

            <View style ={styles.starsContainer}>
            <Image source={StarIcon} style={[IconSize,{tintColor:'#FFC107',width:RF(15),height:RF(15)}]}/>
            <Image source={StarIcon} style={[IconSize,{tintColor:'#FFC107',width:RF(15),height:RF(15)}]}/>
            <Image source={StarIcon} style={[IconSize,{tintColor:'#FFC107',width:RF(15),height:RF(15)}]}/>
            <Image source={StarIcon} style={[IconSize,{tintColor:'#FFC107',width:RF(15),height:RF(15)}]}/>
            <Image source={StarIcon} style={[IconSize,{tintColor:'#FFC107',width:RF(15),height:RF(15)}]}/>
            </View>
            <Text style={[TextRegular,{fontSize:RF(12)}]}> (89 reviews) </Text>

         </View>
         </TouchableOpacity>
         <Text style={[TextRegular,{fontSize:RF(12)}]}>Organic Mountain works as a seller for many organic growers of organic lemons. Organic lemons are easy to spot in your produce aisle. They are just like regular lemons, but they will usually have a few more scars on the outside of the lemon skin. Organic lemons are considered to be the world's finest lemon for juicing </Text>

         <View style={styles.QuantityBarContainer}>  
         <View style={styles.QuantityMinusContainer}> 


            <Text style={[TextMedium,{flex:1}]}>Quantity</Text>

            <TouchableOpacity onPress={decreaseQuantity}>
            <Image source={MinusIcon} style={[IconSize,{tintColor:Secondary}]}/>
            </TouchableOpacity>
         </View>
         
         <View style={styles.QuantityReslutContainer}>
        <Text style={[TextRegular,{color:'black',fontSize:RF(18)}]}>{counts}</Text>
        </View>
        

         <View style={styles.QuantityPlusContainer}> 
          <TouchableOpacity onPress={increaseQuantity}>

        <Image source={PlusIcon} style={[IconSize,{tintColor:Secondary}]}/>
</TouchableOpacity>
         </View>
         

         </View>
         <TouchableOpacity onPress={AddCartHandle} style={styles.CreateButtonContainer}  >
                         <LinearGradient
                             style={styles.GetStartedBtn}
                             colors={[Primary, Secondary]}
                             start={{ x: 0, y: 1 }}
                             end={{ x: 1, y: 1 }}
                         >
                         <View style={styles.ButtonCont}>
                            <View></View>
                                                        <View></View>

                         <Text style={[TextMedium,{color:White, fontSize:RF(15) }]}>Add Cart</Text>
                                                     <View></View>

                        <Image source={CartIcon} style={[IconSize,{tintColor:White }]}/>
                        </View>

                         </LinearGradient>
                     </TouchableOpacity>

    </View>
        </View>
</ScrollView>
</SafeAreaView>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({

    ProductImageContainer:{
        width:'100%',
        height:RF(400),
        backgroundColor:White,
        alignItems:'center',
    },
    DetailsContainer:{
        paddingHorizontal:RF(15),
        paddingTop:RF(15)
    },
     PriceContainer:{
     flexDirection:'row',
     alignItems:'center'
    },
    starsContainer:{

        flexDirection:'row',
        gap:RF(5),
    },
      ReviewContainer:{
     flexDirection:'row',
   
     gap:RF(5)
    },
    QuantityBarContainer:{

      flexDirection:'row',
      width:'100%',
      alignItems:'center',
      gap:RF(2)

    },
    QuantityMinusContainer:{
      flexDirection:'row',
      width:'70%',
      backgroundColor:White,
      height:RF(50),
      alignItems:'center',
      padding:RF(15)
      
    },
    QuantityReslutContainer:{
      width:'15%',
      backgroundColor:White,
      height:RF(50),
      alignItems:'center',
      padding:RF(10)
    },
     QuantityPlusContainer:{
      width:'15%',
      backgroundColor:White,
      height:RF(50),
      alignItems:'center',
      padding:RF(10)
    },
       CreateButtonContainer:{
            flexDirection:'row',
            alignItems: 'center',
            justifyContent:'center',
            width: '100%',
            marginTop:RF(10),
            paddingBottom:RF(10),
           },
GetStartedBtn: {
       flexDirection:'row',
            alignItems: 'center',
            width: '100%',
        height: RF (50),
        borderRadius: RF (5),
        backgroundColor: 'Secondary',
        
    },
    ButtonCont:{
        flex:1,
        justifyContent:'space-around',
        flexDirection:'row',
    },
    ImageBackgroundCon:{

        width:'100%',
        height:RF(380),
        borderBottomRightRadius:RF(250),
        borderBottomLeftRadius:RF(250),
        position: 'absolute',


    }
    
})
