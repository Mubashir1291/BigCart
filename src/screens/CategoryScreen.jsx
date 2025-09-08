import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { BackIcon } from '../assets/Index';
import { RF } from '../Utils/Responsive';
import {
  CatIconApple,
  CatIconBabyCare,
  CatIconDrink,
  CatIconEdible,
  CatIconGrocery,
  CatIconHouseHold,
  CatIconvegitable,
  FilterIcon,
} from '../assets/Index';
import { useNavigation } from '@react-navigation/native';
import  HeadertText from "../components/header/HeaderText"






const CategoriesImages = [
  { id: '1', source: CatIconvegitable, color: '#E6F2EA', name: 'Vegitable' },
  { id: '2', source: CatIconApple, color: '#FFE9E5', name: 'Fruits' },
  { id: '3', source: CatIconDrink, color: '#FFF6E3', name: 'Beverages' },
  { id: '4', source: CatIconGrocery, color: '#F3EFFA', name: 'Grocery' },
  { id: '5', source: CatIconEdible, color: '#DCF4F5', name: 'Edible Oil' },
  { id: '6', source: CatIconHouseHold, color: '#FFE8F2', name: 'Household' },
  { id: '7', source: CatIconBabyCare, color: '#D2EFFF', name: 'Baby Care' },
];

const CategoryScreen = () => {
  const navigation = useNavigation();
  const backArrowHandle = () => {
    navigation.navigate('NavBar');
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#F4F5F9' }}>
      <View style={styles.Maincontainer}>
        <View style={styles.CategoryPageContainer}>
          
         <HeadertText
            onPress={backArrowHandle} 

            text = " Categories"
            Img = {FilterIcon}
             
          />

        </View>

        <FlatList
          data={CategoriesImages}
          renderItem={({ item }) => (
            <View style={styles.categoryItem}>
              <View style={styles.CategoryCard}>
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
            </View>
          )}
          keyExtractor={item => item.id}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          numColumns={3}
          columnWrapperStyle={{ gap: 10 }}
          ItemSeparatorComponent={<View style={{ height: RF(10) }} />}
        />
      </View>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  CategoryPageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: RF(75),
    paddingHorizontal: 10,
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
   
  },
  flatListContainer: {
    paddingVertical: RF(15),
    paddingHorizontal: RF(15),
  },
  CategoryCard: {
    width: '100%',
    backgroundColor: 'white',
    padding: RF(10),
    alignItems: 'center',
  },
  categoryItem: {
    width: '30%',
    alignItems: 'center',
  },
  categoryImageWrapper: {
    height: RF(60),
    width: RF(60),
    borderRadius: RF(60),
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
});
