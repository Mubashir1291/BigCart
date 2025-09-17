import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,

} from 'react-native';
import { RF } from '../Utils/Responsive';
import {
  Avacado,
  Brocli,

  Grapes,

  MinusIcon,
  Peach,
  Pineapple,
  PlusIcon,
  Pomgrante,

} from '../assets/Index';
import {
  LightGrey,

  Secondary,
  White,
} from '../styles/colors/colorsCode';
import React, { useState } from 'react';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import { IconSize, TextSemiBold } from '../components/IconSize/Sizes';
import { SwipeListView } from 'react-native-swipe-list-view';
import HeaderText from '../components/header/HeaderText';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductsImages = [
  {
    id: '1',
    source: Peach,
    color: '#FFCEC1',
    name: 'Fresh Peach',
    price: '$8.00',
    Size: 'Dozen',
  },
  {
    id: '2',
    source: Avacado,
    color: '#FCFFD9',
    name: 'Avacado',
    price: '$7.00',
    Size: '2.0 lbs',
    new: 'NEW',
  },
  {
    id: '3',
    source: Pineapple,
    color: '#FFE6C2',
    name: 'Pineapple',
    price: '$9.90',
    Size: '1.50 lbs',
  },
  {
    id: '4',
    source: Grapes,
    color: '#FEE1ED',
    name: 'Black Grapes',
    price: '$7.05',
    Size: '5.0 lbs',
    new: '-16%',
  },
  {
    id: '5',
    source: Pomgrante,
    color: '#FFE3E2',
    name: ' Pomegrante',
    price: '$2.09',
    Size: '1.50 lbs',
    new: 'NEW',
  },
  {
    id: '6',
    source: Brocli,
    color: '#D2FFD0',
    name: 'Fresh Broccoli',
    price: '$3.00',
    Size: '1.0 kg',
  },
];

const FavItemScreen = () => {
  const navigation = useNavigation();

  const [listData, setListData] = useState(
    ProductsImages.map((item, index) => ({
      ...item,
      key: `${item.id}`,
    }))
  );

  const backArrowHandle = () => {
    navigation.navigate('ForgetPasswordScreen');
  };

  const VegitableHandle = () => {
    navigation.navigate('VegitableScreen');
  };

  const [counts, setCounts] = useState({});
    
    
  
    const increaseCount = id => {
      setCounts(prev => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
    };
  
    const decreaseCount = id => {
      setCounts(prev => ({
        ...prev,[id]: prev[id] > 1 ? prev[id] - 1 : 1,}));
    };

  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.screenContainer}>
      <View style={styles.HeaderContainer}>
       <HeaderText
       navigation={navigation}
       text={'Favorites'}
       />
      </View>

      <View style={styles.SwipeListContainer}>
        <SwipeListView
          data={listData}
          renderItem={({ item, rowMap }) => (
            <View style={styles.rowFront}>
              <View style={styles.MainContainer}>
                <View style={styles.productCardWrapper}>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={styles.productCard}>
                      <View
                        style={[
                          styles.productImageWrapper,
                          { backgroundColor: item?.color },
                        ]}
                      >
                        <Image source={item.source} style={styles.productImage} />
                      </View>
                      <View style={{ marginLeft: RF(15), flex: 1 }}>
                        <Text style={styles.productPrice}>{item.price}</Text>
                        <Text style={styles.productName}>{item.name}</Text>
                        <Text style={styles.productSize}>{item.Size}</Text>
                      </View>
                      <View style={{ gap: RF(5), alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => increaseCount(item.id)}>
                                           <Image source={PlusIcon} style={styles.MinusBar} />
                                         </TouchableOpacity>
                        <View>
                          <Text style={styles.quantityBarText}>{counts[item.id] || 1}
</Text>
                        </View>
                        <TouchableOpacity onPress={() => decreaseCount(item.id)}>
                                           <Image source={MinusIcon} style={styles.MinusBar} />
                                         </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            
          )}
          renderHiddenItem={({ item, rowMap }) => (
            <View style={styles.rowBack}>
              <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={() => deleteRow(rowMap, item.key)}
              >
                <Text style={styles.backTextWhite}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
          rightOpenValue={-75}
          
          disableRightSwipe={true}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ gap: RF(10), paddingBottom: RF(20) }}
        />
      </View>
            </View>
</ScrollView>
</SafeAreaView>
  );
};

export default FavItemScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: LightGrey,
  },
  MainContainer: {
    backgroundColor: LightGrey,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: RF(10),
  },
  HeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: RF(75),
    backgroundColor: '#FFFFFF',
  },
  productCardWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productCard: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: White,
    padding: RF(10),
    alignItems: 'center',
  },
  productImageWrapper: {
    height: RF(80),
    width: RF(80),
    borderRadius: RF(50),
    alignItems: 'center',
    justifyContent: 'center',
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
  quantityBarText: {
    fontSize: RF(18),
  },
  MinusBar: {
    width: RF(15),
    height: RF(15),
    tintColor: Secondary,
  },
  // SwipeListView styles
  SwipeListContainer: {
    flex: 1,
    marginTop: RF(20),
    paddingHorizontal: RF(10),
  },
  rowFront: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    height: RF(100), // Match the height of your item card
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: '100%',
    borderRadius: RF(10),
  },
  backRightBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: '100%',
  },
  backRightBtnRight: {
    backgroundColor: 'red',
  },
  backTextWhite: {
    color: White,
    fontFamily: 'Poppins-Bold',
  },
});