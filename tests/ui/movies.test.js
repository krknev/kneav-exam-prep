const { test, expect } = require('@playwright/test');

test('Check movies page', async ({ page }) => {
    await page.goto('https://kneav-exam-prep.onrender.com/');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  