import React from 'react';

import Button from './ThemeButton';
import {StyleSheet} from 'react-native';

const CircleButton = ({size, color, border, borderWidth, ...rest}) => {
  const styles = StyleSheet.create({
    container: {
      height: size,
      justifyContent: 'center',
      borderWidth: (border && (borderWidth ? borderWidth : 1)) || 0,
      borderColor: color,
      alignItems: 'center',
      width: size, //The Width must be the same as the height
      borderRadius: size, //Then Make the Border Radius twice the size of width or Height
    },
  });
  return <Button customButtonContainer={styles.container} {...rest} />;
};

export default CircleButton;
