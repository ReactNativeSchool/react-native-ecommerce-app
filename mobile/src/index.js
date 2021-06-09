import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { Main } from './navigation/Main';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </>
  );
}
