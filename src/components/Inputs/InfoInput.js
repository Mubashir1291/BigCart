import { StyleSheet, Text, View ,Image, TextInput } from 'react-native'
import React from 'react'
import { RF } from '../../Utils/Responsive';
import Buttons from '../buttons/Buttons';
import { IconSize } from '../IconSize/Sizes';


const InfoInput = ({Img,placeholder}) => {

  return (
    <View  style={styles.TextInputContainer}>
          <Image  source = {Img} style={IconSize}/>
        <TextInput
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        color={'black'}
        width={'90%'}
        />
    </View>
  )
}

export default InfoInput

const styles = StyleSheet.create({

    TextInputContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    width: '100%',
    height: RF(60),
    borderRadius: RF(5),
    elevation: RF(1),
    paddingHorizontal:RF(10),
    gap:RF(10),
    alignItems:'center'
  },
  IconSize:{

    width: RF(20),
    height: RF(20),
    resizeMode: 'contain',
  }

})