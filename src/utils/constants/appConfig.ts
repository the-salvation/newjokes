export const APP_CONFIG = {
  API_URL: 'https://v2.jokeapi.dev/joke/Programming',
  JOKES_LIMIT: 11,
} as const;

export const STORAGE_KEYS = {
  jokes: 'jokes',
  likedJokes: 'likedJokes',
} as const;
