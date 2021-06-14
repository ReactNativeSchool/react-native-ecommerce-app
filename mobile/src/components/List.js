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
  row: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: colors.white,
  },
  titleText: {
    fontWeight: 'bold',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
  },
  sectionHeader: {
    marginTop: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderTopColor: colors.border,
    borderTopWidth: 1,
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

export const ListItem = ({ title, subtitle, onPress = () => null }) => {
  const rowStyles = [styles.row];

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={rowStyles}>
        <Text style={styles.titleText}>{title}</Text>
        <Text>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const ListSeparator = () => <View style={styles.separator} />;

export const SectionHeader = ({ children }) => (
  <View style={styles.sectionHeader}>
    <Text type="header">{children}</Text>
  </View>
);

export const SectionFooter = () => (
  <View style={{ flex: 1, backgroundColor: colors.border, height: 1 }} />
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

        const onPress = () => {
          navigation.push('Details');
        };

        return (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#fff',
            }}
          >
            <ItemCard {...item} onPress={onPress} />
            {nextItem ? (
              <ItemCard {...nextItem} onPress={onPress} />
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
