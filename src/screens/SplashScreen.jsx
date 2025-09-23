import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { White } from '../styles/colors/colorsCode'
import { SplashIcon } from '../assets/Index'
import { RF } from '../Utils/Responsive'

const SplashScreen = () => {
  return (
    <SafeAreaView style={{flex :1 , backgroundColor:White}}>
        <View style={styles.MainContainer}>

            <Image source={SplashIcon} style={styles.splashlogo}/>



        </View>

        
    </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
MainContainer :{

justifyContent :'center',
alignItems:'center',
flex:1

},
splashlogo:{

    width: RF(250),
    height: RF(250),
    
}



})