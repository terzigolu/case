export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    error: string;
    text: {
      primary: string;
      secondary: string;
      disabled: string;
      inverse: string;
    };
    border: string;
    divider: string;
    shadow: string;
    success: string;
    warning: string;
    info: string;
    card: {
      background: string;
      border: string;
    };
    bottomBar: {
      background: string;
      active: string;
      inactive: string;
    };
  };
  spacing: {
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
    xxl: number;
  };
  borderRadius: {
    s: number;
    m: number;
    l: number;
    xl: number;
    xxl: number;
  };
  typography: {
    h1: {
      fontSize: number;
      lineHeight: number;
      fontWeight: string;
    };
    h2: {
      fontSize: number;
      lineHeight: number;
      fontWeight: string;
    };
    h3: {
      fontSize: number;
      lineHeight: number;
      fontWeight: string;
    };
    body1: {
      fontSize: number;
      lineHeight: number;
    };
    body2: {
      fontSize: number;
      lineHeight: number;
    };
    caption: {
      fontSize: number;
      lineHeight: number;
    };
  };
}
