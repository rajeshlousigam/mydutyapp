import React from 'react';
import {Text, View, Image} from 'react-native';
import Container from '../components/Container';
import globalStyles from '../styles/globalStyles';
import colors from '../constants/colors';
import Button from '../components/Button/ThemeButton';
const Completed = ({navigation, route}) => {
  const displayText =
    route.params?.displayText ||
    ' Your Profile is succesfully created! Browse the app fulfil your medical needs';
  const link = route.params?.link;
  const navigate = () => {
    navigation.replace(link || 'Location');
  };
  const handler = route.params?.handler;
  return (
    <Container
      showHeader
      style={[globalStyles.container, {paddingHorizontal: 34}]}>
      <View style={[globalStyles.alignCenter]}>
        <Text style={globalStyles.title}>Successfully Done</Text>
        <Image
          resizeMode="contain"
          style={[globalStyles.mt60, globalStyles.mb20, {height: 180}]}
          source={require('../assets/icons/check.png')}
        />
        <View style={[globalStyles.px20, {width: '100%'}]}>
          <Text
            style={[
              globalStyles.label,
              {color: colors.textprimary, fontSize: 17, textAlign: 'center'},
            ]}>
            {displayText}
          </Text>

          <View
            style={[globalStyles.mt80, globalStyles.px20, globalStyles.pt40]}>
            <Button onPress={handler ? handler : navigate} title="Done" />
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Completed;
