import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ArrowIcon from '../../assets/icons/arrow_right_square.svg';
import globalStyles from '../../styles/globalStyles';
const InfoCard = ({
  showArrow,
  background,
  icon: Icon,
  style,
  color,
  title,
  value,
}) => (
  <View style={[styles.container, {backgroundColor: background}, style]}>
    <View style={[globalStyles.row, globalStyles.alignCenter]}>
      <View style={styles.iconContainer}>{Icon ? <Icon /> : null}</View>
      <View style={globalStyles.ml16}>
        <Text style={[globalStyles.font15, {color}]}>{title}</Text>
        <Text style={[globalStyles.mt8, {color, fontSize: 10}]}>{value}</Text>
      </View>
    </View>
    {showArrow ? (
      <View style={styles.iconContainer}>
        <ArrowIcon />
      </View>
    ) : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    paddingVertical: 13,
    borderRadius: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 21,
  },
  iconContainer: {height: 24, width: 24, alignItems: 'center'},
});
export default InfoCard;
