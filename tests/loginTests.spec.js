import { expect, test } from '@playwright/test'
import HomePage from '../pages/homePage.spec'
import browserContext from '../utils/browserContext.spec';


const email = "anatolie.molosag+4@ext.magiceden.io";

//this test case needs to be revised - wrong expected title
test('Successfull LogIn', async({browser, baseURL }) => {

  const browserCtx = new browserContext();
  const context = await browserCtx.createContextWithLocalStorage(browser);
  const page = await browserCtx.createPageWithContext(context);

  const homepage = new HomePage(page);

  await page.goto(`${baseURL}`);
  await homepage.clickConnectWalletButton();
  await homepage.accountLogin(email);
  const title = await page.title();
  await expect(title).toBe('Magic Eden - US NFT Marketplace')
  await page.close();
  
  
})


test('Login with invalid one time passcode', async({browser, baseURL }) => {
  
  const browserCtx = new browserContext();
  const context = await browserCtx.createContextWithLocalStorage(browser);
  const page = await browserCtx.createPageWithContext(context);

  const homepage = new HomePage(page);

  await page.goto(`${baseURL}`);
  await homepage.clickConnectWalletButton();
  await homepage.accountLogin(email);
  await homepage.enterOneTimePassCode('1','1','1','1','1','1');
  const errorMessage = await homepage.loginErrorMessage();
  await expect(errorMessage).toBe('The code you entered is incorrect. Please try again.')
  await page.close();
 
});

