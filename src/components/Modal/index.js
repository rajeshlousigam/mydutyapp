/* This module is developed by Dhruv Sachdeva 
`  Github - https://github.com/entebyt/
*/
import * as React from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
const ReactNativeModal = ({visible, children}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContentContainer}>{children}</View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',

    padding: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalContentContainer: {
    paddingHorizontal: 30,
    paddingVertical: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  modalCloseIconContainer: {paddingVertical: 10, alignItems: 'flex-end'},
});
export default ReactNativeModal;
