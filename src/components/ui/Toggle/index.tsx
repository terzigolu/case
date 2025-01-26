import React, { useState } from 'react';

import { Animated, TouchableOpacity } from 'react-native';
import * as S from './styles';
import { useTheme } from '../../../theme';

interface ToggleProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ value, onValueChange }) => {
  const { theme } = useTheme();
  const [toggleValue, setToggleValue] = useState(value);

  const handlePress = () => {
    const newValue = !toggleValue;
    setToggleValue(newValue);
    onValueChange(newValue);
  };

  return (
    <TouchableOpacity onPress={handlePress} testID="theme-toggle">
      <S.Container style={{ backgroundColor: toggleValue ? theme.colors.primary : theme.colors.border }}>
        <S.Handle style={{ transform: [{ translateX: toggleValue ? 20 : 0 }] }} />
      </S.Container>
    </TouchableOpacity>
  );
};

export default Toggle;
