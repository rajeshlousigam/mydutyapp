import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CheckBox from './index.js';
import globalStyles from '../../styles/globalStyles';
import colors from '../../constants/colors';
import {TouchableWithoutFeedback} from 'react-native';

const ThemeCheckbox = React.forwardRef(
  ({title, onChecked, checked, style, ...props}, ref) => {
    const statusColor = {
      Active: '#028D07',
      Pending: '#F5190B',
      Completed: '#415EB6',
    };
    return (
      <TouchableWithoutFeedback onPress={onChecked}>
        <View
          style={[
            styles.container,
            globalStyles.px24,
            {backgroundColor: checked ? '#EFE0FF' : '#FFF'},
            style,
          ]}>
          <CheckBox
            ref={ref}
            {...props}
            state={checked}
            size={24}
            color={{checked: '#DADFE6', blur: '#DADFE6'}}
            style={{
              backgroundColor: checked ? '#A66AEB' : '#FFF',
              borderRadius: 4,
              marginRight: 12,
            }}
          />
          <Text style={styles.title}>{title}</Text>
          <View
            style={[
              globalStyles.ml12,
              styles.status,
              {backgroundColor: statusColor[checked]},
            ]}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  },
);

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
