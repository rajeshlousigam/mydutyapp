import React, {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import Container from '../components/Container';
import Button from '../components/Button/ThemeButton';
import globalStyles from '../styles/globalStyles';
import themeInputStyles from '../styles/themeInputStyles';
import Input from '../components/Input';
import {SectionHeader} from './FIlters';
import CircleImage from '../components/CircleImage';
import DateTimePicker from '@react-native-community/datetimepicker';
import AddIcon from '../assets/icons/add_icon.svg';
import ChevronDownBlack from '../assets/icons/chevron_down_black.svg';
import LocationBlack from '../assets/icons/location_black.svg';
import Calendar from '../assets/icons/calendar.svg';
const EditProfile = () => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShow] = useState(false);
  const upadateProfile = () => {};
  const onDateChange = date => {
    setShow(false);
    setDate(new Date(date.nativeEvent.timestamp));
  };
  return (
    <Container
      showHeader
      scroll
      headerProps={{title: 'Edit Profile', titleType: 'title3'}}>
      <View style={globalStyles.alignCenter}>
        <CircleImage
          background={'#EBEBEB'}
          icon={AddIcon}
          style={globalStyles.shadow}
          color={'#CACACA'}
          borderWidth={25}
          border
          size={100}
          fallback
        />
        <Text style={[globalStyles.text, globalStyles.mt30]}>User ID</Text>
      </View>
      <Input
        style={[globalStyles.ml20, globalStyles.flex1]}
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt40,
        ]}
        minHeight={100}
        customlabelStyle={themeInputStyles.label}
        label="Bio"
      />
      <SectionHeader
        style={{marginHorizontal: 0, marginTop: 40}}
        title="Personal Information"
      />
      <Input
        style={[globalStyles.ml20, globalStyles.flex1]}
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt40,
        ]}
        customlabelStyle={themeInputStyles.label}
        label="Name"
      />

      <Input
        style={[globalStyles.ml20, globalStyles.flex1]}
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt40,
        ]}
        customLabel
        label={
          <CustomLabel
            height={10}
            width={15}
            icon={ChevronDownBlack}
            title={'Profession'}
          />
        }
      />
      <Input
        style={[globalStyles.ml20, globalStyles.flex1]}
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt40,
        ]}
        customlabelStyle={themeInputStyles.label}
        label="Gender"
      />
      <Input
        style={[globalStyles.ml20, globalStyles.flex1]}
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt40,
        ]}
        customLabel
        label={
          <CustomLabel
            title={'DOB'}
            height={17}
            width={17}
            onPress={() => setShow(true)}
            icon={Calendar}
          />
        }
      />
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          is24Hour={true}
          display="default"
          onChange={onDateChange}
        />
      )}
      <Input
        style={[globalStyles.ml20, globalStyles.flex1]}
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt40,
        ]}
        customlabelStyle={themeInputStyles.label}
        label="Email Id"
      />
      <Input
        style={[globalStyles.ml20, globalStyles.flex1]}
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt40,
        ]}
        customlabelStyle={themeInputStyles.label}
        label="Mobile Number"
      />
      <Input
        style={[globalStyles.ml20, globalStyles.flex1]}
        showLabel
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,
          globalStyles.shadow,
          globalStyles.mt40,
        ]}
        customLabel
        label={
          <CustomLabel
            title="Location"
            height={24}
            width={24}
            icon={LocationBlack}
          />
        }
      />

      <View style={[globalStyles.mt80, globalStyles.px40]}>
        <Button onPress={upadateProfile} title="Update" />
      </View>
    </Container>
  );
};

const CustomLabel = ({icon: Icon, onPress, title, ...rest}) => (
  <Pressable
    onPress={onPress}
    style={[
      globalStyles.row,
      globalStyles.spaceBetween,
      globalStyles.mr24,
      globalStyles.alignCenter,
    ]}>
    <Text style={themeInputStyles.label}>{title}</Text>
    <Icon {...rest} />
  </Pressable>
);
export default EditProfile;
