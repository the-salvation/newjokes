import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store/store';
import { BottomTabNavStack, HomeStack } from '@navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = (): React.JSX.Element => {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <HomeStack />
          {/* <BottomTabNavStack /> */}
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
