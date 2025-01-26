import styled from 'styled-components/native';
import { Theme } from '~theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.background};
`;

export const Image = styled.Image`
  width: 100%;
  height: 300px;
  margin-bottom: 16px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text.primary};
`;

export const Description = styled.Text`
  font-size: 16px;
  margin-bottom: 16px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text.secondary};
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const Price = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
`;

export const AddToCartButton = styled.TouchableOpacity`
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.primary};
  padding: 12px 24px;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.background};
  font-size: 16px;
  font-weight: bold;
`;

export const InCartButton = styled.TouchableOpacity`
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.success};
  padding: 12px 24px;
  border-radius: 8px;
  opacity: 0.8;
`;

export const InCartButtonText = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.background};
  font-size: 16px;
  font-weight: bold;
`;
