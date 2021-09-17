import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Container from '../components/Container';
import MyChat from '../components/Chat/MyChat';
import UserChat from '../components/Chat/UserChat';
import List from '../components/List';
import ChatInputPanel from '../components/Chat/ChatInput';
import useScreenDimensions from '../components/Hooks/useScreenDimensions';
import globalStyles from '../styles/globalStyles';
import CallIcon from '../assets/icons/call_white.svg';
import BottomModal from '../components/Modal/BottomModal';
import Button from '../components/Button/ThemeButton';
import Input from '../components/Input';
import colors from '../constants/colors';
const Chat = ({navigation, route}) => {
  const onMessageSend = () => {};
  const [visible, toggleModal] = React.useState(false);
  const [amount, setamount] = React.useState('');
  const support = route.params?.support;
  return (
    <Container
      showHeader
      style={[globalStyles.p0, {marginTop: -80}]}
      headerProps={{headerStyle: styles.headerStyle}}>
      <View style={styles.backgroundContainer}>
        <View style={{marginTop: 100}}>
          <View
            style={[
              globalStyles.row,
              globalStyles.spaceBetween,
              globalStyles.px40,
              globalStyles.alignCenter,
            ]}>
            <View style={[globalStyles.row]}>
              <Image
                style={styles.user}
                source={{
                  uri:
                    'https://static.billboard.com/files/media/Lee-Burridge-lost-desert-2016-billboard-1548-compressed.jpg',
                }}
              />
              <View style={globalStyles.ml24}>
                <Text
                  style={[
                    globalStyles.font18,
                    globalStyles.bold,
                    {color: colors.white},
                  ]}>
                  {!support ? 'Kuldeep Singh' : 'Support'}
                </Text>
                <View style={[styles.active, globalStyles.mt8]} />
              </View>
            </View>
            {support && <CallIcon />}
          </View>
        </View>
      </View>
      <View style={[globalStyles.flex1, globalStyles.mb20]}>
        <List
          contentContainerStyle={[globalStyles.mx8, globalStyles.listBottom2]}
          data={[
            {
              uid: '1',
              createdAt: '11:27 AM',
              userName: '1',
              message: (
                <Text style={{fontWeight: 'normal', lineHeight: 18}}>
                  <Text style={{color: 'rgba(34, 33, 91, 0.6)'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare pretium placerat ut platea.
                  </Text>
                </Text>
              ),
            },
            {
              uid: '',
              createdAt: '12:27 PM',
              message: (
                <Text style={{fontWeight: 'normal', lineHeight: 18}}>
                  <Text style={{color: '#943993', borderBottomWidth: 1}}>
                    https://www.businessinsider.com/what-is-my-instagram-url?IR=T
                  </Text>
                  <Text style={{color: 'rgba(34, 33, 91, 0.6)'}}>
                    This link is associated with the post where user commented
                    and and clicked on the contact admin button.
                  </Text>
                </Text>
              ),
            },
            {
              uid: '',
              createdAt: '12:27 PM',
              message: (
                <Text style={{fontWeight: 'normal', lineHeight: 18}}>
                  <Text style={{color: '#943993', borderBottomWidth: 1}}>
                    https://www.businessinsider.com/what-is-my-instagram-url?IR=T
                  </Text>
                  <Text style={{color: 'rgba(34, 33, 91, 0.6)'}}>
                    This link is associated with the post where user commented
                    and and clicked on the contact admin button.
                  </Text>
                </Text>
              ),
            },
            {
              uid: '',
              createdAt: '12:27 PM',
              message: (
                <Text style={{fontWeight: 'normal', lineHeight: 18}}>
                  <Text style={{color: '#943993', borderBottomWidth: 1}}>
                    https://www.businessinsider.com/what-is-my-instagram-url?IR=T
                  </Text>
                  <Text style={{color: 'rgba(34, 33, 91, 0.6)'}}>
                    This link is associated with the post where user commented
                    and and clicked on the contact admin button.
                  </Text>
                </Text>
              ),
            },
            {
              uid: '',
              createdAt: '12:27 PM',
              message: (
                <Text style={{fontWeight: 'normal', lineHeight: 18}}>
                  <Text style={{color: '#943993', borderBottomWidth: 1}}>
                    https://www.businessinsider.com/what-is-my-instagram-url?IR=T
                  </Text>
                  <Text style={{color: 'rgba(34, 33, 91, 0.6)'}}>
                    This link is associated with the post where user commented
                    and and clicked on the contact admin button.
                  </Text>
                </Text>
              ),
            },
          ]}
          type="scroll"
          listItem={ChatList}
        />

        <ChatInputPanel
          support={support}
          onPayPress={() => toggleModal(!visible)}
          onMessageSend={onMessageSend}
        />
      </View>
      <BottomModal visible={visible} toggleModal={() => toggleModal(!visible)}>
        <View style={globalStyles.px60}>
          <Input
            textAlign="center"
            style={[
              {
                fontSize: 60,
                color: colors.textTertiary,
              },
              globalStyles.flex1,
              globalStyles.bold,
            ]}
            value={amount}
            keyboardType="number-pad"
            onChangeText={e =>
              setamount(e.replace(/[- #*$;,.<>\{\}\[\]\\\/\D]/gi, ''))
            }
          />
          <View style={[globalStyles.mt12]}>
            <Button
              disabled={!amount}
              onPress={() => {
                toggleModal(!visible);

                navigation.replace('Choose Payment', amount);
              }}
              title="Pay"
            />
          </View>
        </View>
      </BottomModal>
    </Container>
  );
};

const ChatList = props =>
  props.userName === props.uid ? (
    <MyChat {...props} />
  ) : (
    <UserChat {...props} />
  );
const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    top: -80,
    height: 310,
  },
  backgroundContainer: {
    backgroundColor: '#CAAFEE',
    height: 200,
  },
  active: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: colors.white,
    backgroundColor: '#46C077',
    padding: 2,
  },
  headerStyle: {backgroundColor: null},
  user: {height: 40, width: 40, borderRadius: 10},
});
export default Chat;
