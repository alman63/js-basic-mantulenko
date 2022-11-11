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
    "no-console": 0,
    "max-len": [
      "error",
      {
        ignoreComments: true,
      },
    ],
  },
};
