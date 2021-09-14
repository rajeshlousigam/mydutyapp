import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../components/Button/ThemeButton';
import Container from '../components/Container';
import Input from '../components/Input';
import colors from '../constants/colors';
import globalStyles from '../styles/globalStyles';
import themeInputStyles from '../styles/themeInputStyles';
import EmailIcon from '../assets/icons/email.svg';
import PasswordIcon from '../assets/icons/password.svg';
import SocialIcons from '../components/SocialIcons';
import {loginUserRequest} from '../store/actions/user';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
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

const Login = ({params}) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {user} = useSelector(state => ({
    user: state.userReducer.user,
  }));

  console.log('login api call', user);
  const loginSubmit = () => {
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
    dispatch(
      loginUserRequest({
        email: isNaN(email) ? email : '',
        password,
        phone: isNaN(email) ? '' : email,
      }),
    );
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
          dispatch(
            loginUserRequest({
              email: result.email,
              phone: '',
              password: result.id,
            }),
          );
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

      const body = {
        email: userInfo.user.email,
        google_id: userInfo.user.id,
        type: 'google',
      };

      dispatch(
        loginUserRequest({
          email: userInfo.user.email,
          phone: '',
          password: userInfo.user.id,
        }),
      );
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
      scroll
      showHeader
      contentContainerStyle={[globalStyles.p0, {paddingBottom: 16}]}
      style={{marginTop: -80}}
      headerProps={{headerStyle: styles.headerStyle}}>
      <View style={styles.backgroundContainer}>
        <ImageBackground
          style={styles.background}
          source={require('../assets/images/login.png')}>
          <Text style={styles.title}>Application Name</Text>
        </ImageBackground>
        <View
          style={[
            globalStyles.selfCenter,
            globalStyles.alignCenter,
            styles.loginTextContainer,
          ]}>
          <Text
            style={[
              globalStyles.label,
              globalStyles.bold,
              {fontSize: 18, color: colors.textQuarter},
            ]}>
            Log In
          </Text>
          <Text style={[globalStyles.label, {color: colors.textQuarter}]}>
            to Continue
          </Text>
        </View>
      </View>

      <View style={[globalStyles.px40, globalStyles.mt40]}>
        <Input
          label="Email/Mobile Number"
          icon={EmailIcon}
          customlabelStyle={themeInputStyles.inputLabel}
          showLabel
          value={email}
          style={[globalStyles.ml16, globalStyles.flex1]}
          onChangeText={e => onChangeEmailText(e)}
        />
        <View style={globalStyles.mt40}>
          <Input
            label="Password"
            secureTextEntry
            icon={PasswordIcon}
            customlabelStyle={themeInputStyles.inputLabel}
            showLabel
            value={password}
            style={[globalStyles.ml16, globalStyles.flex1]}
            onChangeText={e => onChangePasswordText(e)}
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
          <Text style={[globalStyles.label, {alignSelf: 'flex-end'}]}>
            Forget Password
          </Text>
        </TouchableOpacity>
        <View style={globalStyles.mt16}>
          <Button onPress={loginSubmit} title={'Login'} />
        </View>
        <Text style={styles.small}>or Sign in with</Text>
        <View style={[globalStyles.selfCenter, globalStyles.my16]}>
          <SocialIcons onFbLogin={fbLogin} onGoogleLogin={googleSignIn} />
        </View>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Signup')}>
          <Text style={[globalStyles.label, styles.link]}>
            Create an account
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  small: {color: colors.textsecondary, marginTop: 16, alignSelf: 'center'},
  link: {
    color: colors.textprimary,
    alignSelf: 'center',
    borderBottomWidth: 1,
  },
  loginTextContainer: {
    backgroundColor: colors.white,
    paddingVertical: 16,
    paddingHorizontal: 80,
  },
  headerStyle: {backgroundColor: null},
  background: {position: 'absolute', top: 0, width: '100%', height: 380},
  backgroundContainer: {
    height: 380,
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 28,
    marginTop: 120,
    marginLeft: 50,
    width: '50%',
    color: colors.white,
  },
});
export default Login;
