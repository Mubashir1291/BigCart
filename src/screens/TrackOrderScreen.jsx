import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { LightGrey, White } from '../styles/colors/colorsCode';
import HeaderText from '../components/header/HeaderText';
import { RF } from '../Utils/Responsive';
import { useNavigation } from '@react-navigation/native';
import { OrderConfirmIcon, OrderDeliveredtIcon, OrderIcon, OrderPlacedIcon, OrderShipIcon, OutOfDeliveryIcon } from '../assets/Index';
import { IconSize, TextBold, TextRegular } from '../components/IconSize/Sizes';
import { SafeAreaView } from 'react-native-safe-area-context';


const TrackOrderScreen = () => {
        const navigation = useNavigation();

  const OrderSectionHandle = () => {
    navigation.navigate('OrderSucessScreen')
  };

  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.container}>

      <HeaderText navigation={navigation} text={'Track Order'} />
      <View style={styles.MainContainer}>

      <View style={styles.orderCard}>
         <View>
                <Image source={OrderIcon}  style={styles.OrderIconSizes}/>
            </View>
        <View style={{ marginLeft: RF(12) }}>
          <Text style={[TextBold,{color:'black',fontSize:RF(15)}]}>Order #90897</Text>
          <Text style={[TextRegular,{fontSize:RF(10)}]}>Placed on October 19 2021</Text>
          <Text style={[TextRegular,{fontSize:RF(10)}]}>Items: 10    Items: $16.90</Text>
        </View>
      </View>

      <View style={styles.OrderDetails}>
        <View style={styles.stepRow}>

          <View style={styles.iconColumn}>
            <Image source={OrderPlacedIcon}  style={styles.OrderIconSizes}/>
            <View style={{height:RF(50), width:RF(1),backgroundColor:'lightgrey',position:'absolute', top:RF(65)}}></View>
          </View>

          <View style={styles.textColumn}>
            <Text style={[TextBold,{color:'black',fontSize:RF(15)}]}>Order Placed</Text>
            <Text style={[TextRegular,{fontSize:RF(10)}]}>October 21 2021</Text>
            
            <View style={{height:RF(1), width:'78%',backgroundColor:'lightgrey',position:'absolute', top:RF(100)}}></View>
        
          </View>
        </View>

        <View style={styles.stepRow}>
          <View style={styles.iconColumn}>
             
                <Image source={OrderConfirmIcon}  style={styles.OrderIconSizes}/>
                            <View style={{height:RF(50), width:RF(1),backgroundColor:'lightgrey',position:'absolute', top:RF(65)}}></View>

            
            
          </View>
          <View style={styles.textColumn}>
            <Text style={[TextBold,{color:'black',fontSize:RF(15)}]}>Order Confirmed</Text>
            <Text style={[TextRegular,{fontSize:RF(10)}]}>October 21 2021</Text>
            <View style={{height:RF(1), width:'78%',backgroundColor:'lightgrey',position:'absolute', top:RF(100)}}></View>

          </View>
        </View>

        <View style={styles.stepRow}>
          <View style={styles.iconColumn}>
            
                <Image source={OrderShipIcon}  style={styles.OrderIconSizes}/>
                            <View style={{height:RF(50), width:RF(1),backgroundColor:'lightgrey',position:'absolute', top:RF(65)}}></View>

            
          </View>
          <View style={styles.textColumn}>
            <Text style={[TextBold,{color:'black',fontSize:RF(15)}]}>Order Shipped</Text>
            <Text style={[TextRegular,{fontSize:RF(10)}]}>October 21 2021</Text>
            <View style={{height:RF(1), width:'78%',backgroundColor:'lightgrey',position:'absolute', top:RF(100)}}></View>

          </View>
        </View>

        <View style={styles.stepRow}>
          <View style={styles.iconColumn}>
            
                <Image source={OutOfDeliveryIcon}  style={styles.OrderIconSizes}/>
                            <View style={{height:RF(50), width:RF(1),backgroundColor:'lightgrey',position:'absolute', top:RF(65)}}></View>

            
          </View>
          <View style={styles.textColumn}>
            <Text style={[TextBold,{color:'black',fontSize:RF(15)}]}>Out for Delivery</Text>
            <Text style={[TextRegular,{fontSize:RF(10)}]}>Pending</Text>
            <View style={{height:RF(1), width:'78%',backgroundColor:'lightgrey',position:'absolute', top:RF(100)}}></View>

          </View>
        </View>

        <View style={styles.stepRow}>
          <View style={styles.iconColumn}>
             
            <Image source={OrderDeliveredtIcon}  style={styles.OrderIconSizes}/>

            
          </View>
          <View style={styles.textColumn}>
            <Text style={[TextBold,{color:'black',fontSize:RF(15)}]}>Order Delivered</Text>
            <Text style={[TextRegular,{fontSize:RF(10)}]}>Pending</Text>
          </View>
        </View>
      </View>
      </View>
            </View>

    </ScrollView>
    </SafeAreaView>
  );
};

export default TrackOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LightGrey,
  },
  MainContainer:{
    flex:1,
paddingHorizontal:RF(10)
  },
  orderCard: {
    flexDirection: 'row',
    backgroundColor: '#F1FFF4',
    paddingLeft:RF(15),
    marginBottom: RF(20),
    marginTop: RF(20),
    alignItems: 'center',
    width:'100%'
  },
  OrderDetails: {
    backgroundColor: White,
    width:'100%',
     paddingLeft:RF(15),
  },
  orderIcon: {
   
    height: RF(45),
    backgroundColor: '#E8FDEB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderTitle: {
    fontSize: RF(16),
    fontWeight: 'bold',
    color: '#000',
  },
  orderSub: {
    fontSize: RF(13),
    color: '#666',
    marginTop: RF(2),
  },
  
  stepRow: {
    flexDirection: 'row',
    marginBottom: RF(30),
    paddingLeft:RF(10),
    paddingTop:RF(20)
  },
  iconColumn: {
    alignItems: 'center',
    width: RF(50),
  },
  circle: {
    width: RF(32),
    height: RF(32),
    borderRadius: RF(16),
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  textColumn: {
    marginLeft: RF(15),
    justifyContent: 'center',
    position:'static'
  },

 

  OrderIconSizes:{
    height:RF(66),
    width:RF(66),
    resizeMode:'contain',
    position:'relative'
  }
});
