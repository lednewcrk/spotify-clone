import { Theme } from '@config/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  title: {
    fontFamily: Theme.FONTS.TITLE,
    fontSize: 24,
    lineHeight: 29,
    color: Theme.COLORS.GRAY_01,
  },
});
