import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';

const Button = ({
  title = 'Submit',
  customButtonContainer = styles.buttonContainer,
  customTitleStyle = styles.titleStyle,
  color = '#2d248a',
  loading = false,
  showIcon = false,
  showType = 'before',
  icon: Icon,
  ...rest
}) => (
  <TouchableOpacity
    {...rest}
    activeOpacity={0.7}
    style={[customButtonContainer, {backgroundColor: color, ...rest.style}]}>
    {loading ? (
      <ActivityIndicator color={color} />
    ) : (
      <View style={styles.textContainerStyle}>
        {showIcon && showType === 'before' && (
          <View style>{Icon ? <Icon /> : <ArrowRight />}</View>
        )}
        <Text style={customTitleStyle}>{title}</Text>
        {showIcon && showType === 'after' && (
          <View style>{Icon ? <Icon /> : <ArrowRight />}</View>
        )}
      </View>
    )}
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  titleStyle: {textAlign: 'center', color: '#fff'},
  textContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Button;
