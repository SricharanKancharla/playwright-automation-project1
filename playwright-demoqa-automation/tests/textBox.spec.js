const {test, expect} = require('@playwright/test');
const testData = require('../test-data/userData.json');

test('TC_TB_01 - Verify text box form submission', async ({page})=>
{
    await page.goto('https://demoqa.com/text-box') 
    await page.fill('#userName', testData.fullName) 
    await page.fill('#userEmail', testData.email) 
    await page.click('#submit') 
    
    const name1 = await page.locator('#name').textContent() 
    await expect.soft(name1).toContain(testData.fullName) 
    const mail1 = await page.locator('#email').textContent() 
    await expect.soft(mail1).toContain(testData.email)
});