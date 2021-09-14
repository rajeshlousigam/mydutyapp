import * as React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import globalStyles from '../styles/globalStyles';
import MoreIcon from '../assets/icons/more.svg';
import {Option} from './Profile/ProfileCard';
import List from './List';
import useScreenDimensions from './Hooks/useScreenDimensions';
import colors from '../constants/colors';

const UserProfileBasicInfo = ({
  navigation,
  userData = {},
  avatarSize = 32,
  profileNameStyle,
  profileAboutStyle,
  showStatus,
  status,
  otherData = {},
  profileType,
  action,
  lastMessage,
  options,
  icon: Icon,
  imageData,
  onClick = () => {},
}) => {
  const [user, setUser] = React.useState(userData);
  const [showOptions, setShowOptions] = React.useState(false);
  const {width} = useScreenDimensions('screen');
  React.useEffect(() => {
    const fetchData = async () => {};
    fetchData();
  }, []);
  const {
    profileImage = '',
    profileId = '',
    name = '',
    about = '',
    id = '',
    click = null,
  } = user;
  const styles = StyleSheet.create({
    profileContainer: {
      flexDirection: 'row',
      marginVertical: 14,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    profileIcon: {
      height: avatarSize,
      width: avatarSize,
      borderRadius: avatarSize / 2,
      backgroundColor: '#ebebeb',
      overflow: 'hidden',
    },
    profileLeftContainer: {marginLeft: 12},
    profileName: profileNameStyle || {fontSize: 17},
    profileTitle: profileAboutStyle || {
      fontSize: 12,
      marginTop: 2,
    },
    status: {
      height: 9,
      width: 9,
      borderRadius: 5,
      backgroundColor: status === 'Active' ? '#028D07' : '#F5190B',
    },
    optionsContainer: {
      position: 'absolute',
      borderRadius: 10,
      top: 36,
      padding: 15,
      right: 20,
      backgroundColor: '#FAFAFA',
    },
  });
  return (
    <View style={styles.profileContainer}>
      <TouchableWithoutFeedback
        onPress={
          () => onClick()
          // click
          //   ? click(id)
          //   : navigation.navigate(`Profile`, {
          //       profileId: profileId ? profileId : id,
          //       myProfile: false,
          //       ...otherData,
          //     })
        }>
        <View
          style={[
            globalStyles.row,

            profileType === 'message'
              ? {alignItems: 'center', width: width - 60}
              : {width: 300},
          ]}>
          <View>
            <Image
              style={styles.profileIcon}
              source={
                profileImage
                  ? {
                      uri: profileImage,
                    }
                  : require('../assets/images/avatar.png')
              }
            />
            {imageData}
          </View>
          <View style={styles.profileLeftContainer}>
            <View
              style={[
                globalStyles.row,

                profileType === 'message' && globalStyles.spaceBetween,
                profileType === 'message' && globalStyles.alignCenter,
              ]}>
              <Text style={styles.profileName}>{name}</Text>
              {showStatus && (
                <Text style={globalStyles.ml8}>
                  {status}
                  {'  '}
                  <View style={styles.status} />
                </Text>
              )}
              <Text style={[globalStyles.font15, {color: colors.textprimary}]}>
                {lastMessage}
              </Text>
            </View>
            <Text style={styles.profileTitle}>{about}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {profileType !== 'message' && (
        <TouchableOpacity
          onPress={
            action ? () => action(userData) : () => setShowOptions(!showOptions)
          }
          style={[globalStyles.px16, globalStyles.py10]}>
          {Icon ? <Icon /> : <MoreIcon />}
        </TouchableOpacity>
      )}
      {showOptions && (
        <View style={[globalStyles.shadow, styles.optionsContainer]}>
          <List listItem={Option} data={options} />
        </View>
      )}
    </View>
  );
};

export default UserProfileBasicInfo;
