import { Joke } from '@types';

import { APP_CONFIG } from '../constants/appConfig';

export const fetchJokeFromAPI = async (): Promise<Joke> => {
  try {
    const response = await fetch(APP_CONFIG.API_URL);
    const joke: Joke = await response.json();
    return joke;
  } catch (error) {
    console.error('Error fetching joke:', error);
    throw error;
  }
};
