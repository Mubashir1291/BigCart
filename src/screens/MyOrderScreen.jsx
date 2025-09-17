import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RF } from '../Utils/Responsive';
import HeadertText from '../components/header/HeaderText';
import {
  UserIcon,
  AddressIcon,
  ZipCodeIcon,
  CityIcon,
  CountryIcon,
  TeleIcon,
  AddIcon,
  LocationCircleIcon,
  ScrollDownIcon,
  ScrollUpIcon,
  OrderPlacedIcon,
  GreenCircleIcon,
  FilterIcon,
} from '../assets/Index';
import {
  LightGrey,
  MidGrey,
  Secondary,
  SimpleText,
  TextClr,
  White,
} from '../styles/colors/colorsCode';
import {
  IconSize,
  TextSemiBold,
  TextBold,
  TextRegular,
  TextMedium,
} from '../components/IconSize/Sizes';
import { SafeAreaView } from 'react-native-safe-area-context';

// ✅ Address Data with details inside
const AddressDetailArr = [
  {
    id: 1,
    Image: OrderPlacedIcon,
    orderNum: 'Order #90897 ',
    placedTime: 'Placed on Octobar 19 2021',
    item: 'Items: 10',
    itemPrice: 'Items: $16.90',
    details: {
      detailsImage: GreenCircleIcon,
      status: 'Order placed',
      date: 'Oct 19 2021',
      date2: 'Oct 20 2021',
      orderConfirm: 'Order Confirmed',
      orderShiped: 'Order Shipped',
      outOfDelivery: 'Out Of Delivery',
      orderDelivered: 'Order Delivered',
      pending: 'pending',
    },
  },

  {
    id: 2,
    Image: OrderPlacedIcon,
    orderNum: 'Order #90897 ',
    placedTime: 'Placed on Octobar 19 2021',
    item: 'Items: 10',
    itemPrice: 'Items: $16.90',
    details: {
      detailsImage: GreenCircleIcon,
      status: 'Order placed',
      date: 'Oct 19 2021',
      date2: 'Oct 20 2021',
      orderConfirm: 'Order Confirmed',
      orderShiped: 'Order Shipped',
      outOfDelivery: 'Out Of Delivery',
      orderDelivered: 'Order Delivered',
      pending: 'pending',
    },
  },
  {
    id: 3,
    Image: OrderPlacedIcon,
    orderNum: 'Order #90897 ',
    placedTime: 'Placed on Octobar 19 2021',
    item: 'Items: 10',
    itemPrice: 'Items: $16.90',
    details: {
      detailsImage: GreenCircleIcon,
      status: 'Order placed',
      date: 'Oct 19 2021',
      date2: 'Oct 20 2021',
      orderConfirm: 'Order Confirmed',
      orderShiped: 'Order Shipped',
      outOfDelivery: 'Out Of Delivery',
      orderDelivered: 'Order Delivered',
      pending: 'pending',
      delivered: 'Order Delivered',
    },
  },
  {
    id: 4,
    Image: OrderPlacedIcon,
    orderNum: 'Order #90897 ',
    placedTime: 'Placed on Octobar 19 2021',
    item: 'Items: 10',
    itemPrice: 'Items: $16.90',
    details: {
      detailsImage: GreenCircleIcon,
      date: 'Oct 19 2021',
      delivered: 'Order Delivered',
    },
  },
  {
    id: 5,
    Image: OrderPlacedIcon,
    orderNum: 'Order #90897 ',
    placedTime: 'Placed on Octobar 19 2021',
    item: 'Items: 10',
    itemPrice: 'Items: $16.90',
    details: {
      detailsImage: GreenCircleIcon,
      date: 'Oct 19 2021',
      delivered: 'Order Delivered',
    },
  },
];

const AboutMeScreen = () => {
  const navigation = useNavigation();
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = id => {
    setExpandedId(expandedId === id ? null : id);
  };

  const BackArrowHandle = () => {
    navigation.navigate('UserProfileScreen');
  };
  const FilterHandler = () => {
    navigation.navigate('FilterScreen');
  };
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={{ flex: 1 }}>
      <HeadertText
        navigation={navigation}
        tintColor={SimpleText}
        text="My Order"
        Img={FilterIcon}
        tintColor2={'black'}
        onClick={FilterHandler}
      />
      <View style={styles.Maincontainer}>
        <FlatList
          data={AddressDetailArr}
          renderItem={({ item }) => (
            <View style={{ gap: RF(5) }}>
              {/* Address Card */}
              <View style={styles.DetailCard}>
                <Image
                  source={item.Image}
                  style={styles.LocationCircleIconsizes}
                />
                <View style={styles.TextDetails}>
                  <Text
                    style={[TextBold, { color: SimpleText, fontSize: RF(15) }]}
                  >
                    {item.orderNum}
                  </Text>
                  <Text
                    style={[TextRegular, { color: TextClr, fontSize: RF(10) }]}
                  >
                    {item.placedTime}
                  </Text>
                  <View style={{ flexDirection: 'row', gap: RF(10) }}>
                    <Text
                      style={[TextMedium, { color: 'black', fontSize: RF(10) }]}
                    >
                      {item.item}
                    </Text>
                    <Text
                      style={[
                        TextSemiBold,
                        { color: SimpleText, fontSize: RF(10) },
                      ]}
                    >
                      {item.itemPrice}
                    </Text>
                  </View>
                </View>

                {/* Expand / Collapse Button */}
                <TouchableOpacity onPress={() => toggleExpand(item.id)}>
                  <Image
                    source={
                      expandedId === item.id ? ScrollUpIcon : ScrollDownIcon
                    }
                    style={[IconSize, { tintColor: Secondary }]}
                  />
                </TouchableOpacity>
              </View>

              {/* Expanded Section */}
              {expandedId === item.id && (
                <View style={styles.details}>
                  {item.id === 4 || item.id === 5 ? (
                    <View style={styles.Textitems}>
                      <Image
                        source={item.details.detailsImage}
                        style={[
                          IconSize,
                          { tintColor: TextClr, width: RF(10) },
                        ]}
                      />
                      <Text
                        style={[
                          TextBold,
                          { color: 'black', flex: 1, marginLeft: RF(10) },
                        ]}
                      >
                        {item.details.delivered}
                      </Text>
                      <Text style={TextMedium}>{item.details.date}</Text>
                    </View>
                  ) : (
                    <>
                      <View style={styles.Textitems}>
                        <Image
                          source={item.details.detailsImage}
                          style={[IconSize, { tintColor: null, width: RF(10) }]}
                        />
                        <Text
                          style={[
                            TextBold,
                            { color: 'black', flex: 1, marginLeft: RF(10) },
                          ]}
                        >
                          {item.details.status}
                        </Text>
                        <Text style={TextMedium}>{item.details.date}</Text>
                      </View>

                      <View
                        style={{
                          height: RF(95),
                          width: RF(2),
                          justifyContent: 'flex-start',
                          position: 'absolute',
                          left: RF(24),
                          top: RF(35),
                          backgroundColor: Secondary,
                        }}
                      />

                      <View style={styles.Textitems}>
                        <Image
                          source={item.details.detailsImage}
                          style={[IconSize, { tintColor: null, width: RF(10) }]}
                        />
                        <Text
                          style={[
                            TextBold,
                            { color: 'black', flex: 1, marginLeft: RF(10) },
                          ]}
                        >
                          {item.details.orderConfirm}
                        </Text>
                        <Text style={TextMedium}>{item.details.date2}</Text>
                      </View>

                      <View style={styles.Textitems}>
                        <Image
                          source={item.details.detailsImage}
                          style={[IconSize, { tintColor: null, width: RF(10) }]}
                        />
                        <Text
                          style={[
                            TextBold,
                            { color: 'black', flex: 1, marginLeft: RF(10) },
                          ]}
                        >
                          {item.details.orderShiped}
                        </Text>
                        <Text style={TextMedium}>{item.details.date2}</Text>
                      </View>

                      <View
                        style={{
                          height: RF(95),
                          width: RF(2),
                          justifyContent: 'flex-start',
                          position: 'absolute',
                          left: RF(24),
                          top: RF(135),
                          backgroundColor: TextClr,
                        }}
                      />

                      <View style={styles.Textitems}>
                        <Image
                          source={item.details.detailsImage}
                          style={[
                            IconSize,
                            { tintColor: TextClr, width: RF(10) },
                          ]}
                        />
                        <Text
                          style={[
                            TextBold,
                            { color: TextClr, flex: 1, marginLeft: RF(10) },
                          ]}
                        >
                          {item.details.outOfDelivery}
                        </Text>
                        <Text style={TextMedium}>{item.details.pending}</Text>
                      </View>

                      <View style={styles.Textitems}>
                        <Image
                          source={item.details.detailsImage}
                          style={[
                            IconSize,
                            { tintColor: TextClr, width: RF(10) },
                          ]}
                        />
                        <Text
                          style={[
                            TextBold,
                            { color: TextClr, flex: 1, marginLeft: RF(10) },
                          ]}
                        >
                          {item.details.orderDelivered}
                        </Text>
                        <Text style={TextMedium}>{item.details.pending}</Text>
                      </View>
                    </>
                  )}
                </View>
              )}
            </View>
          )}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ gap: RF(10) }}
        />
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default AboutMeScreen;

const styles = StyleSheet.create({
  Maincontainer: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: RF(30),
    paddingHorizontal: RF(10),
  },
  DetailCard: {
    backgroundColor: White,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderRadius: RF(5),
    elevation: RF(1),
    padding: RF(10),
    paddingHorizontal: RF(15),
  },
  TextDetails: {
    justifyContent: 'center',
    paddingLeft: RF(15),
    flex: 1,
  },
  LocationCircleIconsizes: {
    width: RF(66),
    height: RF(66),
    resizeMode: 'contain',
  },
  details: {
    backgroundColor: White,
    width: '100%',
    paddingHorizontal: RF(10),
    paddingVertical: RF(10),
    alignItems: 'center',
    gap: RF(8),
  },
  Textitems: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    padding: RF(10),
  },
});
