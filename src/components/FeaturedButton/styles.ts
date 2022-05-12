import { Theme } from '@config/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  image: {
    width: Theme.DIMENSIONS.DEVICE_WIDTH * 0.35,
    height: Theme.DIMENSIONS.DEVICE_WIDTH * 0.35,
    marginRight: Theme.SPACING.x1,
  },
  title: {
    flex: 1,
    fontSize: 18,
    lineHeight: 18,
    fontFamily: Theme.FONTS.TITLE,
    color: Theme.COLORS.GRAY_01,
  },
});
