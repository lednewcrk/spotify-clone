import React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { ITEMS } from './raw';
import { styles } from './styles';

import {
  PlaylistButton,
  PlaylistButtonProps,
} from '@components/PlaylistButton';
import { Theme } from '@config/theme';
import { Title } from '@components/Title';

export function HomeScreen() {
  function renderPlaylistButton({
    item,
  }: ListRenderItemInfo<PlaylistButtonProps>) {
    return <PlaylistButton {...item} style={styles.playlistButton} />;
  }

  function handleKeyExtractor(item: PlaylistButtonProps, index: number) {
    return index.toString();
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={Theme.COLORS.PRIMARY_GRADIENT}
      start={{ x: 0.2, y: 0 }}
      end={{ x: 0.3, y: 0.16 }}>
      <Title>Boa tarde</Title>
      <FlatList<PlaylistButtonProps>
        data={ITEMS}
        renderItem={renderPlaylistButton}
        keyExtractor={handleKeyExtractor}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.contentContainer}
      />
    </LinearGradient>
  );
}
