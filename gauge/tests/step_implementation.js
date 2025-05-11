const { openBrowser, goto, textBox, button, text, closeBrowser, waitFor } = require('taiko');
const assert = require('assert');

beforeSuite(async () => {
  await openBrowser({ headless: false });
});

afterSuite(async () => {
  await closeBrowser();
});

step("Відкрити сторінку входу", async () => {
  await goto("https://automationexercise.com/login", {
    waitForNavigation: false,
    timeout: 60000
  });
  await waitFor(5000); // Очікування завантаження сайту
});

step("Перевірити заголовок входу", async () => {
  assert.ok(await text("Login to your account").exists());
});

step("Перевірити наявність полів email і password", async () => {
  assert.ok(await textBox({ placeholder: "Email Address" }).exists());
  assert.ok(await textBox({ placeholder: "Password" }).exists());
});

step("Перевірити наявність кнопки <текст>", async (текст) => {
  assert.ok(await button(текст).exists());
});
