import { Theme } from '@config/theme';
import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const FLAT_LIST_GAP = Theme.SPACING.x1;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight() + Theme.SPACING.x3,
    paddingHorizontal: Theme.SPACING.x2,
  },
  playlistButton: {
    marginRight: Theme.SPACING.x1,
    marginBottom: Theme.SPACING.x1,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  contentContainer: {
    paddingHorizontal: Theme.SPACING.x1,
  },
});
