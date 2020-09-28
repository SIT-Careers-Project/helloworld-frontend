module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    amd: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-vars': 'error',
    'no-unused-vars': 'error',
    'space-infix-ops': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'handle-callback-err': 'error',
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    'operator-linebreak': ['error', 'after'],
    'block-spacing': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'semi': ['error', 'never']
  }
}
