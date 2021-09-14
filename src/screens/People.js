import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Container from '../components/Container';
import globalStyles from '../styles/globalStyles';
import themeInputStyles from '../styles/themeInputStyles';
import colors from '../constants/colors';
import Input from '../components/Input';
import SearchIcon from '../assets/icons/search_icon.svg';
import List from '../components/List';
import UserProfileBasicInfo from '../components/UserInfo';
import ChatIcon from '../assets/icons/chat_2.svg';

const People = ({navigation}) => (
  <Container
    style={[globalStyles.p0, globalStyles.px16]}
    showHeader
    headerProps={{titleType: 'title2', title: 'People'}}>
    <View style={[globalStyles.row, globalStyles.px16]}>
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
      avatarSize={40}
      icon={ChatIcon}
      data={[
        {
          userData: {
            name: 'Martha Craig',
          },
          imageData: <ImageProps type="active" />,
        },
        {
          userData: {
            name: 'Kieron Dotson',
          },
          imageData: <ImageProps type="active" />,
        },
        {
          userData: {
            name: 'Jamie Franco',
          },
          imageData: <ImageProps type="lastSeen" text={'10 min.'} />,
        },
        {
          userData: {
            name: 'Zack John',
          },
          imageData: <ImageProps type="active" />,
        },
        {
          userData: {
            name: 'Tabitha Potter',
          },
          imageData: <ImageProps type="lastSeen" text={'8 min.'} />,
        },
        {
          userData: {
            name: 'Kieron Dotson',
          },
          imageData: <ImageProps type="active" />,
        },
      ]}
      action={() => navigation.navigate('Chat')}
      profileType="people"
      profileNameStyle={globalStyles.font16}
      listItem={UserProfileBasicInfo}
    />
  </Container>
);

const ImageProps = ({type, text}) => (
  <View style={[styles[type]]}>
    <Text style={{fontSize: 8}}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  lastSeen: {
    alignSelf: 'center',
    marginTop: 25,
    backgroundColor: '#C7F0BB',
    paddingVertical: 1,
    paddingHorizontal: 4,
    borderRadius: 4,
    position: 'absolute',
  },
  active: {
    alignSelf: 'flex-end',
    marginTop: 25,
    position: 'absolute',
    width: 15,
    height: 15,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: colors.white,
    backgroundColor: '#46C077',
    padding: 2,
  },
});
export default People;
