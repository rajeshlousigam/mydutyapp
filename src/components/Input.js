/* This module is developed by Dhruv Sachdeva 
`  Github - https://github.com/entebyt/
*/

import * as React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';
import colors from '../constants/colors';
const Input = ({
  customInputStyle = '',
  customlabelStyle = '',
  customLabel,
  customErrorStyle = '',
  customContainerStyle = '',
  focusColors = '',
  required = false,
  showLabel = false,
  label = '',
  errorMessage = 'Please enter something.',
  icon: Icon,
  ...rest
}) => {
  const defaultFocusColors = focusColors
    ? focusColors
    : {onBlur: '#ebebeb', onFocus: colors.secondary, errorColor: 'red'};
  const [showErrorMessage, setShowError] = React.useState(false);
  const [borderBottomColor, setBorderBottomColor] = React.useState(
    defaultFocusColors.onBlur,
  );

  const onFocus = () => {
    setBorderBottomColor(defaultFocusColors.onFocus);
  };
  const onBlur = () => {
    setBorderBottomColor(defaultFocusColors.onBlur);
    if (required && !value) setShowError(true);
  };

  const defaultStyles = StyleSheet.create({
    inputStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor,
    },
    containerStyle: {},
    labelStyle: {
      marginBottom: 8,
      fontWeight: 'bold',
    },
    errorStyle: {
      marginTop: 4,
      color: 'red',
    },
  });
  return (
    <View
      style={
        customContainerStyle
          ? customContainerStyle
          : defaultStyles.containerStyle
      }>
      {showLabel ? (
        customLabel ? (
          label
        ) : (
          <Text
            style={
              customlabelStyle ? customlabelStyle : defaultStyles.labelStyle
            }>
            {label}
          </Text>
        )
      ) : null}
      <View
        style={customInputStyle ? customInputStyle : defaultStyles.inputStyle}>
        {Icon && <Icon height="24" />}
        <TextInput
          onBlur={onBlur}
          onFocus={onFocus}
          {...rest}
          style={[{color: colors.textprimary}, rest.style]}
        />
      </View>
      {showErrorMessage && required && (
        <Text style={defaultStyles.errorStyle}>{errorMessage}</Text>
      )}
    </View>
  );
};

export default Input;
