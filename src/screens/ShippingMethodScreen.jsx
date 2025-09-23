import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { RF } from '../Utils/Responsive';
import { FilterIcon } from '../assets/Index';
import {
  LightGrey,
  Secondary,
  TextClr,
  White,
} from '../styles/colors/colorsCode';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  TextBold,
  TextMedium,
  TextRegular,
  TextSemiBold,
} from '../components/IconSize/Sizes';
import HeadertText from '../components/header/HeaderText';
import Buttons from '../components/buttons/Buttons';

const ShippingMethodScreen = () => {
  const navigation = useNavigation();
  const [selectedDelivery, setSelectedDelivery] = useState(null);

  const NextHandle = () => {
    navigation.navigate('ShippmentAddressScreen');
  };

  return (
    <View style={styles.screenContainer}>
      {/* Header */}
      <View style={styles.HeaderContainer}>
        <HeadertText
          navigation={navigation}
          tintColor1={'black'}
          text="Shipping Method"
          Img={FilterIcon}
          tintColor2={White}
        />
      </View>

      {/* Stepper */}
      <View style={styles.CountContainer}>
        <View style={styles.Step}>
          <View style={styles.Line}></View>
          <View style={styles.circle}>
            <Text style={[TextMedium, { color: White, fontSize: RF(15) }]}>1</Text>
          </View>
          <Text style={TextMedium}>DELIVERY</Text>
        </View>

        <View style={styles.Step}>
          <View style={styles.Line2}></View>
          <View style={styles.circle2}>
            <Text style={[TextMedium, { color: TextClr, fontSize: RF(15) }]}>2</Text>
          </View>
          <Text style={TextMedium}>ADDRESS</Text>
        </View>

        <View style={styles.Step}>
          <View style={styles.circle2}>
            <Text style={[TextMedium, { color: TextClr, fontSize: RF(15) }]}>3</Text>
          </View>
          <Text style={[TextMedium, { marginTop: RF(5) }]}>PAYMENT</Text>
        </View>
      </View>

      {/* Delivery Options */}
      <View style={styles.DeliveryMainContainer}>
        {/* Standard Delivery */}
        <TouchableOpacity
          onPress={() => setSelectedDelivery('standard')}
          style={[
            styles.TextBar,
            { borderColor: selectedDelivery === 'standard' ? Secondary : White },
          ]}
        >
          <View style={styles.TextContainer}>
            <Text style={[TextBold, { color: 'black', marginTop: RF(5) }]}>
              Standard Delivery
            </Text>
            <Text style={[TextRegular, { marginTop: RF(5), fontSize: RF(11) }]}>
              Order will be delivered between 3 - 4 business{'\n'}days straight to your doorstep.
            </Text>
          </View>
          <Text style={[TextSemiBold, { fontSize: RF(15), color: Secondary }]}>$3</Text>
        </TouchableOpacity>

        {/* Next Day Delivery */}
        <TouchableOpacity
          onPress={() => setSelectedDelivery('nextday')}
          style={[
            styles.TextBar,
            { borderColor: selectedDelivery === 'nextday' ? Secondary : White },
          ]}
        >
          <View style={styles.TextContainer}>
            <Text style={[TextBold, { color: 'black', marginTop: RF(5) }]}>
              Next Day Delivery
            </Text>
            <Text style={[TextRegular, { marginTop: RF(5), fontSize: RF(11) }]}>
              Order will be delivered within few hours{'\n'}straight to your doorstep.
            </Text>
          </View>
          <Text style={[TextSemiBold, { fontSize: RF(15), color: Secondary }]}>$5</Text>
        </TouchableOpacity>
      </View>

      {/* Next Button */}
      <Buttons onPress={NextHandle} text={'Next'} />
    </View>
  );
};

export default ShippingMethodScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: LightGrey,
    paddingBottom: RF(10),
    paddingHorizontal: RF(10),
  },
  HeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: RF(75),
    backgroundColor: White,
  },
  CountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  Step: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: RF(25),
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
  DeliveryMainContainer: {
    backgroundColor: LightGrey,
    width: '100%',
    alignItems: 'center',
    flex: 1,
    gap: RF(20),
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
    borderWidth: RF(1),
  },
});
