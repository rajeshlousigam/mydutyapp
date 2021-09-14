import React from 'react';
import Container from '../components/Container';
import List from '../components/List';
import UserProfileBasicInfo from '../components/UserInfo';
import globalStyles from '../styles/globalStyles';
import useScreenDimensions from '../components/Hooks/useScreenDimensions';
import {View, Text} from 'react-native';
import Input from '../components/Input';
import themeInputStyles from '../styles/themeInputStyles';
import SearchIcon from '../assets/icons/search_icon.svg';
import colors from '../constants/colors';
import {Context} from '../utils/store';
const BlockedUser = ({params}) => {
  const {height} = useScreenDimensions('screen');
  const {dispatch} = React.useContext(Context);
  const unBlockUser = () => {
    dispatch({
      type: 'modalState',
      modalState: {
        title: 'Are you sure you want to unblock this user?',
        visible: true,
      },
    });
  };
  return (
    <Container
      scroll
      contentContainerStyle={globalStyles.p0}
      showHeader
      headerProps={{titleType: 'title2', title: 'Blocked User'}}>
      <View style={[globalStyles.px30]}>
        <Input
          icon={SearchIcon}
          customInputStyle={themeInputStyles.searchInputStyle}
          customContainerStyle={[globalStyles.flex1]}
          placeholder="Search for People"
          placeholderTextColor={colors.tertiary}
        />
      </View>
      <List
        type="flat"
        style={[globalStyles.ml16, globalStyles.mt16, {minHeight: height}]}
        avatarSize={40}
        listItem={UserProfileBasicInfo}
        options={[{title: 'Unblock', onPress: unBlockUser}]}
        data={[
          {userData: {name: 'Martha Craig'}},
          {userData: {name: 'Kieron Dotson'}},
          {userData: {name: 'Zack John'}},
          {userData: {name: 'Jamie Franco'}},
          {userData: {name: 'Kieron Dotson'}},
        ]}
      />
    </Container>
  );
};

export default BlockedUser;
