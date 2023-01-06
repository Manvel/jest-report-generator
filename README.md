# Jest report generator

This repository is for experimenting with Jest report generation, the goal is to
generate Jest tests dashboard using github pages.

## Structure

- [`__tests__`](./__tests__/) - various test cases.
- [./reports](./reports/) - static website directory, to be pushed to github pages.
- [./report.js](./report.js) - custom jest reporter that generates `reports/data.json`
  containing information about each test run.
- [/workflows/test.yml](./.github/workflows/test.yml) - Job for running test and pushing to Github pages.

### Commands

```
npm run test  # Execute tests in __tests__ directory and generates reports/data.json file
npm run dev   # For static website development.
```

### Generated page

https://manvel.github.io/jest-report-generator/ 
