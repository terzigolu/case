import styled from 'styled-components/native';
import { Theme } from '~theme';

interface StyledProps {
  isSelected?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
`;

export const CategoryList = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingVertical: 10,
  },
})`
  flex-grow: 0;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 15px;
`;

export const CategoryContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  max-height: 48px;
`;

export const CategoryButton = styled.TouchableOpacity<StyledProps>`
  padding: 8px 16px;
  margin-right: 8px;
  border-radius: 20px;
  background-color: ${({
    theme,
    isSelected,
  }: {
    theme: Theme;
    isSelected?: boolean;
  }) => (isSelected ? theme.colors.primary : `${theme.colors.primary}10`)};
`;

export const CategoryText = styled.Text<StyledProps>`
  font-size: 14px;
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  color: ${({ theme, isSelected }: { theme: Theme; isSelected?: boolean }) =>
    isSelected ? theme.colors.background : theme.colors.text.primary};
  text-transform: capitalize;
`;
