module.exports = {
  root: true,
  extends: '@react-native',
  parserOptions: {
    requireConfigFile: false,
  },
  parser: 'babel/eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Aktifkan fitur JSX
      ecmaVersion: 2017,
      sourceType: 'module',
      requireConfigFile: false,
      babelOptions: {
        babelrc: false,
        configFile: false,
        // your babel options
        presets: ['@babel/preset-env'],
        rules: {
          'import/no-unresolved': 'off',
          'import/extensions': 'off',
          'import/no-extraneous-dependencies': 'off',
        },
      },
    },
  },
};
