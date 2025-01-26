import styled, { css } from 'styled-components/native';
import { DefaultTheme } from 'styled-components/native';

interface TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  weight?: 'regular' | 'medium' | 'bold';
  color?: string;
  align?: 'left' | 'center' | 'right';
}

const getTextVariant = (variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption') => {
  return ({ theme }: { theme: DefaultTheme }) => {
    switch (variant) {
      case 'h1':
        return css`
          font-size: 32px;
          line-height: ${theme.spacing.xl + 8}px;
        `;
      case 'h2':
        return css`
          font-size: 24px;
          line-height: ${theme.spacing.xl}px;
        `;
      case 'h3':
        return css`
          font-size: 20px;
          line-height: ${theme.spacing.lg + 4}px;
        `;
      case 'caption':
        return css`
          font-size: 12px;
          line-height: ${theme.spacing.md}px;
        `;
      default:
        return css`
          font-size: 16px;
          line-height: ${theme.spacing.lg}px;
        `;
    }
  };
};

const getTextWeight = (weight?: 'regular' | 'medium' | 'bold') => {
  switch (weight) {
    case 'medium':
      return css`
        font-weight: 500;
      `;
    case 'bold':
      return css`
        font-weight: 700;
      `;
    default:
      return css`
        font-weight: 400;
      `;
  }
};

export const StyledText = styled.Text<TextProps>`
  color: ${({ theme, color }) => color || theme.colors.text.primary};
  text-align: ${({ align }) => align || 'left'};
  ${({ variant }) => getTextVariant(variant)}
  ${({ weight }) => getTextWeight(weight)}
`;
