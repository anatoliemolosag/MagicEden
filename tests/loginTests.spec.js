import { expect, test } from '@playwright/test'
import HomePage from '../pages/homepage.spec'


test('Successfull LogIn', async({ browser , baseURL }) => {
  
  const context = await browser.newContext();
  (await context).addInitScript(() => {
    window.localStorage.setItem('hzwzmhvhbofhtmyu','true');
  });

  const page = await context.newPage();
  const homepage = new HomePage(page);
  await page.goto(`${baseURL}`);
  await homepage.accountLogin("anatolie.molosag@ext.magiceden.io");
  await page.pause();
  const title = await page.title();
  await expect(title).toBe('Magic Eden - US NFT Marketplace')
  
})

test.only('Login with invalid one time passcode', async({ browser , baseURL }) => {
  
  const context = await browser.newContext();
  (await context).addInitScript(() => {
    window.localStorage.setItem('hzwzmhvhbofhtmyu','true');
  });
  
  const page = await context.newPage();
  const homepage = new HomePage(page);
  await page.goto(`${baseURL}`);
  await homepage.accountLogin("anatolie.molosag+102@ext.magiceden.io");
  await homepage.enterOneTimePassCode('1','1','1','1','1','1');
  const errorMessage = await homepage.errorMessage();
  await expect(errorMessage).toBe('The code you entered is incorrect. Please try again.')

});

