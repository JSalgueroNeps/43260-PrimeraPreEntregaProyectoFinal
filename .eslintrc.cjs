module.exports = {
  env: {
    "browser": true,
    "amd": true,
    "node": true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { 
    react: { version: '18.2' }
  },
  cSpell: {
    enabled: false,
  },
  plugins: ['react-refresh'],
  rules: {
    "react/prop-types": "off",
    "no-undef": "off",
    "no-unused-vars": "off"
  },
}
