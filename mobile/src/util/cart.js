import create from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useCart = create(
  persist(
    set => ({
      cart: {},
      addItem: ({ id, name, price }) =>
        set(state => {
          const cart = { ...state.cart };
          if (!cart[id]) {
            cart[id] = {
              id,
              name,
              price,
              quantity: 0,
            };
          }

          cart[id].quantity += 1;

          return { cart };
        }),
      removeItem: ({ id }) =>
        set(state => {
          const cart = { ...state.cart };

          if (!cart[id]) {
            return { cart };
          }

          const quantity = cart[id].quantity - 1;

          if (quantity <= 0) {
            delete cart[id];
          } else {
            cart[id].quantity = quantity;
          }

          return { cart };
        }),
    }),
    {
      name: 'cart',
      getStorage: () => AsyncStorage,
    },
  ),
);
