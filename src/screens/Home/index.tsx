import React, { useMemo } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Toast from 'react-native-root-toast';

import { PLAYLIST_BUTTONS_ITEMS, FEATURED_ITEM } from './raw';
import { styles } from './styles';

import {
  PlaylistButton,
  PlaylistButtonProps,
} from '@components/PlaylistButton';
import { Theme } from '@config/theme';
import { Header, HeaderProps } from '@components/Header';
import { FeaturedButton } from '@components/FeaturedButton';

let toast: any;
function featureNotImplementedToast() {
  toast && Toast.hide(toast);
  toast = Toast.show('This feature is not implemented yet.');
}

export function HomeScreen() {
  const headerRightIcons: HeaderProps['rightIcons'] = useMemo(
    () => [
      { name: 'CLOCK', onPress: featureNotImplementedToast },
      { name: 'GEAR', onPress: featureNotImplementedToast },
    ],
    [],
  );

  function renderPlaylistButton({
    item,
  }: ListRenderItemInfo<PlaylistButtonProps>) {
    return (
      <PlaylistButton
        {...item}
        style={styles.playlistButton}
        onPress={featureNotImplementedToast}
      />
    );
  }

  function handleKeyExtractor(item: PlaylistButtonProps, index: number) {
    return `PLAYLIST_BUTTON_${index}`;
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={Theme.COLORS.PRIMARY_GRADIENT}
      start={{ x: 0.2, y: 0 }}
      end={{ x: 0.3, y: 0.16 }}>
      <Header title="Boa tarde" rightIcons={headerRightIcons} />
      <View style={styles.playlistButtonListWrapper}>
        <FlatList<PlaylistButtonProps>
          data={PLAYLIST_BUTTONS_ITEMS}
          contentContainerStyle={styles.contentContainer}
          columnWrapperStyle={styles.columnWrapper}
          renderItem={renderPlaylistButton}
          keyExtractor={handleKeyExtractor}
          numColumns={2}
        />
      </View>
      <FeaturedButton
        title={FEATURED_ITEM.title}
        image={FEATURED_ITEM.image}
        onPress={featureNotImplementedToast}
      />
    </LinearGradient>
  );
}
