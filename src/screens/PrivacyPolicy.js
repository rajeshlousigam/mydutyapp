import React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import Container from '../components/Container';
import globalStyles from '../styles/globalStyles';
import colors from '../constants/colors';
import useScreenDimensions from '../components/Hooks/useScreenDimensions';

const PrivacyPolicy = ({params}) => {
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
          <Text style={styles.pageTitle}>Privacy Policy</Text>
        </ImageBackground>
      </View>

      <View style={globalStyles.px24}>
        <Text style={styles.title}>Privacy Policy</Text>
        <Text style={globalStyles.mt40}>
          on behalf of itself and its affiliates/group companies under the brand
          "Practo" (“medico”), is the author and publisher of the internet
          resource www.medico.com and the mobile application ‘medico’ (together,
          “Website”). medico owns and operates the services provided through the
          Website.
        </Text>
        <Text style={globalStyles.mt12}>
          1.NATURE AND APPLICABILITY OF TERMS Please carefully go through these
          terms and conditions (“Terms”) and the privacy policy available at
          https://www.medico.com/company/privacy (“Privacy Policy”) before you
          decide to access the Website or avail the services made available on
          the Website by medico. These Terms and the Privacy Policy together
          constitute a legal agreement (“Agreement”) between you and medico in
          connection with your visit to the Website and your use of the Services
          (as defined below).
        </Text>
        <Text style={globalStyles.mt12}>
          {' '}
          The Agreement applies to you whether you are -
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
export default PrivacyPolicy;
