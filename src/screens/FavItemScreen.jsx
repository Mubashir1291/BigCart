import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { setFavourites } from "../redux/Reducers/userReducer";
import { RF } from "../Utils/Responsive";
import { HeartFilIcon, FilterIcon } from "../assets/Index";
import HeaderText from "../components/header/HeaderText";
import { White } from "../styles/colors/colorsCode";
import { useNavigation, useRoute } from "@react-navigation/native";

const FavouriteScreen = () => {
const navigation = useNavigation();
const {favourites}=useSelector(state=>state.user)
  // Ensure you are selecting the raw data: full product list and the list of favorite IDs
  // const products = useSelector(state => state.products.items || []);
  // const favouriteIds = useSelector(state => state.user.favourites || []); // Initialize as array

  // Derived state: the actual favorite product objects
  // const favourites = products.filter(product => favouriteIds.includes(product.id));
  

  // if (!favourites || favourites.length === 0) {
  //   return (
  //     <View style={styles.emptyContainer}>
  //       <Text style={styles.emptyText}>No Favourites Added</Text>
  //     </View>
  //   );
  // }

return (
  <View style={styles.container}>
    {/* Header */}
    <View style={styles.HeaderContainer}>
      <HeaderText
        navigation={navigation}
        text="Favourites"
        Img={FilterIcon}
        tintColor2={White}
      />
    </View>

    {/* Favourites List */}
    <FlatList
      data={favourites}
      keyExtractor={(item) => item.id?.toString()}
      ListEmptyComponent={
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: 50 }}>
          <Text style={{ fontSize: 16, color: "grey" }}>No Favourites Added</Text>
        </View>
      }
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={item.source} style={styles.image} />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>

          </View>
          <Image
            source={HeartFilIcon}
            style={styles.heartIcon}
          />

        </View>
           
      )}
      showsVerticalScrollIndicator={false}
    />
  </View>
);
}

export default FavouriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: RF(10),
    backgroundColor: "#fff",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: RF(10),
    marginBottom: RF(10),
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  image: {
    width: RF(50),
    height: RF(50),
    resizeMode: "contain",
  },
  name: {
    fontSize: RF(14),
    fontWeight: "600",
  },
  price: {
    fontSize: RF(12),
    color: "grey",
  },
  heartIcon: {
    width: RF(15),
    height: RF(15),
    tintColor: "red",
    resizeMode: "contain",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: RF(16),
    color: "grey",
  },
  HeaderContainer: {
    backgroundColor: "#fff",
  },
});