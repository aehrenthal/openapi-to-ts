module.exports = {
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': 'warn',
    '@typescript-eslint/interface-name-prefix': [
      'error',
      {
        prefixWithI: 'always'
      }
    ]
  }
};
