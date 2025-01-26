import styled from 'styled-components/native';
import { Theme } from '~theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: Theme }) =>
    `${theme.colors.background}`};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin: 16px;
  color: ${({ theme }: { theme: Theme }) => `${theme.colors.text.primary}`};
`;

export const EmptyMessage = styled.Text`
  font-size: 16px;
  text-align: center;
  margin-top: 24px;
  color: ${({ theme }: { theme: Theme }) => `${theme.colors.text.secondary}`};
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${({ theme }: { theme: Theme }) => `${theme.colors.card}`};
`;

export const TotalText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }: { theme: Theme }) => `${theme.colors.text.primary}`};
`;

export const TotalAmount = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }: { theme: Theme }) => `${theme.colors.primary}`};
`;
