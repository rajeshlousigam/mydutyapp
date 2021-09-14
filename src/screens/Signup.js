import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, View, StyleSheet, Image} from 'react-native';
import Button from '../components/Button/ThemeButton';
import {useNavigation} from '@react-navigation/core';
import Container from '../components/Container';
import Input from '../components/Input';
import globalStyles from '../styles/globalStyles';
import themeInputStyles from '../styles/themeInputStyles';
import EmailIcon from '../assets/icons/email.svg';
import PasswordIcon from '../assets/icons/password.svg';
import SocialIcons from '../components/SocialIcons';
import colors from '../constants/colors';
import useScreenDimensions from '../components/Hooks/useScreenDimensions';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import CheckBox from '../components/Checkbox';
import Toast from 'react-native-toast-message';
import {signupUserRequest} from '../store/actions/user';
import axios from 'axios';
import config from '../Config/Config';
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const Signup = () => {
  const {width} = useScreenDimensions('screen');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAccept, setisAccept] = useState('');
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const {user} = useSelector(state => ({
    user: state.userReducer.user,
  }));

  const signupSubmit = async () => {
    if (!email || !password) {
      Toast.show({
        type: 'error',
        text1: 'Email/Phone number & Password Is Required',
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

    if (password.length < 8) {
      Toast.show({
        type: 'error',
        text1: 'Password needs to be more than 8 characters',
      });
      return;
    }
    if (!isAccept) {
      Toast.show({
        type: 'error',
        text1: 'Please Accept Terms',
      });
      return;
    }
    try {
      let res = await axios.post(config.url + 'user/addUser', {
        email: isNaN(email) ? email : '',
        password,
        phone: isNaN(email) ? '' : email,
        memberType: 'organisation',
      });
      console.log(res.data);
      if (res.data.status !== 1) {
        Toast.show({
          type: 'error',
          text1: res.data.message,
        });
        return;
      }
      // {"email": "", "memberType": "organisation", "password": "password", "phone": "9457129415"}

      navigation.navigate('Select Profile', res.data.data);
    } catch (error) {
      console.log(error);
      Toast.show({
        type: 'error',
        text1: error.response.data.message,
      });
    }

    // dispatch(
    //   signupUserRequest({
    //     email,
    //     password,
    //     phone: '',
    //     memberType: 'organisation',
    //   }),
    // );
  };

  const onChangeEmailText = val => {
    setEmail(val);
  };

  const onChangePasswordText = val => {
    setPassword(val);
  };

  const fbLogin = async () => {
    try {
      // LoginManager.setLoginBehavior(LoginBehaviorAndroid.WEB_ONLY);
      LoginManager.setLoginBehavior('web_only');
      LoginManager.logInWithPermissions([
        'email',
        'public_profile',
        'user_friends',
      ]).then(
        function (result) {
          console.log(result);
          if (result.isCancelled) {
            console.log('Login cancelled');
          } else {
            AccessToken.getCurrentAccessToken().then(data => {
              console.log(data.accessToken.toString());
              getPublicProfile();
            });
            console.log(
              'Login success with permissions: ' +
                result.grantedPermissions.toString(),
            );
          }
        },
        function (error) {
          console.log('Login fail with error: ' + error);
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getPublicProfile = async () => {
    const infoRequest = new GraphRequest(
      '/me?fields=id,name,picture,email',
      null,
      async (error, result) => {
        if (error) {
          console.log('Error fetching data: ' + error.toString());
        } else {
          try {
            let res = await axios.post(config.url + 'user/addUser', {
              email: result.email,
              password: result.id,
              phone: isNaN(email) ? '' : email,
              memberType: 'organisation',
            });
            console.log(res.data);
            if (res.data.status !== 1) {
              Toast.show({
                type: 'error',
                text1: res.data.message,
              });
              return;
            }

            console.log(res.data);
            navigation.navigate('Select Profile', res.data.data);
          } catch (error) {
            console.log(error);
            Toast.show({
              type: 'error',
              text1: error.response.data.message,
            });
          }
          // dispatch(
          //   loginUserRequest({
          //     email: result.email,
          //     phone: '',
          //     password: result.id,
          //   }),
          // );
        }
      },
    );
    new GraphRequestManager().addRequest(infoRequest).start();
  };

  const googleSignIn = async () => {
    GoogleSignin.configure({
      scopes: [],
      webClientId:
        '577571917209-4gnkesunbf29tlfbbsdinb84d2agb2v9.apps.googleusercontent.com',
      offlineAccess: true,
    });
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      try {
        let res = await axios.post(config.url + 'user/addUser', {
          email: userInfo.user.email,
          password: userInfo.user.id,
          phone: isNaN(email) ? '' : email,
          memberType: 'organisation',
        });
        console.log(res.data);
        if (res.data.status !== 1) {
          Toast.show({
            type: 'error',
            text1: res.data.message,
          });
          return;
        }

        console.log(res.data);
        navigation.navigate('Select Profile', res.data.data);
      } catch (error) {
        console.log(error);
        Toast.show({
          type: 'error',
          text1: error.response.data.message,
        });
      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
        // play services not available or outdated
      } else {
        console.log(error);
        // some other error happened
      }
    }
  };

  return (
    <Container
      showHeader
      contentContainerStyle={[globalStyles.p0, {paddingBottom: 16}]}
      headerProps={{headerStyle: styles.headerStyle}}
      scroll
      style={{marginTop: -80}}>
      <View style={styles.backgroundContainer}>
        <Image
          style={[{width}, styles.background]}
          source={require('../assets/background/background_2.png')}
        />
      </View>
      <View style={globalStyles.px30}>
        <View style={{width: 240}}>
          <Text style={globalStyles.title}>Welcome to</Text>
          <Text style={globalStyles.appTitle}>My Duty App</Text>
          <Text style={[styles.small, {lineHeight: 22}]}>
            Best cloud storage platform for all business and individuals to
            manage there data
          </Text>
          <Text style={[styles.small, globalStyles.mt40]}>Join For Free.</Text>
        </View>
        <View style={[globalStyles.px20, globalStyles.mt16]}>
          <Input
            icon={EmailIcon}
            customlabelStyle={themeInputStyles.inputLabel}
            label="Email/Mobile Number"
            style={[globalStyles.ml16, globalStyles.flex1]}
            showLabel
            value={email}
            onChangeText={e => onChangeEmailText(e)}
          />
          <View style={globalStyles.mt40}>
            <Input
              secureTextEntry
              icon={PasswordIcon}
              customlabelStyle={themeInputStyles.inputLabel}
              label="Create Password"
              showLabel
              value={password}
              style={[globalStyles.ml16, globalStyles.flex1]}
              onChangeText={e => onChangePasswordText(e)}
            />
          </View>
          <View
            style={[
              globalStyles.row,
              globalStyles.mt8,
              globalStyles.alignCenter,
            ]}>
            <View>
              <CheckBox
                size={24}
                type
                style={{backgroundColor: colors.gray}}
                color={{checked: '#943993', blur: '#943993'}}
                state={isAccept}
                onPress={() => setisAccept(value => !value)}
              />
            </View>
            <Text style={[styles.termsText, {marginTop: -4}, globalStyles.ml8]}>
              Accept the terms & Conditions
            </Text>
          </View>
          <Button
            style={globalStyles.mt8}
            onPress={signupSubmit}
            title={'Sign Up'}
          />
          <Text style={[styles.small, globalStyles.selfCenter]}>
            Use Social Login
          </Text>
          <View style={[globalStyles.selfCenter, globalStyles.my16]}>
            <SocialIcons onFbLogin={fbLogin} onGoogleLogin={googleSignIn} />
          </View>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Login')}>
            <Text style={[globalStyles.label, styles.link]}>
              Back to Sign In
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  small: {color: '#7B7F9E', marginTop: 16},
  link: {color: colors.textprimary, alignSelf: 'center', borderBottomWidth: 1},
  termsText: {
    fontSize: 12,
    color: colors.textTertiary,
    borderBottomWidth: 1,
    borderBottomColor: colors.textTertiary,
  },
  background: {position: 'absolute', top: 0, height: 300},
  backgroundContainer: {
    height: 180,
  },
  headerStyle: {backgroundColor: null},
});
export default Signup;
