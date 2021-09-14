import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CircleImage from './CircleImage';
import colors from '../constants/colors';
import globalStyles from '../styles/globalStyles';
const NotificationItem = props => {
  React.useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, []);
  const {title = '', about = ''} = props;
  return (
    <View
      style={[
        styles.notificationContainer,
        globalStyles.shadow,
        globalStyles.mx8,
      ]}>
      <View style={styles.profileContent}>
        <CircleImage
          avatar
          fallback
          avatarTextStyle={[globalStyles.bold, styles.avatarTextStyle]}
          avatarTitle={(title || 'S').substring(0, 1).toUpperCase()}
          background={'#943993'}
          size={60}
        />

        <View style={styles.profileLeftContainer}>
          <Text style={styles.notificationTitle}>{title}</Text>
          <Text style={styles.description}>{about}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  profileContent: {flexDirection: 'row', flex: 1},
  notificationContainer: {
    marginTop: 30,
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 24,
    borderRadius: 10,
  },
  avatarTextStyle: {fontSize: 24, color: colors.white},
  profileLeftContainer: {marginLeft: 24, flex: 1},
  notificationTitle: {
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    marginTop: 8,
    color: colors.textprimary,
  },
});

export default NotificationItem;
