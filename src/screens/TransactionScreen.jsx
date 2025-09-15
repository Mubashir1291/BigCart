import {
  BackHandler,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import HeaderText from '../components/header/HeaderText';
import { BackIcon, HomeIcon, MasterIcon, PaypayIcon, VisaIcon } from '../assets/Index';
import { Secondary, White } from '../styles/colors/colorsCode';
import { RF } from '../Utils/Responsive';
import { IconSize, TextBold, TextRegular } from '../components/IconSize/Sizes';
import { useNavigation } from '@react-navigation/native';


const TransactionsArr = [
  {
    id: 1,
    Icon: MasterIcon,
    CardNAme: 'Master Card',
    Details: 'Dec 12 2021 at 10:00 pm',
    price: '$89',
  },
  {
    id: 2,
    Icon: VisaIcon,
    CardNAme: 'Visa Card',
    Details: 'Dec 12 2021 at 10:00 pm',
    price: '$109',
  },

  {
    id: 3,
    Icon: PaypayIcon,
    CardNAme: 'PayPal',
    Details: 'Dec 12 2021 at 10:00 pm',
    price: '$567',
  },

  {
    id: 4,
    Icon: PaypayIcon,
    CardNAme: 'Paypal',
    Details: 'Dec 12 2021 at 10:00 pm',
    price: '$450',
  },

  {
    id: 5,
    Icon: VisaIcon,
    CardNAme: 'Visa',
    Details: 'Dec 12 2021 at 10:00 pm',
    price: '$109',
  },
  {
    id: 6,
    Icon: MasterIcon,
    CardNAme: 'Master Card',
    Details: 'Dec 12 2021 at 10:00 pm',
    price: '$95',
  },
   {
    id: 7,
    Icon: MasterIcon,
    CardNAme: 'Master Card',
    Details: 'Dec 12 2021 at 10:00 pm',
    price: '$95',
  },
];

const TransactionScreen = () => {
    const navigation = useNavigation();
     const backArrowHandle = () => {
    navigation.navigate('UserProfileScreen');
  };

  return (
    <ScrollView>
    <View style={{ flex: 1 }}>
      <View style={styles.MainContainer}>
        <HeaderText
          onPress={backArrowHandle}
          text={'Transactions'}
          Img={HomeIcon}
          tintColor2={White}
        />
        <FlatList
          data={TransactionsArr}
          renderItem={({item}) => (
            <View style={styles.PymentRowContainer}>
              <View style={{flexDirection:'row'}}>
              <Image
                source={item.Icon}
                style={[
                  IconSize,
                  { tintColor: null, width: RF(52), height: RF(52) },
                ]}
              />
              
              <View style={{justifyContent: 'center' ,marginLeft:RF(10)}}>
                <Text style={[TextBold, { color: 'black', fontSize: RF(15) }]}>
                  {item.CardNAme}
                </Text>
                <Text
                  style={[TextRegular, { color: 'black', fontSize: RF(10) }]}
                >
                  {item.Details}
                </Text>
              </View>
                            </View>

              
              <Text style={[TextBold, { color: Secondary}]}>{item.price}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
    </ScrollView>
  );
};

export default TransactionScreen;

const styles = StyleSheet.create({
  MainContainer: {
    paddingHorizontal: RF(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  PymentRowContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: RF(15),
    alignItems: 'center',
    marginTop: RF(25),
    gap: RF(10),
    width:'100%',
    justifyContent:'space-between'
  },
});