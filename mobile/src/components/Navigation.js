import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

export const TabBarIcon = ({ routeName, color, size }) => {
  let src = require('../assets/images/home-outline.png');

  if (routeName === 'Explore') {
    src = require('../assets/images/apps-outline.png');
  }

  if (routeName === 'Explore') {
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
