module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'plugin:jest/recommended', 'standard'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: ['react', 'react-hooks', 'jest'],
  extends: 'standard',
  rules: {
    semi: [1, 'always'],
    'comma-dangle': [0],
  },
};
