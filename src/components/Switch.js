import React from 'react';
import {Switch} from 'react-native-switch';

const ThemeSwitch = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Switch
      value={checked}
      onValueChange={val => setChecked(val)}
      disabled={false}
      circleSize={14}
      barHeight={24}
      circleBorderWidth={0}
      backgroundActive={'#B6A4CE'}
      backgroundInactive={'#FFF'}
      circleActiveColor={'#FFF'}
      circleInActiveColor={'#B6A4CE'}
      containerStyle={{borderWidth: 1, borderColor: '#B6A4CE'}}
      changeValueImmediately={true}
      changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
      innerCircleStyle={{alignItems: 'center', justifyContent: 'center'}} // style for inner animated circle for what you (may) be rendering inside the circle
      outerCircleStyle={{}} // style for outer animated circle
      renderActiveText={false}
      renderInActiveText={false}
      switchLeftPx={1.5} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
      switchRightPx={1.5} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
      switchWidthMultiplier={3.3} // multipled by the `circleSize` prop to calculate total width of the Switch
      switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
    />
  );
};
export default ThemeSwitch;
