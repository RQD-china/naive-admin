module.exports = {
  root: true,
  plugins: ["typescript"],
  parserOptions: {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "prettier/prettier": "warn",
    "vue/valid-template-root": "off",
    "vue/no-multiple-template-root": "off",
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["index", "401", "404"],
      },
    ],
  },
};
