import { Theme } from './types';

export const lightTheme: Theme = {
  colors: {
    primary: '#FF5722', // Material Design Orange 500
    secondary: '#FFA000', // Material Design Amber 700
    background: '#FFFFFF',
    surface: '#F5F5F5',
    error: '#B00020',
    text: {
      primary: '#212121',
      secondary: '#757575',
      disabled: '#9E9E9E',
      inverse: '#FFFFFF',
    },
    border: '#E0E0E0',
    divider: '#BDBDBD',
    shadow: 'rgba(0, 0, 0, 0.1)',
    success: '#4CAF50',
    warning: '#FFC107',
    info: '#2196F3',
    card: {
      background: '#FFFFFF',
      border: '#E0E0E0',
    },
    bottomBar: {
      background: '#FFFFFF',
      active: '#FF5722',
      inactive: '#757575',
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    full: 9999,
  },
  typography: {
    h1: {
      fontSize: 32,
      lineHeight: 40,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 24,
      lineHeight: 32,
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 20,
      lineHeight: 28,
      fontWeight: 'bold',
    },
    body1: {
      fontSize: 16,
      lineHeight: 24,
    },
    body2: {
      fontSize: 14,
      lineHeight: 20,
    },
    caption: {
      fontSize: 12,
      lineHeight: 16,
    },
  },
};
