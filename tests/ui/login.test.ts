import { test, expect } from '@playwright/test';
import AccountCreationPage from '../../pages/accountCreationPage';
import LoginPage from '../../pages/loginPage';
import TestData from  '../../data/TestData.json';
import ManageAccountPage from '../../pages/mangeAccountPage';

let accountCreationPage: AccountCreationPage;
let loginPage: LoginPage;
let manageAccountPage: ManageAccountPage;

test.beforeEach(async ({ page }) => {
  accountCreationPage=new AccountCreationPage(page);
  loginPage=new LoginPage(page);
  manageAccountPage=new ManageAccountPage(page);

  await page.goto(TestData.baseURL);

  const cookies = await page.context().cookies();
  expect(cookies.some(cookies => cookies.name === 'interview')).toBeTruthy();
  const logo = await loginPage.getTractiveLogo();
  await expect(logo).toBeVisible();
  await loginPage.clickAcceptAllCoockiesbutton();

});

test('Sign In to Tractive Account', async ({ page }) => {

  await loginPage.enterEmail(TestData.Email);
  await loginPage.enterPasssword(TestData.Password);
  await loginPage.clickSignInButton()
  const actualAccountName = await manageAccountPage.getAccountName();
  console.log(`Actual Account Name: "${actualAccountName}"`);
  console.log(`Expected Account Name: "${TestData.FirstName} ${TestData.LastName}"`);
  expect(actualAccountName).toBe(TestData.FirstName+" "+TestData.LastName);
  const actualEmail = await manageAccountPage.getEmailAddress();
  console.log(`Actual Email: "${actualEmail}"`);
  console.log(`Expected Email: "${TestData.Email}"`);
  expect(actualEmail).toBe(TestData.Email);
  
});
