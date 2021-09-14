import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Container from '../components/Container';
import globalStyles from '../styles/globalStyles';
import colors from '../constants/colors';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

// icons
import CardIcon from '../assets/icons/card.svg';
import WalletIcon from '../assets/icons/wallet.svg';
import BankingIcon from '../assets/icons/banking.svg';
import Button from '../components/Button/ThemeButton';
import CardForm from '../components/ChoosePayment/CardForm';
import Wallets from '../components/ChoosePayment/Wallets';
import RazorpayCheckout from 'react-native-razorpay';
import Toast from 'react-native-toast-message';

const ChoosePayment = ({navigation, route}) => {
  const [cardNumber, setcardNumber] = React.useState('');
  const [cardName, setcardName] = React.useState('');
  const [date, setdate] = React.useState(new Date());
  const [cvv, setcvv] = React.useState('');
  const [saveCard, setsaveCard] = React.useState(false);
  const [method, setmethod] = React.useState('');
  const [showDate, setshowDate] = React.useState(false);

  const onValueChange = React.useCallback(
    (event, newDate) => {
      const selectedDate = newDate || date;

      setshowDate(false);
      setdate(selectedDate);
    },
    [date, showDate],
  );

  const onPayment = async () => {
    try {
      if (!method) {
        Toast.show({
          type: 'error',
          text1: 'Select A Payment Method',
        });
        return;
      }
      let options = {};

      if (method === 'card') {
        if (!cardName || !cardNumber || !cvv) {
          Toast.show({
            type: 'error',

            text1: 'All Card Details Required',
          });
          return;
        }

        options = {
          description: 'Credits towards consultation',
          image: 'https://i.imgur.com/3g7nmJC.png',
          currency: 'INR',
          key: 'rzp_test_KCGaME19hx9sjU', // Your api key
          amount: Math.floor(Number(route.params) * 100),

          name: 'foo',

          prefill: {
            email: 'void@razorpay.com',
            contact: '9191919191',
            name: cardName,
            method: 'card',
            'card[name]': cardName,
            'card[number]': cardNumber,
            'card[expiry]': `${
              String(new Date(date).getMonth()).length < 2
                ? String(`0${new Date(date).getMonth()}`)
                : String(new Date(date).getMonth())
            }/${String(new Date(date).getFullYear()).substr(2)}`,
            'card[cvv]': cvv,
          },
          theme: {color: '#F37254'},
        };
      } else if (method === 'netbanking') {
        options = {
          description: 'Credits towards consultation',
          image: 'https://i.imgur.com/3g7nmJC.png',
          currency: 'INR',
          key: 'rzp_test_KCGaME19hx9sjU', // Your api key
          amount: route.params,
          name: 'foo',

          prefill: {
            email: 'void@razorpay.com',
            contact: '9191919191',
            name: 'Razorpay Software',
            method: 'netbanking',
          },
          theme: {color: '#F37254'},
        };
      } else if (method === 'upi') {
        options = {
          description: 'Credits towards consultation',
          image: 'https://i.imgur.com/3g7nmJC.png',
          currency: 'INR',
          key: 'rzp_test_KCGaME19hx9sjU', // Your api key
          amount: Number(route.params),
          name: 'foo',

          prefill: {
            email: 'void@razorpay.com',
            contact: '9191919191',
            name: 'Razorpay Software',
            method: 'upi',
          },
          theme: {color: '#F37254'},
        };
      } else if (method === 'wallet') {
        options = {
          description: 'Credits towards consultation',
          image: 'https://i.imgur.com/3g7nmJC.png',
          currency: 'INR',
          key: 'rzp_test_KCGaME19hx9sjU', // Your api key
          amount: route.params,
          name: 'foo',

          prefill: {
            email: 'void@razorpay.com',
            contact: '9191919191',
            name: 'Razorpay Software',
            method: 'wallet',
          },
          theme: {color: '#F37254'},
        };
      }
      let options1 = {
        description: 'Credits towards consultation',
        image: 'https://i.imgur.com/3g7nmJC.png',
        currency: 'INR',
        key: 'rzp_test_KCGaME19hx9sjU', // Your api key
        amount: '5000',
        name: 'foo',
        prefill: {
          email: 'void@razorpay.com',
          contact: '9191919191',
          name: 'Razorpay Software',
        },
        theme: {color: '#F37254'},
      };

      let payment = await RazorpayCheckout.open(options1);
      // .then(data => {
      //   console.log(data);
      //   // handle success
      //   alert(`Success: ${data.razorpay_payment_id}`);
      // })
      // .catch(error => {
      //   // handle failure
      //   alert(`Error: ${error.code} | ${error.description}`);
      // });
    } catch (error) {
      console.log(error);
      if (error.code == 0) {
        return;
      }
      Toast.show({
        type: 'error',
        text1: 'Something Went Wrong',
      });
    }
  };
  return (
    <Container
      scroll
      showHeader
      headerProps={{titleType: 'title3', title: 'Choose Payment'}}>
      <View style={globalStyles.px30}>
        <Text style={[globalStyles.font20, globalStyles.bold]}>
          Choose Payment Action
        </Text>
        <Text
          style={[
            globalStyles.font15,
            globalStyles.mt12,
            {color: colors.textprimary},
          ]}>
          Choose one of categories which suited you most
        </Text>
        <Option
          icon={CardIcon}
          title={'Debit / Credit Card'}
          method="card"
          content={
            <CardForm
              cardName={cardName}
              setcardName={setcardName}
              cardNumber={cardNumber}
              setcardNumber={setcardNumber}
              date={date}
              setdate={setdate}
              cvv={cvv}
              setcvv={setcvv}
              saveCard={saveCard}
              setsaveCard={setsaveCard}
              showDate={showDate}
              setshowDate={setshowDate}
              onValueChange={onValueChange}
            />
          }
          setmethod={setmethod}
        />
        <Option
          icon={BankingIcon}
          method="netbanking"
          title={'Net Banking'}
          setmethod={setmethod}
        />
        <Option
          icon={WalletIcon}
          method="wallet"
          title={'Wallet'}
          content={<Wallets />}
          setmethod={setmethod}
        />
        <Option
          method="upi"
          icon={BankingIcon}
          title={'UPI'}
          setmethod={setmethod}
        />
        <View style={[globalStyles.mt80, globalStyles.px20]}>
          <Button
            onPress={onPayment}
            // navigation.replace('Complete', {
            //   displayText: 'You have paid successfully',
            //   link: 'Chat',
            // })

            title={
              <Text>
                Pay {'  '}
                <Text style={globalStyles.bold}>₹ {route.params}</Text>
              </Text>
            }
          />
        </View>
      </View>
    </Container>
  );
};

const Option = ({icon: Icon, content, title, method, setmethod = () => {}}) => {
  const [expand, toggleAccordian] = React.useState(false);
  return (
    <View
      style={[
        globalStyles.whiteBackground,
        globalStyles.shadow,
        globalStyles.mt40,
        globalStyles.px16,
        globalStyles.py16,
        {borderRadius: 10},
      ]}>
      <TouchableWithoutFeedback
        onPress={() => {
          toggleAccordian(!expand);
          setmethod(method);
        }}
        style={[globalStyles.row, globalStyles.alignCenter]}>
        <View style={styles.iconContainer}>
          <Icon />
        </View>
        <Text
          style={[
            globalStyles.ml32,
            globalStyles.font15,
            {color: colors.textprimary},
          ]}>
          {title}
        </Text>
      </TouchableWithoutFeedback>
      {expand && <>{content}</>}
    </View>
  );
};
const styles = StyleSheet.create({
  iconContainer: {
    height: 45,
    width: 45,
    backgroundColor: '#F9F0FF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ChoosePayment;
