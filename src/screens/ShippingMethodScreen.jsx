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
  FilterIcon,
  Grapes,
  MinusIcon,
  Peach,
  Pineapple,
  PlusIcon,
  Pomgrante,
} from '../assets/Index';
import {
  LightGrey,
  MidGrey,
  Secondary,
  SimpleText,
  TextClr,
  White,
} from '../styles/colors/colorsCode';
import React, { startTransition, useState } from 'react';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import {
  IconSize,
  TextBold,
  TextMedium,
  TextRegular,
  TextSemiBold,
} from '../components/IconSize/Sizes';
import { SwipeListView } from 'react-native-swipe-list-view';

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
import HeadertText from '../components/header/HeaderText';
import Buttons from '../components/buttons/Buttons';

const FavItemScreen = () => {
  const navigation = useNavigation();
  const [selectedDelivery, setSelectedDelivery] = useState(null);

  const NextHandle = () => {
    navigation.navigate('ShippmentAddressScreen');
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.HeaderContainer}>
        <HeadertText
          navigation={navigation}
          tintColor1={'black'}
          text="Shipping Method"
          Img={FilterIcon}
          tintColor2={White}
        />
      </View>

      <View style={styles.CountContainer}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: RF(25),
          }}
        >
          <View style={styles.Line}></View>

          <View style={styles.circle}>
            <Text style={[TextMedium, { color: White, fontSize: RF(15) }]}>
              1
            </Text>
          </View>

          <Text style={TextMedium}>DELIVERY</Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: RF(25),
          }}
        >
          <View style={styles.Line2}></View>

          <View style={styles.circle2}>
            <Text
              style={[
                TextMedium,
                { color: TextClr, fontSize: RF(15), fontSize: RF(15) },
              ]}
            >
              2
            </Text>
          </View>

          <Text style={TextMedium}>ADDRESS</Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: RF(25),
          }}
        >
          <View style={styles.circle2}>
            <Text style={[TextMedium, { color: TextClr, fontSize: RF(15) }]}>
              3
            </Text>
          </View>
          <Text style={[TextMedium, { marginTop: RF(5) }]}>PAYMENT</Text>
        </View>
      </View>

      <View style={styles.DeliveryMainContainer}>
        {/* Standard Delivery */}
        <TouchableOpacity
          onPress={() => setSelectedDelivery('standard')}
          style={[
            styles.TextBar,
            {
              borderWidth: RF(1),
              borderColor: selectedDelivery === 'standard' ? Secondary : White,
            },
          ]}
        >
          <View style={styles.TextBar}>
            <View style={styles.TextContainer}>
              <Text style={[TextBold, { color: 'black', marginTop: RF(5) }]}>
                Standard Delivery
              </Text>
              <Text
                style={[TextRegular, { marginTop: RF(5), fontSize: RF(11) }]}
              >
                Order will be delivered between 3 - 4 business
                {'\n'}days straights to your doorstep.
              </Text>
            </View>
            <Text
              style={[TextSemiBold, { fontSize: RF(15), color: Secondary }]}
            >
              $3
            </Text>
          </View>
        </TouchableOpacity>

        {/* Next Day Delivery */}
        <TouchableOpacity
          onPress={() => setSelectedDelivery('nextday')}
          style={[
            styles.TextBar,
            {
              borderWidth: RF(1),
              borderColor: selectedDelivery === 'nextday' ? Secondary : White,
            },
          ]}
        >
          <View style={styles.TextBar}>
            <View style={styles.TextContainer}>
              <Text style={[TextBold, { color: 'black', marginTop: RF(5) }]}>
                Next Day Delivery
              </Text>
              <Text
                style={[TextRegular, { marginTop: RF(5), fontSize: RF(11) }]}
              >
                Order will be delivered within few hours
                {'\n'}straights to your doorstep.
              </Text>
            </View>
            <Text
              style={[TextSemiBold, { fontSize: RF(15), color: Secondary }]}
            >
              $5
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <Buttons onPress={NextHandle} text={'Next'} />
    </View>
  );
};

export default FavItemScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: LightGrey,
    paddingBottom: RF(10),
    paddingHorizontal: RF(10),
  },
  DeliveryMainContainer: {
    backgroundColor: LightGrey,
    width: '100%',
    alignItems: 'center',
    flex: 1,
    gap: RF(20),
  },
  HeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: RF(75),
    backgroundColor: '#FFFFFF',
  },

  CountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },

  circle: {
    width: RF(40),
    height: RF(40),
    borderRadius: RF(90),
    backgroundColor: Secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  circle2: {
    width: RF(40),
    height: RF(40),
    borderRadius: RF(20),
    backgroundColor: White,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Line: {
    width: '200%',
    height: RF(2),
    backgroundColor: Secondary,
    position: 'absolute',
    top: RF(45),
    left: RF(50),
  },

  Line2: {
    width: '200%',
    height: RF(2),
    backgroundColor: TextClr,
    position: 'absolute',
    top: RF(45),
    left: RF(50),
  },
  TextContainer: {
    flex: 1,
  },
  TextBar: {
    backgroundColor: White,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: RF(10),
    width: '100%',
  },
});
