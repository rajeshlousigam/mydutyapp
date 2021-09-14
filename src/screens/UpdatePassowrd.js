import React from 'react';
import {Text, View} from 'react-native';
import Container from '../components/Container';
import Input from '../components/Input';
import globalStyles from '../styles/globalStyles';
import themeInputStyles from '../styles/themeInputStyles';
import Button from '../components/Button/ThemeButton';

const UpdatePassword = ({navigation}) => {
  const updatePassword = () => {
    navigation.navigate('Complete', {
      displayText: 'Your Password is successfully changed.',
    });
  };
  return (
    <Container
      showHeader
      style={[globalStyles.justifyCenter]}
      headerProps={{title: 'Create Password'}}>
      <Input
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt40,
        ]}
        secureTextEntry
        customlabelStyle={themeInputStyles.label}
        label="New Password"
      />
      <Input
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt40,
        ]}
        secureTextEntry
        customlabelStyle={themeInputStyles.label}
        label="Confirm Password"
      />

      <View style={[globalStyles.mt80, globalStyles.px40]}>
        <Button onPress={updatePassword} title="Update" />
      </View>
    </Container>
  );
};

export default UpdatePassword;
