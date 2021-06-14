import { useQuery } from 'react-query';

const API_URL = 'http://localhost:3000/api';

const appFetch = (path, options = {}) =>
  fetch(`${API_URL}${path}`, options).then(res => res.json());

export const useHomeData = () => {
  return useQuery('home', () => appFetch('/products/trending'));
};

export const useExploreData = () => {
  return useQuery('explore', () => appFetch('/products/explore'));
};
