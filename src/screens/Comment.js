import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Container from '../components/Container';
import globalStyles from '../styles/globalStyles';
import colors from '../constants/colors';
import Menu from '../assets/icons/menu.svg';
import Input from '../components/Input';

import Filter from '../assets/icons/filter.svg';
import SearchIcon from '../assets/icons/search_icon.svg';
import Post from '../components/Post';
import themeInputStyles from '../styles/themeInputStyles';
import ChatInputPanel from '../components/Chat/ChatInput';
import {useDispatch} from 'react-redux';
import {addCommentToPostRequest} from '../store/actions/posts';

const Comment = ({navigation, route}) => {
  const myPost = route.params;
  const dispatch = useDispatch();

  return (
    <Container scroll contentContainerStyle={{padding: 0, paddingTop: 20}}>
      <View style={globalStyles.px20}>
        <View
          style={[
            globalStyles.row,
            globalStyles.spaceBetween,
            globalStyles.alignCenter,
          ]}>
          <Text
            style={[
              globalStyles.title,
              globalStyles.px20,
              {color: colors.tertiary},
            ]}>
            My Duty App
          </Text>
          <View style={[styles.iconContainer, globalStyles.shadow]}>
            <TouchableOpacity onPress={() => navigation.navigate('Sidebar')}>
              <Menu />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={[
            globalStyles.row,
            globalStyles.spaceBetween,
            globalStyles.alignCenter,
            globalStyles.mt20,
          ]}>
          <Input
            onFocus={() => navigation.navigate('Search')}
            icon={SearchIcon}
            customInputStyle={themeInputStyles.searchInputStyle}
            customContainerStyle={[globalStyles.flex1, globalStyles.mr24]}
            placeholder="Search For Profile/Post"
            placeholderTextColor={colors.tertiary}
          />
          <View style={[styles.iconContainer, globalStyles.shadow]}>
            <TouchableOpacity onPress={() => navigation.navigate('Filters')}>
              <Filter />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[globalStyles.row, globalStyles.mt24]}>
          <Text style={[globalStyles.font15, {color: colors.tertiary}]}>
            Refresh
          </Text>
          <Text
            style={[
              globalStyles.font15,
              {color: colors.gray},
              globalStyles.ml16,
            ]}>
            Updated 0 min
          </Text>
        </View>
      </View>
      <Post
        showAction={false}
        {...myPost}
        detailsPage
        navigation={navigation}
      />
      <ChatInputPanel
        position={'relative'}
        comment
        onMessageSend={value => {
          if (!value) {
            return;
          }
          dispatch(
            addCommentToPostRequest({
              postId: myPost.id,
              comment: value,
            }),
          );
        }}
        userImage={
          'https://imgproxy.ra.co/_/plain//images/profiles/square/leeburridge.jpg'
        }
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Comment;
