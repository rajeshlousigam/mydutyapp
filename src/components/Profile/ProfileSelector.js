import React from 'react';
import {Text, View, Modal, StyleSheet} from 'react-native';
import CircleButton from '../Button/CircleButton';
import colors from '../../constants/colors';
import useScreenDimensions from '../Hooks/useScreenDimensions';
import themeButtonStyles from '../../styles/themeButtonStyles';
import globalStyles from '../../styles/globalStyles';
import CloseIcon2 from '../../assets/icons/close_2.svg';
const ProfileSelector = ({selectedProfile}) => {
  const {height} = useScreenDimensions('screen');
  const [dialogState, setDialogState] = React.useState(false);
  const selectProfile = index => {
    selectedProfile(profiles[index]);
    setDialogState(false);
  };
  return (
    <>
      <Modal animationType="slide" transparent={true} visible={dialogState}>
        <View style={styles.modalContainer}>
          <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
            <View style={{alignItems: 'center'}}>
              <CircleButton
                onPress={() => selectProfile(0)}
                showIcon={false}
                size={60}
                title={profiles[0]}
                color={colors.white}
                border
                borderWidth={3}
                colors={['#E0CEF6', '#E0CEF6']}
                customTitleStyle={[
                  themeButtonStyles.buttonTitle,
                  {fontSize: 10},
                ]}
              />

              <View style={[globalStyles.row]}>
                <CircleButton
                  onPress={() => selectProfile(1)}
                  showIcon={false}
                  size={60}
                  title={profiles[1]}
                  color={colors.white}
                  border
                  borderWidth={3}
                  colors={['#FF317B', '#FF317B']}
                  customTitleStyle={[
                    themeButtonStyles.buttonTitle,
                    {fontSize: 10},
                  ]}
                />
                <CircleButton
                  onPress={() => selectProfile(2)}
                  style={globalStyles.ml16}
                  showIcon={true}
                  size={60}
                  title=""
                  icon={CloseIcon2}
                  color={colors.white}
                  border
                  borderWidth={3}
                  colors={['#945DD3', '#945DD3']}
                  customTitleStyle={[
                    themeButtonStyles.buttonTitle,
                    {fontSize: 10},
                  ]}
                />
              </View>
              <CircleButton
                onPress={() => selectProfile(-1)}
                showIcon={false}
                size={60}
                title={profiles[2]}
                color={colors.white}
                border
                borderWidth={3}
                colors={['#E0CEF6', '#E0CEF6']}
                customTitleStyle={[
                  themeButtonStyles.buttonTitle,
                  {fontSize: 10},
                ]}
              />
            </View>
          </View>
        </View>
      </Modal>
      <View
        style={{
          position: 'absolute',
          right: 0,
          top: height / 2,
          zIndex: 1,
          marginRight: -30,
        }}>
        <CircleButton
          onPress={() => setDialogState(true)}
          showIcon={false}
          size={60}
          title="Profile"
          color={colors.white}
          border
          borderWidth={3}
          colors={['#945DD3', '#945DD3']}
          style={{
            justifyContent: 'flex-start',

            transform: [{rotate: '270deg'}],
          }}
          customTitleStyle={[
            themeButtonStyles.buttonTitle,
            {marginTop: 10, fontSize: 10},
          ]}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',

    padding: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});
const profiles = ['Helper', 'Needy', 'Awareness'];
export default ProfileSelector;
