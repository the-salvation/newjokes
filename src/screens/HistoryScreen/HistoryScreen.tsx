import { View, FlatList, SafeAreaView } from 'react-native';
import { Header, JokesList } from '@components';

import { styles } from './style';
import { useJokesHistory } from '@hooks';

export const HistoryScreen = () => {
  const { jokesHistory, renderItem } = useJokesHistory();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header text="History" style={styles.header} />
        <JokesList jokesHistory={jokesHistory} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
};
