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
  expect(cookies.some(c => c.name === 'interview')).toBeTruthy();
  const logo = await loginPage.getTractiveLogo();
  await loginPage.clickAcceptAllCoockiesbutton();
  await expect(logo).toBeVisible();
  await loginPage.clickCreateAccountLink();

});

test('Sign Up To Tractive Account', async ({ page }) => {

  await accountCreationPage.enterFirstName(TestData.FirstName);
  await accountCreationPage.enterLastName(TestData.LastName);
  await accountCreationPage.enterEmail(TestData.Email);
  await accountCreationPage.enterPasssword(TestData.Password);
  await accountCreationPage.clickCheckboxTractiveNews();
  await accountCreationPage.clickCreateAccountButton();
  await manageAccountPage.clickTrackIDBackButton();
  await manageAccountPage.getAccountName();
  await manageAccountPage.getEmailAddress();
  const actualAccountName = await manageAccountPage.getAccountName();
  console.log(`Actual Account Name: "${actualAccountName}"`);
  console.log(`Expected Account Name: "${TestData.FirstName} ${TestData.LastName}"`);
  expect(actualAccountName).toBe(TestData.FirstName+" "+TestData.LastName)
  const actualEmail = await manageAccountPage.getEmailAddress();
  console.log(`Actual Email: "${actualEmail}"`);
  console.log(`Expected Email: "${TestData.Email}"`);
  expect(actualEmail).toBe(TestData.Email);
});
