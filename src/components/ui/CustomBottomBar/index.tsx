import React, { useEffect, useRef } from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Animated } from 'react-native';
import {
  Container,
  TabButton,
  TabContainer,
  TabLabel,
  ThemeToggleButton,
  AnimatedBackground,
} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '~theme/ThemeProvider';

const TAB_WIDTH = 72;

const CustomBottomBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { theme, toggleTheme } = useTheme();
  const translateX = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    scale.setValue(0.5);
    Animated.parallel([
      Animated.spring(translateX, {
        toValue: state.index * TAB_WIDTH + 6,
        useNativeDriver: true,
        friction: 20,
        tension: 120,
      }),
      Animated.spring(scale, {
        toValue: 1.25,
        useNativeDriver: true,
        friction: 20,
        tension: 120,
      }),
    ]).start();
  }, [state.index]);

  return (
    <Container>
      <TabContainer>
        <AnimatedBackground
          style={{
            height: 40,
            maxWidth: 58,
            top: 12,
            transform: [{ translateX }, { scale }],
          }}
        />
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const getIconName = () => {
            switch (route.name) {
              case 'Home':
                return 'home';
              case 'Explore':
                return 'compass';
              case 'Cart':
                return 'cart';
              case 'Profile':
                return 'account';
              default:
                return 'home';
            }
          };

          return (
            <TabButton
              key={route.key}
              onPress={onPress}
              isFocused={isFocused}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}>
              <MaterialCommunityIcons
                name={getIconName()}
                size={24}
                color={
                  isFocused ? theme.colors.primary : theme.colors.text.secondary
                }
              />
              <TabLabel isFocused={isFocused}>{route.name}</TabLabel>
            </TabButton>
          );
        })}
        <ThemeToggleButton onPress={toggleTheme}>
          <MaterialCommunityIcons
            name={theme.isDark ? 'white-balance-sunny' : 'moon-waning-crescent'}
            size={24}
            color={theme.colors.text.secondary}
          />
          <TabLabel>{theme.isDark ? 'Light' : 'Dark'}</TabLabel>
        </ThemeToggleButton>
      </TabContainer>
    </Container>
  );
};

export default CustomBottomBar;
