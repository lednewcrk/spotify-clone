import React from 'react';
import { Image, ImageProps, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { Theme } from '@config/theme';

export interface PlaylistButtonProps {
  image: ImageProps['source'];
  name: string;
}

export function PlaylistButton({ image, name }: PlaylistButtonProps) {
  return (
    <LinearGradient
      style={styles.container}
      colors={Theme.colors.gray_gradient}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </LinearGradient>
  );
}
