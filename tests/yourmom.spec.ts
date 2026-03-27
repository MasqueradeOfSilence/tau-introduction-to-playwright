import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://www.donkey.com/');
});

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/donkey.com/);
});

test('has correct url', async ({ page }) => {
     await expect(page).toHaveURL("http://www.donkey.com/")
});

test('has correct elements', async ({page}) => {
    await expect(page.getByText("A domesticated hoofed mammal related to the horse with long ears.")).toBeVisible();
    await expect(page.getByAltText("This is alt text")).not.toBeVisible();
    await expect(page.getByRole('list')).toContainText("A domesticated hoofed mammal");
});