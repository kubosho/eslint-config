"use strict";

module.exports = {
  root: true,
  env: { browser: true, node: true, es6: true, jest: true },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
    },
    "import/ignore": ["node_modules"],
    react: {
      version: "detect",
    },
  },
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
      },
    ],
    "import/newline-after-import": "error",
    "import/no-unresolved": [
      "error",
      {
        caseSensitive: true,
        commonjs: true,
      },
    ],
    "import/no-extraneous-dependencies": "error",
  },
};
