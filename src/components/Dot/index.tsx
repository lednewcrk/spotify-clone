import { Theme } from '@config/theme';
import React from 'react';
import { View, ViewStyle } from 'react-native';

import { styles } from './styles';

export type DotProps = {
  color?: string;
  size?: number;
};

export function Dot({ color = Theme.COLORS.SECONDARY, size = 10 }: DotProps) {
  const style: ViewStyle = {
    backgroundColor: color,
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  return <View style={[styles.container, style]} />;
}
