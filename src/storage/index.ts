import { APP_CONFIG, STORAGE_KEYS } from '@utils';
import { MMKV } from 'react-native-mmkv';

import { Joke } from '@types';

const storage = new MMKV();

export const saveJoke = async (joke: Joke) => {
  const jokes = await getSavedJokes();
  const likedJokes = JSON.parse(storage.getString(STORAGE_KEYS.likedJokes) || '{}') as Record<string, boolean>;

  if (jokes.length >= APP_CONFIG.JOKES_LIMIT) {
    const oldestJoke = jokes.shift();
    const isOldestLiked = oldestJoke && likedJokes[oldestJoke.id];

    if (isOldestLiked) delete likedJokes[oldestJoke.id];
  }

  jokes.push(joke);

  storage.set(STORAGE_KEYS.jokes, JSON.stringify(jokes));
  storage.set(STORAGE_KEYS.likedJokes, JSON.stringify(likedJokes));
};

export const getSavedJokes = async (): Promise<Joke[]> => {
  const jokesString = storage.getString(STORAGE_KEYS.jokes);
  return jokesString ? JSON.parse(jokesString) : [];
};

export const saveLikedJokes = (likedJokes: Record<string, boolean>) => {
  storage.set(STORAGE_KEYS.likedJokes, JSON.stringify(likedJokes));
};

export const getLikedJokes = (): Record<string, boolean> => {
  const likedJokesString = storage.getString(STORAGE_KEYS.likedJokes);
  return likedJokesString ? JSON.parse(likedJokesString) : {};
};
