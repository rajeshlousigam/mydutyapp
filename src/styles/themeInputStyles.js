import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
export default StyleSheet.create({
  inputLabel: {
    color: colors.secondary,
  },
  label: {
    color: colors.textprimary,
    marginLeft: 20,
  },
  primaryInputStyle: {
    borderLeftColor: colors.inputBorder,
    borderLeftWidth: 8,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingTop: 8,
  },
  searchInputStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#EEF2FE',
    borderRadius: 10,
  },
});
