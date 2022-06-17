import { View, Text } from 'react-native'
import React from 'react'
import fonts from '../../../assets/custom/fonts'

const QrDataTest = () => {
    const QrData = "S1-B75896452-C1256"
    let Q = { "S": "1","B": "1235","C":'1'};

  return (
    <View style={{backgroundColor:'#ccc',paddingVertical:25,paddingHorizontal:20}}>
      <Text style={{alignSelf:'center',fontFamily:fonts.PrimaryBoldFont,fontSize:20}}>{Q.S}</Text>
    </View>
  )
}

export default QrDataTest