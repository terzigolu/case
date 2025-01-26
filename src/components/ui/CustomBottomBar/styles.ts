import styled from 'styled-components/native';
import { Theme } from '~theme';
import { Animated } from 'react-native';

interface StyledProps {
  isFocused?: boolean;
}

export const Container = styled.View`
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  background-color: ${({ theme }: { theme: Theme }) =>
    theme.colors.card?.background || theme.colors.background};
  border-radius: 24px;
  elevation: 10;
  shadow-color: ${({ theme }: { theme: Theme }) =>
    theme.colors.shadow || '#000'};
  shadow-offset: 0px 5px;
  shadow-opacity: 0.3;
  shadow-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }: { theme: Theme }) => theme.colors.border};
`;

export const TabContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  position: relative;
`;

export const TabButton = styled.TouchableOpacity<StyledProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 8px 0;
  margin: 0 4px;
  border-radius: 16px;
  position: relative;
  z-index: 2;
  min-width: 64px;
`;

export const AnimatedBackground = styled(Animated.View)`
  position: absolute;
  width: 64px;
  height: 40px;
  background-color: ${({ theme }: { theme: Theme }) =>
    `${theme.colors.primary}20`};
  border-radius: 16px;
  z-index: 1;
  top: 4px;
  left: 4px;
`;

export const TabLabel = styled.Text<StyledProps>`
  font-size: 12px;
  margin-top: 2px;
  color: ${({ theme, isFocused }: { theme: Theme; isFocused?: boolean }) =>
    isFocused ? theme.colors.primary : theme.colors.text.secondary};
  font-weight: ${({ isFocused }: { isFocused?: boolean }) =>
    isFocused ? 'bold' : 'normal'};
`;

export const ThemeToggleButton = styled(TabButton)`
  flex: 0.8;
  background-color: transparent;
`;
