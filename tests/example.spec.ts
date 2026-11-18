
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Verify page title
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link
  await page.getByRole('link', { name: 'Get started' }).click();

  // Verify Installation heading
  await expect(
    page.getByRole('heading', { name: 'Installation' })
  ).toBeVisible();
});


test('verify Playwright documentation heading', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const headings = await page.getByRole('heading').allTextContents();

  console.log('Available headings:', headings);

  await expect(page.getByRole('heading').first()).toBeVisible();
});
