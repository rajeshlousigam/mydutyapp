import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import CircleImage from '../CircleImage';
import ProfileAvatar from '../../assets/icons/profile_avatar_2.svg';
import WorkIcon from '../../assets/icons/work.svg';
import ChatIcon from '../../assets/icons/chat_2.svg';
import ChatIconWhite from '../../assets/icons/chat_white_2.svg';
import LocationIcon from '../../assets/icons/location_2.svg';
import StarIcon from '../../assets/icons/star.svg';
import MoreVerticalIcon from '../../assets/icons/vertical_more.svg';
import ThemeSwitch from '../Switch';
import colors from '../../constants/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import List from '../List';
import {useNavigation} from '@react-navigation/core';
const ProfileCard = ({
  label,
  type,
  selectedProfile,
  name = ' Neelesh Chaudhary',
  about = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare pretium placerat ut platea.`,
  background,
  rating,
  options,
}) => {
  const [showOptions, setShowOptions] = React.useState(false);
  const navigation = useNavigation();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: background
            ? background
            : selectedProfile === 'Helper'
            ? colors.tertiary
            : colors.white,
        },
      ]}>
      <View
        style={[
          globalStyles.row,
          globalStyles.flex1,
          globalStyles.spaceBetween,
        ]}>
        <View
          style={[
            globalStyles.row,
            !type && globalStyles.flex1,
            type === 'FEEDBACK' || (type === 'OTHERPRO' && globalStyles.flex1),
          ]}>
          {type === 'MYPRO' && (
            <>
              <Text
                style={[
                  globalStyles.font16,
                  globalStyles.mr24,
                  {
                    color:
                      selectedProfile === 'Helper'
                        ? colors.white
                        : colors.textprimary,
                  },
                ]}>
                Public
              </Text>
              <ThemeSwitch />
            </>
          )}
          {type === 'FEEDBACK' && (
            <View style={globalStyles.row}>
              <StarIcon height={18} />
              <Text style={[globalStyles.ml8, globalStyles.font13]}>
                {rating}
              </Text>
            </View>
          )}
          {type === 'OTHERPRO' && (
            <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
              {selectedProfile === 'Helper' ? (
                <ChatIconWhite height={24} />
              ) : (
                <ChatIcon height={24} />
              )}
            </TouchableOpacity>
          )}
        </View>

        <View style={[globalStyles.flex1, globalStyles.alignCenter]}>
          <CircleImage
            iconHeight={52}
            size={52}
            icon={ProfileAvatar}
            fallback
          />
        </View>

        <View style={[globalStyles.row]}>
          <View style={styles.labelPill}>
            <Text style={styles.labelText}>
              {selectedProfile === 'Helper' ? 'Helper' : label}
            </Text>
          </View>
          {type === 'FEEDBACK' && (
            <TouchableOpacity
              onPress={() => setShowOptions(!showOptions)}
              style={[globalStyles.pl8, globalStyles.pt4]}>
              <MoreVerticalIcon />
            </TouchableOpacity>
          )}
          {showOptions && (
            <View style={[globalStyles.shadow, styles.optionsContainer]}>
              <List listItem={Option} data={options} />
            </View>
          )}
        </View>
      </View>
      <View style={globalStyles.alignCenter}>
        <Text
          style={[
            globalStyles.bold,
            globalStyles.font18,
            globalStyles.mt12,
            globalStyles.textCenter,
            globalStyles.ml20,
            {
              color:
                selectedProfile === 'Helper' ? colors.white : colors.tertiary,
            },
          ]}>
          {name}
        </Text>
        <View
          style={[globalStyles.row, globalStyles.mt12, globalStyles.alignEnd]}>
          <View
            style={[
              globalStyles.row,
              globalStyles.alignCenter,
              globalStyles.ml20,
            ]}>
            <View style={styles.icon}>
              <WorkIcon />
            </View>
            <Text
              style={[
                globalStyles.font13,
                globalStyles.ml8,
                {
                  color:
                    selectedProfile === 'Helper'
                      ? colors.white
                      : colors.tertiary,
                },
              ]}>
              Doctor
            </Text>
          </View>
          <View
            style={[
              globalStyles.row,
              globalStyles.ml20,
              globalStyles.alignCenter,
            ]}>
            <View style={styles.icon}>
              <LocationIcon />
            </View>
            <Text
              style={[
                globalStyles.font13,
                globalStyles.ml8,
                {
                  color:
                    selectedProfile === 'Helper'
                      ? colors.white
                      : colors.tertiary,
                },
              ]}>
              Kolkata
            </Text>
          </View>
        </View>
        {about ? (
          <View style={{width: 275}}>
            <Text
              style={[
                globalStyles.mt24,
                globalStyles.textCenter,
                globalStyles.ml20,
                globalStyles.font13,
                {
                  color:
                    selectedProfile === 'Helper'
                      ? 'rgba(255, 255, 255, 0.6)'
                      : 'rgba(34, 33, 91, 0.6)',
                },
              ]}>
              {about}
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

export const Option = ({title, index, onPress}) => (
  <TouchableOpacity onPress={onPress} style={[index !== 0 && globalStyles.mt8]}>
    <Text style={styles.optionTitle}>{title}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 20,
  },
  optionTitle: {fontSize: 9, color: colors.tertiary, textAlign: 'center'},
  optionsContainer: {
    position: 'absolute',
    borderRadius: 10,
    top: 30,
    padding: 15,
    right: -16,
    backgroundColor: colors.white,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: 24,
    height: 24,
  },
  labelPill: {
    width: 85,
    height: 20,
    backgroundColor: '#FF317B',
    borderRadius: 5,
    justifyContent: 'center',
  },
  labelText: {fontSize: 10, textAlign: 'center', color: '#fff'},
});

export default ProfileCard;
