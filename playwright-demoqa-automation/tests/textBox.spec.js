const {test, expect} = require('@playwright/test');
const testData = require('../test-data/userData.json');

test('TC_TB_01 - Verify text box form submission', async ({page})=>
{
    await page.goto('https://demoqa.com/text-box') 
    await page.fill('#userName', testData.fullName) 
    await page.fill('#userEmail', testData.email) 
    await page.click('#submit') 
    
    await expect(page.locator('#name')).toContainText(userData.fullName);
    await expect(page.locator('#email')).toContainText(userData.email);

});
