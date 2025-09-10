import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { BackIcon} from '../../assets/Index';
import { RF } from '../../Utils/Responsive';
import  {IconSize, TextMedium, TextSemiBold } from '../../components/IconSize/Sizes'
import { SimpleText } from '../../styles/colors/colorsCode';


const HeaderText = ({text , onPress,Img , tintColor  , fontSize,onClick  }) => {
  return (
    <View style= {styles. CategoryPageContainer}>
          <TouchableOpacity onPress={onPress}>
          <Image source={BackIcon} style={[IconSize,{tintColor}]} />
          </TouchableOpacity>
      <Text style={[TextSemiBold,{color:'black',fontSize:RF(16)}]}>{text}</Text>
      { Img ?<TouchableOpacity onPress={onClick}> <Image source = {Img} style={[IconSize,{tintColor}]}/></TouchableOpacity> : <View>
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
    IconSize: {
    width: RF(20),
    height: RF(20),
    resizeMode: 'contain',
  },
   HeaderText: {
    fontSize: RF(15),
    fontFamily: 'Poppins-Medium',
  },


})