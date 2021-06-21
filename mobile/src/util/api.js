import { useQuery, useMutation } from 'react-query';
import { useStripe } from '@stripe/stripe-react-native';

import { useAuth } from './auth';

const API_URL = 'http://localhost:3000/api';

const appFetch = (path, options = {}) =>
  fetch(`${API_URL}${path}`, options).then(res => res.json());

export const useSignIn = () => {
  const setToken = useAuth(state => state.setToken);

  return useMutation(
    ({ email, password }) => {
      return appFetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
    },
    {
      onSuccess: data => {
        if (!data.token) {
          throw new Error(data.message);
        }

        setToken(data.token);
      },
    },
  );
};

export const useSignUp = () => {
  const setToken = useAuth(state => state.setToken);

  return useMutation(
    ({ email, password }) => {
      return appFetch('/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
    },
    {
      onSuccess: data => {
        if (!data.token) {
          throw new Error(data.message);
        }

        setToken(data.token);
      },
    },
  );
};

export const useHomeData = () => {
  return useQuery('home', () => appFetch('/products/trending'));
};

export const useExploreData = () => {
  return useQuery('explore', () => appFetch('/products/explore'));
};

export const useDetailData = ({ id }) => {
  return useQuery(`details-${id}`, () => appFetch(`/product/${id}`));
};

export const usePayment = (cart = {}) => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const authToken = useAuth(state => state.token);

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        cart,
      }),
    });
    const { paymentIntent } = await response.json();

    return {
      paymentIntent,
    };
  };

  const checkout = async () => {
    const { paymentIntent } = await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      paymentIntentClientSecret: paymentIntent,
    });

    if (!error) {
      return presentPaymentSheet({ clientSecret: paymentIntent });
    }

    return null;
  };

  return { checkout };
};
