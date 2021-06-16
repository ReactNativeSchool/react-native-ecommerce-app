import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from './Text';
import { money } from '../util/format';
import { Counter } from './QuantityCounter';
import { useCart, useItem } from '../util/cart';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export const CartRow = ({ id }) => {
  const { addItem, removeItem } = useCart(state => ({
    addItem: state.addItem,
    removeItem: state.removeItem,
  }));
  const item = useItem(id);

  return (
    <View style={styles.row}>
      <View>
        <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
        <Text>{money(item.price)}</Text>
      </View>
      <Counter
        type="small"
        quantity={item.quantity}
        onIncrement={() => addItem(item)}
        onDecrement={() => removeItem({ id: item.id })}
      />
    </View>
  );
};
