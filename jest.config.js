/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

const path = require("path");

module.exports = {
  verbose: true,
  reporters: ["default", path.resolve(__dirname, "./report.js")],
};
