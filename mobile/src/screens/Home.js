import React from 'react';

import { ProductList } from '../components/List';
import { Loading } from '../components/Loading';
import { useHomeData } from '../util/api';

export const Home = () => {
  const res = useHomeData();
  const { isLoading, data } = res;

  if (isLoading) {
    return <Loading />;
  }

  const sections = data?.data?.map(d => ({
    ...d,
    data: d.items,
    items: undefined,
  }));

  return <ProductList sections={sections} />;
};
