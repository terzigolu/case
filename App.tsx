import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';
import Navigator from './src/navigation/Navigator';
import { ThemeProvider } from './src/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Reactotron'u sadece development ortamında başlat
if (__DEV__) {
  require('./src/config/ReactotronConfig').default;
}

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <ThemeProvider>
            <Navigator />
          </ThemeProvider>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}

export default App;
