import React from 'react';

import { Loading } from '../components/Loading';
import { useExploreData } from '../util/api';

export const Explore = () => {
  const res = useExploreData();
  const { isLoading, data } = res;

  if (isLoading) {
    return <Loading />;
  }

  console.log(data);
  return null;
};
