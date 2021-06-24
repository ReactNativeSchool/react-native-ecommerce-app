import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from 'react-query';
import { StripeProvider } from '@stripe/stripe-react-native';
import { STRIPE_PUBLIC } from '@env';

import { Main } from './navigation/Main';

const queryClient = new QueryClient();

export default function App() {
  return (
    <StripeProvider publishableKey={STRIPE_PUBLIC}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Main />
        </NavigationContainer>
      </QueryClientProvider>
    </StripeProvider>
  );
}
