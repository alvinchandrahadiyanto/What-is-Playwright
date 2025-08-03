import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('link', { name: 'English 7,009,000+ articles' }).click();
  await page.getByRole('link', { name: 'Mario Party: The Top' }).click();
  await page.getByRole('link', { name: 'Critical response' }).click();
});