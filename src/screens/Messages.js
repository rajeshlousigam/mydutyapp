import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Container from '../components/Container';
import List from '../components/List';
import UserProfileBasicInfo from '../components/UserInfo';
import globalStyles from '../styles/globalStyles';
import themeInputStyles from '../styles/themeInputStyles';
import colors from '../constants/colors';
import Input from '../components/Input';
import SearchIcon from '../assets/icons/search_icon.svg';
import useScreenDimensions from '../components/Hooks/useScreenDimensions';
import CircleButton from '../components/Button/CircleButton';
import PlusIcon from '../assets/icons/add.svg';
const Messages = ({navigation}) => {
  const {height} = useScreenDimensions('screen');
  return (
    <Container
      style={[globalStyles.p0, globalStyles.px30]}
      showHeader
      headerProps={{titleType: 'title2', title: 'Message'}}>
      <View style={[globalStyles.row]}>
        <Input
          icon={SearchIcon}
          customInputStyle={themeInputStyles.searchInputStyle}
          customContainerStyle={[globalStyles.flex1]}
          style={[globalStyles.flex1]}
          placeholder="Search for people in your chat"
          placeholderTextColor={colors.tertiary}
        />
      </View>
      <List
        avatarSize={70}
        profileType={'message'}
        data={[
          {
            userData: {
              name: 'Kuldeep Singh',
              about: 'Lorem ipsum dolor sit amet, consectetur',
            },
            lastMessage: '11:14 AM',
          },
          {
            userData: {
              name: 'Mamta Sachdeva',
              about: 'Lorem ipsum dolor sit amet, consectetur',
            },
            lastMessage: '11:14 AM',
          },
        ]}
        profileAboutStyle={{width: '100%'}}
        profileNameStyle={{fontSize: 20, fontWeight: 'bold'}}
        listItem={UserProfileBasicInfo}
      />
      <View style={styles.plusContainer}>
        <CircleButton
          onPress={() => navigation.navigate('People')}
          style={globalStyles.shadow}
          colors={['#945DD3', '#945DD3']}
          size={70}
          title=""
          icon={PlusIcon}
        />
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  plusContainer: {
    position: 'absolute',

    bottom: 40,
    right: 30,
  },
});

export default Messages;
