import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,} from 'react-native';
import React from 'react';
import { RF } from '../../Utils/Responsive';
import { Secondary } from '../../styles/colors/colorsCode';



const UserPage = ({ Img, text,onPress, icon }) => {
  return (
    
      <View style={styles.InfoContainer}>
        <Image source={Img} style={styles.InfoIconStyle} />
        <Text style={styles.InfoTextStyle}>{text} </Text>
        <TouchableOpacity onPress={onPress}>
          <Image source={icon} style={styles.RightIconStyle} />
        </TouchableOpacity>
      </View>
  );
};

export default UserPage;

const styles = StyleSheet.create({
    InfoContainer:{

    flexDirection:'row',
    width:'100%',
    marginTop:RF(40),
        paddingHorizontal:RF(25),
        alignItems:'center',
        },

  InfoIconStyle: {
    height: RF(25),
    width: RF(25),
    resizeMode: 'contain',
    tintColor: Secondary,
  },
  RightIconStyle: {
    height: RF(20),
    width: RF(20),
    resizeMode: 'contain',
    tintColor: Secondary,
  },
  InfoTextStyle: {
    fontFamily: 'Poppins-SemiBold',
    flex: 1,
    marginLeft: RF(20),
  },
});
