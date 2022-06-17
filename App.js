import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import fonts from './assets/custom/fonts'
import colors from './assets/custom/colors'
import BottomTabs from './src/navigations/bottomTabs'
import { NavigationContainer } from '@react-navigation/native'
import MainNav from './src/navigations/MainNav'
const App = () => {
  return (
    <NavigationContainer>
      <MainNav />
    </NavigationContainer>
  )
}

export default App