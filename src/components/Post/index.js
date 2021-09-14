import React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import UserProfileBasicInfo from '../UserInfo';
import globalStyles from '../../styles/globalStyles';
import Button from '../Button';
import colors from '../../constants/colors';
import Actions from './Actions';
import {splitString} from '../../utils';
import CircleImage from '../CircleImage';
import List from '../List';
import themeButtonStyles from '../../styles/themeButtonStyles';
import {Context} from '../../utils/store';
import ChangeStatusModal from './ChangeStatusModal';
import {Bar} from 'react-native-progress';
import useScreenDimensions from '../Hooks/useScreenDimensions';
import Comments from './Comments';
import config from '../../Config/Config';
import ConfirmationModal from '../Modal/ConfirmationModalMain';
import {useDispatch} from 'react-redux';
import {blockOrReportPostRequest} from '../../store/actions/posts';

const Post = props => {
  let {
    navigation,
    title = '',
    caption = '',
    showAction = true,
    detailsPage,
    otherData,
    myPost,
    block,
    location = '',
    isActive = false,
    thumb = '',
    hashtag = '',
    likes = [],
    comments = [],
    id = '',
    fundraiser = 0,
    images = '',
    category = '',
  } = props;

  const {dispatch} = React.useContext(Context);
  const [showButton, setShowButton] = React.useState(false);
  const [visible, toggleModal] = React.useState(false);
  const [blockModal, setblockModal] = React.useState(false);
  const [reportModal, setreportModal] = React.useState(false);
  const rDispatch = useDispatch();

  const {width} = useScreenDimensions('screen');
  const blockPost = () => {
    setblockModal(true);
    // dispatch({
    //   type: 'modalState',
    //   modalState: {
    //     title: 'Are you sure you want to block this post?',
    //     visible: true,
    //   },
    // });
  };
  const unblockPost = () => {
    dispatch({
      type: 'modalState',
      modalState: {
        title: 'Are you sure you want to unblock this post?',
        visible: true,
      },
    });
  };
  const renderDescription = description =>
    // get the description and split based on string
    splitString(description).map(word => {
      if (word.startsWith('#')) {
        const searchItem = word.substring(1);
        return <Text style={styles.hasTag}>{word} </Text>;
      } else {
        return <Text>{word} </Text>;
      }
    });

  const reportPost = () => {
    dispatch({
      type: 'modalState',
      modalState: {
        title: 'Are you sure you want to report this post to admin?',
        visible: true,
      },
    });
  };

  const deletePost = () => {
    dispatch({
      type: 'modalState',
      modalState: {
        title: 'Are you sure you want to delete this post from your profile?',
        visible: true,
      },
    });
  };
  const editPost = () => {
    navigation.navigate('New Post', {edit: true});
  };
  const changeStatus = () => {
    toggleModal(!visible);
  };
  const myPostOptions = [
    {title: 'Edit', onPress: editPost},
    {title: 'Delete', onPress: deletePost},
    {title: 'Status', onPress: changeStatus},
  ];

  const labelsData = [];

  if (hashtag) {
    labelsData.push({text: '#' + hashtag});
  }
  if (isActive) {
    labelsData.push({text: 'Active'});
  }

  let image = images && typeof images === 'string' && JSON.parse(images);

  return (
    <View>
      <ChangeStatusModal visible={visible} toggleModal={toggleModal} />
      <View style={globalStyles.px8}>
        <UserProfileBasicInfo
          otherData={otherData}
          profileNameStyle={{}}
          navigation={navigation}
          showStatus
          status={isActive ? 'Active' : 'Not Active'}
          options={myPost ? myPostOptions : []}
          action={myPost ? null : () => setShowButton(!showButton)}
          userData={{name: 'Pieroborgo', about: location}}
        />
        <View>
          {showButton && (
            <View style={[{position: 'absolute', right: 10}]}>
              <Button
                color="#fafafa"
                customTitleStyle={styles.blockButtonTitle}
                customButtonContainer={styles.blockButton}
                onPress={!block ? blockPost : unblockPost}
                title={!block ? 'Block' : 'Unblock'}
              />
            </View>
          )}
          <ImageBackground
            style={styles.postImage}
            // source={require('../../assets/images/post_image.png')}
            source={{
              uri: image[0] ? image[0] : '',
              // uri: config.url + thumb,
            }}>
            <View
              style={[globalStyles.row, globalStyles.px16, globalStyles.py16]}>
              <List listItem={Label} data={labelsData} />
            </View>
          </ImageBackground>
        </View>
        <View style={[globalStyles.px16, globalStyles.mt16]}>
          <View style={[globalStyles.row, globalStyles.spaceBetween]}>
            <Text style={[globalStyles.text, {color: colors.tertiary}]}>
              {title}
            </Text>
            {showAction && (
              <Button
                customTitleStyle={[
                  themeButtonStyles.buttonTitle,
                  globalStyles.bold,
                ]}
                style={{borderRadius: 10}}
                color={colors.inputBorder}
                title="Donate Now"
              />
            )}
          </View>
          <Text style={[globalStyles.mt8, {color: '#6D7E92', lineHeight: 20}]}>
            {category}
          </Text>
          {detailsPage && (
            <View>
              <View
                style={[
                  globalStyles.row,
                  globalStyles.spaceBetween,
                  globalStyles.mt16,
                ]}>
                <Text
                  style={[
                    globalStyles.font16,
                    globalStyles.bold,
                    {color: '##4B97FC'},
                  ]}>
                  {Math.floor((Number(fundraiser) / 12000) * 100)} %
                </Text>
                <Text
                  style={[
                    globalStyles.font16,
                    globalStyles.bold,
                    {color: '#073C7A'},
                  ]}>
                  {fundraiser}
                </Text>
              </View>
              <View style={globalStyles.mt8}>
                <Bar
                  progress={`0.${Math.floor(
                    (Number(fundraiser) / 12000) * 100,
                  )}`}
                  width={width - 55}
                  color={'#458AE5'}
                  unfilledColor={'#E3F0FC'}
                />
              </View>
            </View>
          )}
          <Actions
            reportPost={() => {
              setreportModal(true);
            }}
            myPost={{
              navigation,
              title,
              caption,
              showAction,
              detailsPage,
              otherData,
              myPost,
              block,
              location,
              isActive,
              thumb,
              hashtag,
              likes,
              comments,
              id,
              images,
              fundraiser,
            }}
            likes={likes}
          />
          <View style={[globalStyles.row, globalStyles.alignCenter]}>
            <List
              data={likes.map(item => ({
                uri: item.user.profilePicture
                  ? item.user.profilePicture
                  : 'http://cdn.onlinewebfonts.com/svg/img_574534.png',
              }))}
              listItem={CircleImage}
              style={{marginRight: -4}}
              size={15}
              border
              color={colors.white}
            />
            {likes.length > 0 && (
              <Text style={globalStyles.ml8}>
                Raised Hand by {likes[0]?.user?.name}{' '}
                {likes.length > 1 && 'and others'}
              </Text>
            )}
          </View>
          <Text>{renderDescription(caption)}</Text>
          {detailsPage && (
            <View style={[globalStyles.mt4]}>
              <Comments
                post={{
                  navigation,
                  title,
                  caption,
                  showAction,
                  detailsPage,
                  otherData,
                  myPost,
                  block,
                  location,
                  isActive,
                  thumb,
                  hashtag,
                  likes,
                  comments,
                  images,
                  fundraiser,
                  id,
                }}
              />
            </View>
          )}
        </View>
      </View>
      <ConfirmationModal
        title="Are you sure want to block this post"
        visible={blockModal}
        onSave={() =>
          rDispatch(
            blockOrReportPostRequest({
              postId: id,
              isBlock: true,
              isReportToAdmin: false,
            }),
          )
        }
        toggleModal={() => setblockModal(false)}
      />
      <ConfirmationModal
        title="Are you sure want to report this post to admin?"
        visible={reportModal}
        onSave={() =>
          rDispatch(
            blockOrReportPostRequest({
              postId: id,
              isBlock: false,
              isReportToAdmin: true,
            }),
          )
        }
        toggleModal={() => setreportModal(false)}
      />
    </View>
  );
};
const Label = ({text, index}) => (
  <View style={[styles.label, index !== 0 && globalStyles.ml8]}>
    <Text style={[globalStyles.font12, {color: colors.white}]}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  postImage: {
    width: '100%',
    height: 240,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    overflow: 'hidden',
    zIndex: -2,
  },
  label: {
    padding: 12,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 5, 21, 0.24)',
  },
  blockButton: {
    paddingHorizontal: 15,
    paddingVertical: 13,
    marginTop: -20,
    zIndex: 2,
    borderRadius: 10,
  },
  blockButtonTitle: {color: colors.tertiary, fontSize: 9},
  hasTag: {
    color: '#3998f3',
  },
});
export default Post;
