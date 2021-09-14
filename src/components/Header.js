import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import colors from '../constants/colors';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../styles/globalStyles';
import ChevronIcon from '../assets/icons/chevron_left.svg';
import CircleImage from './CircleImage';
const Header = ({
  title,
  headerStyle,
  titleType = 'title',
  headerBackFunction,
  children,
}) => {
  const navigation = useNavigation();
  return (
    <View style={[styles.headerContainer, headerStyle]}>
      <View
        style={[
          titleType === 'title2' ? globalStyles.mr18 : globalStyles.flex1,
        ]}>
        <CircleImage
          onPress={
            headerBackFunction ? headerBackFunction : () => navigation.goBack()
          }
          fallback
          style={globalStyles.shadow}
          icon={ChevronIcon}
          background={colors.white}
          size={40}
        />
      </View>

      <View>
        <Text style={globalStyles[titleType]}>{title}</Text>
      </View>

      <View
        style={[globalStyles.row, globalStyles.justifyEnd, globalStyles.flex1]}>
        {children}
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    zIndex: 2,
    height: 80,
  },
});
