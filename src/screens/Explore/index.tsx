import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  useGetCategoriesQuery,
  useGetProductsByCategoryQuery,
} from '~store/services/fakeStoreApi';
import { View, ScrollView } from 'react-native';
import AppLayout from '~containers/AppLayout';
import ProductList from '~components/ProductList';
import { Product } from '~store/services/types';
import { CategoryContainer, CategoryButton, CategoryText } from './styles';
import { useTheme } from '~theme/ThemeProvider';
import { RootStackNavigationProp } from '~navigation/types';

const ExploreScreen = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data: categories = [] } = useGetCategoriesQuery();
  const { data, isLoading } = useGetProductsByCategoryQuery(
    selectedCategory || '',
    {
      skip: !selectedCategory,
    }
  );

  useEffect(() => {
    setSelectedCategory(categories[0]);
  }, [categories]);

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
  };

  const handleProductPress = (product: Product) => {
    navigation.navigate('ProductDetail', { product });
  };

  return (
    <AppLayout>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <ScrollView
          contentContainerStyle={{ padding: 16, paddingBottom: 0 }}
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          <CategoryContainer>
            {categories.map(category => (
              <CategoryButton
                key={category}
                onPress={() => handleCategoryPress(category)}
                isSelected={selectedCategory === category}>
                <CategoryText isSelected={selectedCategory === category}>
                  {category}
                </CategoryText>
              </CategoryButton>
            ))}
          </CategoryContainer>
        </ScrollView>
        {selectedCategory && (
          <ProductList
            data={data?.products || []}
            onProductPress={handleProductPress}
            refreshing={isLoading}
            scrollEnabled={false}
            contentContainerStyle={{ paddingTop: 0 }}
          />
        )}
      </ScrollView>
    </AppLayout>
  );
};

export default ExploreScreen;
