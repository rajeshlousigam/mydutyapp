import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import List from './List';
import globalStyles from '../styles/globalStyles';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import colors from '../constants/colors';
import CloseIcon from '../assets/icons/close.svg';
import useScreenDimensions from './Hooks/useScreenDimensions';
import PowerIcon from '../assets/icons/power.svg';

import CircleImage from './CircleImage';
import ProfileAvatar from '../assets/icons/profile_avatar.svg';
import MessageIcon from '../assets/icons/chat_2.svg';
import {useDispatch} from 'react-redux';
import {logUserOut} from '../store/actions/user';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Sidebar = ({navigation}) => {
  const navigate = (route, params) => navigation.navigate(route, params);
  const {width} = useScreenDimensions('screen');
  const dispatch = useDispatch();
  const logout = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {}
    dispatch(logUserOut());
  };

  const routes = [
    {
      title: 'Home',
      onPress: () => navigate('Home'),
    },
    {
      title: 'Profile',
      onPress: () => navigate('Profile', {myProfile: true}),
    },
    {
      title: 'Charity',
      onPress: () => {},
    },
    {
      title: 'Feedback',
      onPress: () => navigate('Feedbacks'),
    },
    {
      title: 'Settings',
      onPress: () => navigate('Settings'),
    },
    {
      title: 'Terms & Condition',
      onPress: () => navigate('TC'),
    },
    {
      title: 'Privacy Policy',
      onPress: () => navigate('Privacy Policy'),
    },
    {
      title: 'About Us',
      onPress: () => navigate('About'),
    },
    {
      title: 'Contact Admin',
      onPress: () => navigate('Chat', {support: true}),
    },
  ];
  return (
    <ScrollView style={styles.container}>
      <View style={[globalStyles.row, globalStyles.spaceBetween]}>
        <View
          style={[
            globalStyles.whiteBackground,
            globalStyles.pt40,
            globalStyles.pb20,
            {width: width / 1.4, borderBottomRightRadius: 40},
          ]}>
          <View style={[globalStyles.row, globalStyles.ml24]}>
            <CircleImage size={44} icon={ProfileAvatar} fallback />
            <View style={globalStyles.ml12}>
              <Text style={[globalStyles.font16, {color: colors.textprimary}]}>
                Neelesh
              </Text>
              <Text style={styles.location}>Kolkata, India</Text>
              <TouchableWithoutFeedback
                onPress={() => navigation.navigate('Messages')}
                style={[
                  globalStyles.row,
                  globalStyles.alignCenter,
                  globalStyles.mt12,
                ]}>
                <MessageIcon />
                <Text style={globalStyles.ml12}>Message</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[globalStyles.mt40, globalStyles.mr24]}>
          <CloseIcon />
        </TouchableOpacity>
      </View>
      <View style={[globalStyles.my40]}>
        <List listItem={Navigation} selected={0} data={routes} />
      </View>
      <View style={globalStyles.mx24}>
        <TouchableOpacity onPress={logout} style={[globalStyles.row]}>
          <PowerIcon />
          <Text
            style={[
              globalStyles.font16,
              globalStyles.bold,
              globalStyles.ml8,
              {color: colors.textprimary},
            ]}>
            Logout
          </Text>
        </TouchableOpacity>

        <Text style={styles.version}>Version 1.0.0</Text>
      </View>
    </ScrollView>
  );
};

export default Sidebar;
const Navigation = ({Icon, title, onPress, selected, index}) => {
  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      style={[
        selected === index ? styles.selected : {},
        styles.settingContainer,
        globalStyles.px24,
        globalStyles.mt16,
      ]}>
      {Icon && <Icon />}
      <Text style={[globalStyles.font16, {color: colors.textprimary}]}>
        {title}
      </Text>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: '#f2f3f6', paddingBottom: 20},
  selected: {borderLeftWidth: 4, borderLeftColor: '#B19CCB'},
  settingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  location: {fontSize: 13, color: '#7B7F9E'},
  version: {color: '#3A4276', fontSize: 10, marginTop: 30},
});
