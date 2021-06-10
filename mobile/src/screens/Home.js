import React from 'react';
import { StyleSheet, SectionList, View } from 'react-native';

import { SectionHeader, SectionFooter, ItemCard } from '../components/List';
import { Loading } from '../components/Loading';
import { useHomeData } from '../util/api';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  sectionList: {
    backgroundColor: colors.background,
  },
  content: {
    paddingBottom: 100,
  },
});

export const Home = ({ navigation }) => {
  const res = useHomeData();
  const { isLoading, data } = res;

  if (isLoading) {
    return <Loading />;
  }

  const sections = data.data.map(d => ({
    ...d,
    data: d.items,
    items: undefined,
  }));

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
