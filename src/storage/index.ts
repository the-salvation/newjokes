import { JOKES_LIMIT } from '@utils';
import { MMKV } from 'react-native-mmkv';

import { Joke } from '@types';

const storage = new MMKV();

const storageKeys = {
  jokes: 'jokes',
  likedJokes: 'likedJokes',
} as const;

export const saveJoke = async (joke: Joke) => {
  const jokes = await getSavedJokes();
  const likedJokes = JSON.parse(storage.getString(storageKeys.likedJokes) || '{}') as Record<string, boolean>;

  if (jokes.length >= JOKES_LIMIT) {
    const oldestJoke = jokes.shift();
    const isOldestLiked = oldestJoke && likedJokes[oldestJoke.id];

    if (isOldestLiked) delete likedJokes[oldestJoke.id];
  }

  jokes.push(joke);

  storage.set(storageKeys.jokes, JSON.stringify(jokes));
  storage.set(storageKeys.likedJokes, JSON.stringify(likedJokes));
};

export const getSavedJokes = async (): Promise<Joke[]> => {
  const jokesString = storage.getString(storageKeys.jokes);
  return jokesString ? JSON.parse(jokesString) : [];
};

export const saveLikedJokes = (likedJokes: Record<string, boolean>) => {
  storage.set(storageKeys.likedJokes, JSON.stringify(likedJokes));
};

export const getLikedJokes = (): Record<string, boolean> => {
  const likedJokesString = storage.getString(storageKeys.likedJokes);
  return likedJokesString ? JSON.parse(likedJokesString) : {};
};
