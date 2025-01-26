import React from 'react';
import { TextProps as RNTextProps } from 'react-native';
import * as S from './styles';

interface CustomTextProps extends RNTextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
  weight?: 'regular' | 'medium' | 'bold';
  color?: string;
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
}

const CustomText: React.FC<CustomTextProps> = ({
  variant = 'body',
  weight = 'regular',
  color,
  align,
  children,
  ...rest
}) => {
  return (
    <S.StyledText
      variant={variant}
      weight={weight}
      color={color}
      align={align}
      {...rest}>
      {children}
    </S.StyledText>
  );
};

export default CustomText;
