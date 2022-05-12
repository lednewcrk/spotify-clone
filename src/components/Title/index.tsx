import React from 'react';
import { Text, TextProps } from 'react-native';

import { styles } from './styles';

export type TitleProps = TextProps & {
  text?: string;
};

export function Title({ style, children, text, ...rest }: TitleProps) {
  return (
    <Text style={[styles.title, style]} {...rest}>
      {children || text}
    </Text>
  );
}
