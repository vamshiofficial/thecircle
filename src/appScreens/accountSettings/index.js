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
const AccountSettingsScreen = () => {
  const [gender, setgender] = useState(null);
  return (
    <SafeAreaView style={styles.con}>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={{flex: 1}}>
          <View style={styles.HeaderSection}>
            <Text style={styles.HedingText}>Update account</Text>
            <Text style={styles.HeaderText}>
            Please let us know the  about you.It will help us to showxcase your personality to the world.
            </Text>
          </View>
          <View style={styles.BodySection}>
            <View style={styles.formCon}>
              <TextInput placeholder="Your name" style={styles.mobileInput} />
              <TextInput placeholder="User name for ESY platform" style={styles.mobileInput} />
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
            <SubmitBtn onPress={() => console.warn('btn clicked account settings :)')} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountSettingsScreen;
