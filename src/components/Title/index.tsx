import React from 'react';
import { Text, TextProps } from 'react-native';

import { styles } from './styles';

interface TitleProps extends TextProps {}

export function Title({ style, ...rest }: TitleProps) {
  return <Text style={[styles.title, style]} {...rest} />;
}
