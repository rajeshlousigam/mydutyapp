import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import globalStyles from '../styles/globalStyles';
import StarIcon from '../assets/icons/star.svg';
import WorkIcon from '../assets/icons/work.svg';
import LocationIcon from '../assets/icons/location_2.svg';
import MessageIcon from '../assets/icons/chat.svg';
import colors from '../constants/colors';
import capitalize from '../utils/capitalize';

const ProfileCard = ({
  image = 'http://cdn.onlinewebfonts.com/svg/img_574534.png',
  profileType,
  location = 'Bangalore',
  name = '',
  rating = Math.floor(Math.random() * 5),
  memberType = '',
}) => (
  <View style={[styles.container, globalStyles.shadow]}>
    <View style={styles.labelContainer}>
      <Text
        style={[
          globalStyles.font18,
          globalStyles.textCenter,
          {color: colors.white},
        ]}>
        {profileType.toUpperCase()}
      </Text>
    </View>
    <View style={[globalStyles.row, globalStyles.pt14, globalStyles.px24]}>
      <View style={{width: 93}}>
        <Image
          style={[styles.profileImage, globalStyles.mx8]}
          source={{uri: image}}
        />
        <View
          style={[
            globalStyles.row,
            globalStyles.justifyCenter,
            globalStyles.alignCenter,
            globalStyles.py10,
            {backgroundColor: '#46C09B', borderRadius: 5},
            globalStyles.shadow,
          ]}>
          <StarIcon />
          <Text
            style={[
              globalStyles.ml12,
              globalStyles.font15,
              {color: colors.white, lineHeight: 18},
            ]}>
            {rating}
          </Text>
        </View>
      </View>
      <View style={[globalStyles.ml32]}>
        <Text style={globalStyles.text}>{name}</Text>
        <View style={styles.labelPill}>
          <Text style={styles.labelText}>{capitalize(memberType)}</Text>
        </View>
        <Info icon={WorkIcon} title={profileType} />
        <Info icon={LocationIcon} title={location} />
        <Info icon={MessageIcon} title={'Message'} />
      </View>
    </View>
  </View>
);

const Info = ({icon: Icon, title}) => (
  <View style={[globalStyles.row, globalStyles.mt12, globalStyles.alignCenter]}>
    {Icon && (
      <View style={styles.iconContainer}>
        <Icon />
      </View>
    )}
    <Text style={styles.infoText}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  iconContainer: {height: 24, width: 24, alignItems: 'center'},
  container: {
    borderRadius: 20,
    marginVertical: 16,
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginBottom: 40,
    paddingBottom: 8,
  },
  labelContainer: {
    borderRadius: 10,
    paddingVertical: 12,
    backgroundColor: '#A76BEB',
    alignItems: 'center',
  },
  labelPill: {
    width: 85,
    height: 20,
    backgroundColor: '#FF317B',
    marginTop: 14,
    borderRadius: 5,
    justifyContent: 'center',
  },
  labelText: {fontSize: 10, textAlign: 'center', color: '#fff'},
  infoText: {fontSize: 13, marginLeft: 8, color: colors.tertiary},
  profileImage: {
    height: 104,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
});
export default ProfileCard;
