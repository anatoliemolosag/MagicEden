import { expect, test } from '@playwright/test';
import HomePage from '../pages/homepage.spec';

test('Validate search for a NFT', async({ browser, baseURL }) => {

    const context = await browser.newContext();
    (await context).addInitScript(() => {
      window.localStorage.setItem('hzwzmhvhbofhtmyu','true');
    });
    const page = await context.newPage();

    const homepage = new HomePage(page);
    await page.goto(`${baseURL}`);
    await homepage.clickConnectWalletButton();
    await homepage.accountLogin("anatolie.molosag@ext.magiceden.io");
    await page.pause();
    await homepage.searchNft("Oriental Vibes");
    await page.pause();
    await homepage.buyNft();
    await page.pause();
    const message = homepage.buyToastMessage();
    expect(message).toContain('Successfully purchased Cat in the old paintings #6!');






})