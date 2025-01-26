import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useGetProductsQuery } from '~store/services/fakeStoreApi';
import ProductList from '~components/ProductList';
import AppLayout from '~containers/AppLayout';
import { Product } from '~store/services/types';
import { RootStackNavigationProp } from '~navigation/types';

const HomeScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const { data, isLoading, refetch } = useGetProductsQuery();

  const handleProductPress = (product: Product) => {
    navigation.navigate('ProductDetail', { product });
  };

  return (
    <AppLayout>
      <ProductList
        data={data?.products || []}
        onProductPress={handleProductPress}
        onRefresh={refetch}
        refreshing={isLoading}
      />
    </AppLayout>
  );
};

export default HomeScreen;
