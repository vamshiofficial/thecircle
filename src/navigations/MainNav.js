import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './bottomTabs';
import OutletScreen from '../appScreens/outletScreen.js';
import LoginScreen from '../authScreens/loginScreen';
import RegisterScreen from '../authScreens/registerScreen';
import AccountSettingsScreen from '../appScreens/accountSettings';
import SplashScreen from '../appScreens/components/splashScreen';

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();
function MainNav() {
  return (
    <Stack.Navigator
    initialRouteName='BottomTabs'
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen 
      options={{
        animationEnabled:false
      }}
      name="OutletScreen" 
      component={OutletScreen} 
      />
      <Stack.Screen 
      options={{
        animationEnabled:false,
        headerShown:false,
        headerTitle:''
      }}
      name="LoginScreen" 
      component={LoginScreen} 
      />
       <Stack.Screen 
      options={{
        animationEnabled:false,
        headerShown:false,
        headerTitle:''
      }}
      name="RegisterScreen" 
      component={RegisterScreen} 
      />
        <Stack.Screen 
      options={{
        animationEnabled:false,
        headerShown:false,
        headerTitle:''
      }}
      name="AccountSettingsScreen" 
      component={AccountSettingsScreen} 
      />
        <Stack.Screen 
      options={{
        animationEnabled:true,
        headerShown:false,
        headerTitle:''
      }}
      name="SplashScreen" 
      component={SplashScreen} 
      />
    </Stack.Navigator>
  );
}
export default MainNav;
