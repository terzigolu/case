export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface Category {
  id: number;
  name: string;
}

export interface FavoriteProduct extends Product {
  addedAt: string;
}
