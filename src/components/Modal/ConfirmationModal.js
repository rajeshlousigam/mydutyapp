import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ReactNativeModal from '.';
import colors from '../../constants/colors';
import globalStyles from '../../styles/globalStyles';
import Button from '../Button';

const ConfirmationModal = ({title, visible, toggleModal}) => {
  const [foucsedButton, setButtonFocus] = React.useState(null);
  const changeFoucs = buttonType => {
    setButtonFocus(buttonType);
    setTimeout(function () {
      setButtonFocus(null);
    }, 400);
  };
  const onButtonPress = buttonType => {
    changeFoucs(buttonType);
    setTimeout(function () {
      toggleModal();
    }, 400);
  };
  return (
    <ReactNativeModal visible={visible}>
      <Text style={styles.title}>{title}</Text>
      <View
        style={[
          globalStyles.mt40,
          globalStyles.row,
          globalStyles.justifyCenter,
        ]}>
        <Button
          customTitleStyle={[globalStyles.font15, globalStyles.textCenter]}
          customButtonContainer={[
            styles.actionButton,
            globalStyles.shadow,
            foucsedButton === 1 && styles.cancelButton,
          ]}
          color={colors.white}
          onPress={() => onButtonPress(1)}
          title="Yes"
        />
        <Button
          customTitleStyle={[globalStyles.font15, globalStyles.textCenter]}
          customButtonContainer={[
            styles.actionButton,
            globalStyles.shadow,
            globalStyles.ml16,
            foucsedButton === 2 && styles.cancelButton,
          ]}
          onPress={() => onButtonPress(2)}
          color={colors.white}
          title="No"
        />
      </View>
    </ReactNativeModal>
  );
};
const styles = StyleSheet.create({
  title: {fontSize: 17, color: colors.textprimary},
  cancelButton: {borderWidth: 1, borderColor: '#943993'},
  actionButton: {paddingVertical: 16, paddingHorizontal: 42, borderRadius: 10},
});

export default ConfirmationModal;
