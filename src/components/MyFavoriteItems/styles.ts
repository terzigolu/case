import styled from 'styled-components/native';
import CustomText from '~components/ui/CustomText';
import { Theme } from '~theme';

export const Container = styled.View`
  margin-vertical: 10px;
`;

export const Title = styled(CustomText)`
  font-size: 18px;
  font-weight: bold;
  margin-horizontal: 10px;
  margin-bottom: 10px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.text.primary};
`;
