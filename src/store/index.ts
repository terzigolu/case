import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import favoriteReducer from './reducers/favoriteSlice';
import loadingReducer from './slices/loadingSlice';
import cartReducer from './slices/cartSlice';
import { fakeStoreApi } from './services/fakeStoreApi';
import { createReactotronEnhancer } from '../config/ReactotronConfig';
import { loaderMiddleware } from './middlewares/loaderMiddleware';
import reactotron from '../config/ReactotronConfig';

// Her reducer için ayrı persist config
const cartPersistConfig = {
  key: 'cart',
  storage: AsyncStorage,
  whitelist: ['items'], // cart slice'ında sadece items'ı persist et
};

const favoritesPersistConfig = {
  key: 'favorites',
  storage: AsyncStorage,
  whitelist: ['items'], // favorites slice'ında sadece items'ı persist et
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);
const persistedFavoriteReducer = persistReducer(
  favoritesPersistConfig,
  favoriteReducer
);

const createStore = () => {
  const reactotronEnhancer = __DEV__ ? createReactotronEnhancer() : undefined;

  const store = configureStore({
    reducer: {
      favorites: persistedFavoriteReducer,
      loading: loadingReducer,
      cart: persistedCartReducer,
      [fakeStoreApi.reducerPath]: fakeStoreApi.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
      }).concat(fakeStoreApi.middleware, loaderMiddleware),
    enhancers: getDefaultEnhancers =>
      reactotronEnhancer
        ? getDefaultEnhancers().concat(reactotronEnhancer)
        : getDefaultEnhancers(),
  });

  if (__DEV__ && reactotron) {
    // @ts-ignore
    reactotron.setReduxStore?.(store);
  }

  return store;
};

export const store = createStore();
export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export interface AppThunk {
  (dispatch: AppDispatch, getState: () => RootState): void;
}
