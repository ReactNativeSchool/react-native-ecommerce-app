import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export const Loading = () => (
  <View style={{ paddingVertical: 20 }}>
    <ActivityIndicator size="large" />
  </View>
);
