import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../assets/custom/colors';
import fonts from '../../../assets/custom/fonts';
const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: colors.white,
  },
  HeaderSection: {
    height: DeviceHeight * 0.3,
    width: DeviceWidth,
    backgroundColor: colors.PrimaryBlack,
    paddingBottom: 60,
    paddingTop: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  HedingText: {
    fontFamily: fonts.PrimaryBoldFont,
    fontSize: fonts.FontMainHeading,
    color: colors.white,
  },
  HeaderText: {
    fontFamily: fonts.PrimaryFont,
    fontSize: fonts.FontBody,
    color: colors.white3,
  },
  BodySection: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingVertical: 40,
    marginTop: -35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formCon: {
    alignSelf: 'center',
    // position:'absolute',
    // bottom:50
  },
  mobileInput: {
    width: DeviceWidth * 0.85,
    alignSelf: 'center',
    borderColor: colors.bglight,
    borderWidth: 1,
    height: 45,
    paddingHorizontal: 15,
    fontFamily: fonts.PrimaryFont,
    borderRadius: 5,
    marginBottom:20
  },
  genderText: {
    fontFamily: fonts.PrimarySemiBoldFont,
    marginTop: 0,
    color: colors.black,
  },
  gendersCon: {
    flexDirection: 'row',
    justifyContent:'flex-start'
  },
  genderBtn: {
    marginTop: 15,
  },
  genderImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: colors.bglight,
    marginRight: 15,
  },
});
export default styles;
