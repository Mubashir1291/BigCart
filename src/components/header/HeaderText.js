import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { BackIcon} from '../../assets/Index';
import { RF } from '../../Utils/Responsive';


const HeaderText = ({text , onPress,Img}) => {
  return (
    <View style= {styles. CategoryPageContainer}>
          <TouchableOpacity onPress={onPress}>
          <Image source={BackIcon} style={styles.BackArrowIcon} />
          </TouchableOpacity>
      <Text style={styles.HeaderText}>{text}</Text>
      { Img ? <Image source = {Img} style={styles.IconSize}></Image> : <View>

      </View>}
    </View>
  )
}

export default HeaderText

const styles = StyleSheet.create({

  CategoryPageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: RF(75),
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
    BackArrowIcon: {
    width: RF(20),
    height: RF(20),
    resizeMode: 'contain',
  },
   HeaderText: {
    fontSize: RF(15),
    fontFamily: 'Poppins-Medium',
  },
  IconSize:{

     width: RF(20),
    height: RF(20),
    resizeMode: 'contain',
    tintColor: 'black',
  }
})