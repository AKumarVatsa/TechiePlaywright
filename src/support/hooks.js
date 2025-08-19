const { BeforeAll, AfterAll, Before, After, Status } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { AllureRuntime, AllureStep, AllureTest } = require('allure-cucumberjs');
const { AllureReporter } = require('@shelex/cucumber-allure');

let browser, context, page;

BeforeAll(async () => {
  browser = await chromium.launch({ headless: true });
});

Before(async () => {
  context = await browser.newContext();
  page = await context.newPage();
  global.page = page; // make available in steps
});

After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    const screenshot = await page.screenshot({ path: `reports/screenshots/${Date.now()}.png`, fullPage: true });
    await this.attach(screenshot, 'image/png'); // attach to Allure
  }
  await context.close();
});

AfterAll(async () => {
  await browser.close();
});
