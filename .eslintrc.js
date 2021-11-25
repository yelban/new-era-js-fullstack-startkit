module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    // ecmaVersion: 13,
    // 指定 parser 時無法自動修正格式
    ecmaVersion: 12,
    sourceType: 'module',
  },
  // plugins: [
  //   '@typescript-eslint',
  // ],
  rules: {
    indent: ['error', 2],
    semi: ['error', 'always'],
    'no-var': 'off',
    'max-len': ['warn', { code: 100 }],
    'linebreak-style': ['error', (process.platform === 'win32' ? 'windows' : 'unix')],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: ['./**/*.ts', './**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        /* ... */
      ],
      rules: {
        '@typescript-eslint/no-use-before-define': [
          'error',
          {
            functions: false, classes: true, variables: true, typedefs: true,
          },
        ],
      },
    },
  ],
};
