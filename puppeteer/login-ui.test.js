const puppeteer = require('puppeteer');

describe('UI тест: логін-форма на automationexercise.com', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: false, slowMo: 50 });
    page = await browser.newPage();
    await page.goto('https://automationexercise.com/login', { waitUntil: 'domcontentloaded' });
  }, 30000);

  afterAll(async () => {
    await browser.close();
  });

  test('має заголовок "Login to your account"', async () => {
    const heading = await page.$eval('.login-form h2', el => el.textContent.trim());
    expect(heading).toBe('Login to your account');
  });

  test('має поля для email і паролю', async () => {
    const emailExists = await page.$('input[data-qa="login-email"]') !== null;
    const passwordExists = await page.$('input[data-qa="login-password"]') !== null;
    expect(emailExists).toBe(true);
    expect(passwordExists).toBe(true);
  });

  test('має кнопку "Login"', async () => {
    const loginButton = await page.$('button[data-qa="login-button"]');
    expect(loginButton).not.toBeNull();
  });
});
