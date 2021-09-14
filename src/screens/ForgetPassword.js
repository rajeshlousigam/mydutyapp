import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Container from '../components/Container';
import Button from '../components/Button/ThemeButton';
import globalStyles from '../styles/globalStyles';
import Input from '../components/Input';
import themeInputStyles from '../styles/themeInputStyles';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import API from '../Config/Config';

const ForgetPassowrd = ({navigation}) => {
  const [email, setemail] = React.useState('');
  const validateAuth = async () => {
    if (!email) {
      Toast.show({
        type: 'error',
        text1: 'Email/Phone number Is Required',
      });
      return;
    }

    let mailFormat =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
    if (!mailFormat.test(email)) {
      Toast.show({
        type: 'error',
        text1: 'Email/Phone number is invalid',
      });
      return;
    }
    try {
      let response = await axios.post(API.url + 'user/forgotPassword', {
        email,
      });
      navigation.navigate('Otp', {route: 'UpdatePassword'});
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: error.response.data.message,
      });
    }
  };
  const resendCode = () => {};
  return (
    <Container
      showHeader
      style={[globalStyles.justifyCenter]}
      headerProps={{title: 'Forget Password'}}>
      <Input
        value={email}
        onChangeText={e => setemail(e)}
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt40,
        ]}
        style={{
          flex: 1,
        }}
        customlabelStyle={themeInputStyles.label}
        label="Email ID/ Phone Number"
      />
      <View style={[globalStyles.container, globalStyles.mt16]}>
        <View style={[globalStyles.alignCenter]}>
          <Text style={[globalStyles.text, globalStyles.textCenter]}>
            You will receive 4 digit code on the given Email/ Phone Number{' '}
          </Text>
        </View>
        <View
          style={[
            globalStyles.row,
            globalStyles.selfCenter,
            globalStyles.my24,
          ]}>
          <Text style={[globalStyles.text]}>Didn’t receive code? </Text>
          <TouchableOpacity onPress={resendCode}>
            <Text style={[globalStyles.text, globalStyles.bold]}>Resend</Text>
          </TouchableOpacity>
        </View>

        <Button onPress={validateAuth} title="Continue" />
      </View>
    </Container>
  );
};

export default ForgetPassowrd;
