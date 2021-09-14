import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Container from '../components/Container';
import globalStyles from '../styles/globalStyles';
import colors from '../constants/colors';
import ProfileIcon from '../assets/icons/profile.svg';
import GenderIcon from '../assets/icons/gender.svg';
import PhoneIcon from '../assets/icons/call.svg';
import EmailIcon from '../assets/icons/email_icon.svg';
import StarIcon from '../assets/icons/star_2.svg';
import ImageIcon from '../assets/icons/image.svg';
import EditIcon from '../assets/icons/edit.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Context} from '../utils/store';
import InfoCard from '../components/Profile/InfoCard';
import ProfileCard from '../components/Profile/ProfileCard';
import ProfileSelector from '../components/Profile/ProfileSelector';
import Button from '../components/Button';
import More from '../assets/icons/more.svg';
const Profile = ({navigation, route}) => {
  const myProfile = route.params?.myProfile;
  const type = route.params?.type;
  const profileType = route.params?.profileType;
  const [selectedProfile, setSelectedProfile] = React.useState(
    type ? type : 'Help Seeker',
  );
  const [showButton, setButtonToggle] = React.useState(false);
  const {dispatch} = React.useContext(Context);
  const deleteAccount = () => {
    dispatch({
      type: 'modalState',
      modalState: {
        title: 'Are You Sure Want To Delete your profile?',
        visible: true,
      },
    });
  };
  const blockProfile = () => {};
  return (
    <Container
      scroll
      showHeader
      headerProps={{
        title: myProfile ? 'My Profile' : 'Other’s Profile',
        titleType: 'title3',
        children: (
          <HeaderRight toggleButton={() => setButtonToggle(!showButton)} />
        ),
      }}>
      {myProfile && (
        <ProfileSelector
          selectedProfile={profile => setSelectedProfile(profile)}
        />
      )}
      <View
        style={[
          globalStyles.row,
          globalStyles.justifyEnd,
          globalStyles.mb10,
          {marginTop: -10, minHeight: 25},
        ]}>
        {showButton && (
          <Button
            onPress={() =>
              myProfile ? navigation.navigate('EditProfile') : blockProfile
            }
            showIcon={myProfile}
            icon={myProfile ? EditIcon : null}
            color="#FAFAFA"
            title={myProfile ? 'Edit' : 'Block'}
            customButtonContainer={[
              styles.editProfileButton,
              globalStyles.shadow,
            ]}
            customTitleStyle={[globalStyles.ml8, styles.editProfileButtonTitle]}
          />
        )}
      </View>
      <ProfileCard
        type={myProfile ? 'MYPRO' : 'OTHERPRO'}
        selectedProfile={selectedProfile}
        label="Help Seeker"
      />
      <Text
        style={[
          globalStyles.font15,
          globalStyles.mt30,
          {color: colors.tertiary},
        ]}>
        Details
      </Text>
      <InfoCard
        icon={ProfileIcon}
        title="User ID"
        value="Nee145"
        color={'#23B0B0'}
        background={'#F0FFFF'}
      />
      <InfoCard
        icon={GenderIcon}
        title="Gender"
        value="male"
        color="#FFB110"
        background={'#FFFBEC'}
      />
      <InfoCard
        icon={PhoneIcon}
        color="#415EB6"
        title="Mobile Number"
        value={profileType ? 'Hidden' : '+91484555555'}
        background={'#EEF7FE'}
      />
      <InfoCard
        icon={EmailIcon}
        title="Email Id"
        value={profileType ? 'Hidden' : 'someone@gmail.com'}
        background={'#FEEEEE'}
        color="#AC4040"
      />
      <InfoCard
        icon={StarIcon}
        title="Feedbacks"
        value="50 feedbacks"
        background={'#EEF7FE'}
        showArrow
        color="#AC4040"
      />
      {!myProfile && (
        <TouchableOpacity>
          <View style={[globalStyles.row, globalStyles.justifyEnd]}>
            <Text
              style={[styles.deleteAccount, {color: '#943993', marginTop: 0}]}>
              Write a feedback
            </Text>
          </View>
        </TouchableOpacity>
      )}
      <InfoCard
        icon={ImageIcon}
        title="Posts"
        value="15 Posts"
        showArrow
        background={'#FFFBEC'}
        color="#AC4040"
      />
      {myProfile && (
        <TouchableOpacity onPress={deleteAccount}>
          <View style={[globalStyles.row, globalStyles.justifyCenter]}>
            <Text style={styles.deleteAccount}>Delete Account</Text>
          </View>
        </TouchableOpacity>
      )}
    </Container>
  );
};

const HeaderRight = ({toggleButton}) => (
  <TouchableOpacity
    style={[globalStyles.px8, globalStyles.py10]}
    onPress={toggleButton}>
    <More height={4} width={16} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  deleteAccount: {
    color: '#B6A4CE',
    fontSize: 12,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: '#B6A4CE',
    marginTop: 64,
  },
  editProfileButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    zIndex: 1,
  },
  editProfileButtonTitle: {fontSize: 9, color: colors.tertiary},
});
export default Profile;
