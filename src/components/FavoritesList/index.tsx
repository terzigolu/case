import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '~store';
import { Product } from '~store/services/types';
import { RootStackNavigationProp } from '~navigation/types';
import ProductList from '~components/ProductList';
import * as S from './styles';

const FavoritesList = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const favoriteProducts = Object.entries(favorites).map(([_, item]) => item);

  const handleProductPress = (product: Product) => {
    navigation.navigate('ProductDetail', { product });
  };

  return (
    <S.Container>
      <S.Title>Favorileriniz</S.Title>
      {favoriteProducts.length > 0 ? (
        <ProductList
          data={favoriteProducts}
          onProductPress={handleProductPress}
          scrollEnabled={false}
        />
      ) : (
        <S.EmptyMessage>Henüz favori ürününüz bulunmamaktadır.</S.EmptyMessage>
      )}
    </S.Container>
  );
};

export default FavoritesList;
