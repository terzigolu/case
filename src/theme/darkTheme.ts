import { Theme } from './types';

export const darkTheme: Theme = {
  colors: {
    primary: '#FF7043',
    secondary: '#FFB300',
    background: '#121212',
    surface: '#1E1E1E',
    error: '#CF6679',
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
      disabled: '#666666',
      inverse: '#000000',
    },
    border: '#2C2C2C',
    divider: '#2C2C2C',
    shadow: 'rgba(0, 0, 0, 0.2)',
    success: '#81C784',
    warning: '#FFD54F',
    info: '#64B5F6',
    card: {
      background: '#1E1E1E',
      border: '#2C2C2C',
    },
    bottomBar: {
      background: '#1E1E1E',
      active: '#FF7043',
      inactive: '#B0B0B0',
    },
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
  },
  borderRadius: {
    s: 4,
    m: 8,
    l: 12,
    xl: 16,
    xxl: 24,
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
  isDark: true,
};
