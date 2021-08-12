import { AppState } from 'react-native';
import Forage from 'react-native-forage';

import { FORAGE_KEY } from '@env';

export const configure = () => {
  return Forage.start(FORAGE_KEY, AppState);
};

export const setUserId = userId => {
  return Forage.setUserId(userId);
};

export const trackEvent = (eventName, details = {}) => {
  return Forage.trackEvent(eventName, details);
};

export const trackScreen = screenName => {
  return Forage.trackScreen(screenName);
};

export const startTimer = name => {
  // return Forage.addTimer(name);
  // return () => endTimer(name);
};

export const endTimer = name => {
  // return Forage.endTimer(name);
};
