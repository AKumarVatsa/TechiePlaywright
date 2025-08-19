# Playwright + CucumberJS + Allure (POM) — SpiceClub Signup

![CI](https://github.com/<YOUR_USER>/<YOUR_REPO>/actions/workflows/tests.yml/badge.svg)
**Allure Report:** https://<YOUR_USER>.github.io/<YOUR_REPO>/

## Scripts
```bash
npm install
npx playwright install --with-deps
npm test
npm run allure:generate
npm run allure:open
```

## Structure
```
src/
  features/signup.feature
  pages/SignupPage.js
  steps/signup.steps.js
  support/hooks.js
reports/
  allure-results/
  allure-report/
.github/workflows/tests.yml
```

> Update selectors in `SignupPage.js` if SpiceClub changes the page markup.
