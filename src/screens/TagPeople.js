import React from 'react';
import {Text, View, StyleSheet, DeviceEventEmitter} from 'react-native';
import Container from '../components/Container';
import globalStyles from '../styles/globalStyles';
import themeInputStyles from '../styles/themeInputStyles';
import colors from '../constants/colors';
import Input from '../components/Input';
import SearchIcon from '../assets/icons/search_icon.svg';
import List from '../components/List';
import UserProfileBasicInfo from '../components/UserInfo';

import AddIcon from '../assets/icons/add_icon.svg';
import Button from '../components/Button/ThemeButton';
import CircleImage from '../components/CircleImage';

const TagPeople = ({params, navigation}) => {
  const [list, setlist] = React.useState([]);
  React.useEffect(() => {
    return () => {
      DeviceEventEmitter.removeAllListeners('event.mapMarkerSelected');
    };
  }, []);
  return (
    <Container
      style={[globalStyles.p0, globalStyles.px16]}
      showHeader
      headerProps={{titleType: 'title2', title: 'Tag People'}}>
      <View style={[globalStyles.row, globalStyles.px16]}>
        <Input
          icon={SearchIcon}
          customInputStyle={themeInputStyles.searchInputStyle}
          customContainerStyle={[globalStyles.flex1]}
          style={[globalStyles.flex1]}
          placeholder="Search for people"
          placeholderTextColor={colors.tertiary}
        />
      </View>
      <List
        avatarSize={40}
        icon={AddAction}
        data={[
          {
            showIcon: true,
            userData: {
              name: 'Martha Craig',
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
        ]}
        action={user => {
          // setlist(value => [...value, user.name]);
          DeviceEventEmitter.emit('event.setTag', user.name);
          navigation.goBack();
        }}
        profileType="people"
        profileNameStyle={globalStyles.font16}
        listItem={UserProfileBasicInfo}
      />
      <View
        style={[
          globalStyles.px40,
          {position: 'absolute', right: 0, left: 0, bottom: 20},
        ]}>
        <Button onPress={() => navigation.goBack()} title="Add" />
      </View>
    </Container>
  );
};

const ImageProps = ({type, text}) => (
  <View style={[styles[type]]}>
    <Text style={{fontSize: 8}}>{text}</Text>
  </View>
);
const AddAction = ({showIcon}) => (
  <CircleImage
    background={'#EBEBEB'}
    iconHeight={10}
    icon={showIcon ? AddIcon : null}
    size={30}
    fallback
  />
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
export default TagPeople;
