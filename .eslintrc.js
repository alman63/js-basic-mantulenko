module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jest"],
  rules: {
    "import/prefer-default-export": "off",
    "no-plusplus": "off",
    "no-console": "off",
    "no-alert": "off",
    "no-restricted-globals": "off",
    "prefer-destructuring": ["error", { object: true, array: false }],
    "max-len": [
      "error",
      {
        ignoreComments: true,
      },
    ],
  },
};
