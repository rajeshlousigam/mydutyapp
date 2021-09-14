import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import CircleImage from '../CircleImage';
const MyChat = ({userName, message, createdAt}) => {
  return (
    <View>
      <View style={[globalStyles.row, globalStyles.mt30]}>
        <CircleImage
          style={[globalStyles.mr24]}
          uri={
            'https://imgproxy.ra.co/_/plain//images/profiles/square/leeburridge.jpg'
          }
          size={50}
        />
        <View style={[styles.chatContainer]}>
          <Text style={styles.messageText}>{message}</Text>
        </View>
      </View>
      <View style={globalStyles.alignEnd}>
        <Text>{createdAt}</Text>
      </View>
    </View>
  );
};
export default MyChat;
const styles = StyleSheet.create({
  messageText: {
    fontWeight: 'bold',
    lineHeight: 20,
  },
  chatContainer: {
    alignSelf: 'flex-end',
    padding: 15,
    maxWidth: '80%',
    minWidth: '40%',
    marginBottom: 10,
    backgroundColor: '#fafafa',
    marginLeft: 16,
    borderRadius: 8,
  },
  justifyBetween: {flexDirection: 'row', justifyContent: 'space-between'},
});
