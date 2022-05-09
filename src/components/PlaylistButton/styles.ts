import { StyleSheet } from 'react-native';

import { Theme } from '@config/theme';

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
    paddingHorizontal: Theme.SPACING.x1,
    justifyContent: 'center',
  },
  name: {
    fontFamily: Theme.FONTS.TITLE,
    fontSize: 12,
    color: Theme.COLORS.GRAY_01,
  },
});
