import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import ReportIcon from '../../assets/icons/report.svg';
import ShareIcon from '../../assets/icons/share.svg';
import HandIcon from '../../assets/icons/hand.svg';
import ChatIcon from '../../assets/icons/comment.svg';
import {useNavigation} from '@react-navigation/core';
import {useDispatch} from 'react-redux';
import {addLikeRequest} from '../../store/actions/posts';

const Actions = ({reportPost, myPost}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View
      style={[
        styles.actionContainer,
        globalStyles.row,
        globalStyles.spaceBetween,
        globalStyles.alignEnd,
      ]}>
      <View style={[globalStyles.row, globalStyles.alignEnd]}>
        <ActionEach
          style={globalStyles.ml0}
          icon={HandIcon}
          title="Raise Hand"
          click={() => dispatch(addLikeRequest({postId: myPost.id}))}
        />
        <ActionEach
          click={() => {
            if (myPost.detailsPage) {
              return;
            }
            navigation.navigate('Comment', myPost);
          }}
          icon={ChatIcon}
          title="Comment"
        />
        <ActionEach icon={ShareIcon} title="Share" />
      </View>
      <ActionEach click={reportPost} icon={ReportIcon} title="Report" />
    </View>
  );
};

export default Actions;

const ActionEach = ({click, style, icon: Icon, title}) => (
  <View style={[globalStyles.ml24, globalStyles.alignCenter, style]}>
    <TouchableOpacity onPress={click}>{Icon && <Icon />}</TouchableOpacity>
    <Text
      style={[globalStyles.mt8, styles.actionText, globalStyles.textCenter]}>
      {title}
    </Text>
  </View>
);
const styles = StyleSheet.create({
  actionText: {fontSize: 5, color: '#6D7E92'},
  actionContainer: {
    marginTop: 12,
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: '#DADFE6',
  },
});
