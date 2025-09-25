
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { RF } from '../Utils/Responsive';
import {
  Avacado,
  Brocli,
  CatIconApple,
  CatIconBabyCare,
  CatIconDrink,
  CatIconEdible,
  CatIconGrocery,
  CatIconHouseHold,
  CatIconvegitable,
  DeleteIcon,
  FilterIcon,
  Grapes,
  HeartFilIcon,
  HeartIcon,
  HomeBackGround,
  homebackImage,
  MinusIcon,
  Peach,
  Pineapple,
  PlusIcon,
  Pomgrante,
  RightIcon,
  SearchIcon,
} from '../assets/Index';
import {
  LightGrey,
  Primary,
  Secondary,
  White,
} from '../styles/colors/colorsCode';
import React, { useState } from 'react';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  TextBold,
  TextMedium,
  TextSemiBold,
} from '../components/IconSize/Sizes';

const CategoriesImages = [
  { id: '1', source: CatIconvegitable, color: '#E6F2EA', name: 'Vegetables' },
  { id: '2', source: CatIconApple, color: '#FFE9E5', name: 'Fruits' },
  { id: '3', source: CatIconDrink, color: '#FFF6E3', name: 'Beverages' },
  { id: '4', source: CatIconGrocery, color: '#F3EFFA', name: 'Grocery' },
  { id: '5', source: CatIconEdible, color: '#DCF4F5', name: 'Edible Oil' },
  { id: '6', source: CatIconHouseHold, color: '#FFE8F2', name: 'Household' },
  { id: '7', source: CatIconBabyCare, color: '#D2EFFF', name: 'Baby Care' },
];

const ProductsImages = [
  {
    id: '1',
    source: Peach,
    color: '#FFCEC1',
    name: 'Fresh Peach',
    price: '8.00',
    Size: 'Dozen',
  },
  {
    id: '2',
    source: Avacado,
    color: '#FCFFD9',
    name: 'Avacado',
    price: '7.00',
    Size: '2.0 lbs',
    new: 'NEW',
  },
  {
    id: '3',
    source: Pineapple,
    color: '#FFE6C2',
    name: 'Pineapple',
    price: '9.90',
    Size: '1.50 lbs',
  },
  {
    id: '4',
    source: Grapes,
    color: '#FEE1ED',
    name: 'Black Grapes',
    price: '7.05',
    Size: '5.0 lbs',
    new: '-16%',
  },
  {
    id: '5',
    source: Pomgrante,
    color: '#FFE3E2',
    name: ' Pomegrante',
    price: '2.09',
    Size: '1.50 lbs',
    new: 'NEW',
  },
  {
    id: '6',
    source: Brocli,
    color: '#D2FFD0',
    name: 'Fresh Broccoli',
    price: '3',
    Size: '1.0 kg',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [counts, setCounts] = useState({});
  const [Heart, setHeart] = useState([]);


  // ✅ CHANGED: replaced single `selectedItem` with selectedItems array

  const [selectedItems, setSelectedItems] = useState([]);

  // ✅ CHANGED: replaced single expandedId with array expandedIds

  const [expandedIds, setExpandedIds] = useState([]);

  // ✅ CHANGED: add/remove items in counts + selectedItems

  const increaseCount = item => {
    setCounts(prev => ({ ...prev, [item.id]: (prev[item.id] || 0) + 1 }));
    if (!selectedItems.some(i => i.id === item.id)) {
      setSelectedItems(prev => [...prev, item]);
    }
    if (!expandedIds.includes(item.id)) {
      setExpandedIds(prev => [...prev, item.id]);
    }
  };

  const decreaseCount = item => {
    setCounts(prev => {
      const updated = { ...prev };
      if ((updated[item.id] || 1) > 1) {
        updated[item.id] = updated[item.id] - 1;
      } else {
        delete updated[item.id];
        setSelectedItems(prev => prev.filter(i => i.id !== item.id));
        setExpandedIds(prev => prev.filter(id => id !== item.id)); // ✅ CHANGED
      }
      return updated;
    });
  };

  // ✅ CHANGED: functions for total items and total price
  const getTotalQuantity = () =>
    Object.values(counts).reduce((a, b) => a + b, 0);

   console.log(JSON.stringify(counts),'this is calling')

    const getTotalPrice = () =>
    selectedItems.reduce(
    (sum, item) =>
        sum + parseFloat(item.price) * (counts[item.id] || 1),
      0
    );

  const CategoryHandle = () => navigation.navigate('CategoryScreen');
  const VegitableHandle = () => navigation.navigate('VegitableScreen');
  const SearchScreenHandle = () => navigation.navigate('SearchScreen');
  const FilterScreenHandle = () => navigation.navigate('FilterScreen');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.MainContainer}>
 <View style={styles.SearchInputContainer}>
          <TouchableOpacity onPress={SearchScreenHandle}>
            <Image source={SearchIcon} style={styles.searchIcon} />
          </TouchableOpacity>

          <TextInput
            style={styles.searchInput}
            placeholder=" Search Keyword..."
            placeholderTextColor={'grey'}
            color={'black'}
          />
          <TouchableOpacity onPress={FilterScreenHandle}>
            <Image source={FilterIcon} style={styles.filterIcon} />
          </TouchableOpacity>
        </View>

        {/* Main Image Swiper */}

        <View
          style={{
            width: '100%',
            height: RF(283),
            alignItems: 'center',
            paddingHorizontal: RF(15),
          }}
        >
          <Swiper
            autoplay={true}
            showsButtons={false}
            loop
            dot={<View style={styles.dotStyle} />}
            activeDot={<View style={styles.activeDotStyle} />}
            paginationStyle={styles.paginationStyle}
          >
            <ImageBackground
              source={HomeBackGround}
              style={styles.mainBannerImage}
            >
              <View style={styles.offtextView}>
                <Text style={styles.offtext}> 20% Off on your</Text>
                <Text style={styles.offtext}> first purchase </Text>
              </View>
            </ImageBackground>

            <ImageBackground
              source={homebackImage}
              style={styles.mainBannerImage}
            />
          </Swiper>
        </View>

        {/* Category Section */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Categories</Text>

          <TouchableOpacity onPress={CategoryHandle}>
            <Image source={RightIcon} style={styles.rightArrowIcon} />
          </TouchableOpacity>
        </View>

        {/* Flat List For Categories */}
        <FlatList
          data={CategoriesImages}
          renderItem={({ item }) => (
            <View style={styles.categoryItem}>
              <View
                style={[
                  styles.categoryImageWrapper,
                  { backgroundColor: item?.color },
                ]}
              >
                <Image source={item.source} style={styles.categoryImage} />
              </View>
              <Text style={styles.categoryNameText}>{item.name}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />

        {/* Featured Products Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Featured Products</Text>
          <TouchableOpacity onPress={VegitableHandle}>
            <Image source={RightIcon} style={styles.rightArrowIcon} />
          </TouchableOpacity>
        </View>

          <View
            style={{
              width: '100%',
              alignItems: 'center',
              padding: 10,
              justifyContent: 'center',
            }}
          >
            <FlatList
              data={ProductsImages}
              renderItem={({ item }) => (
                <View style={styles.productCardWrapper}>
                  {/* Product Card */}
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('ProductDetailsScreen', {
                        Detail: item,
                      })
                    }
                    style={styles.productCard}
                  >
             <View  style={styles.topContainer}>
            
                                <View style={styles.NewTagWrapper}>
                                  <Text style={styles.NewTagTextWrapper}> New</Text>
                                    </View>
            
                                    <TouchableOpacity
                                  onPress={() => {
                                    if (Heart.includes(item.id)) {
                                      setHeart(Heart.filter(id => id !== item.id));
                                    } else {
                                      setHeart([...Heart, item.id]);
                                    }
                                  }}
                                >
                                  <Image
                                    source={
                                      Heart.includes(item.id) ? HeartFilIcon : HeartIcon
                                    }
                                    style={styles.HeartIconStyle}
                                  />
                                </TouchableOpacity>
                              
                                </View>

                    <View
                      style={[
                        styles.productImageWrapper,
                        { backgroundColor: item?.color },
                      ]}
                    >
                      <Image
                        source={item.source}
                        style={styles.productImage}
                      />
                    </View>

                    <Text style={styles.productPrice}>${item.price}</Text>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.productSize}>{item.Size}</Text>
                  </TouchableOpacity>

                  {/* ✅ CHANGED: expandedIds used instead of expandedId */}
                  {expandedIds.includes(item.id) ? (
                    <View style={styles.quantityBar}>
                      <TouchableOpacity
                        onPress={() => {
                          if ((counts[item.id] || 1) <= 1) {
                            decreaseCount(item);
                          } else {
                            decreaseCount(item);
                          }
                        }}
                      >
                        <Image
                          source={
                            (counts[item.id] || 1) <= 1
                              ? DeleteIcon
                              : MinusIcon
                          }
                          style={[
                            styles.MinusBar,
                            (counts[item.id] || 1) <= 1 && {
                              tintColor: 'red',
                              width: RF(20),
                              height: RF(20),
                            },
                          ]}
                        />
                      </TouchableOpacity>

                      <Text style={styles.quantityBarText}>
                        {counts[item.id] || 1}
                      </Text>

                      <TouchableOpacity
                        onPress={() => increaseCount(item)}
                      >
                        <Image source={PlusIcon} style={styles.MinusBar} />
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <TouchableOpacity
                      style={styles.singlePlusWrapper}
                      onPress={() => increaseCount(item)} // ✅ simplified
                    >
                      <Image source={PlusIcon} style={styles.MinusBar} />
                    </TouchableOpacity>
                  )}
                </View>
              )}
              keyExtractor={item => item.id}
              numColumns={2}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ alignItems: 'center' }}
            />
          </View>
          <View style={{ height: RF(70) }} />
        </View>
      </ScrollView>

      {/* ✅ CHANGED: Single bottom cart view showing total items + price */}
     {selectedItems.length > 0 && (
        <View style={styles.BottomContainer}>
         <TouchableOpacity
  style={styles.viewButton}
  onPress={() =>
    navigation.navigate('CheckoutScreen', {
      selectedItems,
      counts,
    })
  }
>
  <View style={styles.itemCircle}>
    <Text style={{ fontSize: RF(15), color: White, lineHeight: 30 }}>
      {getTotalQuantity()}
    </Text>
  </View>
  <Text style={[TextBold, { color: White, fontSize: RF(15) }]}>
    View your cart
  </Text>
  <Text style={{ fontSize: RF(14), fontFamily: 'Poppins-Bold', color: White }}>
    ${getTotalPrice().toFixed(2)}
  </Text>
</TouchableOpacity>

          </View>
      
  
      )}
    </SafeAreaView>
  );
};



export default HomeScreen;

const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: LightGrey,
    width: '100%',
    alignItems: 'center',
  },
  SearchInputContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    height: RF(50),
    borderRadius: RF(5),
    elevation: RF(1),
    paddingHorizontal: RF(10),
    marginTop: RF(10),
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Poppins-Medium',
    fontSize: RF(14),
    height: '100%',
    marginLeft: RF(10),
    marginRight: RF(10),
  },
  searchIcon: {
    width: RF(24),
    height: RF(24),
    resizeMode: 'contain',
  },
  filterIcon: {
    width: RF(24),
    height: RF(24),
    resizeMode: 'contain',
  },
  mainBannerImage: {
    width: '100%',
    height: RF(283),
    borderRadius: RF(10),
    marginTop: RF(20),
    alignSelf: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginTop: RF(20),
    alignSelf: 'center',
    marginBottom: RF(10),
  },
  sectionHeaderText: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: RF(20),
    color: '#333',
  },
  rightArrowIcon: {
    width: RF(18),
    height: RF(18),
    resizeMode: 'contain',
  },
  flatListContainer: {
    paddingVertical: RF(10),
    paddingHorizontal: RF(15),
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: RF(5),
  },
  categoryImageWrapper: {
    height: RF(60),
    width: RF(60),
    borderRadius: RF(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: RF(30),
    height: RF(30),
    resizeMode: 'contain',
  },
  categoryNameText: {
    marginTop: RF(8),
    fontSize: RF(12),
    fontFamily: 'Poppins-Regular',
    color: '#333',
  },
  productCardWrapper: {
    width: '47%',
    alignItems: 'center',
    marginBottom: RF(20),
    marginHorizontal: RF(5),
  },
  productCard: {
    width: '100%',
    backgroundColor: White,
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
    height: RF(30),    backgroundColor: White,
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
    resizeMode: 'contain',
  },
  topContainer:{
  
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width:'100%'
},

  NewTagWrapper: {
 backgroundColor: Secondary,
  paddingHorizontal: RF(6),
  paddingVertical: RF(2),
  },
  NewTagTextWrapper: {
    color: White,
  fontSize: RF(10),
  fontFamily: 'Poppins-Bold',
  },
  HeartIconStyle: {
  width: RF(18),
  height: RF(18),
  resizeMode: 'contain',
  },
  dotStyle: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: RF(8),
    height: RF(8),
    borderRadius: RF(4),
    marginLeft: RF(3),
    marginRight: RF(3),
  },
  activeDotStyle: {
    backgroundColor: Primary,
    width: RF(20),
    height: RF(8),
    borderRadius: RF(4),
    marginLeft: RF(3),
    marginRight: RF(3),
  },
  paginationStyle: {
    position: 'absolute',
    alignSelf: 'flex-start',
  },
  offtextView: {
    paddingLeft: RF(25),
    paddingTop: RF(70),
  },
  offtext: {
    fontFamily: 'Poppins-Bold',
    fontSize: RF(14),
    justifyContent: 'flex-start',
  },
  BottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: White,
    padding: RF(15),
    borderTopLeftRadius: RF(15),
    borderTopRightRadius: RF(15),
    alignItems: 'center',
    borderWidth: RF(1),
    borderColor: Primary,
    borderBottomWidth: RF(0),
  },
  viewButton: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: Secondary,
    paddingHorizontal: RF(20),
    paddingVertical: RF(10),
    borderRadius: RF(10),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemCircle: {
    width: RF(30),
    height: RF(30),
    borderRadius: RF(25),
    borderColor: '#fFFFFF',
    borderWidth: RF(1.5),
    alignItems: 'center',
    justifyContent: 'center',
  },

  singlePlusWrapper: {
    width: '100%',
    height: RF(30),
    backgroundColor: White,
    marginTop: RF(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
