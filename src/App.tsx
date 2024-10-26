import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store/store';
import { HomeStack } from '@navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = (): React.JSX.Element => {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <HomeStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
