module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['temp.js', '**/vendor/*.js', '/node_modules/**/*.js'],
  rules: { indent: 'error' },
}
