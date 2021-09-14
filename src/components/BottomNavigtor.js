import * as React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import colors from '../constants/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';
import CircleButton from './Button/CircleButton';
import HomeInActive from '../assets/icons/home_inactive.svg';
import HomeActive from '../assets/icons/home_active.svg';
import NotificationActiveIcon from '../assets/icons/notification_active.svg';
import NotificationInactiveIcon from '../assets/icons/notification_inactive.svg';
import PlusIcon from '../assets/icons/add.svg';
import useScreenDimensions from './Hooks/useScreenDimensions';
import globalStyles from '../styles/globalStyles';
// navigation options

// Bottom navigation component
const BottomNavigator = ({}) => {
  const route = useRoute();
  const navigations = [
    {icon: route.name === 'Home' ? HomeActive : HomeInActive, route: 'Home'},
    {
      icon:
        route.name === 'Notification'
          ? NotificationActiveIcon
          : NotificationInactiveIcon,
      route: 'Notification',
    },
  ];
  const {width} = useScreenDimensions('screen');
  const navigation = useNavigation();
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        {navigations.map((item, index) => (
          <BottomNavigatorItem key={index} {...item} />
        ))}
        <View style={[styles.plusContainer, {width}]}>
          <CircleButton
            onPress={() => navigation.navigate('New Post')}
            colors={['#945DD3', '#945DD3']}
            size={60}
            border
            borderWidth={3}
            color={colors.white}
            title=""
            icon={PlusIcon}
          />
        </View>
      </View>
    </View>
  );
};

export default BottomNavigator;

// Bottom navigation Item
const BottomNavigatorItem = ({icon: Icon, route}) => {
  const navigation = useNavigation();
  const navigateTo = route => navigation.navigate(route);

  return (
    <TouchableOpacity
      style={globalStyles.alignCenter}
      onPress={() => navigateTo(route)}>
      <Icon />
      <Text style={styles.routeText}>{route}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 40,
    backgroundColor: '#CAAFEE',
  },
  plusContainer: {
    position: 'absolute',
    alignItems: 'center',
    top: -30,
  },
  outerContainer: {position: 'absolute', bottom: 0, right: 0, left: 0},
  routeText: {color: '#fff', fontSize: 13, marginTop: 4},
});
