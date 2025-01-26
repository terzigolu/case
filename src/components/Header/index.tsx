import React from 'react';
import { useTheme } from '~theme';
import Toggle from '~components/ui/Toggle';
import * as S from './styles';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <S.Container>
      <S.Title>Ürünler</S.Title>
      <Toggle value={theme.isDark} onValueChange={toggleTheme} />
    </S.Container>
  );
};

export default Header;
