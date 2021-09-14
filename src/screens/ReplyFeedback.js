import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import Container from '../components/Container';
import ProfileCard from '../components/Profile/ProfileCard';
import globalStyles from '../styles/globalStyles';
import useScreenDimensions from '../components/Hooks/useScreenDimensions';
import StarIconGolden from '../assets/icons/star.svg';
import StarIconGray from '../assets/icons/star_4.svg';
import List from '../components/List';
import colors from '../constants/colors';
import Button from '../components/Button/ThemeButton';
const ReplyFeedback = ({navigation, route}) => {
  const {height} = useScreenDimensions('screen');
  const type = route.params?.type;
  const [feedback, setFeedback] = React.useState(
    type === 'edit'
      ? 'Feedback Received from this person will be written here. As this person has changed his profile from Public to Private so you cannot see his name'
      : '',
  );
  return (
    <Container
      scroll
      contentContainerStyle={[
        globalStyles.p0,
        globalStyles.px30,
        {minHeight: height},
      ]}
      showHeader
      headerProps={{titleType: 'title2', title: 'Feedbacks'}}>
      <ProfileCard
        // options={options[selected]}
        rating="4.5"
        background={'#F0FFFF'}
        selectedProfile={'Help Seeker'}
        label="Help Seeker"
        about=""
      />

      <View
        style={[
          globalStyles.row,
          globalStyles.py40,
          globalStyles.alignCenter,
          globalStyles.justifyCenter,
          globalStyles.px60,
          globalStyles.shadow,
          globalStyles.mt30,
          {borderRadius: 10, backgroundColor: colors.white},
        ]}>
        <List listItem={Rating} data={[{}, {}, {}, {}, {active: false}]} />
      </View>
      <Text style={[globalStyles.mt40, styles.title]}>Feedback Given</Text>
      <View
        style={[
          globalStyles.py20,

          globalStyles.px20,
          globalStyles.shadow,
          globalStyles.mt30,
          {borderRadius: 10, backgroundColor: colors.white},
        ]}>
        <TextInput
          value={feedback}
          multiline
          numberOfLines={5}
          textAlign="center"
          style={{color: 'rgba(34, 33, 91, 0.6)', lineHeight: 18}}
        />
      </View>

      <View style={[globalStyles.mt80, globalStyles.px20, globalStyles.pb20]}>
        <Button
          onPress={() => navigation.goBack()}
          title={type === 'edit' ? 'Update' : 'Done'}
        />
      </View>
    </Container>
  );
};
const Rating = ({active}) => (
  <View style={[globalStyles.mx8]}>
    {<StarIconGolden width={30} height={30} />}
    <View style={[styles.dropShadow, globalStyles.shadow]}></View>
  </View>
);
const styles = StyleSheet.create({
  dropShadow: {
    backgroundColor: '#eee',

    opacity: 0.35,
    height: 30,
    borderRadius: 10,
    marginTop: -20,
  },
  title: {fontSize: 20, color: colors.textprimary, fontWeight: 'bold'},
});
export default ReplyFeedback;
