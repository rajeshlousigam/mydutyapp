import React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import Container from '../components/Container';
import globalStyles from '../styles/globalStyles';
import colors from '../constants/colors';
import useScreenDimensions from '../components/Hooks/useScreenDimensions';

const About = ({params}) => {
  const {width, height} = useScreenDimensions('screen');
  return (
    <Container
      showHeader
      contentContainerStyle={[
        globalStyles.p0,
        {minHeight: height, paddingBottom: 16},
      ]}
      headerProps={{headerStyle: styles.headerStyle}}
      scroll
      style={{marginTop: -80}}>
      <View style={styles.backgroundContainer}>
        <ImageBackground
          style={[
            {width},
            globalStyles.justifyCenter,
            globalStyles.alignCenter,
            styles.background,
          ]}
          source={require('../assets/background/background.png')}>
          <Text style={styles.pageTitle}>About My Duty App</Text>
        </ImageBackground>
      </View>

      <View style={globalStyles.px24}>
        <Text style={styles.title}>Who We Are?</Text>
        <Text style={globalStyles.mt40}>
          Introducing medico Profile: Brand new free app to help doctors list
          and manage their Practo profiles. At medico, we want people to make
          better healthcare decisions. This starts with helping them find the
          best doctors. Today, 2 million consumers perform 4 million searches
          every month on Practo and this is growing fast.
        </Text>
        <Text style={[styles.title, globalStyles.mt40]}>Our Mission</Text>
        <Text style={globalStyles.mt40}>
          Introducing medico Profile: Brand new free app to help doctors list
          and manage their Practo profiles. At medico, we want people to make
          better healthcare decisions. This starts with helping them find the
          best doctors.
        </Text>
        <Text style={[styles.title, globalStyles.mt40]}>Our Vission</Text>
        <Text style={globalStyles.mt40}>
          Introducing medico Profile: Brand new free app to help doctors list
          and manage their Practo profiles. At medico, we want people to make
          better healthcare decisions. This starts with helping them find the
          best doctors.
        </Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  pageTitle: {fontWeight: 'bold', fontSize: 30, color: colors.white},
  title: {fontWeight: 'bold', fontSize: 22, color: colors.textprimary},
  headerStyle: {backgroundColor: null},
  background: {position: 'absolute', top: -40, height: 310},
  backgroundContainer: {
    height: 300,
  },
});
export default About;
