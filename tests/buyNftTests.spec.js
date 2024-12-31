import { expect, test } from '@playwright/test';
import HomePage from '../pages/homepage.spec';
import BrowserUtil from '../utils/BrowserUtil.spec';

test('Validate search for a NFT', async({ baseURL }) => {

    const browserUtilInstance = BrowserUtil.getInstance();
    const context = await browserUtilInstance.createContextWithLocalStorage();
    const page = await browserUtilInstance.createPageWithContext(context);

    const homepage = new HomePage(page);
    await page.goto(`${baseURL}`);
    await homepage.clickConnectWalletButton();
    await homepage.accountLogin("anatolie.molosag@ext.magiceden.io");
    await homepage.searchForNft("Oriental Vibes");
    await homepage.buyNft();
    await page.waitForTimeout(5000)
    const toastMessage = homepage.toastMessage();
    console.log(toastMessage);
    expect(toastMessage).toContain('Successfully');


})