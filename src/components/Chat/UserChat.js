import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CircleImage from '../CircleImage';
import globalStyles from '../../styles/globalStyles';
const UserChat = ({userName, message, createdAt}) => {
  return (
    <View>
      <View style={[globalStyles.row, globalStyles.mt30]}>
        <View style={styles.chatContainer}>
          <Text style={styles.messageText}>{message}</Text>
        </View>
        <CircleImage
          style={globalStyles.ml8}
          uri={
            'https://imgproxy.ra.co/_/plain//images/profiles/square/leeburridge.jpg'
          }
          size={50}
        />
      </View>
      <View>
        <Text>{createdAt}</Text>
      </View>
    </View>
  );
};
export default UserChat;
const styles = StyleSheet.create({
  messageText: {
    fontWeight: 'bold',
  },
  chatContainer: {
    padding: 15,
    backgroundColor: 'rgba(236, 229, 236, 1)',
    marginBottom: 10,
    width: '80%',
    borderRadius: 20,
    marginRight: 16,
  },
});
