import { test, expect } from '@playwright/test';


test('TC_DD_01 - Select Blue from dropdown', async ({ page }) => {
await page.goto('https://demoqa.com/select-menu');


await page.locator('#oldSelectMenu').selectOption('4');
await expect(page.locator('#oldSelectMenu')).toHaveValue('4');
});