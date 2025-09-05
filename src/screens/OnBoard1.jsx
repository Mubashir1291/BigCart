import { Image, StyleSheet, Text, View, ImageBackground , TouchableOpacity, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import React from 'react'; 
import { useNavigation } from '@react-navigation/native';
import {  Primary , Secondary } from '../styles/colors/colorsCode';
import { AppLogo,  Slide1, Slide2, Slide3, Slide4 } from '../assets/Index';
import { RF } from '../Utils/Responsive';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';





const OnBoard1 = () => {
    const navigation = useNavigation();

    const welcomeScreenHandle = () => {
         navigation.navigate('WelcomeScreen');
       
    };

    return (
        <View style={styles.container}>
            <Swiper
                autoplay={true}
                showsButtons={false}
                loop={false}
                dot={<View style={styles.dotStyle} />}
                activeDot={<View style={styles.activeDotStyle} />}
                paginationStyle={styles.paginationStyle}
            >
                {/* Slide 1 */}
                <ImageBackground source={Slide1} style={styles.slide}>
                    <View style={styles.TextContainer}>
                        <Text style={styles.Heading1}>Get Discounts</Text>
                        <Text style={styles.Heading2}>on All Products</Text>
                    </View>
                    <View style={styles.Textcontainer3}>
                        <Text style={styles.Heading3}>Lorem ipsum dolor sit amet, consetetur</Text>
                        <Text style={styles.Heading3}> sadipscing elitr, sed diam nonumy</Text>
                    </View>
                </ImageBackground>

                {/* Slide 2 */}
                <ImageBackground source={Slide2} style={styles.slide}>
                    <View style={styles.TextContainer}>
                        <Text style={styles.Heading1}>Buy Quality</Text>
                        <Text style={styles.Heading2}>Dairy Products</Text>
                    </View>
                    <View style={styles.Textcontainer3}>
                        <Text style={styles.Heading3}>Lorem ipsum dolor sit amet, consetetur</Text>
                        <Text style={styles.Heading3}> sadipscing elitr, sed diam nonumy</Text>
                    </View>
                </ImageBackground>

                {/* Slide 3 */}
                <ImageBackground source={Slide3} style={styles.slide}>
                    <View style={styles.TextContainer}>
                        <Text style={styles.Heading1}>Buy Quality</Text>
                        <Text style={styles.Heading2}>Vegitables</Text>
                    </View>
                    <View style={styles.Textcontainer3}>
                        <Text style={styles.Heading3}>Lorem ipsum dolor sit amet, consetetur</Text>
                        <Text style={styles.Heading3}> sadipscing elitr, sed diam nonumy</Text>
                    </View>
                </ImageBackground>

                {/* Slide 4 */}
                <ImageBackground source={Slide4} style={styles.slide}>
                    <View style={styles.TextContainer}>
                        <Text style={styles.Heading1}>Welcome To</Text>
                        <Image
                            source={AppLogo}
                            style={styles.BigCartLogo}
                        />
                    </View>
                </ImageBackground>
            </Swiper>
            <TouchableOpacity onPress={welcomeScreenHandle}>
                           <LinearGradient
                               style={styles.GetStartedBtn}
                               colors={[Primary, Secondary]}
                               start={{ x: 0, y: 1 }}
                               end={{ x: 1, y: 1 }}
                           >
                               <Text style={styles.BtnText}>Get Started</Text>
                           </LinearGradient>
                       </TouchableOpacity>

           
        </View>
    );
};

export default OnBoard1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
     
        
    },
    slide: {
        flex: 1,
        justifyContent:'flex-start',
        alignItems: 'center',
    },
    TextContainer: {
        marginTop: RF(50),
        alignItems: 'center'
    },
    Textcontainer3: {
        marginTop: RF(20),
        alignItems: 'center'
    },
    Heading1: {
        fontFamily: 'Poppins-Bold',
        fontSize: RF(30),
        color: '#000000',
    },
    Heading2: {
        fontFamily: 'Poppins-Bold',
        fontSize: RF(30),
        color: '#000000',
    },
    Heading3: {
        fontSize: RF(17)
    },
    
   
    BigCartLogo: {
        resizeMode: 'contain',
        width: RF(250),
        height: RF(50)
    },
    paginationStyle: {
        position: 'absolute',
        bottom: RF(120),
    },
    dotStyle: {
        backgroundColor: 'rgba(0,0,0,.2)',
        width: RF(8),
        height: RF(8),
        borderRadius: RF(4),
        marginLeft: RF(3),
        marginRight: RF(3),
        marginTop: RF(3),
        marginBottom: RF(3),
    },
    activeDotStyle: {
        backgroundColor:Primary,
        width: RF(8),
        height: RF(8),
        borderRadius: RF(4),
        marginLeft: RF(3),
        marginRight: RF(3),
        marginTop: RF(3),
        marginBottom: RF(3),
    },
        fixedButtonContainer: {
        position: 'absolute',
        bottom: RF(50),
        alignItems: 'center',
    },
GetStartedBtn: {
        width:'90%',
        height: RF(50),
        borderRadius: RF(5),
        backgroundColor: 'Secondary',
        alignItems: 'center',
        justifyContent: 'center', bottom:RF(40),
        alignSelf:'center'

    },
     BtnText: {
        color: '#FFFFFF',
        fontFamily: 'Poppins-Medium',
    }
    
});