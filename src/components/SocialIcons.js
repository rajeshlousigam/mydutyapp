import React from 'react';
import {Text, View} from 'react-native';
import Google from '../assets/icons/google.svg';
import Twitter from '../assets/icons/twitter.svg';
import Facebook from '../assets/icons/facebook.svg';
import globalStyles from '../styles/globalStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
const SocialIcons = ({
  params,
  onFbLogin = () => {},
  onGoogleLogin = () => {},
}) => (
  <View style={[globalStyles.row, globalStyles.spaceBetween, {width: 140}]}>
    <TouchableOpacity onPress={onGoogleLogin}>
      <Google />
    </TouchableOpacity>
    <TouchableOpacity onPress={onFbLogin}>
      <Facebook />
    </TouchableOpacity>
    <TouchableOpacity>
      <Twitter />
    </TouchableOpacity>
  </View>
);

export default SocialIcons;
