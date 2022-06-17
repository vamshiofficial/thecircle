import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import SubmitBtn from '../../appScreens/components/submitBtn';
import colors from '../../../assets/custom/colors';
const RegisterScreen = () => {
  const [gender, setgender] = useState(null);
  return (
    <SafeAreaView style={styles.con}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.HeaderSection}>
            <Text style={styles.HedingText}>Basic info</Text>
            <Text style={styles.HeaderText}>
              Please let us know the basic info about you.
            </Text>
          </View>
          <View style={styles.BodySection}>
            <View style={styles.formCon}>
              <TextInput placeholder="Your name" style={styles.mobileInput} />
              <Text style={styles.genderText}>Specify your gender</Text>
              <View style={styles.gendersCon}>
                <Pressable
                  style={styles.genderBtn}
                  onPress={() => setgender('FEMALE')}>
                  <Image
                    source={{
                      uri: 'https://esigm.com/thecircle/v1/used_images/female.png',
                    }}
                    style={[
                      styles.genderImg,
                      {
                        borderColor:
                          gender === 'FEMALE'
                            ? colors.PrimaryBlack
                            : colors.bglight,
                      },
                    ]}
                  />
                </Pressable>
                <Pressable
                  style={styles.genderBtn}
                  onPress={() => setgender('MALE')}>
                  <Image
                    source={{
                      uri: 'https://esigm.com/thecircle/v1/used_images/male.png',
                    }}
                    style={[
                      styles.genderImg,
                      ,
                      {
                        borderColor:
                          gender === 'MALE'
                            ? colors.PrimaryBlack
                            : colors.bglight,
                      },
                    ]}
                  />
                </Pressable>
              </View>
            </View>
            <SubmitBtn onPress={() => console.warn('btn clicked :)')} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
