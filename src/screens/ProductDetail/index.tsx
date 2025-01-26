import React from 'react';
import { useRoute } from '@react-navigation/native';
import { Product } from '~store/services/types';
import AppLayout from '~containers/AppLayout';
import { useAppDispatch, useAppSelector } from '~store/hooks/hooks';
import { addToCart } from '~store/slices/cartSlice';
import * as S from './styles';

type RouteParams = {
  product: Product;
};

const ProductDetailScreen = () => {
  const route = useRoute();
  const { product } = route.params as RouteParams;
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart.items);
  const isInCart = Boolean(cartItems[product.id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <AppLayout>
      <S.Container>
        <S.Image source={{ uri: product.image }} resizeMode="contain" />
        <S.ContentContainer>
          <S.Title>{product.title}</S.Title>
          <S.Description>{product.description}</S.Description>
          <S.PriceContainer>
            <S.Price>{product.price} TL</S.Price>
            {!isInCart && (
              <S.AddToCartButton onPress={handleAddToCart}>
                <S.ButtonText>Sepete Ekle</S.ButtonText>
              </S.AddToCartButton>
            )}
            {isInCart && (
              <S.InCartButton disabled>
                <S.InCartButtonText>Sepette</S.InCartButtonText>
              </S.InCartButton>
            )}
          </S.PriceContainer>
        </S.ContentContainer>
      </S.Container>
    </AppLayout>
  );
};

export default ProductDetailScreen;
