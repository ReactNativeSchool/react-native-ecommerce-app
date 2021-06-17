import { useQuery } from 'react-query';
import { useStripe } from '@stripe/stripe-react-native';

const API_URL = 'http://localhost:3000/api';

const appFetch = (path, options = {}) =>
  fetch(`${API_URL}${path}`, options).then(res => res.json());

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

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${API_URL}/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
