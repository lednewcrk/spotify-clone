import React from 'react';
import { Text, TextProps } from 'react-native';

import { styles } from './styles';

export type TitleProps = TextProps;

export function Title({ style, ...rest }: TitleProps) {
  return <Text style={[styles.title, style]} {...rest} />;
}
