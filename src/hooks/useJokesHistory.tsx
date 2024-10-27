import { useCallback, useEffect, useMemo } from 'react';

import { getSavedJokes } from '@storage';
import { jokesSelector, setJokesHistory, toggleLike, useAppDispatch, useAppSelector } from '@store';

import { HistoryJokeCard } from '@components';
import { Joke } from '@types';

export const useJokesHistory = () => {
  const dispatch = useAppDispatch();
  const { jokesHistory, likedJokes } = useAppSelector(jokesSelector);

  const onToggleLike = (id: number) => dispatch(toggleLike(id));
  const memoizedOnToggleLike = useCallback(onToggleLike, []);

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
      onToggleLike={memoizedOnToggleLike}
    />
  ), [likedJokes]);

  return { jokesHistory, renderItem };
};
