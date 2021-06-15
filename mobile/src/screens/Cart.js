import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from '../components/Text';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  emptyContainer: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
  },
});

export const Cart = () => {
  return (
    <View style={styles.emptyContainer}>
      <Text type="header" style={{ fontSize: 25 }}>
        YOUR CART IS EMPTY
      </Text>
    </View>
  );
};
