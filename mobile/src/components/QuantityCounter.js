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
  btnTextSmall: {
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  priceText: {
    fontWeight: 'bold',
  },
});

export const Counter = ({ quantity, onDecrement, onIncrement, type }) => {
  const btnTextStyles = [styles.btnText];
  if (type === 'small') {
    btnTextStyles.push(styles.btnTextSmall);
  }

  return (
    <View style={styles.counter}>
      <TouchableOpacity style={styles.btn} onPress={onDecrement}>
        <Text style={btnTextStyles}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity style={styles.btn} onPress={onIncrement}>
        <Text style={btnTextStyles}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export const QuantityCounter = ({
  price,
  quantity = 0,
  onDecrement,
  onIncrement,
}) => {
  return (
    <View style={styles.container}>
      <Counter
        quantity={quantity}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
      />
      <Text style={styles.priceText}>{money(price)}</Text>
    </View>
  );
};
