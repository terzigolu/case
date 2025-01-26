import styled, { css } from 'styled-components/native';
import { DefaultTheme } from 'styled-components/native';

interface ButtonContainerProps {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
}

interface ButtonTextProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
}

const getButtonSize = (size?: 'small' | 'medium' | 'large') => {
  return ({ theme }: { theme: DefaultTheme }) => {
    switch (size) {
      case 'small':
        return css`
          padding: ${theme.spacing.xs}px ${theme.spacing.sm}px;
        `;
      case 'large':
        return css`
          padding: ${theme.spacing.md}px ${theme.spacing.lg}px;
        `;
      default:
        return css`
          padding: ${theme.spacing.sm}px ${theme.spacing.md}px;
        `;
    }
  };
};

const getButtonVariant = (variant?: 'primary' | 'secondary' | 'outline') => {
  return ({ theme }: { theme: DefaultTheme }) => {
    switch (variant) {
      case 'secondary':
        return css`
          background-color: ${theme.colors.secondary};
        `;
      case 'outline':
        return css`
          background-color: transparent;
          border: 2px solid ${theme.colors.primary};
        `;
      default:
        return css`
          background-color: ${theme.colors.primary};
        `;
    }
  };
};

const getTextColor = (variant?: 'primary' | 'secondary' | 'outline') => {
  return ({ theme }: { theme: DefaultTheme }) => {
    switch (variant) {
      case 'outline':
        return css`
          color: ${theme.colors.primary};
        `;
      default:
        return css`
          color: ${theme.isDark ? theme.colors.text.primary : '#ffffff'};
        `;
    }
  };
};

const getTextSize = (size?: 'small' | 'medium' | 'large') => {
  switch (size) {
    case 'small':
      return css`
        font-size: 14px;
      `;
    case 'large':
      return css`
        font-size: 18px;
      `;
    default:
      return css`
        font-size: 16px;
      `;
  }
};

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  ${({ size }) => getButtonSize(size)}
  ${({ variant }) => getButtonVariant(variant)}
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  font-weight: 600;
  ${({ variant }) => getTextColor(variant)}
  ${({ size }) => getTextSize(size)}
`;
