import React, { useState } from 'react';
import {
  Image,
  ImageProps,
  LayoutChangeEvent,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import LottieView from 'lottie-react-native';
import { Bar as ProgressBar } from 'react-native-progress';

import { LOTTIE_COLOR_FILTERS, styles } from './styles';

import { Theme } from '@config/theme';
import { LOTTIES } from '@assets/lotties';
import { Dot } from '@components/Dot';

export type PlaylistButtonProps = TouchableOpacityProps & {
  image: ImageProps['source'];
  name: string;
  isPlaying?: boolean;
  hasNewContent?: boolean;
  progressInPercent?: number;
};

export function PlaylistButton({
  image,
  name,
  style,
  activeOpacity = Theme.TOUCHABLES.ACTIVE_OPACITY,
  isPlaying,
  hasNewContent,
  progressInPercent,
  ...rest
}: PlaylistButtonProps) {
  const [contentWidth, setContentWidth] = useState<number | null>(null);

  function handleContentLayout(event: LayoutChangeEvent) {
    setContentWidth(event.nativeEvent.layout.width);
  }

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={activeOpacity}
      {...rest}>
      <View style={styles.background} />
      <Image source={image} style={styles.image} />
      <View style={styles.content} onLayout={handleContentLayout}>
        <View style={styles.playlistNameContainer}>
          <Text style={styles.name} numberOfLines={2}>
            {name}
          </Text>
          {isPlaying && (
            // @ts-ignore
            <LottieView
              autoPlay
              loop
              style={styles.waves}
              source={LOTTIES.WAVES}
              colorFilters={LOTTIE_COLOR_FILTERS}
            />
          )}
          {hasNewContent && <Dot />}
        </View>

        {progressInPercent && contentWidth && (
          // @ts-ignore
          <ProgressBar
            color={Theme.COLORS.PRIMARY}
            unfilledColor={Theme.COLORS.GRAY_03}
            progress={progressInPercent / 100}
            height={4}
            width={contentWidth - Theme.SPACING.x2}
            borderWidth={0}
            style={styles.progressBar}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
