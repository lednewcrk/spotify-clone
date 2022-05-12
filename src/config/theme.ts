import { Dimensions } from 'react-native';

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');

export const Theme = {
  DIMENSIONS: {
    DEVICE_WIDTH,
    DEVICE_HEIGHT,
  },
  COLORS: {
    PRIMARY: '#27B559',
    PRIMARY_DARK: '#2B2D2C',
    SECONDARY: '#4887CD',
    GRAY_01: '#FEFFFF',
    GRAY_02: '#B2B2B2',
    GRAY_03: '#8E9090',
    GRAY_GRADIENT: ['#606362', '#353E3D', '#2B2D2C'],
    PRIMARY_GRADIENT: ['#3C5657', '#121212'],
  },
  SPACING: {
    x1: 8,
    x2: 16,
    x3: 24,
    x4: 32,
  },
  FONTS: {
    TEXT: 'Inter_600SemiBold',
    TITLE: 'Inter_700Bold',
  },
  TOUCHABLES: {
    ACTIVE_OPACITY: 0.77,
  },
};
