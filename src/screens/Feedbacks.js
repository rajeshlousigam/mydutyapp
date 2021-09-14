import React from 'react';
import {Text, View} from 'react-native';
import Container from '../components/Container';
import ProfileCard from '../components/Profile/ProfileCard';
import Tabs from '../components/Tabs';
import globalStyles from '../styles/globalStyles';
import themeTabStyles from '../styles/themeTabStyles';
import {Context} from '../utils/store';

const Feedbacks = ({navigation}) => {
  const [selected, setSelectedIndex] = React.useState(0);
  const {dispatch} = React.useContext(Context);
  const deleteFeedback = () => {
    dispatch({
      type: 'modalState',
      modalState: {
        title: 'Are you sure you want to Delete the feedback?',
        visible: true,
      },
    });
  };
  const options = [
    [{title: 'Reply', onPress: () => navigation.navigate('Reply Feedback')}],
    [
      {
        title: 'Edit',
        onPress: () => navigation.navigate('Reply Feedback', {type: 'edit'}),
      },
      {title: 'Delete', onPress: deleteFeedback},
    ],
  ];
  return (
    <Container
      scroll
      contentContainerStyle={[globalStyles.p0, globalStyles.px30]}
      showHeader
      headerProps={{titleType: 'title2', title: 'Feedbacks'}}>
      <Tabs
        defaultTabIndex={0}
        selectedTabStyle={themeTabStyles.selectedTabStyle}
        tabStyle={themeTabStyles.tabStyle}
        tabsContainerStyle={[
          themeTabStyles.tabsContainerStyle,
          globalStyles.mt8,
          globalStyles.mb20,
        ]}
        tabTextStyle={themeTabStyles.tabTextStyle}
        tabs={[
          {title: 'Received', function: () => setSelectedIndex(0)},
          {title: 'Given', function: () => setSelectedIndex(1)},
        ]}
      />
      <ProfileCard
        type="FEEDBACK"
        options={options[selected]}
        rating="4.5"
        background={'#F0FFFF'}
        selectedProfile={'Help Seeker'}
        label="Help Seeker"
      />
      <View style={globalStyles.mt12}>
        <ProfileCard
          background={'#FFFBEC'}
          type="FEEDBACK"
          options={options[selected]}
          rating="5"
          selectedProfile={'Help Seeker'}
          label="Help Seeker"
        />
      </View>
      <View style={globalStyles.mt12}>
        <ProfileCard
          type="FEEDBACK"
          options={options[selected]}
          rating="3.5"
          background={'#F0FFFF'}
          selectedProfile={'Help Seeker'}
          label="Helper"
        />
      </View>
    </Container>
  );
};

export default Feedbacks;
