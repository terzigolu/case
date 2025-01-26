import React, { useState, useCallback, useMemo } from 'react';
import { FlatList, RefreshControl, View, TextInput } from 'react-native';
import { Product } from '~store/services/types';
import ProductItem from '../ProductItem';
import * as S from './styles';
import { useTheme } from '~theme/ThemeProvider';

interface ProductListProps {
  data: Product[];
  onRefresh?: () => void;
  refreshing?: boolean;
  onProductPress?: (product: Product) => void;
  onEndReached?: () => void;
  onEndReachedThreshold?: number;
  horizontal?: boolean;
  scrollEnabled?: boolean;
  contentContainerStyle?: any;
  onSearch?: (query: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  data = [],
  onRefresh,
  refreshing = false,
  onProductPress,
  onEndReached,
  onEndReachedThreshold = 0.5,
  horizontal = false,
  scrollEnabled = true,
  contentContainerStyle,
  onSearch,
}) => {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  // Perform filtering only when searchQuery or data changes
  const filteredData = useMemo(() => {
    return data.filter(product =>
      product.title?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, data]);

  const renderItem = useCallback(
    ({ item }: { item: Product }) => (
      <ProductItem
        product={item}
        onPress={() => onProductPress?.(item)}
        horizontal={horizontal}
      />
    ),
    [onProductPress, horizontal]
  );

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    onSearch?.(text);
  };

  return (
    <S.Container horizontal={horizontal}>
      <S.SearchContainer>
        <TextInput
          style={{
            backgroundColor: theme.colors.background,
            color: theme.colors.text.primary,
            borderRadius: 8,
            padding: 10,
          }}
          placeholder="Ürün ara..."
          value={searchQuery}
          onChangeText={handleSearch}
          placeholderTextColor={theme.colors.text.secondary}
        />
      </S.SearchContainer>
      <S.ListContainer>
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={horizontal ? 1 : 2}
          horizontal={horizontal}
          ListFooterComponent={<View style={{ height: 40 }} />}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[
            {
              padding: 10,
              ...(horizontal ? { paddingRight: 20 } : { paddingBottom: 20 }),
            },
            contentContainerStyle,
          ]}
          onEndReached={onEndReached}
          onEndReachedThreshold={onEndReachedThreshold}
          refreshControl={
            onRefresh ? (
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            ) : undefined
          }
          scrollEnabled={scrollEnabled}
          extraData={filteredData}
        />
      </S.ListContainer>
    </S.Container>
  );
};

export default ProductList;
