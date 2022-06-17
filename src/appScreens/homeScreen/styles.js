import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../../assets/custom/colors';
import fonts from '../../../assets/custom/fonts';
const styles = StyleSheet.create({
  con: {
    // flex: 1,
    backgroundColor: colors.white,
  },
  HeaderSection: {
    backgroundColor: colors.Primary,
    paddingTop: 20,
    paddingBottom:30,
    paddingHorizontal: 15,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,

    elevation: 5,
  },
  HeaderHedding: {
    fontFamily: fonts.PrimarySemiBoldFont,
    fontSize: fonts.FontHeadding,
  },
  HeaderBody: {
    fontFamily: fonts.PrimarySemiBoldFont,
    fontSize: fonts.FontSubHeadding,
    color:colors.black2
  },
});
export default styles;
