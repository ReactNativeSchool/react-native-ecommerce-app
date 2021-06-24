import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import colors from '../constants/colors';

export const Loading = () => (
  <View style={{ paddingVertical: 20 }}>
    <ActivityIndicator size="large" color={colors.brand} />
  </View>
);
