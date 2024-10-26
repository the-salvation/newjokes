import { View, FlatList, SafeAreaView } from 'react-native';
import { Header } from '@components';

import { styles } from './style';
import { useJokesHistory } from '@hooks';

export const HistoryScreen = () => {
  const { jokesHistory, renderItem } = useJokesHistory();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Header text="History" style={styles.header} />
        <FlatList
          data={jokesHistory}
          keyExtractor={(item, idx) => item.id.toString() + idx}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          overScrollMode="never"
          bounces
        />
      </View>
    </SafeAreaView>
  );
};
