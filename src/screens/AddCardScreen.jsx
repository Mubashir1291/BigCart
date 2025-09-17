import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RF } from '../Utils/Responsive';
import HeadertText from '../components/header/HeaderText';
import Buttons from '../components/buttons/Buttons';
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
  MasterIcon,
  VisaIcon,
  CardIcon,
  CalndarIcon,
  PasswordIcon,
  GreenCartIcon,
  RectangleIcon,
  Masterlogo,
} from '../assets/Index';
import {
  LightGrey,
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
import InfoInput from '../components/Inputs/InfoInput';
import { SafeAreaView } from 'react-native-safe-area-context';

// ✅ Address Data with details inside

const AddCardScreen = () => {
  const navigation = useNavigation();
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = id => {
    setExpandedId(expandedId === id ? null : id);
  };

  const BackArrowHandle = () => {
    navigation.navigate('UserProfileScreen');
  };
  const AddCardHandler = () => {
    navigation.navigate('AddCardScreen');
  };
  const Backtoscreen = () => {
    navigation.navigate('AddCardScreen');
  };
  const AddCreditHandler = () => {
    Alert.alert('Success', 'Your card has been added!');
    {
      text: 'OK', (onPress = Backtoscreen);
    }
  };

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');

  return (
    <SafeAreaView>
    <ScrollView>
      <View style={{ flex: 1 }}>
        <HeadertText
navigation={navigation}         
 tintColor={SimpleText}
          text="Add Credit Card"
          Img={AddIcon}
          tintColor2={White}
          onClick={AddCardHandler}
        />

        <View style={styles.Maincontainer}>
          <View style={styles.CardContainer}>
            <ImageBackground source={RectangleIcon} style={styles.CardImage}>
              <Image
                source={Masterlogo}
                style={[
                  IconSize,
                  { tintColor: null, width: RF(84), height: RF(84) },
                ]}
              />
              <Text
                style={[
                  TextMedium,
                  { color: White, marginLeft: RF(5), fontSize: RF(15) },
                ]}
              >
                {' '}
                {number ? number : 'XXXX XXXX XXXX 8790'}
              </Text>
              <View style={styles.TextContainer}>
                <View>
                  <Text style={[TextMedium, { color: White }]}>
                    Card Holder
                  </Text>
                  <Text style={[TextMedium, { color: White }]}>
                    {name ? name : 'Russel'}
                  </Text>
                </View>

                <View>
                  <Text style={[TextMedium, { color: White }]}>Expire </Text>
                  <Text style={[TextMedium, { color: White }]}>
                    {date ? date : '01/22'}
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.details}>
            <InfoInput
              Img={UserIcon}
              style={IconSize}
              placeholder={'Card Holder Name'}
              value={name}
              onChange={name => setName(name)}
            />

            <InfoInput
              Img={CardIcon}
              style={IconSize}
              placeholder={'Card Card Number'}
              value={number}
              onChange={number => setNumber(number)}
            />
            <View style={styles.rowContainer}>
              <View style={{ flex: 1, marginLeft: RF(5) }}>
                <InfoInput
                  Img={CalndarIcon}
                  style={IconSize}
                  placeholder={'Month / Year'}
                  value={date}
                  onChange={date => setDate(date)}
                />
              </View>
              <View style={{ flex: 1, marginLeft: RF(5) }}>
                <InfoInput
                  Img={PasswordIcon}
                  style={IconSize}
                  placeholder={'CCV'}
                />
              </View>
            </View>
          </View>
        </View>
        <Buttons onPress={AddCreditHandler} text={'Add Credit Card'} />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default AddCardScreen;

const styles = StyleSheet.create({
  Maincontainer: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: RF(30),
    paddingHorizontal: RF(10),
  },

  CardContainer: {
    width: '100%',
    height: RF(180),
    backgroundColor: White,
    borderRadius: RF(13),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Secondary,
  },
  CardImage: {
    width: '100%',
    height: RF(160),
  },
  TextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: RF(15),
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
    width: RF(50),
    height: RF(50),
    resizeMode: 'contain',
  },
  details: {
    width: '100%',
    paddingHorizontal: RF(10),
    paddingVertical: RF(10),
    justifyContent: 'center',
    alignItems: 'center',
    gap: RF(8),
  },
  Textitems: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    gap: RF(20),
    padding: RF(10),
    elevation: 1,
  },
  Textitems2: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: RF(10),
    elevation: 1,
    gap: RF(10),
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
  },
});
