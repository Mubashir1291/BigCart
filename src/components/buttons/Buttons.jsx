import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Primary, Secondary } from '../../styles/colors/colorsCode';
import { RF } from '../../Utils/Responsive';




const Buttons = ({text,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.CreateButtonContainer}  >
                <LinearGradient
                    style={styles.GetStartedBtn}
                    colors={[Primary, Secondary]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 1 }}
                >

                <Text style={styles.BtnText}>{text}</Text>
                </LinearGradient>
            </TouchableOpacity>
  )
}

export default Buttons

const styles = StyleSheet.create({

    CreateButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: RF (10),
    },
GetStartedBtn: {
        width: RF (350),
        height: RF (50),
        borderRadius: RF (7),
        backgroundColor: 'Secondary',
        alignItems: 'center',
        justifyContent: 'center',
    },
     BtnText: {
        color: '#FFFFFF',
        fontSize: RF (14),
        fontFamily: 'Poppins-Regular',   },
})