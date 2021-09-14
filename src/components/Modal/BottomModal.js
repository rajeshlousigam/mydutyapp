/* This module is developed by Dhruv Sachdeva 
`  Github - https://github.com/entebyt/
*/
import * as React from 'react';
import {View, Text, StyleSheet, Modal, Pressable} from 'react-native';
import colors from '../../constants/colors';
import globalStyles from '../../styles/globalStyles';
const BottomModal = ({visible, toggleModal, children, contentStyle}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <Pressable onPress={toggleModal} style={globalStyles.flex1} />
        <View style={[styles.modalContentContainer, contentStyle]}>
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContentContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.textTertiary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalCloseIconContainer: {paddingVertical: 10, alignItems: 'flex-end'},
});
export default BottomModal;
