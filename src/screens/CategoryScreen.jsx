import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import { BackIcon } from '../assets/Index'
import { RF } from '../Utils/Responsive';
import { CatIconApple,CatIconBabyCare,CatIconDrink,CatIconEdible,CatIconGrocery,CatIconHouseHold, CatIconvegitable, FilterIcon,} from '../assets/Index';

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
  return (
    <View style={{flex:1 , backgroundColor:'#F4F5F9'}}>
        <View style={styles.Maincontainer}>
            <View style={styles.CategoryPageContainer}>
                   <Image source={BackIcon} style={styles.BackArrowIcon} />
                  <Text  style = {styles.CategoryText}>Categories</Text>
                   <Image source={FilterIcon} style={styles.filterIcon} />
                 </View>  


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
                           horizontal={false}
                           showsVerticalScrollIndicator={false}
                           contentContainerStyle={styles.flatListContainer}
                           numColumns={3}
                           
                         />
                 
                         

    </View>
    </View>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({
     Maincontainer:{
    
    },

    CategoryPageContainer:{
     
 flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    width: '100%',
    height: RF(50),
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF'
    },

    BackArrowIcon: {
    width: RF(20),
    height: RF(20),
    resizeMode: 'contain',
  },
  CategoryText:{

    fontSize: RF(18),
    fontFamily:'Poppins-Medium'
  },

 filterIcon: {
    width: RF(20),
    height: RF(20),
    resizeMode: 'contain',
  },
  flatListContainer: {
    paddingVertical: RF(10),
    paddingHorizontal: RF(15),
  },
  CategoryCard:{
      width:'100%',
      height : RF(100),
      backgroundColor: 'white'
  },
  categoryItem: {
    alignItems: 'center',
    marginHorizontal: RF(5),
  },
  categoryImageWrapper: {
    height: RF(80),
    width: RF(80),
    borderRadius: RF(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: RF(40),
    height: RF(40),
    resizeMode: 'contain',
  },
  categoryNameText: {
    marginTop: RF(8),
    fontSize: RF(12),
    fontFamily: 'Poppins-Regular',
    color: '#333',
  },


})