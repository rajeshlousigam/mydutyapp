import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CheckBox from './index.js';
import globalStyles from '../../styles/globalStyles';
import colors from '../../constants/colors';
import {TouchableWithoutFeedback} from 'react-native';

const ThemeCheckbox = ({title, onChecked, status, style}) => {
  const [state, checkboxState] = React.useState(false);
  const defaultOnPress = isChecked => {
    onChecked ? onChecked(isChecked) : null;
    checkboxState(isChecked);
  };
  const statusColor = {
    Active: '#028D07',
    Pending: '#F5190B',
    Completed: '#415EB6',
  };
  return (
    <TouchableWithoutFeedback onPress={() => checkboxState(!state)}>
      <View
        style={[
          styles.container,
          globalStyles.px24,
          {backgroundColor: state ? '#EFE0FF' : '#FFF'},
          style,
        ]}>
        <CheckBox
          // onPress={defaultOnPress}
          state={state}
          size={24}
          color={{checked: '#DADFE6', blur: '#DADFE6'}}
          style={{
            backgroundColor: state ? '#A66AEB' : '#FFF',
            borderRadius: 4,
            marginRight: 12,
          }}
        />
        <Text style={styles.title}>{title}</Text>
        <View
          style={[
            globalStyles.ml12,
            styles.status,
            {backgroundColor: statusColor[status]},
          ]}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  title: {fontSize: 16, color: colors.tertiary},
  status: {height: 9, width: 9, borderRadius: 4.5},
  container: {
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default ThemeCheckbox;
