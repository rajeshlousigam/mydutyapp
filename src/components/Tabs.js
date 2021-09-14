/* This module is developed by Dhruv Sachdeva 
`  Github - https://github.com/entebyt/
*/
import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import useScreenDimensions from './Hooks/useScreenDimensions';

const Tabs = ({
  tabsContainerStyle = defaultStyles.defaultTabsContainerStyle,
  selectedTabStyle = defaultStyles.selectedTabStyle,
  tabStyle = defaultStyles.defaultTabStyle,
  tabTextStyle = defaultStyles.defaultTabTextStyle,
  tabs,
  defaultTabIndex,
  scrollable,
}) => {
  const [state, setState] = React.useState({
    tabIndex: defaultTabIndex,
  });

  return (
    <>
      {scrollable ? (
        <ScrollView horizontal contentContainerStyle={{paddingBottom: 8}}>
          {tabs.map((tab, index) => (
            <Tab
              tabStyle={tabStyle}
              tabTextStyle={[tabTextStyle]}
              selectedTabStyle={selectedTabStyle}
              index={index}
              tabIndex={state.tabIndex}
              tabFunction={tab.function}
              title={tab.title}
              setIndex={tabIndex => setState({tabIndex})}
            />
          ))}
        </ScrollView>
      ) : (
        <View style={tabsContainerStyle}>
          {tabs.map((tab, index) => (
            <Tab
              tabStyle={tabStyle}
              tabTextStyle={tabTextStyle}
              selectedTabStyle={selectedTabStyle}
              index={index}
              tabIndex={state.tabIndex}
              tabFunction={tab.function}
              title={tab.title}
              setIndex={tabIndex => setState({tabIndex})}
            />
          ))}
        </View>
      )}
    </>
  );
};
export default Tabs;
const Tab = ({
  tabIndex,
  tabFunction,
  setIndex,
  title,
  index,
  selectedTabStyle,
  tabStyle,
  tabTextStyle,
}) => (
  <TouchableOpacity
    disabled={index == tabIndex}
    style={[tabStyle, index == tabIndex ? selectedTabStyle : {}]}
    onPress={() => {
      setIndex(index);
      tabFunction(index);
    }}>
    <Text style={tabTextStyle}>{title}</Text>
  </TouchableOpacity>
);
const defaultStyles = StyleSheet.create({
  defaultTabsContainerStyle: {flexDirection: 'row'},
  defaultTabStyle: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 14,
    backgroundColor: '#fff',
    borderRadius: 12,
    opacity: 0.6,
  },
  selectedTabStyle: {opacity: 1},
  defaultTabTextStyle: {fontSize: 12, fontWeight: 'bold'},
});
