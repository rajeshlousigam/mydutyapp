import React, {useEffect, useReducer} from 'react';
import MainNavigation from './navigation/mainNavigation';
import {View} from 'react-native';
import {Context, reducer, initialState} from './utils/store';
import configureStore from './store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import Toast from 'react-native-toast-message';

const {persistor, store} = configureStore();
const App = () => {
  const [showSplash, setShowSplash] = React.useState(true);
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 2000);
  }, []);
  return (
    <>
      <Provider store={store}>
        <PersistGate
          persistor={persistor}
          onBeforeLift={() =>
            new Promise(resolve => setTimeout(resolve, 2000))
          }>
          <Context.Provider value={{state, dispatch}}>
            {showSplash ? <View /> : <MainNavigation />}
          </Context.Provider>
        </PersistGate>
      </Provider>
      <Toast ref={ref => Toast.setRef(ref)} />
    </>
  );
};
export default App;
