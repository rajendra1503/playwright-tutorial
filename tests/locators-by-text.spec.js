//@ts-check

import{test,expect} from '@playwright/test';

test('getByText locator demo', async({page}) => {
    await page.goto('http://secure.smartbearsoftware.com/samples/testcomplete11/WebOrders/login.aspx');

    await expect(page).toHaveTitle('Web Orders Login');
    await page.getByLabel('Username:').fill('Tester');
    await page.getByLabel('Password:').fill('test');
    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page).toHaveTitle('Web Orders');

    //On Web Orders page we want to validate element present with text 'List of All Orders'.
    // We will use the getByText() method to verify that element is visible. 
    // Actually it has h2 heading tag so we could have used getByRole. But we will
    //use getByText to match visible text content. It is case sensitive by default.

    await expect(page.getByText('List of All Orders')).toBeVisible();

    //If you want to do case-insensitive or partial match then you can add below asssertion.
    await expect(page.getByText(/list of All Orders/i)).toBeVisible();
    
})