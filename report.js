const {writeFile, mkdir} = require("fs/promises");
const {existsSync} = require("fs");
const { join } = require("path");
const targetPath = "reports";

class Reporter {
  async onRunComplete(testContexts, results) {
    // console.log("results", JSON.stringify(results));
    const testSuites = results.testResults.map((suite) => {
      return {tests: suite.testResults.map(({title, status, ancestorTitles, fullName}) => {
        return {title, status, ancestorTitles, fullName}
      })};
    });
    await saveReport({testSuites});
  }
}

async function saveReport(data) {
  if (!existsSync(targetPath)) {
    await mkdir(targetPath);
  }
  await writeFile(join("./", targetPath, "data.json"), JSON.stringify(data, null,2));
}

module.exports = Reporter;
