import { FlatList, View } from 'react-native';
import { Joke } from '@types';
import { styles } from './style';

interface JokesListProps {
  jokesHistory: Joke[];
  renderItem: ({ item }: { item: Joke }) => JSX.Element;
}

export const JokesList: React.FC<JokesListProps> = ({ jokesHistory, renderItem }) => {
  return (
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
  );
};

