import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RF } from '../Utils/Responsive';
import HeadertText from '../components/header/HeaderText';
import Buttons from '../components/buttons/Buttons';
import {
  UserIcon,
  AddIcon,
  Masterlogo,
  RectangleIcon,
  CardIcon,
  CalndarIcon,
  PasswordIcon,
} from '../assets/Index';
import {
  Secondary,
  SimpleText,
  White,
} from '../styles/colors/colorsCode';
import {
  IconSize,
  TextMedium,
} from '../components/IconSize/Sizes';
import InfoInput from '../components/Inputs/InfoInput';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddCardScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [date, setDate] = useState('');
  const [ccv, setCcv] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  const Backtoscreen = () => {
    navigation.navigate('AddCardScreen');
  };

  const AddCreditHandler = () => {
    Alert.alert('Success', 'Your card has been added!', [
      { text: 'OK', onPress: Backtoscreen },
    ]);
  };

  const formatCardNumber = (text) => {
    const digitsOnly = text.replace(/\D/g, ''); 
    const limitedDigits = digitsOnly.slice(0, 16); 
    const groups = limitedDigits.match(/.{1,4}/g); 
    return groups ? groups.join(' ') : '';
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
      const year = selectedDate.getFullYear().toString().slice(-2);
      setDate(`${month}/${year}`);
    }
  };

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
            onClick={() => navigation.navigate('AddCardScreen')}
          />

          <View style={styles.Maincontainer}>
            {/* ✅ Card Preview */}
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
                    { color: White, marginLeft: RF(15), fontSize: RF(15) },
                  ]}
                >
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

            {/* ✅ Card Input Fields */}
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
                placeholder={'Card Number'}
                value={number}
                keyboardType="number-pad"
                maxLength={19} 
                onChange={text => setNumber(formatCardNumber(text))}
              />

              <View style={styles.rowContainer}>
                <View style={{ flex: 1}}>
                  <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                    <InfoInput
                      Img={CalndarIcon}
                      style={IconSize}
                      placeholder={'Month / Year'}
                      value={date}
                      editable={false} 
                      showSoftInputOnFocus={false} 
                      pointerEvents="none" 
                    />
                  </TouchableOpacity>

                  {showDatePicker && (
                    <DateTimePicker
                      value={new Date()}
                      mode="date"
                      display="calendar"
                      onChange={handleDateChange}
                    />
                  )}
                </View>

                {/* ✅ CCV Input */}
                <View style={{ flex: 1, marginLeft: RF(5) }}>
                  <InfoInput
                    Img={PasswordIcon}
                    style={IconSize}
                    placeholder={'CCV'}
                    value={ccv}
                    keyboardType="number-pad"
                    maxLength={3}
                    onChange={text => {
                      const digitsOnly = text.replace(/\D/g, '');
                      const finalValue = digitsOnly.slice(0, 3);
                      setCcv(finalValue);
                    }}
                  />
                </View>
              </View>
            </View>
                                            <Buttons onPress={AddCreditHandler} text={'Add Credit Card'} />


          </View>


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
  details: {
    width: '100%',
    paddingHorizontal: RF(10),
    paddingVertical: RF(10),
    justifyContent: 'center',
    alignItems: 'center',
    gap: RF(8),
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
  },
});
