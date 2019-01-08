module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    "eslint:recommended",
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // より厳しいルールにするには`plugin:vue/strongly-recommended` もしくは `plugin:vue/recommended` に切り替えることを検討してください。
    "plugin:vue/strongly-recommended",
    "plugin:prettier/recommended"
  ],
  // *.vue ファイルを lint にかけるために必要
  plugins: [
    'vue'
  ],
  // ここにカスタムルールを追加します。
  rules: {
    "semi": [2, "never"],
    "no-console": "off",
    "quotes": ["error", "single"],
    "vue/max-attributes-per-line": "off",
    "vue/html-self-closing": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/component-name-in-template-casing": ["error", "kebab-case"],
    "prettier/prettier": ["error", {
      "tabWidth": 2,
      "useTabs": false,
      "singleQuote": true,
      "semi": false
    }]
  }
}
