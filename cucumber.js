// const { IRunConfiguration } = require("@cucumber/cucumber/api"); // Uncomment if you need to use IRunConfiguration at runtime

const common = {
  require: [
    "ts-node/register",
    "src/steps/**/*.ts",
    "src/support/**/*.ts"
  ],
  format: [
    "summary",
    "progress",
    "json:./reports/cucumber-report.json",
    "@shelex/cucumberjs-allure"   // ✅ correct Allure plugin
  ]
};

export default common;
