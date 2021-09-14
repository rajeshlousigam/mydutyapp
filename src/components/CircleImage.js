/* This module is developed by Dhruv Sachdeva 
`  Github - https://github.com/entebyt/
*/

import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CircleImage = ({
  size = 70,
  uri = '',
  border = false,
  borderWidth,
  color = 'red',
  local = false,
  custom = false,
  style = {},
  fallback = false,
  background = '',
  icon: Icon = null,
  iconHeight,
  avatar,
  avatarTitle,
  avatarTextStyle,
  onPress,
}) => {
  const styles = StyleSheet.create({
    container: {
      height: size,
      justifyContent: 'center',
      borderWidth: (border && (borderWidth ? borderWidth : 1)) || 0,
      borderColor: color,
      alignItems: 'center',
      width: size, //The Width must be the same as the height
      borderRadius: size / 2, //Then Make the Border Radius twice the size of width or Height
      backgroundColor: background ? background : '#fafafa',
    },
  });
  if (!uri && fallback)
    return (
      <View style={[custom ? style : styles.container, {...style}]}>
        <TouchableOpacity onPress={onPress}>
          {avatar ? (
            <Text style={avatarTextStyle}>{avatarTitle}</Text>
          ) : (
            Icon && <Icon height={iconHeight || '24'} />
          )}
        </TouchableOpacity>
      </View>
    );
  return (
    <Image
      resizeMode="contain"
      style={[custom ? style : styles.container, {...style}]}
      source={uri ? {uri} : {uri: ''}}
    />
  );
};

export default CircleImage;
