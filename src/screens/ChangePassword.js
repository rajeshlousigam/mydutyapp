import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button/ThemeButton';
import Input from '../components/Input';
import {View} from 'react-native';
import globalStyles from '../styles/globalStyles';
import themeInputStyles from '../styles/themeInputStyles';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import API from '../Config/Config';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChangePassword = ({navigation}) => {
  const [oldpassword, setoldpassword] = React.useState('');
  const [password, setpassword] = React.useState('');
  const [cpassword, setcpassword] = React.useState('');

  const onSubmit = async () => {
    try {
      if (!oldpassword || !password || !cpassword) {
        Toast.show({
          type: 'error',
          text1: 'All Fields Are Requried',
        });
        return;
      }
      if (password !== cpassword) {
        Toast.show({
          type: 'error',
          text1: "Passwords Doens't match",
        });
        return;
      }
      let token = await AsyncStorage.getItem('token');
      let resp = await axios.post(
        `${API.url}` + 'user/changePassword',
        {
          oldpassword,
          password,
        },
        {
          headers: {
            Authorization: token,
          },
        },
      );
      console.log(resp.data);
      if (resp.data.status == '0') {
        Toast.show({
          type: 'error',
          text1: resp.data.message,
        });
        return;
      }
      Toast.show({
        type: 'success',
        text1: 'Password Has Been Changed',
      });
    } catch (error) {
      console.log(error.response.data);
      Toast.show({
        type: 'error',
        text1: error.response.data
          ? error.response.data
          : 'Something went Wrong',
      });
    }
  };

  return (
    <Container
      showHeader
      headerProps={{titleType: 'title2', title: 'Change Password'}}>
      <View style={[globalStyles.px16, globalStyles.mt16]}>
        <Input
          customlabelStyle={[globalStyles.font16, globalStyles.mb4]}
          customInputStyle={themeInputStyles.searchInputStyle}
          showLabel
          label="Current Password"
          value={oldpassword}
          onChangeText={e => setoldpassword(e)}
          secureTextEntry
        />
        <Input
          customlabelStyle={[globalStyles.font16, globalStyles.mb4]}
          customInputStyle={themeInputStyles.searchInputStyle}
          customContainerStyle={globalStyles.mt30}
          showLabel
          label="New Password"
          value={password}
          onChangeText={e => setpassword(e)}
          secureTextEntry
        />
        <Input
          customlabelStyle={[globalStyles.font16, globalStyles.mb4]}
          customInputStyle={themeInputStyles.searchInputStyle}
          customContainerStyle={globalStyles.mt30}
          showLabel
          label="Confirm new password"
          value={cpassword}
          onChangeText={e => setcpassword(e)}
          secureTextEntry
        />

        <View style={[globalStyles.mt80, globalStyles.px20, globalStyles.pt40]}>
          <Button
            onPress={
              () => onSubmit()
              // navigation.navigate('Complete', {
              //   displayText: 'Your Password is successfully changed.',
              // })
            }
            title="Update"
          />
        </View>
      </View>
    </Container>
  );
};

export default ChangePassword;
