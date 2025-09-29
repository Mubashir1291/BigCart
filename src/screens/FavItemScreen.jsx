import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { RF } from '../Utils/Responsive';
import { White, Secondary } from '../styles/colors/colorsCode';
import { MinusIcon, PlusIcon, DeleteIcon, FilterIcon } from '../assets/Index';
import HeadertText from '../components/header/HeaderText';
import { useNavigation } from '@react-navigation/native';
import Buttons from '../components/buttons/Buttons';



const CheckoutScreen = ({ route }) => {

  const { } = route.params;


  const navigation = useNavigation();
  

  

 



  return (
    <View style={{ flex: 1, backgroundColor: White, padding: RF(15) }}>


      < Text> hello</Text>
       {/* <View style={styles.HeaderContainer}>
            <View style={styles.CategoryPageContainer}>
              <HeadertText
                navigation={navigation}
                text="Favourites"
                Img={FilterIcon}
                tintColor2={White}

              />
            </View> */}
          {/* </View> */}

      {/* <FlatList
        data={selectedItems}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
          cartCounts[item.id] ? (
            <View style={styles.cartItem}>
              <Image source={item.source} style={styles.cartImage} />
              <View style={{ flex: 1 }}>
                <Text style={styles.cartName}>{item.name}</Text>
                <Text style={styles.cartPrice}>${item.price}</Text>
              </View>

             
            </View>
          ) : null
        }
      /> */}

      
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: RF(15),
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: RF(10),

  },
  cartImage: {
    width: RF(75),
    height: RF(75),
    resizeMode: 'contain',
    marginRight: RF(10),
  },
  cartName: {
    fontSize: RF(14),
    fontWeight: '600',
    color: '#333',
  },
  cartPrice: {
    fontSize: RF(12),
    color: Secondary,
  },
  cartControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: RF(10),
  },
  icon: {
    width: RF(18),
    height: RF(18),
    resizeMode: 'contain',
    tintColor: Secondary,
  },
  cartCount: {
    fontSize: RF(14),
    fontWeight: '600',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: '#ddd',
    paddingTop: RF(10),
    
  },
  totalText: {
    fontSize: RF(16),
    fontWeight: '700',
    marginBottom: RF(10),
  },
  checkoutBtn: {
    backgroundColor: Secondary,
    padding: RF(12),
    borderRadius: RF(8),
    alignItems: 'center',
  },
});
