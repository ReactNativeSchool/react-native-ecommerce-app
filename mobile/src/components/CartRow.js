import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from './Text';
import { money } from '../util/format';
import { Counter } from './QuantityCounter';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export const CartRow = ({ name, price, quantity = 0 }) => (
  <View style={styles.row}>
    <View>
      <Text style={{ fontWeight: 'bold' }}>{name}</Text>
      <Text>{money(price)}</Text>
    </View>
    <Counter type="small" quantity={quantity} />
  </View>
);
