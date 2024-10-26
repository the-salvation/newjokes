import { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { HISTORY_ICON_DIMENSIONS } from "@utils";
import { Joke } from "@types";

import { styles } from './style';
import { LikeButton } from "@components";

interface JokeCardProps {
  joke: Joke,
  isLiked: boolean,
  onToggleLike: (id: number) => void
}

export const HistoryJokeCard: FC<JokeCardProps> = ({ joke, isLiked, onToggleLike }) => (
  <View style={styles.jokeCard}>
    <View style={styles.jokeContent}>
      <Text style={styles.jokeText}>
        {joke.setup || joke.joke}
        {joke.delivery ? '\n\n' + joke.delivery : ''}
      </Text>
    </View>
    <TouchableOpacity
      onPress={() => onToggleLike(joke.id)}
      style={[styles.likeButton, isLiked && styles.likeButtonActive]}
    >
      <LikeButton isLiked={isLiked} sizes={HISTORY_ICON_DIMENSIONS} />
    </TouchableOpacity>
  </View>
);
