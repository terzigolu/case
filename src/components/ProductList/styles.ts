import styled from 'styled-components/native';
import { Theme } from '~theme';

interface ContainerProps {
  horizontal?: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.background};
  width: 100%;
  height: 100%;
`;

export const ListContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.background};
`;

export const SearchContainer = styled.View`
  padding: 16px;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.background};
`;

export const SearchInput = styled.TextInput`
  height: 40px;
  padding: 0 16px;
  border-radius: 8px;
  background-color: ${({ theme }: { theme: Theme }) =>
    theme.colors.card.background};
  color: ${({ theme }: { theme: Theme }) => theme.colors.text.primary};
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.background};
`;

export const LoadingText = styled.Text`
  font-size: 14px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text.secondary};
  margin-top: 8px;
`;
