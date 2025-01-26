import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  ...rest
}) => {
  return (
    <S.ButtonContainer
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      {...rest}>
      <S.ButtonText variant={variant} size={size}>
        {title}
      </S.ButtonText>
    </S.ButtonContainer>
  );
};

export default Button;
