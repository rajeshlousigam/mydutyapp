import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import ArrowRight from '../assets/icons/arrow_right_2.svg';
import CircleButton from '../components/Button/CircleButton';
import colors from '../constants/colors';
import themeButtonStyles from '../styles/themeButtonStyles';
import globalStyles from '../styles/globalStyles';
import Container from '../components/Container';
import {useNavigation} from '@react-navigation/core';
import useScreenDimensions from '../components/Hooks/useScreenDimensions';
import axios from 'axios';
import config from '../Config/Config';
import Toast from 'react-native-toast-message';

const SelectProfile = ({route: {params}}) => {
  const navigation = useNavigation();
  const {width, height} = useScreenDimensions('screen');
  console.log(params);
  const selectProfile = async value => {
    try {
      console.log(value);
      let res1 = await axios.put(
        config.url + 'user/addProfileType/' + params.id,
        {
          profileType: value,
        },
      );
      console.log(res1.data);
      if (res1.data.status == 1) {
        let res2 = await axios.post(config.url + 'user/otp', {
          email: params.email ? params.email : '',
          phone: params.phone ? params.phone : '',
        });
      }
    } catch (error) {
      console.log(error);
      if (error.response.data.message === 'OTP Generated Successfully') {
        navigation.navigate('Otp', {
          user: params,
          otp: error.response.data.otp,
        });
        Toast.show({
          type: 'success',
          text1: error.response.data.message,
        });
        return;
      }
      Toast.show({
        type: 'error',
        text1: error.response.data.message,
      });
    }
  };
  return (
    <Container showHeader>
      <View
        style={[
          globalStyles.alignCenter,
          globalStyles.container,
          globalStyles.py20,
        ]}>
        <Text style={[globalStyles.appTitle, {color: colors.textprimary}]}>
          My Duty App
        </Text>
        <Text
          style={[
            globalStyles.title,
            globalStyles.mt40,
            globalStyles.textCenter,
          ]}>
          What Are Looking For?
        </Text>
        <Text
          style={[
            globalStyles.label,
            {color: colors.textprimary, textAlign: 'center'},
            globalStyles.mt16,
          ]}>
          You can choose one of the option to continue the application
        </Text>
      </View>
      <Image
        style={[styles.background, {width, height: height / 1.65}]}
        source={require('../assets/background/background_3.png')}
      />

      <View style={styles.profileSelectContainer}>
        <ProfileSelector
          selectProfile={() => selectProfile('needy')}
          title="Help for Needy"
        />
        <ProfileSelector
          selectProfile={() => selectProfile('helper')}
          title="Help for Humanity"
        />
        <ProfileSelector
          selectProfile={() => selectProfile('awareness')}
          title="Spread Awareness"
        />
      </View>
    </Container>
  );
};

const ProfileSelector = ({title, selectProfile}) => (
  <TouchableOpacity style={{width: 240}} onPress={selectProfile}>
    <View
      style={[
        themeButtonStyles.themeButton,
        globalStyles.row,
        globalStyles.alignCenter,

        styles.labelContainer,
      ]}>
      <Text style={[themeButtonStyles.themeText, globalStyles.ml8]}>
        {title}
      </Text>
      <View style={{position: 'absolute', right: 0}}>
        <CircleButton
          onPress={selectProfile}
          icon={ArrowRight}
          color={colors.white}
          size={65}
          onlyIcon
          title=""
          colors={['#BE8CF8', '#945DD3']}
          border
        />
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  labelContainer: {backgroundColor: '#fff', marginTop: 28},
  profileSelectContainer: {alignItems: 'center', flex: 1},
  background: {
    position: 'absolute',
    bottom: 0,

    marginBottom: -80,
  },
});
export default SelectProfile;
