import React from 'react';
import { Product } from '~store/services/types';
import * as S from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorites,
  removeFromFavorites,
} from '~store/reducers/favoriteSlice';
import { RootState } from '~store';
import { useTheme } from '~theme/ThemeProvider';
import CustomText from '~components/ui/CustomText';

export interface ProductItemProps {
  product: Product;
  onPress?: () => void;
  horizontal?: boolean;
}

const ProductItem: React.FC<ProductItemProps> = ({
  product,
  onPress,
  horizontal,
}) => {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const favorites = useSelector((state: RootState) => state.favorites.items);
  const isFavorite = favorites.some(item => item.id === product.id);

  const handleFavoritePress = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  return (
    <S.Container onPress={onPress} horizontal={horizontal}>
      <S.Image
        source={{ uri: product.image }}
        resizeMode="cover"
        horizontal={horizontal}
      />
      <S.ContentContainer horizontal={horizontal}>
        <S.Title numberOfLines={2} horizontal={horizontal}>
          {product.title}
        </S.Title>
        <S.Price horizontal={horizontal}>{product.price} TL</S.Price>
      </S.ContentContainer>
      <S.FavoriteButton onPress={handleFavoritePress}>
        <CustomText>{isFavorite ? '❤️' : '🤍'}</CustomText>
      </S.FavoriteButton>
    </S.Container>
  );
};

export default ProductItem;
