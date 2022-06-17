import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../../assets/custom/colors';
import fonts from '../../../assets/custom/fonts';
const styles = StyleSheet.create({
  con: {
    height:'100%',
    backgroundColor: colors.white,
  },
  HeaderSection: {
    backgroundColor: colors.Primary,
    paddingTop: 50,
    
  },
  body:{
    height:'100%',
    backgroundColor:colors.white,
    borderTopLeftRadius:35,
    borderTopRightRadius:35,
    marginTop:-35,
    paddingTop:35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
export default styles;
