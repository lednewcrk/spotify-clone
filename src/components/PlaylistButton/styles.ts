import { StyleSheet } from 'react-native';

import { Theme } from '@config/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: Theme.dimensions.device_width * 0.15,
    height: Theme.dimensions.device_width * 0.15,
  },
  content: {
    paddingHorizontal: Theme.spacing.x1,
    justifyContent: 'center',
  },
  name: {
    fontFamily: Theme.fonts.Inter_700Bold,
    fontSize: 12,
    color: Theme.colors.gray_01,
  },
});
