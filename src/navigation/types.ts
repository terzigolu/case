import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Product } from '~store/services/types';

export type MainTabParamList = {
  Home: undefined;
  Explore: undefined;
  Cart: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  HomeBottom: undefined;
  ProductDetail: {
    product: Product;
  };
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;
