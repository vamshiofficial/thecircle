import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import ListCardUi from '../components/ListCard';
import * as Animatable from 'react-native-animatable';
import QrDataTest from './qrtest';
const HomeScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.con}>
      <Animatable.View
        animation={'bounce'}
        duration={1000}
        style={[styles.HeaderSection, {marginBottom: 10}]}>
        <Text style={styles.HeaderHedding}>Hello Vamshi good morning!</Text>
        <Text style={styles.HeaderBody}>
          Had your tea if you don’t please click here to search our circle near
          you.
        </Text>
      </Animatable.View>
      <QrDataTest />
      <TouchableOpacity onPress={()=>navigation.navigate('OutletScreen')}>
        <Text>outlet Ui</Text>
      </TouchableOpacity>
      <ListCardUi
        ImageUrl="https://esigm.com/opens/used_imgs/opens-logo.png"
        HeaddingText="Share a moment on Opens"
        BodyText="You will get a reward when you create a post on opens app which is
        ailso one of the main platform of ESY"
        LearnmoreBtn={true}
        onClickLearnmore={() => alert('done')}
      />
      <ListCardUi
        ImageUrl="https://cdn.icon-icons.com/icons2/1875/PNG/512/qrcodescan_120401.png"
        HeaddingText="Scan a cup to get FREE tea"
        BodyText="You can get a absolutly free tea or coffee when you got FREE message when youscaned a QR Code with our app."
        LearnmoreBtn={false}
        onClickLearnmore={() => alert('done')}
      />
      <ListCardUi
        ImageUrl="https://cdn.icon-icons.com/icons2/1875/PNG/512/qrcodescan_120401.png"
        HeaddingText="Scan a cup to get FREE tea"
        BodyText="You can get a absolutly free tea or coffee when you got FREE message when youscaned a QR Code with our app."
        LearnmoreBtn={false}
        onClickLearnmore={() => alert('done')}
      />
      <ListCardUi
        ImageUrl="https://cdn.icon-icons.com/icons2/1875/PNG/512/qrcodescan_120401.png"
        HeaddingText="Scan a cup to get FREE tea"
        BodyText="You can get a absolutly free tea or coffee when you got FREE message when youscaned a QR Code with our app."
        LearnmoreBtn={false}
        onClickLearnmore={() => alert('done')}
      />
      <ListCardUi
        ImageUrl="https://cdn.icon-icons.com/icons2/1875/PNG/512/qrcodescan_120401.png"
        HeaddingText="Scan a cup to get FREE tea"
        BodyText="You can get a absolutly free tea or coffee when you got FREE message when youscaned a QR Code with our app."
        LearnmoreBtn={false}
        onClickLearnmore={() => alert('done')}
      />
    </ScrollView>
  );
};

export default HomeScreen;
