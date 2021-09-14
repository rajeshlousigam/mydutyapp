import * as React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import Header from './Header';
import BottomNavigator from './BottomNavigtor';

const Container = ({
  scroll,
  children,
  headerProps,
  showHeader,
  showFooter,
  footerProps,
  backgroundSource,
  ...rest
}) => {
  if (scroll) {
    return (
      <>
        {showHeader && <Header {...headerProps} />}
        <ScrollView
          contentContainerStyle={[styles.container, rest.contentContainerStyle]}
          {...rest}
          style={rest.style}>
          {children}
        </ScrollView>
        {showFooter && <BottomNavigator {...footerProps} />}
      </>
    );
  }
  return (
    <>
      {showHeader && <Header {...headerProps} />}

      <View style={[styles.container, styles.flex, rest.style]}>
        {children}
      </View>
      {showFooter && <BottomNavigator {...footerProps} />}
    </>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {padding: 20, backgroundColor: '#fff'},
  flex: {flex: 1},
});
