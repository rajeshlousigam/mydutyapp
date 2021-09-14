import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
export default StyleSheet.create({
  themePrimaryButton: {},
  themeSecondaryButton: {},
  themeTertiaryButton: {},
  themeButton: {
    borderRadius: 28,
    padding: 14,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    elevation: 20,
    shadowRadius: 40,
    shadowColor: 'black',
  },
  themeText: {fontSize: 16, textAlign: 'center', color: colors.textprimary},
  buttonTitle: {textAlign: 'center', color: '#fff'},
});
