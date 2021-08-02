import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';

import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.brand,
    paddingVertical: 14,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.brand,
    marginVertical: 7,
  },
  containerLoading: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.disabled,
  },
  indicatorsStyles: {
    color: colors.secondary,
    marginLeft: 16,
  },
  textLoading: {
    marginRight: 6,
  },
  containerOutline: {
    backgroundColor: 'transparent',
    borderColor: colors.border,
  },
  
  text: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  textOutline: {
    color: colors.brand,
  },
});

export const Button = ({
  onPress = () => {},
  children = '',
  type,
  isLoading = false,
}) => {
  const containerStyles = [styles.container];
  const textStyles = [styles.text];

  if (type === 'outline') {
    containerStyles.push(styles.containerOutline);
    textStyles.push(styles.textOutline);
  }
  if (isLoading) {
    containerStyles.push(styles.containerLoading);
    textStyles.push(styles.textLoading);
    return (
      <View style={containerStyles}>
        <Text style={textStyles}>{children}</Text>
        <ActivityIndicator size="small" color={styles.indicatorsStyles.color}/>
      </View>
    );
  }
  return (
    <TouchableOpacity onPress={onPress} style={containerStyles}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};
