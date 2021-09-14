import React from 'react';
import {Text, View, StyleSheet, TouchableNativeFeedback} from 'react-native';
import Container from '../components/Container';
import globalStyles from '../styles/globalStyles';
import colors from '../constants/colors';
import List from '../components/List';
import ThemeSwitch from '../components/Switch';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

const Settings = ({navigation}) => (
  <Container
    showHeader
    style={globalStyles.px30}
    headerProps={{title: 'Settings', titleType: 'title3'}}>
    <List
      listItem={Setting}
      data={[
        {
          title: 'Add Bank Account',
          action: () => navigation.navigate('Change Password'),
        },
        {
          title: 'Change Password',
          action: () => navigation.navigate('Change Password'),
        },
        {
          title: 'Blocked User',
          action: () => navigation.navigate('Blocked User'),
        },
        {
          title: 'Blocked Post',
          action: () => navigation.navigate('Blocked Post'),
        },
        {
          title: 'Enable Notification',
          showSwitch: true,
        },
        {
          title: 'Enable OTP Verification',
          showSwitch: true,
        },
        {
          title: 'Show Email/Mobile Number',
          showSwitch: true,
        },
      ]}
    />
  </Container>
);
const Setting = ({title, action, index, showSwitch}) => (
  <View
    onPress={action}
    style={[
      globalStyles.row,
      globalStyles.spaceBetween,
      index && globalStyles.mt40,
    ]}>
    <TouchableWithoutFeedback onPress={action}>
      <Text style={styles.title}>{title}</Text>
    </TouchableWithoutFeedback>
    {showSwitch && <ThemeSwitch />}
  </View>
);
export default Settings;

const styles = StyleSheet.create({
  title: {fontSize: 16, color: colors.black},
});
