module.exports = {
  project: {
    android: {},
  },
  assets: ['./src/assets/fonts/'],
  dependencies: {
    ...(process.env.NO_FLIPPER
      ? { 'react-native-flipper': { platforms: { ios: null } } }
      : {}),

    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
  },
};
