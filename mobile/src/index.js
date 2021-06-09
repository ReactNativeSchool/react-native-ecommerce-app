import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Main } from './navigation/Main';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
