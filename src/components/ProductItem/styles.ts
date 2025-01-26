import styled, { css } from 'styled-components/native';
import { Theme } from '~theme';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const GRID_ITEM_WIDTH = (SCREEN_WIDTH - 30) / 2; // 2 columns with padding
const HORIZONTAL_ITEM_WIDTH = SCREEN_WIDTH * 0.6; // 60% of screen width

interface StyledProps {
  horizontal?: boolean;
}

export const Container = styled.TouchableOpacity<StyledProps>`
  ${({ horizontal }) =>
    horizontal
      ? css`
          width: ${HORIZONTAL_ITEM_WIDTH}px;
          margin-right: 10px;
          flex-direction: row;
          align-items: center;
          background-color: ${({ theme }) =>
            theme.colors.card?.background || theme.colors.background};
          border-radius: 12px;
          padding: 10px;
          shadow-color: ${({ theme }) => theme.colors.shadow || '#000'};
          shadow-offset: 0px 2px;
          shadow-opacity: 0.25;
          shadow-radius: 3.84px;
          elevation: 5;
        `
      : css`
          width: ${GRID_ITEM_WIDTH}px;
          margin: 5px;
          background-color: ${({ theme }) =>
            theme.colors.card?.background || theme.colors.background};
          border-radius: 12px;
          padding: 10px;
          shadow-color: ${({ theme }) => theme.colors.shadow || '#000'};
          shadow-offset: 0px 2px;
          shadow-opacity: 0.25;
          shadow-radius: 3.84px;
          elevation: 5;
        `}
`;

export const Image = styled.Image<StyledProps>`
  ${({ horizontal }) =>
    horizontal
      ? css`
          width: 80px;
          height: 80px;
          border-radius: 8px;
          margin-right: 10px;
        `
      : css`
          width: 100%;
          height: 150px;
          border-radius: 8px;
          margin-bottom: 10px;
        `}
`;

export const ContentContainer = styled.View<StyledProps>`
  ${({ horizontal }) =>
    horizontal
      ? css`
          flex: 1;
          padding-right: 10px;
        `
      : css`
          width: 100%;
        `}
`;

export const Title = styled.Text<StyledProps>`
  ${({ horizontal, theme }) =>
    horizontal
      ? css`
          font-size: 14px;
          margin-bottom: 4px;
          color: ${theme.colors.text.primary};
        `
      : css`
          font-size: 16px;
          margin-bottom: 8px;
          color: ${theme.colors.text.primary};
        `}
`;

export const Price = styled.Text<StyledProps>`
  ${({ horizontal, theme }) =>
    horizontal
      ? css`
          font-size: 16px;
          font-weight: bold;
          color: ${theme.colors.text.primary};
        `
      : css`
          font-size: 18px;
          font-weight: bold;
          color: ${theme.colors.text.primary};
        `}
`;

export const FavoriteButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${({ theme }) => theme.colors.background}80;
  border-radius: 15px;
  padding: 5px;
  z-index: 1;
`;
