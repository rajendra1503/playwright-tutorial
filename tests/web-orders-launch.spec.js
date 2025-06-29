// This test verifies that the Web Orders application launches successfully 
// and the login page is displayed with the correct title.


const {test, expect} = require('@playwright/test')

test('launch web orders application', async({page})=>{

    await page.goto('http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx');

    await expect(page).toHaveTitle('Web Orders Login');
})