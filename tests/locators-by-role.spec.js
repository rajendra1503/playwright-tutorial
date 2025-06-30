//@ts-check

import{test,expect} from '@playwright/test';

test('getByRole locator demo', async({page}) => {
    await page.goto('http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx');

    await expect(page).toHaveTitle('Web Orders Login');

    //Use the getByRole() method to identify the web elements on the login page.

    await page.getByRole('textbox', {name: 'Username:'}).fill('Tester');
    await page.getByRole('textbox', {name: 'Password:'}).fill('test');
    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page).toHaveTitle('Web Orders');
})