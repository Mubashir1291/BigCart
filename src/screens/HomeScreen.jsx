import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
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
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector, useDispatch } from 'react-redux';
import { setFavourites, setCartItems } from '../redux/Reducers/userReducer';
import { TextBold } from '../components/IconSize/Sizes';
import {
  SharedElement,
  SharedElementTransition,
  nodeFromRef
} from 'react-native-shared-element';// Categories & Products dummy data



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
    price: 8.0,
    Size: 'Dozen',
  },
  {
    id: '2',
    source: Avacado,
    color: '#FCFFD9',
    name: 'Avacado',
    price: 7.0,
    Size: '2.0 lbs',
    new: 'NEW',
  },
  {
    id: '3',
    source: Pineapple,
    color: '#FFE6C2',
    name: 'Pineapple',
    price: 9.9,
    Size: '1.50 lbs',
  },
  {
    id: '4',
    source: Grapes,
    color: '#FEE1ED',
    name: 'Black Grapes',
    price: 7.05,
    Size: '5.0 lbs',
    new: '-16%',
  },
  {
    id: '5',
    source: Pomgrante,
    color: '#FFE3E2',
    name: 'Pomegrante',
    price: 2.09,
    Size: '1.50 lbs',
    new: 'NEW',
  },
  {
    id: '6',
    source: Brocli,
    color: '#D2FFD0',
    name: 'Fresh Broccoli',
    price: 3,
    Size: '1.0 kg',
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  let startScene ;
  let startNode;
  
  const favourites = useSelector(state => state.user.favourites) || [];
  const cartItems = useSelector(state => state.user.cartItems) || [];
  const dispatch = useDispatch();

  // ✅ Add product
  const addToCart = (product) => {
    const updated = [...cartItems];
    const existing = updated.find(item => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      updated.push({ ...product, quantity: 1 });
    }
    dispatch(setCartItems(updated));
  };

  // ✅ Increment
  const increment = (id) => {
    const updated = cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    dispatch(setCartItems(updated));
  };

  // ✅ Decrement
  const decrement = (id) => {
    const safeCartItems = Array.isArray(cartItems) ? cartItems : [];
    const updated = safeCartItems
      .map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0);

    dispatch(setCartItems(updated));
  };

  // ✅ Helpers
  const getTotalQuantity = () =>
    cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const getTotalPrice = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.MainContainer}>
          {/* Search bar */}
          <View style={styles.SearchInputContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
              <Image source={SearchIcon} style={styles.searchIcon} />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              placeholder=" Search Keyword..."
              placeholderTextColor={'grey'}
              color={'black'}
            />
            <TouchableOpacity onPress={() => navigation.navigate('FilterScreen')}>
              <Image source={FilterIcon} style={styles.filterIcon} />
            </TouchableOpacity>
          </View>

          {/* Banner */}
          <View style={{ width: '100%', height: RF(283), alignItems: 'center', paddingHorizontal: RF(15) }}>
            <Swiper
              autoplay
              loop
              showsButtons={false}
              dot={<View style={styles.dotStyle} />}
              activeDot={<View style={styles.activeDotStyle} />}
              paginationStyle={styles.paginationStyle}
            >
              <ImageBackground source={HomeBackGround} style={styles.mainBannerImage}>
                <View style={styles.offtextView}>
                  <Text style={styles.offtext}> 20% Off on your</Text>
                  <Text style={styles.offtext}> first purchase </Text>
                </View>
              </ImageBackground>
              <ImageBackground source={homebackImage} style={styles.mainBannerImage} />
            </Swiper>
          </View>

          {/* Categories */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Categories</Text>
            <TouchableOpacity onPress={() => navigation.navigate('CategoryScreen')}>
              <Image source={RightIcon} style={styles.rightArrowIcon} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={CategoriesImages}
            renderItem={({ item }) => (
              <View style={styles.categoryItem}>
                <View style={[styles.categoryImageWrapper, { backgroundColor: item?.color }]}>
                  <Image source={item.source} style={styles.categoryImage} />
                </View>
                <Text style={styles.categoryNameText}>{item.name}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
          />

          {/* Products */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Featured Products</Text>
            <TouchableOpacity onPress={() => navigation.navigate('VegitableScreen')}>
              <Image source={RightIcon} style={styles.rightArrowIcon} />
            </TouchableOpacity>
          </View>

          <FlatList
            data={ProductsImages}
            numColumns={2}
            keyExtractor={item => item.id}
            contentContainerStyle={{ alignItems: 'center' }}
            renderItem={({ item }) => {
              const cartItem = cartItems?.find(ci => ci.id === item.id);
              const quantity = cartItem ? cartItem.quantity : 0;
              const isFavourite = favourites.some(fav => fav.id === item.id);

              return (
                <View style={styles.productCardWrapper}>
                  
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ProductDetailsScreen', { Detail: item })}
                    style={styles.productCard}
                  >
                    <View style={styles.topContainer}>
                     
                         {item.new ? (
                        <View style={styles.NewTagWrapper}>
                          <Text style={styles.NewTagTextWrapper}>{item.new}</Text>
                        </View>
                      ) : (
                        <View style={{ width: RF(40) }} />
                      )}
                       <TouchableOpacity
                        onPress={() =>
                          dispatch(
                            setFavourites(
                              isFavourite
                                ? (Array.isArray(favourites) ? favourites : []).filter(fav => fav.id !== item.id)
                                : [...(Array.isArray(favourites) ? favourites : []), item]
                            )
                          )
                        }
                      >
                        <Image
                          source={isFavourite ? HeartFilIcon : HeartIcon}
                          style={styles.HeartIconStyle}
                        />
                      </TouchableOpacity>
                    </View>
                    <SharedElement id={`item.${item.id}.source`}>
                    <View style={[styles.productImageWrapper, { backgroundColor: item.color }]}>
                      <Image source={item.source} style={styles.productImage} />
                    </View>
                    </SharedElement>


                    <Text style={styles.productName}>{item.name}</Text>




                    <Text style={styles.productPrice}>${item.price}</Text>
                    <Text style={styles.productSize}>{item.Size}</Text>
                  </TouchableOpacity>

                  {/* Quantity bar */}
                  {quantity > 0 ? (
                    <View style={styles.quantityBar}>
                      <TouchableOpacity onPress={() => decrement(item.id)}>
                        <Image
                          source={quantity <= 1 ? DeleteIcon : MinusIcon}
                          style={[styles.MinusBar, quantity <= 1 && { tintColor: 'red', width: RF(20), height: RF(20) }]}
                        />
                      </TouchableOpacity>
                      <Text style={styles.quantityBarText}>{quantity}</Text>
                      <TouchableOpacity onPress={() => increment(item.id)}>
                        <Image source={PlusIcon} style={styles.MinusBar} />
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <TouchableOpacity style={styles.singlePlusWrapper} onPress={() => addToCart(item)}>
                      <Image source={PlusIcon} style={styles.MinusBar} />
                    </TouchableOpacity>
                  )}
                </View>
              );
            }}
          />
          <View style={{ height: RF(70) }} />
        </View>
      </ScrollView>

      {/* Bottom bar */}
      {cartItems?.length > 0 && (
        <View style={styles.BottomContainer}>
             <TouchableOpacity
            style={styles.viewButton}
            onPress={() =>
              navigation.navigate('CheckoutScreen', {
                selectedItems: cartItems,
                counts: Object.fromEntries(cartItems.map(item => [item.id, item.quantity]))
              })
            }
          >
            <View style={styles.itemCircle}>
              <Text style={{ fontSize: RF(15), color: White, lineHeight: 30 }}>{getTotalQuantity()}</Text>
            </View>
            <Text style={[TextBold, { color: White, fontSize: RF(15) }]}>View your cart</Text>
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

// Styles
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
    height: RF(30),
    backgroundColor: White,
    marginTop: RF(5),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 35,
  },
  quantityBarText: { fontSize: RF(18) },
  MinusBar: {
    width: RF(15),
    height: RF(15),
    tintColor: Secondary,
    resizeMode: 'contain',
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
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