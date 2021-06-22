import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  SectionList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Text } from './Text';
import colors from '../constants/colors';
import { money } from '../util/format';

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
  sectionHeader: {
    marginTop: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderTopColor: colors.border,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  itemImage: {
    width: screen.width * 0.4,
    height: screen.width * 0.4,
  },
  itemCard: { flex: 1, padding: 10 },
  cardTitle: { fontWeight: 'bold', marginVertical: 5 },
  sectionList: {
    backgroundColor: colors.background,
  },
  content: {
    paddingBottom: 100,
  },
});

export const SectionHeader = ({ children }) => (
  <View style={styles.sectionHeader}>
    <Text type="header">{children}</Text>
  </View>
);

export const SectionFooter = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: colors.border,
      height: StyleSheet.hairlineWidth,
    }}
  />
);

export const ItemCard = ({ name, price, image, onPress }) => (
  <TouchableOpacity style={styles.itemCard} onPress={onPress}>
    <Image
      source={{ uri: image }}
      style={styles.itemImage}
      resizeMode="cover"
    />
    <Text style={styles.cardTitle}>{name}</Text>
    <Text>{money(price)}</Text>
  </TouchableOpacity>
);

export const ProductList = ({ sections = [] }) => {
  const navigation = useNavigation();

  return (
    <SectionList
      style={styles.sectionList}
      contentContainerStyle={styles.content}
      sections={sections}
      renderItem={({ index, section }) => {
        // We do this to simulate numColumns in FlatList. This will only work for 2 column layout.

        // We only want to do this on odd columns so we don't duplicate items.
        if (index % 2 !== 0) return null;

        const item = section.data[index];
        const nextItem = section.data[index + 1];

        const onPress = itemToSend => {
          navigation.push('Details', {
            id: itemToSend.id,
            name: itemToSend.name,
            price: itemToSend.price,
            image: itemToSend.image,
          });
        };

        return (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
            }}
          >
            <ItemCard {...item} onPress={() => onPress(item)} />
            {nextItem ? (
              <ItemCard {...nextItem} onPress={() => onPress(nextItem)} />
            ) : (
              <View style={{ flex: 1 }} />
            )}
          </View>
        );
      }}
      renderSectionHeader={({ section }) => (
        <SectionHeader>{section.title}</SectionHeader>
      )}
      renderSectionFooter={() => <SectionFooter />}
      stickySectionHeadersEnabled={false}
    />
  );
};
