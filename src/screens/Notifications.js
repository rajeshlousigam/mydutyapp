import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Container from '../components/Container';
import globalStyles from '../styles/globalStyles';
import colors from '../constants/colors';
import List from '../components/List';
import NotificationItem from '../components/NotificationItem';
import ReloadIcon from '../assets/icons/reload.svg';
const notificationData = [
  {
    title: 'Booking Confirm',
    about: 'Consultation booking confirm with Dr. Vivek Verma',
  },
  {
    title: 'Booking Confirm',
    about: 'Consultation booking confirm with Dr. Vivek Verma',
  },
  {
    title: 'Password Reset',
    about: 'Change or reset password successfully',
  },
  {
    title: 'Password Reset',
    about: 'Change or reset password successfully',
  },
];
const Notifications = ({navigation}) => (
  <Container showFooter contentContainerStyle={styles.container} scroll>
    <View style={globalStyles.p30}>
      <View
        style={[
          globalStyles.row,
          globalStyles.spaceBetween,
          globalStyles.alignEnd,
        ]}>
        <Text style={[globalStyles.title, {color: colors.tertiary}]}>
          Notification
        </Text>
        <ReloadIcon />
      </View>
      <Text style={[globalStyles.mt16, globalStyles.bold, globalStyles.text]}>
        Checkout Notification
      </Text>
      <Text
        style={[globalStyles.mt16, {color: colors.textprimary, fontSize: 15}]}>
        Choose one of categories which suited you most
      </Text>
    </View>

    <List
      type="flat"
      data={notificationData}
      contentContainerStyle={globalStyles.listBottom}
      listItem={NotificationItem}
    />
  </Container>
);
const styles = StyleSheet.create({container: {padding: 0}});

export default Notifications;
