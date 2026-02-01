import { test, expect } from '@playwright/test';


test('TC_RB_01 - Select Yes radio button', async ({ page }) => {
    await page.goto('https://demoqa.com/radio-button') 

    await page.click("label[for='yesRadio']") 
    const message = await page.locator('.text-success').textContent() 
    
    await expect(message).toBe('Yes')
});