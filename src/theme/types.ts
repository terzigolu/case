export interface Colors {
  card: any;
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  text: {
    primary: string;
    secondary: string;
    disabled: string;
    inverse: string;
  };
  success: string;
  error: string;
  warning: string;
  info: string;
  border: string;
  divider: string;
  shadow: string;
}

export interface Spacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export interface BorderRadius {
  sm: number;
  md: number;
  lg: number;
  full: number;
}

export interface Typography {
  h1: { fontSize: number; lineHeight: number; fontWeight: string };
  h2: { fontSize: number; lineHeight: number; fontWeight: string };
  h3: { fontSize: number; lineHeight: number; fontWeight: string };
  body1: { fontSize: number; lineHeight: number };
  body2: { fontSize: number; lineHeight: number };
  caption: { fontSize: number; lineHeight: number };
}

export interface Theme {
  colors: Colors;
  spacing: Spacing;
  borderRadius: BorderRadius;
  isDark: boolean;
  typography: Typography;
}
