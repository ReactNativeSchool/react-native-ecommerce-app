import React from 'react';
import { View } from 'react-native';

import { Button } from '../components/Button';

export const Home = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
    <Button onPress={() => navigation.push('Details')}>Details</Button>
  </View>
);
