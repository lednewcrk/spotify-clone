import { Dimensions } from 'react-native';

const { width: device_width, height: device_height } = Dimensions.get('window');

export const Theme = {
  dimensions: {
    device_width,
    device_height,
  },
  colors: {
    primary: '#27B559',
    secondary: '#4887CD',
    gray_01: '#FEFFFF',
    gray_02: '#B2B2B2',
    gray_gradient: ['#606362', '#353E3D', '#2B2D2C'],
  },
  spacing: {
    x1: 8,
    x2: 16,
    x3: 24,
  },
  fonts: {
    Inter_600SemiBold: 'Inter_600SemiBold',
    Inter_700Bold: 'Inter_700Bold',
  },
};
