import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Container from '../components/Container';
import {TouchableOpacity} from 'react-native-gesture-handler';
import globalStyles from '../styles/globalStyles';
import Button from '../components/Button/ThemeButton';
import OTPInput from '@twotalltotems/react-native-otp-input';
import colors from '../constants/colors';
import axios from 'axios';
import config from '../Config/Config';
import Toast from 'react-native-toast-message';

const OtpScreen = ({navigation, route}) => {
  // To send the code again to user

  console.log(route.params);
  const [code, setcode] = React.useState(String(route.params.otp));
  const otpInput = React.useRef();
  const displayText = route.params?.displayText;
  const link = route.params?.route;
  const resendCode = () => {
    Toast.show({
      type: 'success',
      text1: 'OTP Resent!',
    });
  };
  // const verifyOtp = () => {
  //   navigation.navigate(link || 'Complete', {displayText});
  // };
  const verifyOtp = async () => {
    try {
      let res1 = await axios.post(config.url + 'user/verifyotp', {
        email: route.params.user.email ? route.params.user.email : '',
        phone: route.params.user.phone ? route.params.user.phone : '',
        otp: code,
      });
      Toast.show({
        type: 'success',
        text1: 'You Are Validated',
      });
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Login',
          },
        ],
      });
    } catch (error) {
      console.log(error.response.data);

      Toast.show({
        type: 'error',
        text1: error.response.data.message,
      });
    }
  };
  console.log(code);
  return (
    <Container
      showHeader
      style={globalStyles.justifyCenter}
      headerProps={{title: 'OTP Verify'}}>
      <View style={globalStyles.alignCenter}>
        <OTPInput
          ref={otpInput}
          style={[styles.otpInput]}
          pinCount={4}
          code={String(route.params.otp)}
          codeInputFieldStyle={styles.otpInputField}
          autoFocusOnLoad
          onCodeFilled={code => {
            setcode(code);
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />

        <Text style={globalStyles.text}>Enter Valid OTP Number ! </Text>
        <Text style={globalStyles.text}>You will receive 4 digit code </Text>
      </View>
      <View
        style={[globalStyles.row, globalStyles.selfCenter, globalStyles.my24]}>
        <Text style={[globalStyles.text]}>Didn’t receive code? </Text>
        <TouchableOpacity onPress={resendCode}>
          <Text style={[globalStyles.text, globalStyles.bold]}>Resend</Text>
        </TouchableOpacity>
      </View>
      <View style={globalStyles.px40}>
        <Button onPress={verifyOtp} title="Continue" />
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  otpInput: {width: '80%', height: 140},
  otpInputField: {
    height: 70,
    width: 60,
    borderBottomColor: colors.border,
    borderBottomWidth: 5,
    elevation: 4,
    borderRadius: 4,
    color: colors.textprimary,
    fontSize: 20,
    backgroundColor: '#fff',
    borderWidth: 0,
  },
});
export default OtpScreen;
