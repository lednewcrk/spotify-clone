import React from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';

import {
  PlaylistButton,
  PlaylistButtonProps,
} from '@components/PlaylistButton';

import { ITEMS } from './raw';

import { styles } from './styles';

export function HomeScreen() {
  function renderPlaylistButton({
    item,
  }: ListRenderItemInfo<PlaylistButtonProps>) {
    return <PlaylistButton {...item} />;
  }

  function handleKeyExtractor(item: PlaylistButtonProps, index: number) {
    return index.toString();
  }

  return (
    <View style={styles.container}>
      <FlatList<PlaylistButtonProps>
        data={ITEMS}
        renderItem={renderPlaylistButton}
        keyExtractor={handleKeyExtractor}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  );
}
