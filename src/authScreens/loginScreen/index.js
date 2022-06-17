import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Octicons from 'react-native-vector-icons/Octicons';
import {Footer} from 'native-base';
import SubmitBtn from '../../appScreens/components/submitBtn';
const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.con}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.HeaderSection}>
            <Text style={styles.HedingText}>Login</Text>
            <Text style={styles.HeaderText}>
              This is simple and fast process you just need to enter your mobile
              number then you will get OTP to verify your identity.
            </Text>
          </View>
          <View style={styles.BodySection}>
            <Image 
            source={{uri:'https://esigm.com/thecircle/v1/used_images/user_mobile.png'}}
            style={styles.bg_img}
            />
            <View style={styles.formCon}>
              <TextInput
                placeholder="Enter mobile number"
                style={styles.mobileInput}
              />
            </View>
             <SubmitBtn 
             onPress={()=>console.warn('btn clicked :)')}
             />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
