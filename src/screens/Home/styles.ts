import { Theme } from '@config/theme';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const CONTAINER_H_SPACING = Theme.SPACING.x1 * 5; // 3 right, 2 left
const LIST_H_SPACING = Theme.SPACING.x1 * 2; // Horizontal padding
const PLAYLIST_BUTTON_WIDTH =
  (Theme.DIMENSIONS.DEVICE_WIDTH - CONTAINER_H_SPACING - LIST_H_SPACING) / 2;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight() + Theme.SPACING.x3,
    paddingLeft: Theme.SPACING.x2,
    paddingRight: Theme.SPACING.x3,
  },
  playlistButton: {
    flex: 0,
    width: PLAYLIST_BUTTON_WIDTH,
    marginBottom: Theme.SPACING.x1,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  contentContainer: {
    paddingLeft: Theme.SPACING.x1,
  },
});
