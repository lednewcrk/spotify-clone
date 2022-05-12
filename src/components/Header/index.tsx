import React from 'react';
import { View } from 'react-native';

import { styles } from './styles';

import { Title } from '@components/Title';
import { Icon, IconProps } from '@components/Icon';

export type HeaderProps = {
  title?: string;
  rightIcons?: IconProps[];
};

export function Header({ title, rightIcons }: HeaderProps) {
  return (
    <View style={styles.container}>
      {/* @ts-ignore */}
      <Title text={title} />
      <View style={styles.rightIconsContainer}>
        {rightIcons?.map((item, index) => (
          <Icon
            key={`HEADER_RIGHT_ICON_${index}`}
            {...item}
            style={index + 1 !== rightIcons.length && styles.icon}
          />
        ))}
      </View>
    </View>
  );
}
