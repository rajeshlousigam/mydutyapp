import * as React from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Send from '../../assets/icons/send.svg';
import globalStyles from '../../styles/globalStyles';
import CircleButton from '../Button/CircleButton';
import useScreenDimensions from '../Hooks/useScreenDimensions';
import colors from '../../constants/colors';
import CircleImage from '../CircleImage';
// import {IoIosSend} from 'react-icons/io';

const ChatInputPanel = ({
  onMessageSend,
  support,
  userImage,
  comment,
  onPayPress,
  position,
}) => {
  const [message, setMessage] = React.useState('');
  const sendMessageHandler = () => {
    onMessageSend(message);
    setMessage('');
  };
  const {width} = useScreenDimensions('screen');
  return (
    <View
      style={[
        styles.inputPanelContainer,
        {width: width - (support ? 58 : comment ? 58 : 10)},
        position && {position},
      ]}>
      {comment && <CircleImage size={44} uri={userImage} />}
      {support && (
        <CircleButton
          onPress={onPayPress}
          border
          borderWidth={4}
          color={colors.textTertiary}
          colors={[colors.white, colors.white]}
          customTitleStyle={[
            globalStyles.font12,
            globalStyles.bold,
            {color: colors.black},
          ]}
          showIcon={false}
          size={50}
          title="Pay"
        />
      )}
      <View
        style={[
          globalStyles.row,
          globalStyles.alignCenter,
          styles.inputContainer,
          globalStyles.shadow,
          globalStyles.px20,
          globalStyles.ml8,
        ]}>
        <TextInput
          multiline={true}
          style={{flex: 1, marginRight: 10}}
          value={message}
          onChangeText={text => setMessage(text)}
          placeholder="Type your message..."
        />

        <TouchableOpacity onPress={sendMessageHandler}>
          <Send size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputPanelContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    right: 0,
    left: 0,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
  },
  inputContainer: {backgroundColor: '#FBFBFB', borderRadius: 20},
});
export default ChatInputPanel;
