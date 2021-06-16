import React, { useEffect } from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';

import { Text } from '../components/Text';
import colors from '../constants/colors';
import { money } from '../util/format';
import { useDetailData } from '../util/api';
import { Loading } from '../components/Loading';
import { QuantityCounter } from '../components/QuantityCounter';
import { useCart } from '../util/cart';

const styles = StyleSheet.create({
  section: {
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginVertical: 15,
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border,
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 15,
  },
});

export const ProductDetail = ({ route }) => {
  const cart = useCart(state => ({
    quantity: state.cart[route.params.id]?.quantity || 0,
    addItem: state.addItem,
    removeItem: state.removeItem,
  }));

  const [data, setData] = React.useState(route.params);

  const res = useDetailData({ id: route.params.id });

  useEffect(() => {
    if (res.isSuccess && res?.data?.data) {
      setData(res.data.data);
    }
  }, [res.isFetching]);

  return (
    <>
      <ScrollView>
        <View style={styles.section}>
          <Image
            source={{ uri: data.image }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={{ flex: 1 }}>
            <Text type="header">{data.name}</Text>
            <Text type="subheader" style={{ marginTop: 5 }}>
              {money(data.price)}
            </Text>
          </View>
        </View>

        <View style={[styles.section, { flexDirection: 'column' }]}>
          <Text type="header">Description</Text>
          {data.isLoading ? <Loading /> : <Text>{data.description}</Text>}
        </View>
      </ScrollView>
      <QuantityCounter
        price={data.price}
        quantity={cart.quantity}
        onDecrement={() => cart.removeItem({ id: data.id })}
        onIncrement={() =>
          cart.addItem({ id: data.id, price: data.price, name: data.name })
        }
      />
    </>
  );
};
