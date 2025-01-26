module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  env: {
    'react-native/react-native': true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/no-explicit-any': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': [
          'error',
          {
            semi: false, // Noktalı virgül kullanmayacak şekilde yapılandırıldı
          },
        ],
        'react/no-unstable-nested-components': 'off',
        'react-native/no-inline-styles': 'off',
      },
    },
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['~assets', './src/assets'],
          ['~components', './src/components'],
          ['~constants', './src/constants'],
          ['~containers', './src/containers'],
          ['~helpers', './src/helpers'],
          ['~hooks', './src/hooks'],
          ['~interfaces', './src/interfaces'],
          ['~middlewares', './src/middlewares'],
          ['~navigation', './src/navigation'],
          ['~screens', './src/screens'],
          ['~store', './src/store'],
          ['~theme', './src/theme'],
          ['~utils', './src/utils'],
          ['~services', './src/services'],
          ['~translations', './src/translations'],
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
  },
};
