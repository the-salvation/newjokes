import React from 'react';
import { SafeAreaView, Text, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './store/store';
import { HomeStack } from '@navigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      {/* <SafeAreaView style={backgroundStyle}> */}
      <SafeAreaProvider>
        <NavigationContainer>
          <Text>Hello World</Text>
          <HomeStack />
        </NavigationContainer>
      </SafeAreaProvider>
      {/* </SafeAreaView> */}
    </Provider>
  );
};

export default App;
