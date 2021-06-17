import React from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';

import { Text } from '../components/Text';
import colors from '../constants/colors';
import { useCart, cartTotal } from '../util/cart';
import { CartRow } from '../components/CartRow';
import { money } from '../util/format';
import { usePayment } from '../util/api';
import { Button } from '../components/Button';

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
  summaryContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderTopColor: colors.border,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});

export const Cart = ({ navigation }) => {
  const { cart, clearCart } = useCart(state => ({
    cart: state.cart,
    clearCart: state.clearCart,
  }));
  const { checkout } = usePayment(cart);

  const onCheckout = async () => {
    try {
      const { error } = await checkout();
      if (!error) {
        Alert.alert('Success', 'Your order is confirmed!');
        clearCart();
        navigation.popToTop();
        navigation.goBack(null);
      } else {
        console.log('error', error);
      }
    } catch (error) {
      Alert.alert('Sorry', 'Something went wrong.');
      console.log(error);
    }
  };

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
      <View style={styles.summaryContainer}>
        <Text>
          <Text style={{ fontWeight: 'bold' }}>Total: </Text>
          {money(cartTotal(cart))}
        </Text>

        <View style={{ marginTop: 20 }}>
          <Button onPress={onCheckout}>Checkout</Button>
        </View>
      </View>
    </ScrollView>
  );
};
