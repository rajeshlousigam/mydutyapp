import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import List from '../List';
import colors from '../../constants/colors';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const RecentSearch = ({onPress}) => {
  const data = [{label: 'Child'}, {label: 'NGO'}, {label: 'Help'}];
  return (
    <View style={{alignItems: 'flex-start'}}>
      <List data={data} onPress={onPress} listItem={Label} />
    </View>
  );
};

export const Label = ({label, index, onPress}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <Text
      style={[
        styles.pill,
        globalStyles.font12,
        {marginTop: index ? 24 : 0, color: colors.white},
      ]}>
      {label}
    </Text>
  </TouchableWithoutFeedback>
);
const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: '#A66AEB',
    borderRadius: 8,
  },
});
export default RecentSearch;
