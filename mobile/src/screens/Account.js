import React from 'react';
import { View } from 'react-native';

import { Button } from '../components/Button';
import { useAuth } from '../util/auth';

export const Account = ({ navigation }) => {
  const { token, removeToken } = useAuth(state => ({
    token: state.token,
    removeToken: state.removeToken,
  }));
  const isLoggedIn = token !== null;

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      {isLoggedIn ? (
        <Button onPress={() => removeToken()}>Log Out</Button>
      ) : (
        <Button onPress={() => navigation.push('Auth')}>Login</Button>
      )}
    </View>
  );
};
