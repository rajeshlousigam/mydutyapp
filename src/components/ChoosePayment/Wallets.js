import React from 'react';
import {Text, View} from 'react-native';
import AmazonPayIcon from '../../assets/icons/amazon.svg';
import PaytmIcon from '../../assets/icons/paytm.svg';
import globalStyles from '../../styles/globalStyles';
import colors from '../../constants/colors';
const Wallets = ({params}) => (
  <View style={[globalStyles.px8, globalStyles.row, globalStyles.py40]}>
    <View style={globalStyles.alignCenter}>
      <AmazonPayIcon />
      <Text
        style={[
          globalStyles.mt16,
          globalStyles.font16,
          globalStyles.textCenter,
          {color: colors.textprimary},
        ]}>
        Amazon Pay
      </Text>
    </View>
    <View style={[globalStyles.alignCenter, globalStyles.ml32]}>
      <PaytmIcon />
      <Text
        style={[
          globalStyles.mt16,
          globalStyles.font16,
          globalStyles.textCenter,
          {color: colors.textprimary},
        ]}>
        Paytm
      </Text>
    </View>
  </View>
);

export default Wallets;
