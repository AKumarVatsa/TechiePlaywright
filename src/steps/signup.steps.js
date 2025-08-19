const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const SignupPage = require('../pages/SignupPage');

Given('I navigate to the SpiceClub signup page', async function () {
  this.signupPage = new SignupPage(this.page);
  await this.signupPage.navigate();
});

When('I enter signup details:', async function (dataTable) {
  const data = dataTable.rowsHash();
  await this.signupPage.fillForm(data);
});

When('I submit the signup form', async function () {
  await this.signupPage.submitForm();
});

Then('I should see a confirmation or next step in signup', async function () {
  await this.page.waitForLoadState('domcontentloaded');
  const url = this.page.url();
  expect(url).to.contain('spiceclub');
});
