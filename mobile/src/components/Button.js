import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
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
    borderColor: colors.disabled,
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
  textLoading: {
    marginRight: 12,
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

  const isOutline = type === 'outline';
  if (isOutline) {
    containerStyles.push(styles.containerOutline);
    textStyles.push(styles.textOutline);
  }

  if (isLoading) {
    containerStyles.push(styles.containerLoading);
    textStyles.push(styles.textLoading);
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={containerStyles}
      disabled={isLoading}
    >
      <Text style={textStyles}>{children}</Text>
      {isLoading && (
        <ActivityIndicator
          size="small"
          color={isOutline ? colors.brand : colors.white}
        />
      )}
    </TouchableOpacity>
  );
};
