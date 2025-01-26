import styled from 'styled-components/native';
import { DefaultTheme } from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Header = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;

export const Avatar = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.card};
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.primary};
  margin-bottom: 5px;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.text.secondary};
`;
