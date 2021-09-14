import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  DeviceEventEmitter,
} from 'react-native';
import Container from '../components/Container';
import globalStyles from '../styles/globalStyles';
import colors from '../constants/colors';
import Input from '../components/Input';
import themeInputStyles from '../styles/themeInputStyles';
import CircleImage from '../components/CircleImage';
import AddIcon from '../assets/icons/add_icon.svg';
import ChevronDown from '../assets/icons/chevron_down_small.svg';
import ChevronRight from '../assets/icons/chevron_right.svg';
import {Bar} from 'react-native-progress';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import useScreenDimensions from '../components/Hooks/useScreenDimensions';
import {SectionHeader} from './FIlters';
import ThemeCheckbox from '../components/CheckboxOne/ThemeCheckbox';
import Button from '../components/Button/ThemeButton';
import FilterList from '../components/Filters/FilterList';
import {launchImageLibrary} from 'react-native-image-picker';
import {addPostRequest} from '../store/actions/posts';
import {useDispatch, useSelector} from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import RNFetchBlob from 'rn-fetch-blob';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../Config/Config';
import Toast from 'react-native-toast-message';
import {SliderPicker} from 'react-native-slider-picker';
import {getAllHashtagsRequest} from '../store/actions/hashtags';

const NewPost = ({navigation, route}) => {
  const {width} = useScreenDimensions('screen');
  const [image, setImage] = useState(null);
  const [title, settitle] = useState('');
  const [caption, setcaption] = useState('');
  const [chashtag, setchashtag] = useState('');
  const [postType, setpostType] = useState('');
  const [hastag, sethastag] = useState('');
  const [location, setlocation] = useState('');
  const [category, setcategory] = useState('Category1');
  const [tagPeople, settagPeople] = useState([]);
  const [images, setimages] = useState(null);
  const [fundraiser, setfundraiser] = useState(0);
  const [crowdfunding, setcrowdfunding] = useState(0);
  const [reasonForCrowdfunding, setreasonForCrowdfunding] = useState('');
  const edit = route.params?.edit;

  // const {hashtags} = useSelector(state => ({
  //   hashtags: state.hashtagReducer.hashtags,
  // }));

  const [chashtags, setchashtags] = useState([]);

  const dispatch = useDispatch();
  const postData = !edit
    ? {}
    : {
        title: 'Oxygen for Varya',
        caption:
          'To breathe and live at home, Vara urgently needs medical equipment.',
        taggedPeople: [{label: '@Philip'}, {label: '@lilly'}],
        hashTags: [{label: '#Childres'}],
        location: [{label: 'Kolkata'}],
      };

  // const chooseImage = async () => {
  //   await launchImageLibrary(
  //     {
  //       mediaType: 'photo',
  //       includeBase64: false,
  //       maxHeight: 500,
  //       maxWidth: 500,
  //       quality: 0.5,
  //     },
  //     async response => {
  //       if (response.didCancel) {
  //         return;
  //       }
  //       if (response.uri) {
  //         ImagePicker.openCropper({
  //           path: response.uri,
  //           width: 300,
  //           height: 400,
  //           cropperToolbarTitle: 'Edit Profile Photo',
  //           cropperCircleOverlay: true,
  //           enableRotationGesture: true,
  //         })
  //           .then(image => {
  //             alert(JSON.stringify(image));
  //             setImage({
  //               uri:
  //                 Platform.OS === 'android'
  //                   ? image.path
  //                   : image.path.replace('file://', ''),
  //               name: 'image.jpg',
  //               type: image.mime,
  //             });
  //           })
  //           .catch(error => {
  //             console.log('cancel profile selection');
  //           });
  //       }
  //     },
  //   );
  // };
  const chooseImage = async () => {
    try {
      await launchImageLibrary(
        {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 500,
          maxWidth: 500,
          quality: 0.5,
        },
        async response => {
          // console.log(response);
          if (response.didCancel) {
            return;
          }
          if (response.uri) {
            setImage(response.uri);
          }
          // setProfilePic(response.uri);
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    DeviceEventEmitter.addListener('event.setTag', eventData => {
      settagPeople(value => [...value, eventData]);
    });
    DeviceEventEmitter.addListener('event.setLocation', eventData => {
      setlocation(eventData);
    });
    dispatch(getAllHashtagsRequest());
  }, []);

  const onSubmit = async () => {
    try {
      if (
        !caption ||
        !title ||
        !image ||
        !location ||
        !fundraiser ||
        !crowdfunding
      ) {
        Toast.show({
          type: 'error',
          text1: 'All Fields Are Required!',
        });
        return;
      }
      let hashtags = chashtags.map(item => item.label);
      hashtags = hashtags.join();
      let data = [
        {name: 'caption', data: caption},
        {name: 'title', data: title},
        {name: 'images', data: images ? images : ''},
        {name: 'postType', data: 'helper'},
        {name: 'hastag', data: hashtags},
        {name: 'location', data: location},
        {name: 'category', data: category},
        {name: 'tagPeople', data: JSON.stringify(tagPeople)},
        {name: 'fundraiser', data: String(fundraiser)},
        {name: 'crowdfunding', data: String(crowdfunding)},
        {name: 'reasonForCrowdfunding', data: reasonForCrowdfunding},
        {name: 'priority', data: String(0)},
      ];

      data.push({
        name: 'images',
        filename: 'image.jpg',
        type: 'image/jpg',
        data: RNFetchBlob.wrap(image),
      });

      let token = await AsyncStorage.getItem('token');
      let resp = await RNFetchBlob.fetch(
        'POST',
        `${Api.url}socialPost/addSocialPost`,
        {
          authorization: token,
          'Content-Type': 'multipart/form-data',
        },
        data,
      );

      dispatch(addPostRequest(data));
      Toast.show({
        type: 'success',
        text1: 'Post Added!',
      });
      navigation.goBack();
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: "Couldn't Add Post",
      });
    }

    // data.append('title', title);
    // data.append('caption', caption);
    // data.append('thumb', image);
    // data.append('images', images);
    // data.append('postType', postType);
    // data.append('hastag', hastag);
    // data.append('location', location);
    // data.append('category', category);
    // data.append('tagPeople', tagPeople);
  };

  return (
    <Container
      scroll
      showHeader
      headerProps={{
        title: 'New Post',
        titleType: 'title3',
      }}>
      <View style={[globalStyles.row]}>
        <View style={[styles.imageContainer, globalStyles.shadow]}>
          <CircleImage
            background={'#EBEBEB'}
            icon={AddIcon}
            size={50}
            fallback
            onPress={chooseImage}
            uri={image}
            custom={image ? true : false}
            style={{
              height: '100%',
              width: '100%',
            }}
          />
          {edit && (
            <View style={styles.badge}>
              <Text style={[globalStyles.font18, {color: '#FFF'}]}>3</Text>
            </View>
          )}
        </View>
        <Input
          customInputStyle={{}}
          style={[globalStyles.ml20, globalStyles.flex1]}
          customContainerStyle={[
            themeInputStyles.primaryInputStyle,
            globalStyles.shadow,
            globalStyles.ml12,
            globalStyles.flex1,
          ]}
          value={caption}
          minHeight={80}
          onChangeText={e => setcaption(e)}
          placeholder="Write a caption..."
        />
      </View>
      <Text
        style={[
          globalStyles.font16,
          globalStyles.mt16,
          {color: colors.textprimary},
        ]}>
        Upload Post
      </Text>
      <Input
        style={[globalStyles.ml20, globalStyles.flex1]}
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt16,
        ]}
        customlabelStyle={themeInputStyles.label}
        label="Add Title"
        value={title}
        onChangeText={e => settitle(e)}
      />
      {edit && (
        <View style={globalStyles.mt24}>
          <FilterList selectedFilters={postData.taggedPeople} />
        </View>
      )}
      <Section
        style={globalStyles.mt20}
        title="Tag People"
        onPress={() => navigation.navigate('Tag People')}
        icon={ChevronRight}
      />
      {tagPeople.length > 0 && (
        <Labels labels={tagPeople.map(item => ({label: item}))} />
      )}

      {edit && (
        <View style={globalStyles.mt16}>
          <FilterList selectedFilters={postData.hashTags} />
        </View>
      )}
      <Section style={globalStyles.mt30} title="Add Hashtag" />
      <Input
        style={[globalStyles.ml20, globalStyles.flex1]}
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt16,
        ]}
        customlabelStyle={themeInputStyles.label}
        value={chashtag}
        onChangeText={e => setchashtag(e)}
        onBlur={() => {
          if (chashtag) {
            setchashtags(value => [...value, {label: chashtag}]);
            setchashtag('');
          }
        }}
      />
      <View style={globalStyles.mt16}>
        <FilterList
          selectedFilters={chashtags}
          showResults={() => {
            setchashtag('');
            setchashtags([]);
          }}
        />
      </View>

      {/* {edit && (
        <View style={globalStyles.mt16}>
          <FilterList selectedFilters={postData.location} />
        </View>
      )} */}
      <Section
        style={globalStyles.mt30}
        icon={ChevronRight}
        onPress={() => navigation.navigate('Add Location')}
        title="Add location"
      />
      {!!location && <Labels labels={[{label: location}]} />}

      <Section
        style={globalStyles.mt40}
        icon={ChevronDown}
        title="Add Fundraiser"
      />
      <View
        style={[
          globalStyles.row,
          globalStyles.spaceBetween,
          globalStyles.mt16,
        ]}>
        <Text
          style={[globalStyles.font16, globalStyles.bold, {color: '#943993'}]}>
          {fundraiser}
        </Text>
        <Text
          style={[globalStyles.font16, globalStyles.bold, {color: '#073C7A'}]}>
          12000
        </Text>
      </View>
      <View style={globalStyles.mt12}>
        <SliderPicker
          defaultValue={fundraiser}
          callback={position => {
            setfundraiser(position);
          }}
          maxValue={12000}
          buttonBackgroundColor={colors.inputBorder}
          buttonBorderColor={'#fff'}
        />
        {/* <Bar
          progress={0.3}
          width={width - 40}
          color={'#458AE5'}
          unfilledColor={'#E3F0FC'}
          
        /> */}
      </View>
      <Section
        style={globalStyles.mt40}
        icon={ChevronDown}
        title="Add Crowdfunding"
      />
      <View
        style={[
          globalStyles.row,
          globalStyles.spaceBetween,
          globalStyles.mt16,
        ]}>
        <Text
          style={[globalStyles.font16, globalStyles.bold, {color: '#943993'}]}>
          {crowdfunding}
        </Text>
        <Text
          style={[globalStyles.font16, globalStyles.bold, {color: '#073C7A'}]}>
          12000
        </Text>
      </View>
      <View style={globalStyles.mt12}>
        <SliderPicker
          defaultValue={crowdfunding}
          callback={position => {
            setcrowdfunding(position);
          }}
          maxValue={12000}
          buttonBackgroundColor={colors.inputBorder}
          buttonBorderColor={'#fff'}
        />
        {/* <Bar
          progress={0.3}
          width={width - 40}
          color={'#458AE5'}
          unfilledColor={'#E3F0FC'}
        /> */}
      </View>
      <TouchableOpacity>
        <View
          style={[
            globalStyles.row,
            globalStyles.justifyEnd,
            globalStyles.mt12,
          ]}>
          <Text style={[styles.terms, {marginTop: 0}]}>Terms & Conditions</Text>
        </View>
      </TouchableOpacity>
      <Input
        style={[globalStyles.ml20, globalStyles.flex1]}
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt24,
        ]}
        minHeight={80}
        value={reasonForCrowdfunding}
        customlabelStyle={themeInputStyles.label}
        label="Reason for Crowdfunding"
        onChangeText={e => setreasonForCrowdfunding(e)}
      />

      <SectionHeader
        title="Add Category"
        style={{marginHorizontal: 0, marginTop: 50}}
      />
      <View style={globalStyles.mt16}>
        <ThemeCheckbox
          style={styles.checkbox}
          title={'Category1'}
          checked={category === 'Category1' ? true : false}
          onChecked={() => {
            setcategory('Category1');
          }}
        />
      </View>
      <View style={globalStyles.mt16}>
        <ThemeCheckbox
          style={styles.checkbox}
          title={'Category2'}
          checked={category === 'Category2' ? true : false}
          onChecked={() => setcategory('Category2')}
        />
      </View>
      <View style={globalStyles.mt16}>
        <ThemeCheckbox
          style={styles.checkbox}
          title={'Category3'}
          checked={category === 'Category3' ? true : false}
          onChecked={() => setcategory('Category3')}
        />
      </View>
      <View style={globalStyles.mt16}>
        <ThemeCheckbox
          style={styles.checkbox}
          title={'Category4'}
          checked={category === 'Category4' ? true : false}
          onChecked={() => setcategory('Category4')}
        />
      </View>
      <View style={globalStyles.mt16}>
        <ThemeCheckbox
          style={styles.checkbox}
          title={'Category5'}
          checked={category === 'Category5' ? true : false}
          onChecked={() => setcategory('Category5')}
        />
      </View>
      <View style={globalStyles.mt16}>
        <ThemeCheckbox
          style={styles.checkbox}
          title={'Category6'}
          checked={category === 'Category6' ? true : false}
          onChecked={() => setcategory('Category6')}
        />
      </View>

      <View style={[globalStyles.mt16, globalStyles.px20]}>
        <Button title="Post" onPress={onSubmit} />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: '#CACACA',
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    position: 'absolute',
    bottom: -12,
    right: -4,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.textTertiary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer: {
    padding: 5,
    backgroundColor: '#F1F1F1',
    borderRadius: 5,
    marginTop: 8,
  },
  terms: {
    color: '#AB94C7',
    fontSize: 15,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: '#AB94C7',
  },
  checkbox: {marginHorizontal: -20},
});

const Section = ({title, style, onPress, icon: Icon}) => (
  <TouchableWithoutFeedback
    style={[
      globalStyles.row,
      globalStyles.alignCenter,
      globalStyles.spaceBetween,
      style,
    ]}
    onPress={onPress && onPress}>
    <Text style={globalStyles.font15}>{title}</Text>
    {Icon && <Icon height={12} />}
  </TouchableWithoutFeedback>
);

export const Labels = ({labels}) => (
  <View style={[globalStyles.row, {marginVertical: 16}]}>
    <FlatList
      horizontal
      data={labels}
      renderItem={({item, index}) => <Label item={item} index={index} />}
    />
  </View>
);
export const Label = ({item, index, vertical, onPress}) => (
  <TouchableWithoutFeedback
    onPress={onPress}
    style={[
      styles.labelContainer,
      !vertical ? {marginLeft: !index ? 0 : 12} : {marginTop: !index ? 8 : 32},
    ]}>
    <Text>{item.label}</Text>
  </TouchableWithoutFeedback>
);
export default NewPost;
