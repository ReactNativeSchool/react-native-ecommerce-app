import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../constants/colors';
import { Text } from './Text';
import { money } from '../util/format';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  counter: {
    flexDirection: 'row',
    backgroundColor: '#E0E0E0',
    marginVertical: 10,
    alignItems: 'center',
  },
  quantityText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 20,
    paddingVertical: 15,
    paddingHorizontal: 25,
    color: '#707070',
  },
  priceText: {
    fontWeight: 'bold',
  },
});

export const QuantityCounter = ({
  price,
  quantity = 0,
  onDecrement,
  onIncrement,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.counter}>
        <TouchableOpacity style={styles.btn} onPress={onDecrement}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity style={styles.btn} onPress={onIncrement}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.priceText}>{money(price)}</Text>
    </View>
  );
};
