import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
import globalStyles from './globalStyles';

export default StyleSheet.create({
  tabsContainerStyle: {flexDirection: 'row', justifyContent: 'space-between'},
  tabStyle: {
    flex: 1,
    paddingVertical: 17,
    backgroundColor: '#C1C6C8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    ...globalStyles.shadow,
    marginRight: 15,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: '#F7F7F7',
  },
  selectedTabStyle: {backgroundColor: colors.inputBorder},
  tabTextStyle: {fontSize: 17, color: colors.white, fontWeight: 'bold'},
});
