import React from 'react';
import { View } from 'react-native';

import { Button } from '../components/Button';
import { Loading } from '../components/Loading';
import { useHomeData } from '../util/api';

export const Home = ({ navigation }) => {
  const { isLoading } = useHomeData();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Button onPress={() => navigation.push('Details')}>Details</Button>
    </View>
  );
};
