import React from 'react';
import {
  Image,
  ImageProps,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { ICONS } from '@assets/index';
import { Theme } from '@config/theme';

export type IconProps = {
  name: keyof typeof ICONS;
  size?: number;
  color?: string;
  onPress?: TouchableOpacityProps['onPress'];
  style?: ImageProps['style'];
};

export function Icon({
  name,
  size = 26,
  color = Theme.COLORS.GRAY_01,
  style,
  onPress,
  ...rest
}: IconProps) {
  const source = ICONS[name];
  const iconStyle = {
    width: size,
    height: size,
    tintColor: color,
  };
  return (
    <TouchableOpacity
      activeOpacity={Theme.TOUCHABLES.ACTIVE_OPACITY}
      onPress={onPress}>
      <Image {...rest} source={source} style={[style, iconStyle]} />
    </TouchableOpacity>
  );
}
