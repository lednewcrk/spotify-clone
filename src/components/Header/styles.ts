import { StyleSheet } from 'react-native';

import { Theme } from '@config/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Theme.SPACING.x3,
    justifyContent: 'space-between',
  },
  rightIconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: Theme.SPACING.x3,
  },
});
