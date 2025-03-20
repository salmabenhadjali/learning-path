module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended', // Vue-specific linting rules
    'prettier', // Disable rules conflicting with Prettier
  ],
  parserOptions: {
    parser: 'babel-eslint', // Use Babel parser for Vue 2 compatibility
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, semi: false }],
    'vue/max-attributes-per-line': ['error', { singleline: 5, multiline: 1 }],
    'vue/singleline-html-element-content-newline': ['error', { normal: 'never' }],
  },
};
