import {
  StyleSheet,
  Text,
  Switch,
  TextInput,
  View,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RF } from '../Utils/Responsive';
import HeadertText from '../components/header/HeaderText';
import { ArrowDownIcon, EmailIcon, FlagIcon } from '../assets/Index';
import InfoInput from '../components/Inputs/InfoInput';
import Buttons from '../components/buttons/Buttons';
import {
  White,
  Primary,
  MidGrey,
  Secondary,
} from '../styles/colors/colorsCode';
import {
  TextBold,
  TextMedium,
  TextRegular,
} from '../components/IconSize/Sizes';

const NotificationsArr = [
  {
    id: 1,
    text1: 'Allow Notifications',
    text2: 'Lorem ipsum dolor sit amet, consetetur',
    text3: 'sadipscing elitr, sed diam nonumym',
  },
  {
    id: 2,
    text1: 'Email Notifications',
    text2: 'Lorem ipsum dolor sit amet, consetetur',
    text3: 'sadipscing elitr, sed diam nonumym',
  },
  {
    id: 3,
    text1: 'Order Notifications',
    text2: 'Lorem ipsum dolor sit amet, consetetur',
    text3: 'sadipscing elitr, sed diam nonumym',
  },
  {
    id: 4,
    text1: 'General Notifications',
    text2: 'Lorem ipsum dolor sit amet, consetetur',
    text3: 'sadipscing elitr, sed diam nonumym',
  },
];

const VerifyNumberScreen = () => {
  const SaveSettingHandle = () => {
    Alert.alert('Setting', 'Setting Saved', [
      { text: 'OK', onPress: () => navigation.navigate('NotificationScreen') },
    ]);
  };

  const [activeSwitches, setActiveSwitches] = useState([]);

  const toggleSwitch = id => {
    if (activeSwitches.includes(id)) {
      // turn OFF
      setActiveSwitches(activeSwitches.filter(switchId => switchId !== id));
    } else {
      // turn ON
      setActiveSwitches([...activeSwitches, id]);
    }
  };

  const navigation = useNavigation();

  const backArrowHandle = () => {
    navigation.navigate('ForgetPasswordScreen');
  };
  const SendOtpScreenHandle = () => {
    navigation.navigate('OtpScreen');
  };

  return (
    <View style={{ flex: 1 }}>
      <HeadertText onPress={backArrowHandle} text="Notifications " />
      <View style={styles.Maincontainer}>
        <FlatList
          data={NotificationsArr}
          renderItem={({ item }) => (
            <View style={styles.NotiftextContainer}>
              <View style={{ flex: 1 }}>
                <Text
                  style={[
                    TextBold,
                    { color: 'black', fontSize: RF(15), marginBottom: RF(15) },
                  ]}
                >
                  {item.text1}
                </Text>
                <Text style={[TextRegular, { fontSize: RF(10) }]}>
                  {item.text2}{' '}
                </Text>
                <Text style={[TextRegular, { fontSize: RF(10) }]}>
                  {item.text3}
                </Text>
              </View>

              <Switch
                value={activeSwitches.includes(item.id)}
                onValueChange={() => toggleSwitch(item.id)}
                trackColor={{ false: White, true: Primary }}
                thumbColor={
                  activeSwitches.includes(item.id) ? Secondary : '#f4f3f4'
                }
              />
            </View>
          )}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ gap: RF(10) }}
        />
        <Buttons onPress={SaveSettingHandle} text={'Save Settings'} />
      </View>
    </View>
  );
};

export default VerifyNumberScreen;

const styles = StyleSheet.create({
  Maincontainer: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: RF(20),
    paddingHorizontal: RF(10),
  },
  NotiftextContainer: {
    flexDirection: 'row',
    backgroundColor: White,
    width: '100%',
    paddingHorizontal: RF(15),
    paddingVertical: RF(15),
  },
});
