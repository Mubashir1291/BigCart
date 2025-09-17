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
 
  AddIcon,
  ScrollDownIcon,
  ScrollUpIcon,
  MasterIcon,
  VisaIcon,
  CardIcon,
  CalndarIcon,
  PasswordIcon,
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
import { SafeAreaView } from 'react-native-safe-area-context';

// ✅ Address Data with details inside
const AddressDetailArr = [
  {
    id: 1,
    Image: MasterIcon,
    Name: 'Russell Austin',
    Address1: 'XXXX  XXXX  XXXX  5678',
    Address2: 'Expiry : 01/22',

    Phone: 'CVV : 908',
    details: {
      cardnumber: 'XXXX  XXXX  XXXX  5678',
      expirydate: '01/22',
      code: '908',
    },
  },
  {
    id: 2,
    Image: VisaIcon,
    Name: 'Emma Watson',
    Address1: 'XXXX  XXXX  XXXX  5678',
    Address2: 'Expiry : 01/22',
    Phone: 'CVV : 908',
    details: {
      cardnumber: 'XXXX  XXXX  XXXX  5678',
      expirydate: '01/22',
      code: '908',
    },
  },
  {
    id: 3,
    Image: MasterIcon,
    Name: 'Elon Musk',
    Address1: 'XXXX  XXXX  XXXX  5678',
    Address2: 'Expiry : 01/22',
    Phone: 'CVV : 908',
    details: {
      cardnumber: 'XXXX  XXXX  XXXX  5678',
      expirydate: '01/22',
      code: '908',
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
  const AddCardHandler = () => {
    navigation.navigate('AddCardScreen');
  };

  return (
    <SafeAreaView>
    <ScrollView>
    <View style={{ flex: 1 }}>
      <HeadertText
navigation={navigation}        tintColor={SimpleText}
        text="My Cards"
        Img={AddIcon}
        onClick={AddCardHandler}
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
                    {item.Name}
                  </Text>
                  <Text
                    style={[TextRegular, { color: TextClr, fontSize: RF(10) }]}
                  >
                    {item.Address1}
                  </Text>
                                    <View style={{flexDirection:'row', gap:RF(10)}}>

                  <Text
                    style={[TextRegular, { color: 'black', fontSize: RF(10) }]}
                  >
                    {item.Address2}
                  </Text>
                  <Text
                    style={[
                      TextSemiBold,
                      { color: SimpleText, fontSize: RF(10) },
                    ]}
                  >
                    {item.Phone}
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
                  <View style={styles.Textitems}>
                    <Image source={UserIcon} style={IconSize} />
                    <Text style={TextMedium}>{item.Name}</Text>
                  </View>

                  <View style={styles.Textitems}>
                    <Image source={CardIcon} style={IconSize} />
                    <Text
                      style={[
                        TextMedium,
                        { backgroundColor: LightGrey, width: '90%' },
                      ]}
                    >
                      {item.details.cardnumber}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      width: '100%',
                      gap: RF(5),
                      justifyContent: 'space-between',
                    }}
                  >
                    <View style={[styles.Textitems2, { flex: 1 }]}>
                      <Image source={CalndarIcon} style={IconSize} />
                      <Text
                        style={[TextMedium, { backgroundColor: LightGrey }]}
                      >
                        {item.details.expirydate}
                      </Text>
                    </View>

                    <View style={[styles.Textitems2, { flex: 1 }]}>
                      <Image source={PasswordIcon} style={IconSize} />
                      <Text
                        style={[TextMedium, { backgroundColor: LightGrey }]}
                      >
                        {item.details.code}
                      </Text>
                    </View>
                  </View>
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
    width: RF(50),
    height: RF(50),
    resizeMode: 'contain',
  },
  details: {
    backgroundColor: White,
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
    backgroundColor: '#F4F5F9',
    alignItems: 'center',
    gap: RF(20),
    padding: RF(10),
    elevation: 1,
  },
  Textitems2: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: '#F4F5F9',
    alignItems: 'center',
    padding: RF(10),
    elevation: 1,
    gap: RF(10),
  },
});
