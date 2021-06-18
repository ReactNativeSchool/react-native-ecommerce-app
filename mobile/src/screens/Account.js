import React from 'react';
import { View } from 'react-native';

import { Button } from '../components/Button';
import { useAuth } from '../util/auth';

export const Account = ({ navigation }) => {
  const token = useAuth(state => state.token);
  const isLoggedIn = token !== null;

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      {isLoggedIn ? (
        <Button onPress={() => console.log('todo')}>Log Out</Button>
      ) : (
        <Button onPress={() => navigation.push('Auth')}>Login</Button>
      )}
    </View>
  );
};
