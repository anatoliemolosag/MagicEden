import { expect, test } from '@playwright/test'
import HomePage from '../pages/homePage.spec'
import BrowserUtil from '../utils/BrowserUtil.spec';


const email = "anatolie.molosag+1@ext.magiceden.io";

//this test case needs to be revised - wrong expected title
test('Successfull LogIn', async({ baseURL }) => {

  const browserUtilInstance = BrowserUtil.getInstance();
  const context = await browserUtilInstance.createContextWithLocalStorage();
  const page = await browserUtilInstance.createPageWithContext(context);

  const homepage = new HomePage(page);
  await page.goto(`${baseURL}`);
  await homepage.clickConnectWalletButton();
  await homepage.accountLogin(email);
  const title = await page.title();
  await expect(title).toBe('Magic Eden - US NFT Marketplace')
  await BrowserUtil.getInstance().closeBrowser();
  
  
})

test('Login with invalid one time passcode', async({ baseURL }) => {
  
  const browserUtilInstance = BrowserUtil.getInstance();
  const context = await browserUtilInstance.createContextWithLocalStorage();
  const page = await browserUtilInstance.createPageWithContext(context);

  const homepage = new HomePage(page);
  await page.goto(`${baseURL}`);
  await homepage.clickConnectWalletButton();
  await homepage.accountLogin(email);
  await homepage.enterOneTimePassCode('1','1','1','1','1','1');
  const errorMessage = await homepage.loginErrorMessage();
  await expect(errorMessage).toBe('The code you entered is incorrect. Please try again.')
  await BrowserUtil.getInstance().closeBrowser();
 
});

