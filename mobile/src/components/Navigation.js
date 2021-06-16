import React from 'react';
import { Image, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Text } from './Text';
import colors from '../constants/colors';
import { useCart, cartQuantity } from '../util/cart';

const styles = StyleSheet.create({
  headerIconEmbellishment: {
    position: 'absolute',
    top: -8,
    right: 3,
    backgroundColor: colors.brand,
    width: 15,
    height: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const TabBarIcon = ({ routeName, color, size }) => {
  let src = require('../assets/images/home-outline.png');

  if (routeName === 'Explore') {
    src = require('../assets/images/apps-outline.png');
  }

  if (routeName === 'Account') {
    src = require('../assets/images/person-circle-outline.png');
  }

  return (
    <Image
      source={src}
      style={{
        width: size,
        height: size,
        tintColor: color,
      }}
    />
  );
};

export const HeaderIcon = ({ name, onPress, style = {} }) => {
  let src;

  switch (name) {
    case 'cart':
      src = require('../assets/images/cart-outline.png');
      break;
    case 'close':
    default:
      src = require('../assets/images/close-outline.png');
      break;
  }

  return (
    <TouchableOpacity onPress={onPress} style={{ paddingHorizontal: 10 }}>
      <Image source={src} style={[{ width: 25, height: 25 }, style]} />
    </TouchableOpacity>
  );
};

export const CartIcon = () => {
  const navigation = useNavigation();
  const { cart } = useCart(state => ({ cart: state.cart }));
  const quantity = cartQuantity(cart);

  return (
    <View>
      <HeaderIcon name="cart" onPress={() => navigation.push('Cart')} />
      {quantity > 0 && (
        <View style={styles.headerIconEmbellishment}>
          <Text
            style={{ color: colors.white, fontWeight: 'bold', fontSize: 12 }}
          >
            {quantity}
          </Text>
        </View>
      )}
    </View>
  );
};
