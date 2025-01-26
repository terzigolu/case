import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { RootState } from '~store';
import { RootStackNavigationProp } from '~navigation/types';
import AppLayout from '~containers/AppLayout';
import ProductList from '~components/ProductList';
import { Product } from '~store/services/types';
import * as S from './styles';

const CartScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartProducts = Object.entries(cartItems).map(([_, item]) => item);

  const handleProductPress = (product: Product) => {
    navigation.navigate('ProductDetail', { product });
  };

  return (
    <AppLayout useScrollView>
      <S.Container>
        <S.Title>Sepetim</S.Title>
        {cartProducts.length > 0 ? (
          <>
            <S.TotalContainer>
              <S.TotalText>Toplam Tutar:</S.TotalText>
              <S.TotalAmount>
                {cartProducts
                  .reduce((total, item) => total + item.price, 0)
                  .toFixed(2)}
                ₺
              </S.TotalAmount>
            </S.TotalContainer>
            <ProductList
              data={cartProducts}
              onProductPress={handleProductPress}
              scrollEnabled={false}
            />
          </>
        ) : (
          <S.EmptyMessage>Sepetinizde ürün bulunmamaktadır.</S.EmptyMessage>
        )}
      </S.Container>
    </AppLayout>
  );
};

export default CartScreen;
