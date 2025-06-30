//@ts-check

import{test,expect} from '@playwright/test';

test('getByLabel locator demo', async({page}) => {
    await page.goto('http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx');

    await expect(page).toHaveTitle('Web Orders Login');

    //Use the getByLabel() method to identify the 2 textfields, username & password on login page.

    await page.getByLabel('Username:').fill('Tester');
    await page.getByLabel('Password:').fill('test');

    await page.getByRole('button', {name: 'Login'}).click();//useed getByRole method.

    await expect(page).toHaveTitle('Web Orders');
})