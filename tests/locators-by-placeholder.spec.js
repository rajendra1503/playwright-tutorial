//@ts-check

import{test,expect} from '@playwright/test';

test('getByPlaceholder locator demo', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await expect(page).toHaveTitle('OrangeHRM');

    //Use the getByPlaceholder() method to identify the web elements on the login page.

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    //Use the getByRole() method to identify Login button.
    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
})