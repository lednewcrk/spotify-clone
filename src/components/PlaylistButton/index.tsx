import { Theme } from '@config/theme';
import React from 'react';
import {
  Image,
  ImageProps,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import { styles } from './styles';

export interface PlaylistButtonProps extends TouchableOpacityProps {
  image: ImageProps['source'];
  name: string;
}

export function PlaylistButton({
  image,
  name,
  style,
  activeOpacity = Theme.TOUCHABLES.ACTIVE_OPACITY,
  ...rest
}: PlaylistButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={activeOpacity}
      {...rest}>
      <View style={styles.background} />
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
