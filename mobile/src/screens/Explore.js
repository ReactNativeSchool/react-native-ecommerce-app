import React from 'react';

import { Loading } from '../components/Loading';
import { useExploreData } from '../util/api';
import { ProductList } from '../components/List';

export const Explore = () => {
  const res = useExploreData();
  const { isLoading, data } = res;

  if (isLoading) {
    return <Loading />;
  }

  const sections = data.categories.map(category => ({
    title: category.name,
    data: category.products,
    items: undefined,
  }));

  return <ProductList sections={sections} />;
};
