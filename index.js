"use strict";

module.exports = {
  root: true,
  env: { browser: true, node: true, es6: true, jest: true },
  extends: ["eslint:recommended", "prettier", "./rules/import"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {},
};
