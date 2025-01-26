import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

declare global {
  interface Console {
    tron: typeof Reactotron;
  }
}

// Reactotron'u sadece development'ta başlat
const reactotron = __DEV__
  ? Reactotron.configure({
      name: 'Case Project',
    })
      .setAsyncStorageHandler(AsyncStorage)
      .useReactNative({
        networking: {
          ignoreUrls: /symbolicate/,
        },
      })
      .use(reactotronRedux())
      .connect()
  : undefined;

// Redux için enhancer'ı dışa aktarıyoruz
export const createReactotronEnhancer = () => {
  if (__DEV__ && reactotron) {
    const enhancer = reactotron.createEnhancer!();
    // @ts-ignore
    reactotron.setReduxStore = store => {
      // @ts-ignore
      reactotron.storeEnhancer = store;
    };
    return enhancer;
  }
  return undefined;
};

// Geliştirme ortamında console.log'ları Reactotron'a yönlendir
if (__DEV__ && reactotron) {
  console.tron = reactotron;
}

export default reactotron;
