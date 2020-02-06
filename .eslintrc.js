// https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
// https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
// https://www.sitepoint.com/react-with-typescript-best-practices/

module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  plugins: [
    'react-hooks', // Uses eslint-plugin-react-hooks
    'destructuring', // Uses eslint-plugin-destructuring
  ],
  extends: [
    'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    // Make sure this is always the last configuration in the extends array.
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors.
    'plugin:destructuring/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // 0 = off, 1 = warn, 2 = error
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'react/prop-types': 0,
    'destructuring/no-rename': 0,
    'destructuring/in-params': ['error', { 'max-params': 0 }],
  },
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
