import React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import Button from '../components/Button';
import themeButtonStyles from '../styles/themeButtonStyles';
import colors from '../constants/colors';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../styles/globalStyles';
const Connect = ({}) => {
  const navigation = useNavigation();
  const navigateTo = (route: string) => navigation.navigate(route);
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/images/connect.png')}>
      <View style={{width: '50%'}}>
        <View style={[styles.iconContainer, globalStyles.shadow]}></View>
        <Text style={styles.title}>Application Name</Text>
      </View>
      <View>
        <Button
          customButtonContainer={[
            themeButtonStyles.themeButton,
            styles.loginButton,
          ]}
          customTitleStyle={[
            themeButtonStyles.themeText,
            {color: colors.white},
          ]}
          color={'rgba(227, 227, 227, 0.4)'}
          title="Login"
          onPress={() => navigateTo('Login')}
        />
        <Button
          color={colors.white}
          customButtonContainer={[
            themeButtonStyles.themeButton,
            {marginTop: 16},
          ]}
          customTitleStyle={[
            themeButtonStyles.themeText,
            {color: colors.primary},
          ]}
          title="Sign Up"
          onPress={() => navigateTo('Signup')}
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 80,
    paddingTop: 40,
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: 56,
    width: 56,
    borderRadius: 8,
    marginBottom: 40,
    backgroundColor: colors.white,
  },
  loginButton: {borderWidth: 2, borderColor: colors.white},
  title: {fontSize: 28, color: colors.white},
});

export default Connect;
