import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Connect from '../screens/Connect';
import Location from '../screens/Location';
import SelectProfile from '../screens/SelectProfile';
import OtpScreen from '../screens/Otp';
import Completed from '../screens/Completed';
import ForgetPassowrd from '../screens/ForgetPassword';
import UpdatePassword from '../screens/UpdatePassowrd';
import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Filters from '../screens/FIlters';
import Search from '../screens/Search';
import ConfirmationModal from '../components/Modal/ConfirmationModal';
import {Context} from '../utils/store';
import {Text} from 'react-native';
import Sidebar from '../components/Sidebar';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import Feedbacks from '../screens/Feedbacks';
import Settings from '../screens/Settings';
import ChangePassword from '../screens/ChangePassword';
import BlockedPost from '../screens/BlockedPost';
import BlockedUser from '../screens/BlockedUser';
import ReplyFeedback from '../screens/ReplyFeedback';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import TC from '../screens/TC';
import About from '../screens/About';
import Chat from '../screens/Chat';
import ChoosePayment from '../screens/ChoosePayment';
import Messages from '../screens/Messages';
import People from '../screens/People';
import NewPost from '../screens/NewPost';
import AddLocation from './AddLocation';
import Comment from '../screens/Comment';
import TagPeople from '../screens/TagPeople';
import {useSelector} from 'react-redux';
import {StatusBar} from 'react-native';

const {Navigator, Screen} = createStackNavigator();

const MainNavigation = () => {
  const {state, dispatch} = React.useContext(Context);
  const {user} = useSelector(state => ({
    user: state.userReducer.user,
  }));

  return (
    <>
      <ConfirmationModal
        visible={state.modalState.visible}
        title={state.modalState.title}
        toggleModal={state =>
          dispatch({type: 'modalState', modalState: {visible: false}})
        }
      />
      <NavigationContainer>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <Navigator headerMode={'none'}>
          {user ? (
            <>
              <Screen name="Home" component={Home} />
              <Screen name="Comment" component={Comment} />
              <Screen name="New Post" component={NewPost} />
              <Screen name="Add Location" component={AddLocation} />
              <Screen name="Tag People" component={TagPeople} />
              <Screen name="Sidebar" component={Sidebar} />
              <Screen name="Profile" component={Profile} />
              <Screen name="Messages" component={Messages} />
              <Screen name="People" component={People} />
              <Screen name="EditProfile" component={EditProfile} />
              <Screen name="Settings" component={Settings} />
              <Screen name="Chat" component={Chat} />
              <Screen name="Feedbacks" component={Feedbacks} />
              <Screen name="Reply Feedback" component={ReplyFeedback} />
              <Screen name="Blocked Post" component={BlockedPost} />
              <Screen name="Blocked User" component={BlockedUser} />
              <Screen name="UpdatePassword" component={UpdatePassword} />
              <Screen name="Change Password" component={ChangePassword} />
              <Screen name="Notification" component={Notifications} />
              <Screen name="Filters" component={Filters} />
              <Screen name="Search" component={Search} />
              <Screen name="Choose Payment" component={ChoosePayment} />
              <Screen name="About" component={About} />
              <Screen name="TC" component={TC} />
              <Screen name="Privacy Policy" component={PrivacyPolicy} />
            </>
          ) : (
            <>
              <Screen name="Connect" component={Connect} />
              <Screen name="Login" component={Login} />
              <Screen name="Signup" component={Signup} />
              <Screen name="Location" component={Location} />
              <Screen name="Otp" component={OtpScreen} />
              <Screen name="Complete" component={Completed} />
              <Screen name="Select Profile" component={SelectProfile} />
              <Screen name="ForgetPassword" component={ForgetPassowrd} />
            </>
          )}

          {/* After Auth Navigations */}
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default MainNavigation;
