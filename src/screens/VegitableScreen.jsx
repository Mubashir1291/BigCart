import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { BackIcon, FilterIcon , HeartIcon, Heart,HeartFilIcon, MinusIcon,PlusIcon} from '../assets/Index';
import { RF } from '../Utils/Responsive';
import {Peach,Avacado,Pomgrante,Grapes,Brocli,Pineapple} from '../assets/Index';
const ProductsImages = [
  {id: '1', source: Peach,color: '#FFCEC1',name: 'Fresh Peach',price: '$8.00',Size: 'Dozen',},
  {id: '2',source: Avacado,color: '#FCFFD9',name: 'Avacado',price: '$7.00',Size: '2.0 lbs',new: 'NEW',},
  {id: '3',source: Pineapple,color: '#FFE6C2',name: 'Pineapple',price: '$9.90',Size: '1.50 lbs',},
  {id: '4',source: Grapes,color: '#FEE1ED',name: 'Black Grapes',price: '$7.05',Size: '5.0 lbs',new: '-16%',},
  { id: '5',source: Pomgrante,color: '#FFE3E2',name: ' Pomegrante',price: '$2.09',Size: '1.50 lbs',new: 'NEW', },
  {id: '6',source: Brocli,color: '#D2FFD0',name: 'Fresh Broccoli',price: '$3.00',Size: '1.0 kg',},];
import { useNavigation } from '@react-navigation/native';
import { Secondary,Primary } from '../styles/colors/colorsCode';
import  { useState } from 'react';
import  HeadertText from "../components/header/HeaderText"
import { SafeAreaView } from 'react-native-safe-area-context';






const VegitableScreen = () => {
const [Heart, setHeart] = useState([]);
    

  const navigation = useNavigation();
  const backArrowHandle = () => {
    navigation.navigate('NavBar');
  };

  return (
    <SafeAreaView>
    <ScrollView>


    <View style={{ flex: 1, backgroundColor: '#F4F5F9' }}>
      <View style={styles.Maincontainer}>
        <View style={styles.CategoryPageContainer}>
           
         <HeadertText
            navigation={navigation}
            text = "Vegetables"
            Img={FilterIcon}
          />
        </View>

      {/* Flat List For Products */}
        <View style={{width:'100%',alignItems:'center',padding:10,justifyContent:'center'}}>
        <FlatList
          data={ProductsImages}
          renderItem={({ item }) => (
            <View style={styles.productCardWrapper}>
              <View style={styles.productCard}>
                <View style={[styles.NewTagWrapper]}>
                  <Text style={styles.NewTagTextWrapper}> New</Text>
                </View>

                <TouchableOpacity
                  onPress={() => {
                    if (Heart.includes(item.id)) {
                      setHeart(Heart.filter(id => id !== item.id)); // remove if already favorited
                    } else {
                      setHeart([...Heart, item.id]); // add to favorites
                    }
                  }}
                >
                  <View style={styles.HeartWrapper}>
                    <Image
                      source={
                        Heart.includes(item.id) ? HeartFilIcon : HeartIcon
                      }
                      style={styles.HeartIconStyle}
                    />
                  </View>
                </TouchableOpacity>

                <View
                  style={[
                    styles.productImageWrapper,
                    { backgroundColor: item?.color },
                  ]}
                >
                  <Image source={item.source} style={styles.productImage} />
                </View>
                <Text style={styles.productPrice}>{item.price}</Text>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productSize}>{item.Size}</Text>
              </View>
              <View style={styles.quantityBar}>
                <Image source={MinusIcon} style={styles.MinusBar} />
                <View>
                  <Text style={styles.quantityBarText}>1</Text>
                </View>
                <Image source={PlusIcon} style={styles.MinusBar} />
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={{ width: RF(15) }} />}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        </View>
        </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default VegitableScreen;

const styles = StyleSheet.create({
  CategoryPageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: RF(75),
    backgroundColor: '#FFFFFF',
  },

  BackArrowIcon: {
    width: RF(20),
    height: RF(20),
    resizeMode: 'contain',
  },
  CategoryText: {
    fontSize: RF(18),
    fontFamily: 'Poppins-Medium',
  },

  filterIcon: {
    width: RF(20),
    height: RF(20),
    resizeMode: 'contain',
    tintColor: 'black',
  },
  flatListContainer: {
    paddingVertical: RF(15),
    paddingHorizontal: RF(15),
  },
productCardWrapper: {
    width: '47%',
    alignItems: 'center',
    marginBottom: RF(20),
    marginHorizontal: RF(5),
    
  },
  productCard: {
    width: '100%',
    backgroundColor: 'white',
    padding: RF(10),
    alignItems: 'center',
  },
  productImageWrapper: {
    height: RF(80),
    width: RF(80),
    borderRadius: RF(50),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: RF(20),
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  productPrice: {
    marginTop: RF(8),
    fontSize: RF(12),
    fontFamily: 'Poppins-Regular',
    color: Secondary,
  },
  productName: {
    fontSize: RF(14),
    fontFamily: 'Poppins-Bold',
    color: '#333',
  },
  productSize: {
    fontSize: RF(12),
    fontFamily: 'Poppins-Medium',
    color: '#333',
    marginBottom: RF(10),
  },
  quantityBar: {
    width: '100%',
    height: RF(30),
    backgroundColor: 'white',
    marginTop: RF(5),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 35,
  },
  quantityBarText: {
    fontSize: RF(18),
  },
  MinusBar: {
    width: RF(15),
    height: RF(15),
    tintColor: Secondary,
  },

  NewTagWrapper: {
    paddingHorizontal: RF(10),
    paddingVertical: RF(5),
    backgroundColor: '#FCFFD9',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  NewTagTextWrapper: {
    fontSize: RF(10),
    color: '#E8AD41',
    fontFamily: 'Poppins-Regular',
  },
  HeartIconStyle: {
    height: RF(15),
    width: RF(15),
    resizeMode: 'contain',
  },
  HeartWrapper: {
    width:'100%',
    alignSelf:'flex-end',   
  },
})