"use strict";

const assert = require("assert");
const { ESLint } = require("eslint");
const conf = require("../");

const sourceFiles = ["index.js"];

const options = {
  ...conf,
};

(async () => {
  const eslint = new ESLint({
    overrideConfig: {
      ...options,
    },
  });

  const reports = await eslint.lintFiles(sourceFiles);

  reports.forEach((report) => {
    assert.equal(report.errorCount, 0);
    assert.equal(report.warningCount, 0);
  });
})();
