import { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { HISTORY_ICON_DIMENSIONS } from "@utils";
import { LikeButton } from "@components";
import { Joke } from "@types";

import { styles } from './style';

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
      </Text>
      <Text style={styles.jokeDeliveryText}>
        {joke.delivery ? '\n\n' + joke.delivery : ''}
      </Text>
    </View>
    <TouchableOpacity
      // onPress={() => onToggleLike(joke.id)} // not sure if we need a possibility to toggle likes in history
      style={[styles.likeButton, isLiked && styles.likeButtonActive]}
      activeOpacity={1}
    >
      <LikeButton isLiked={isLiked} sizes={HISTORY_ICON_DIMENSIONS} />
    </TouchableOpacity>
  </View>
);
