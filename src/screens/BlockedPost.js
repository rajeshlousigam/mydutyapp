import React from 'react';
import {Text, View} from 'react-native';
import Container from '../components/Container';
import List from '../components/List';
import Post from '../components/Post';
import globalStyles from '../styles/globalStyles';

const BlockedPost = ({navigation}) => (
  <Container
    scroll
    contentContainerStyle={{padding: 0, paddingTop: 20}}
    showHeader
    headerProps={{titleType: 'title2', title: 'Blocked Post'}}>
    <List
      type="flat"
      listItem={Post}
      navigation={navigation}
      data={[{}, {otherData: {type: 'Helper', profileType: true}}]}
    />
  </Container>
);

export default BlockedPost;
