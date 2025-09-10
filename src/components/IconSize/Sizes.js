import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RF } from '../../Utils/Responsive';
import { LightGrey, Primary, Secondary, TextClr, White } from '../../styles/colors/colorsCode';





 const IconSize = {
   height: RF(20),
      width: RF(20),
      resizeMode: 'contain',
      tintColor:TextClr, 

 };

  const TextRegular = {
  fontSize: RF(12),
  fontFamily: 'Poppins-Regular',
  color: TextClr,
 };
   const TextMedium = {
  fontSize: RF(12),
  fontFamily: 'Poppins-Medium',
  color: TextClr,
 };
   const TextSemiBold = {
  fontSize: RF(12),
  fontFamily: 'Poppins-SemiBold',
  color: TextClr,
 };
   const TextBold = {
  fontSize: RF(12),
  fontFamily: 'Poppins-Bold',
  color: TextClr,
 };


 export{
 IconSize,
 TextRegular,
 TextMedium,
 TextSemiBold,
 TextBold,

}


