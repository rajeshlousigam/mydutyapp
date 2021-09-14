import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import LocationIcon from '../assets/icons/location.svg';
import globalStyles from '../styles/globalStyles';
import Button from '../components/Button/ThemeButton';
import Container from '../components/Container';
const Location = ({navigation}) => {
  return (
    <Container
      showHeader
      style={[globalStyles.p0, {marginTop: -80}]}
      headerProps={{headerStyle: styles.headerStyle}}>
      <View style={styles.backgroundContainer}>
        <Image
          style={styles.background}
          source={require('../assets/background/background_2.png')}
        />
      </View>
      <View style={[globalStyles.justifyCenter, globalStyles.flex1]}>
        <View style={globalStyles.alignCenter}>
          <Image
            source={require('../assets/icons/location.png')}
            height={'160'}
          />
          <Text style={[globalStyles.label, globalStyles.mt40]}>
            Kindly Enable your Location
          </Text>
        </View>
        <View style={[globalStyles.mt60, globalStyles.px60]}>
          <Button
            onPress={() => navigation.navigate('Home')}
            title="Enable Location"
          />
        </View>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  background: {position: 'absolute', top: 0, width: '100%', height: 360},
  backgroundContainer: {
    height: 210,
  },
  headerStyle: {backgroundColor: null},
});

export default Location;
