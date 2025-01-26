import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.primary};
  margin-left: 16px;
`;

export const EmptyMessage = styled.Text`
  font-size: 16px;
  text-align: center;
  margin-top: 24px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.secondary};
`;
