import { StyleSheet, Text, View, TouchableOpacity,TextInput,Image } from 'react-native'
import React from 'react'
import { RF } from '../Utils/Responsive'
import HeadertText from '../components/header/HeaderText';
import { useNavigation } from '@react-navigation/native';
import { SimpleText } from '../styles/colors/colorsCode';
import { AddIcon, RefreshIcon } from '../assets/Index';



const FilterScreen = () => {
    const navigation = useNavigation();
     const BackArrowHandle = ()=>{
        navigation.navigate('HomeScreen')
     }
     const RefreshHandler = ()=>{
        navigation.navigate('FilterScreen')
     }

  return (
    <View style={{flex:1}}>
      <HeadertText
        onPress={BackArrowHandle}
        tintColor={SimpleText}
        text="My Address"
        Img={RefreshIcon}
        onClick={RefreshHandler}
      />
        
      <Text>FilterScreen</Text>
    </View>
  )
}

export default FilterScreen

const styles = StyleSheet.create({})