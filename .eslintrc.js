/** @type {import('eslint/lib/shared/types').ConfigData} */
module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "react/jsx-sort-props": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      extends: ["plugin:@typescript-eslint/recommended"],
    },
    {
      files: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
      extends: ["plugin:jest-dom/recommended", "plugin:testing-library/react"],
    },
    {
      files: ["**/*.stories.*.ts?(x)"],
      extends: ["plugin:storybook/recommended"],
    },
  ],
};
