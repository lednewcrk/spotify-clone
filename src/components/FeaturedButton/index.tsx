import { Theme } from '@config/theme';
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { styles } from './styles';

export type FeaturedButtonProps = TouchableOpacityProps & {
  image: string;
  title: string;
};

export function FeaturedButton({
  image,
  title,
  style,
  ...rest
}: FeaturedButtonProps) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={Theme.TOUCHABLES.ACTIVE_OPACITY}
      style={[styles.container, style]}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
