import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import themeButtonStyles from '../../styles/themeButtonStyles';
import ArrowRight from '../../assets/icons/arrow_right.svg';
import globalStyles from '../../styles/globalStyles';
const Button = ({
  title = 'Submit',
  customButtonContainer = themeButtonStyles.themeButton,
  customTitleStyle = styles.titleStyle,
  color = '#2d248a',
  loading = false,
  icon: Icon,
  showIcon = true,
  colors = ['#9E81BE', '#B6A4CE', '#B9ABD2'],
  ...rest
}) => (
  <TouchableOpacity activeOpacity={0.7} {...rest} style={{}}>
    <LinearGradient
      colors={colors}
      style={[
        customButtonContainer,
        {
          ...rest.style,
        },
      ]}>
      {loading ? (
        <ActivityIndicator color={color} />
      ) : (
        <View
          style={[
            globalStyles.row,
            globalStyles.spaceAround,
            globalStyles.alignCenter,
          ]}>
          <Text></Text>
          <Text style={customTitleStyle}>{title}</Text>

          {showIcon && <View>{Icon ? <Icon /> : <ArrowRight />}</View>}
        </View>
      )}
    </LinearGradient>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  titleStyle: {textAlign: 'center', color: '#fff', fontSize: 16},
});
export default Button;
