import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { Text } from '../components/Text';
import colors from '../constants/colors';
import { useCart } from '../util/cart';
import { CartRow } from '../components/CartRow';

const styles = StyleSheet.create({
  emptyContainer: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: 60,
    alignItems: 'center',
  },
  container: {
    backgroundColor: colors.white,
  },
});

export const Cart = () => {
  const { cart } = useCart(state => ({ cart: state.cart }));

  const isEmpty = Object.keys(cart).length === 0;
  if (isEmpty) {
    return (
      <View style={styles.emptyContainer}>
        <Text type="header" style={{ fontSize: 25 }}>
          YOUR CART IS EMPTY
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {Object.keys(cart).map(id => {
        return <CartRow key={id} id={id} />;
      })}
    </ScrollView>
  );
};
