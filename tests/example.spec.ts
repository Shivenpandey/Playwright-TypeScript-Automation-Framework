
import { test, expect } from '@playwright/test';

test('Verify Automation Exercise page title', async ({ page }) => {

  await page.goto('https://automationexercise.com/');

  await expect(page).toHaveTitle(/Automation Exercise/i);

});

test('Verify Automation Exercise homepage URL', async ({ page }) => {

  await page.goto('https://automationexercise.com/');

  await expect(page).toHaveURL(/automationexercise\.com/);

});


test('Verify homepage description is visible', async ({ page }) => {

  await page.goto('https://automationexercise.com/');

  await expect(
    page.getByRole('heading', {
      name: 'Full-Fledged practice website for Automation Engineers',
      exact: true
    }).first()
  ).toBeVisible();

});

