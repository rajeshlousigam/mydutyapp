import React from 'react';
import {Text, View} from 'react-native';
import BottomModal from '../Modal/BottomModal';
import globalStyles from '../../styles/globalStyles';
import {SectionHeader} from '../../screens/FIlters';
import ThemeCheckbox from '../Checkbox/ThemeCheckbox';
import Button from '../Button/ThemeButton';

const ChangeStatusModal = ({toggleModal, visible}) => (
  <BottomModal
    contentStyle={globalStyles.p0}
    visible={visible}
    toggleModal={() => toggleModal(!visible)}>
    <View style={[globalStyles.py24, globalStyles.my8]}>
      <SectionHeader
        // style={{marginHorizontal: 0, marginTop: 40}}
        title="Change the Status Of the Post"
      />
      <View style={[globalStyles.mt20]}>
        <ThemeCheckbox title="Active" status={'Active'} />
      </View>
      <View style={[globalStyles.mt16]}>
        <ThemeCheckbox title="Pending" status={'Pending'} />
      </View>
      <View style={[globalStyles.mt16]}>
        <ThemeCheckbox title="Completed" status={'Completed'} />
      </View>
      <View style={[globalStyles.mt16, globalStyles.px40]}>
        <Button
          onPress={() => {
            toggleModal(!visible);
          }}
          title="Update"
        />
      </View>
    </View>
  </BottomModal>
);

export default ChangeStatusModal;
