import create from 'zustand';

export const useCart = create(set => ({
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
}));
