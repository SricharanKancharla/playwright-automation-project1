import { test, expect } from '@playwright/test';


test('TC_CB_01 - Select Desktop checkbox', async ({ page }) => {
await page.goto('https://demoqa.com/checkbox');


await page.getByRole('button', { name: 'Expand all' }).click();
await page.getByText('Desktop').check();


await expect(page.locator('#result')).toContainText('desktop');
});