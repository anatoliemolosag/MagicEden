import { expect, test } from '@playwright/test'
import HomePage from '../pages/homepage.spec'
import BrowserUtil from '../utils/BrowserUtil.spec';


test('Successfull LogIn', async({ baseURL }) => {
  
  const browserUtilInstance = BrowserUtil.getInstance();
  const context = await browserUtilInstance.createContextWithLocalStorage();
  const page = await browserUtilInstance.createPageWithContext(context);

  const homepage = new HomePage(page);
  await page.goto(`${baseURL}`);
  await homepage.clickConnectWalletButton();
  await homepage.accountLogin("anatolie.molosag@ext.magiceden.io");
  await page.pause();
  const title = await page.title();
  await expect(title).toBe('Magic Eden - US NFT Marketplace')
  
})

test('Login with invalid one time passcode', async({ baseURL }) => {
  
  const browserUtilInstance = BrowserUtil.getInstance();
  const context = await browserUtilInstance.createContextWithLocalStorage();
  const page = await browserUtilInstance.createPageWithContext(context);

  const homepage = new HomePage(page);
  await page.goto(`${baseURL}`);
  await homepage.clickConnectWalletButton();
  await homepage.accountLogin("anatolie.molosag+1@ext.magiceden.io");
  await homepage.enterOneTimePassCode('1','1','1','1','1','1');
  const errorMessage = await homepage.loginErrorMessage();
  await expect(errorMessage).toBe('The code you entered is incorrect. Please try again.')

});

