class SignupPage {
  constructor(page) {
    this.page = page;
    this.firstName = '#first_name, input[name="firstName"], input[placeholder*="First"]';
    this.lastName = '#last_name, input[name="lastName"], input[placeholder*="Last"]';
    this.mobile = '#mobile_number, input[name="mobileNumber"], input[type="tel"]';
    this.email = '#email_id, input[name="email"], input[type="email"]';
    this.password = '#new-password, input[name="password"], input[type="password"]';
    this.submitBtn = 'button[type="submit"], button:has-text("Submit"), #newSignupForm button[type=submit]';
  }

  async navigate() {
    await this.page.goto('https://spiceclub.spicejet.com/signup', { waitUntil: "domcontentloaded" });
  }

  async fill(selector, value) {
    const locator = this.page.locator(selector);
    const count = await locator.count();
    if (count === 0) return; // silently skip if selector not found (fallbacks exist)
    await locator.first().fill(String(value));
  }

  async fillForm(data) {
    await this.fill(this.firstName, data.FirstName);
    await this.fill(this.lastName, data.LastName);
    await this.fill(this.mobile, data.Mobile);
    await this.fill(this.email, data.Email);
    await this.fill(this.password, data.Password);
  }

  async submitForm() {
    const btn = this.page.locator(this.submitBtn).first();
    await btn.click({ trial: false });
  }
}

module.exports = SignupPage;
