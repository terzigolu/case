import styled from 'styled-components/native';
import { Theme } from '~theme';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.background};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }: { theme: Theme }) => theme.colors.border};
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text.primary};
  font-weight: bold;
`;
