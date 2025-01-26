import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { Theme } from '~theme';

export const Container = styled.Pressable`
  width: 52px;
  height: 32px;
  border-radius: 16px;
  padding: 2px;
  justify-content: center;
`;

export const Handle = styled(Animated.View)`
  width: 28px;
  height: 28px;
  border-radius: 16px;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.background};
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`;
