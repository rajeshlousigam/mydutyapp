import React from 'react';
import Container from '../components/Container';
import List from '../components/List';
import globalStyles from '../styles/globalStyles';
import FilterList from '../components/Filters/FilterList';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  DeviceEventEmitter,
} from 'react-native';
import useScreenDimensions from '../components/Hooks/useScreenDimensions';
import Input from '../components/Input';
import SearchIcon from '../assets/icons/search_icon.svg';
import colors from '../constants/colors';
import themeInputStyles from '../styles/themeInputStyles';
import {Label} from '../screens/NewPost';
import Button from '../components/Button/ThemeButton';
const AddLocation = ({navigation}) => {
  const [query, setQuery] = React.useState('');
  React.useEffect(() => {
    return () => {
      DeviceEventEmitter.removeAllListeners('event.mapMarkerSelected');
    };
  }, []);
  const {height} = useScreenDimensions('screen');
  const search = () => {};
  return (
    <Container
      showHeader
      scroll
      contentContainerStyle={[
        globalStyles.p0,
        globalStyles.pt8,
        globalStyles.pb20,
      ]}
      headerProps={{titleType: 'title2', title: 'Location'}}>
      <View
        style={[
          globalStyles.row,
          globalStyles.spaceBetween,
          globalStyles.alignCenter,
          globalStyles.px24,
        ]}>
        <Input
          onSubmitEditing={search}
          onChangeText={text => setQuery(text)}
          icon={SearchIcon}
          customInputStyle={themeInputStyles.searchInputStyle}
          customContainerStyle={[globalStyles.flex1, globalStyles.mr24]}
          placeholder="Search for Location"
          placeholderTextColor={colors.tertiary}
        />
      </View>

      <View style={[{minHeight: height - 220}]}>
        <View style={[globalStyles.px24, globalStyles.my16]}>
          <FilterList
            selectedFilters={[{item: {label: 'Milan'}}]}
            component={Label}
          />
        </View>
        <View
          style={[
            globalStyles.px24,
            styles.recentSearchContainer,
            {alignItems: 'flex-start'},
          ]}>
          <List
            listItem={Label}
            // onPress={e => {
            //   alert(e);
            //   //Enable to add location data to new post
            //   // DeviceEventEmitter.emit('event.setLocation', 'Duomo di Milano');
            //   // navigation.goBack();
            // }}
            vertical
            data={[
              {
                item: {
                  label: 'Duomo di Milano',
                },
                onPress: () => {
                  DeviceEventEmitter.emit(
                    'event.setLocation',
                    'Duomo di Milano',
                  );
                  navigation.goBack();
                },
              },
              {
                item: {
                  label: 'Piazza Cordusio',
                },
                onPress: () => {
                  DeviceEventEmitter.emit(
                    'event.setLocation',
                    'Paizza Cordusio',
                  );
                  navigation.goBack();
                },
              },
            ]}
          />
        </View>
        <View
          style={[
            globalStyles.px40,
            {position: 'absolute', right: 0, left: 0, bottom: 20},
          ]}>
          <Button onPress={() => navigation.goBack()} title="Add" />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  recentSearchContainer: {
    borderTopWidth: 1,
    borderTopColor: '#DADFE6',
    paddingTop: 8,
  },
  iconContainer: {
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default AddLocation;
