import React from 'react';
import {Text, View} from 'react-native';
import Input from '../Input';
import themeInputStyles from '../../styles/themeInputStyles';
import globalStyles from '../../styles/globalStyles';
import CheckBox from '../Checkbox';
import colors from '../../constants/colors';
import MonthPicker from 'react-native-month-year-picker';

const CardForm = ({
  cardName,
  setcardName,
  cardNumber,
  setcardNumber,
  date,
  setdate,
  cvv,
  setcvv,
  showDate,
  setshowDate,
  onValueChange,
}) => (
  <View>
    <View
      style={[
        globalStyles.px20,
        globalStyles.py16,
        globalStyles.shadow,
        globalStyles.pt4,

        globalStyles.mt40,
        globalStyles.whiteBackground,
        {borderRadius: 10},
      ]}>
      <Input
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,

          {borderLeftWidth: 0},
        ]}
        customlabelStyle={[themeInputStyles.label, {marginLeft: 0}]}
        showLabel
        label="Card Number"
        placeholder={'XXXX - XXXX - XXXX - XXXX'}
        value={cardNumber}
        maxLength={16}
        onChangeText={e => {
          setcardNumber(e.replace(/[- #*$;,.<>\{\}\[\]\\\/\D]/gi, ''));
        }}
        keyboardType="number-pad"
      />
    </View>
    <View
      style={[
        globalStyles.px20,
        globalStyles.py16,
        globalStyles.shadow,
        globalStyles.pt4,

        globalStyles.mt40,
        globalStyles.whiteBackground,
        {borderRadius: 10},
      ]}>
      <Input
        customContainerStyle={[
          themeInputStyles.primaryInputStyle,

          {borderLeftWidth: 0},
        ]}
        customlabelStyle={[themeInputStyles.label, {marginLeft: 0}]}
        showLabel
        label="Card Holder Name"
        placeholder={'Eg. Rajendra Kumar Verma'}
        value={cardName}
        onChangeText={e => {
          setcardName(e);
        }}
      />
    </View>
    <View style={[globalStyles.row, globalStyles.mt40]}>
      <View
        style={[
          globalStyles.px20,
          globalStyles.py16,
          globalStyles.shadow,
          globalStyles.pt4,

          globalStyles.flex1,
          globalStyles.mr12,
          globalStyles.whiteBackground,
          {borderRadius: 10},
        ]}>
        <Input
          customContainerStyle={[
            themeInputStyles.primaryInputStyle,

            {borderLeftWidth: 0},
          ]}
          customlabelStyle={[themeInputStyles.label, {marginLeft: 0}]}
          showLabel
          label="Valid Date"
          placeholder={`${new Date(date).getMonth()} / ${new Date(
            date,
          ).getFullYear()}`}
          keyboardType="number-pad"
          // value={}
          disabled
          onTouchEnd={() => setshowDate(true)}
          onChangeText={e => {
            // setdate(e);
          }}
        />

        {showDate && (
          <MonthPicker
            onChange={onValueChange}
            value={date}
            minimumDate={new Date()}
            maximumDate={new Date(2025, 5)}
            locale="en"
          />
        )}
      </View>
      <View
        style={[
          globalStyles.px20,
          globalStyles.py16,
          globalStyles.shadow,
          globalStyles.pt4,
          globalStyles.ml12,
          globalStyles.flex1,
          globalStyles.whiteBackground,
          {borderRadius: 10},
        ]}>
        <Input
          customContainerStyle={[
            themeInputStyles.primaryInputStyle,

            {borderLeftWidth: 0},
          ]}
          customlabelStyle={[themeInputStyles.label, {marginLeft: 0}]}
          showLabel
          label="CVV  Number"
          placeholder={'XXX'}
          keyboardType="number-pad"
          value={cvv}
          maxLength={3}
          onChangeText={e => {
            setcvv(e);
          }}
        />
      </View>
    </View>
    <View style={[globalStyles.mt40, globalStyles.row]}>
      <CheckBox
        size={30}
        style={{backgroundColor: colors.gray, borderRadius: 5}}
        color={{checked: '#943993', blur: '#943993'}}
      />
      <View style={globalStyles.flex1}>
        <Text
          style={[
            globalStyles.ml12,
            globalStyles.font15,
            {color: colors.textprimary},
          ]}>
          Want To Save Card Details (CVV won’t saved)
        </Text>
      </View>
    </View>
  </View>
);

export default CardForm;
