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
  FilterIcon,
  Grapes,
  HeartFilIcon,
  HeartIcon,
  HomeBackGround,
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
  Link,
  MidGrey,
  Primary,
  Secondary,
  SimpleText,
  White,
} from '../styles/colors/colorsCode';
import { NewAppScreen } from '@react-native/new-app-screen';
import React, { useState } from 'react';

const CategoriesImages = [
  { id: '1', source: CatIconvegitable, color: '#E6F2EA', name: 'Vegitable' },
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

const HomeScreen = () => {
  const [Heart, setHeart] = useState([]);
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.MainContainer}>
        {/* Search Bar */}
        <View style={styles.SearchInputContainer}>
          <Image source={SearchIcon} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder=" Search Keyword..."
          />
          <Image source={FilterIcon} style={styles.filterIcon} />
        </View>

        {/* Main Image */}
        <Image
          source={HomeBackGround}
          style={styles.mainBannerImage}
          resizeMode="cover"
        />

        {/* Category Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Categories</Text>
          <Image source={RightIcon} style={styles.rightArrowIcon} />
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
          <Image source={RightIcon} style={styles.rightArrowIcon} />
        </View>

        {/* Flat List For Products */}
        <FlatList
          data={ProductsImages}
          renderItem={({ item }) => (
            <View style={styles.productCardWrapper}>
              <View style={styles.productCard}>
                <View
                  style={[
                    styles.NewTagWrapper,
                   
                  ]}
                >
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
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  MainContainer: {
    backgroundColor: LightGrey,
    width: '100%',
    paddingVertical: RF(10),
  },
  SearchInputContainer: {
    backgroundColor: '#F7F8FB',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: RF(50),
    borderRadius: RF(5),
    marginTop: RF(10),
    paddingHorizontal: RF(15),
    alignSelf: 'center',
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Poppins-Medium',
    fontSize: RF(16),
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
    width: '90%',
    height: RF(283),
    borderRadius: RF(10),
    marginTop: RF(20),
    alignSelf: 'center',
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
    width: '45%',
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
    height: RF(30),
    backgroundColor: White,
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
    tintColor: Secondary
    
 
  },

  NewTagWrapper: {
   paddingHorizontal:RF(10),
   paddingVertical:RF(5),
   backgroundColor:'#FCFFD9',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'flex-start'
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
    marginTop: RF(5),
    marginLeft: RF(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
