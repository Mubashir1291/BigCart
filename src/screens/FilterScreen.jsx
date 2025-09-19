import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import { RF } from '../Utils/Responsive';
import HeadertText from '../components/header/HeaderText';
import { useNavigation } from '@react-navigation/native';
import { SimpleText, White } from '../styles/colors/colorsCode';
import {
  CheckIcon,
  DeliveryIcon,
  DiscountIcon,
  RefreshIcon,
  ShippmentIcon,
  StarIcon,
} from '../assets/Index';
import { IconSize, TextBold, TextRegular } from '../components/IconSize/Sizes';
import { SafeAreaView } from 'react-native-safe-area-context';
import Buttons from '../components/buttons/Buttons';
import { Rating } from 'react-native-ratings';
import { useState } from 'react';



const FilterScreen = () => {
  const navigation = useNavigation();


const [minPrice, setMinPrice] = useState('');
const [maxPrice, setMaxPrice] = useState('');
const [rating, setRating] = useState(3);

  const RefreshHandler = () => {
    setMinPrice('');
    setMaxPrice('');
    setRating(3);
  };
  const ApplyFilter = () => {
    navigation.navigate('FilterScreen');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <HeadertText
            navigation={navigation}
            tintColor={SimpleText}
            text="Apply Filters"
            Img={RefreshIcon}
            onClick={RefreshHandler}
          />
          <View style={styles.MainContainer}>
            {/* Price Range */}

            <View style={styles.PriceRangeContainer}>
              <Text
                style={[
                  TextBold,
                  { color: 'black', fontSize: RF(15), paddingLeft: RF(7) },
                ]}
              >
                Price Range
              </Text>
              <View style={styles.PriceInputsCont}>
                <TextInput
                  placeholder="Min."
                  color="black"
                  placeholderTextColor="grey"
                  width="47%"
                  value={minPrice}
                  onChange={setMinPrice}
                  style={{ backgroundColor: '#F4F5F9', paddingLeft: RF(12) }}
                  keyboardType="numeric"
                />

                <TextInput
                  placeholder="Max."
                  placeholderTextColor="grey"
                  color="black"
                  width="47%"
                  value={maxPrice}
                  onChange={setMaxPrice}
                  style={{ backgroundColor: '#F4F5F9', paddingLeft: RF(12) }}
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={styles.StarMainContainer}>
              <Text
                style={[
                  TextBold,
                  { color: 'black', fontSize: RF(15), paddingLeft: RF(7) },
                ]}
              >
                Star Rating
              </Text>
              <View style={styles.StarRatingCont}>
                <Rating
                  reviewColor="#FFC107"
                  ratingCount={5}
                  imageSize={20}
                  startingValue={rating}
                  onFinishRating={setRating}
                />
                <Text
                  style={[
                    TextRegular,
                    { fontSize: RF(12), paddingLeft: RF(15) },
                  ]}
                >
                  5 stars
                </Text>
              </View>
            </View>

            <View style={styles.OtherMainContainer}>
              <Text
                style={[
                  TextBold,
                  {
                    color: 'black',
                    fontSize: RF(15),
                    paddingLeft: RF(10),
                    paddingTop: RF(5),
                  },
                ]}
              >
                Others
              </Text>

              <View style={styles.OtherDetailContainer}>
                <Image
                  source={DiscountIcon}
                  style={[IconSize, { width: RF(14), height: RF(14) }]}
                />
                <Text
                  style={[
                    TextRegular,
                    { fontSize: RF(12), paddingLeft: RF(15), flex: 1 },
                  ]}
                >
                  Discount
                </Text>

                <Image
                  source={CheckIcon}
                  style={[IconSize, { width: RF(16), height: RF(16) }]}
                />
              </View>

              <View style={styles.OtherDetailContainer}>
                <Image
                  source={ShippmentIcon}
                  style={[IconSize, { width: RF(20), height: RF(20) }]}
                />
                <Text
                  style={[
                    TextRegular,
                    { fontSize: RF(12), paddingLeft: RF(15), flex: 1 },
                  ]}
                >
                  Free shipping
                </Text>

                <Image
                  source={CheckIcon}
                  style={[IconSize, { width: RF(16), height: RF(16) }]}
                />
              </View>

              <View style={styles.OtherDetailContainer}>
                <Image
                  source={DeliveryIcon}
                  style={[IconSize, { width: RF(17), height: RF(17) }]}
                />
                <Text
                  style={[
                    TextRegular,
                    { fontSize: RF(12), paddingLeft: RF(15), flex: 1 },
                  ]}
                >
                  Same day devlivery
                </Text>

                <Image
                  source={CheckIcon}
                  style={[IconSize, { width: RF(16), height: RF(16) }]}
                />
              </View>
            </View>

            <Buttons onPress={ApplyFilter} text={'Apply Filter'} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FilterScreen;

const styles = StyleSheet.create({
  MainContainer: {
    paddingHorizontal: RF(10),
  },
  PriceRangeContainer: {
    width: '100%',
    backgroundColor: White,
    marginTop: RF(15),
    padding: RF(10),
  },
  PriceInputsCont: {
    flexDirection: 'row',
    gap: RF(6),
    justifyContent: 'center',
    marginTop: RF(10),
  },

  StarMainContainer: {
    marginTop: RF(5),
    backgroundColor: White,
    padding: RF(10),
    width: '100%',
  },

  StarRatingCont: {
    flexDirection: 'row',
    marginTop: RF(10),
    width: '100%',
    alignItems: 'center',
  },

  OtherMainContainer: {
    justifyContent: 'center',
    marginTop: RF(5),
    backgroundColor: White,
    padding: RF(5),
  },
  OtherDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: White,
    padding: RF(10),
  },
});
