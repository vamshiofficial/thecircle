import React, {useState,useEffect} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View,Keyboard} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import colors from '../../../assets/custom/colors';
import RNOtpVerify from 'react-native-otp-verify';
const OtpVerifyModal = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [otp, setotp] = useState('')
useEffect(() => {
    RNOtpVerify.getHash()
    .then(console.log)
    .catch(console.log);

    RNOtpVerify.getOtp()
    .then(p => RNOtpVerify.addListener(otpHandler))
    .catch(p => console.log(p));
    return  () =>  RNOtpVerify.removeListener();
}, [])
 const otpHandler = (message) => {
    console.log('message',message);
    const otpNum = /(\d{4})/g.exec(message)[1];
    console.log('otp,',otpNum);
    setotp(otpNum)
    RNOtpVerify.removeListener();
    Keyboard.dismiss();  
    // this.setState({ otp });
}
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <OTPInputView
              style={{width: '80%', height: 200}}
              pinCount={4}
              code={otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
              // onCodeChanged = {code => { this.setState({code})}}
            //   autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              onCodeFilled={code => {
                console.warn(`Code is ${code}, you are good to go!`);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    borderStyleBase: {
        width: 30,
        height: 45
      },
    
      borderStyleHighLighted: {
        borderColor: "#03DAC6",
      },
    
      underlineStyleBase: {
        width: 45,
        height: 45,
        borderWidth: 1,
        // borderBottomWidth: 0,
      },
    
      underlineStyleHighLighted: {
        borderColor: colors.PrimaryBlack,
      },
  centeredView: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '100%',
    height: '80%',
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default OtpVerifyModal;
