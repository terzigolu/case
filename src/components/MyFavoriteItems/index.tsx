import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '~store';
import ProductList from '../ProductList';
import { Container, Title } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Product } from '~store/services/types';

const MyFavoriteItems = () => {
  const navigation = useNavigation();
  const favorites = useSelector((state: RootState) => state.favorites.items);

  const handleProductPress = (product: Product) => {
    navigation.navigate('ProductDetail', { product });
  };

  if (favorites.length === 0) {
    return null;
  }

  return (
    <Container>
      <Title>Favorilerim</Title>
      <ProductList
        data={favorites}
        onProductPress={handleProductPress}
        horizontal
      />
    </Container>
  );
};

export default MyFavoriteItems;
