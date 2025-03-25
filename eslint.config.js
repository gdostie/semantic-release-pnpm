export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
    },
    env: {
      node: true,
    },
    rules: {
      "no-console": "warn",
      "prefer-const": "error",
      eqeqeq: "error",
      semi: ["error", "always"],
      quotes: ["error", "single"],
    },
  },
];
