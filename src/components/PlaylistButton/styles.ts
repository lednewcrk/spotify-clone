import { StyleSheet } from 'react-native';

import { Theme } from '@config/theme';
import { LOTTIES } from '@assets/lotties';

export const LOTTIE_COLOR_FILTERS = LOTTIES.WAVES.layers.map((it: any) => ({
  keypath: it.nm,
  color: Theme.COLORS.PRIMARY,
}));

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'transparent',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Theme.COLORS.PRIMARY_DARK,
    opacity: 0.7,
  },
  image: {
    width: 52,
    height: 52,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: Theme.SPACING.x1,
  },
  playlistNameContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    flex: 1,
    fontFamily: Theme.FONTS.TITLE,
    fontSize: 12,
    color: Theme.COLORS.GRAY_01,
    paddingRight: Theme.SPACING.x1,
  },
  waves: {
    width: 12,
    height: 12,
  },
  progressBar: {
    marginTop: Theme.SPACING.x1,
  },
});
