import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from 'react-query';
import { StripeProvider } from '@stripe/stripe-react-native';
import { STRIPE_PUBLIC } from '@env';

import { Main } from './navigation/Main';
import * as Analytics from './util/analytics';

const queryClient = new QueryClient();

export default function App() {
  const navigationRef = React.useRef();
  const routeNameRef = React.useRef();

  return (
    <StripeProvider publishableKey={STRIPE_PUBLIC}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            routeNameRef.current = navigationRef.current.getCurrentRoute().name;
          }}
          onStateChange={async () => {
            const previousRouteName = routeNameRef.current;
            const currentRouteName =
              navigationRef.current.getCurrentRoute().name;

            if (previousRouteName !== currentRouteName) {
              Analytics.trackScreen(currentRouteName);
            }

            routeNameRef.current = currentRouteName;
          }}
        >
          <Main />
        </NavigationContainer>
      </QueryClientProvider>
    </StripeProvider>
  );
}
