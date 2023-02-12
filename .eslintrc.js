/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/recommended",
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true
    }
  },
  parser: "vue-eslint-parser",
  // 0 = off, 1 = warn, 2 = error
  rules: {
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["index"] // 需要忽略的组件名
      }
    ],
    "vue/no-multiple-template-root": "warn", //最好有root element
    "vue/no-v-html": "warn", // 有xss风险需要注意
    "prettier/prettier": "off" // 关闭 eslint-config-prettier
  },
  overrides: [
    {
      files: ["*.html"],
      processor: "vue/.vue"
    }
  ]
}
