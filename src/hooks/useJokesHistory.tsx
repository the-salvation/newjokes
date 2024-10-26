import { useEffect, useMemo } from 'react';

import { getSavedJokes } from '@storage';
import { jokesSelector, setJokesHistory, toggleLike, useAppDispatch, useAppSelector } from '@store';

import { HistoryJokeCard } from '@components';
import { Joke } from '@types';

export const useJokesHistory = () => {
  const dispatch = useAppDispatch();
  const { jokesHistory, likedJokes } = useAppSelector(jokesSelector);

  useEffect(() => {
    const loadJokes = async () => {
      const jokes = await getSavedJokes();

      dispatch(setJokesHistory(jokes));
    };
    loadJokes();
  }, [dispatch]);

  const renderItem = useMemo(() => ({ item }: { item: Joke }) => (
    <HistoryJokeCard
      joke={item}
      isLiked={likedJokes[item.id]}
      onToggleLike={(id) => dispatch(toggleLike(id))}
    />
  ), [likedJokes]);

  return { jokesHistory, renderItem };
};
