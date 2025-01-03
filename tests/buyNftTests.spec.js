import { expect, test } from '@playwright/test';
import HomePage from '../pages/homePage.spec';
import EthereumPage from '../pages/ethereumPage.spec';
import SolanaPage from '../pages/solanaPage.spec';
import browserContext from '../utils/browserContext.spec';

const email = "anatolie.molosag@ext.magiceden.io";

test('Successfull Buy cNft on Solana Network', async ({ browser, baseURL }) => {

    const browserCtx = new browserContext();
    const context = await browserCtx.createContextWithLocalStorage(browser);
    const page = await browserCtx.createPageWithContext(context);

    const homepage = new HomePage(page);
    const solanapage = new SolanaPage(page);

    await page.goto(`${baseURL}`);
    await homepage.clickConnectWalletButton();
    await homepage.accountLogin(email);
    await solanapage.clickOnSolana();
    await solanapage.sortFloor();
    await solanapage.buySolanaNft();
    await page.waitForTimeout(5000);
    const toastMessage = await solanapage.toastMessage();
    console.log(await toastMessage.textContent());
    expect(await toastMessage.textContent()).toContain('Successfully ');
    await browser.close();

})

test('Successfull Buy nft on Ethereum Network', async ({ browser, baseURL }) => {


    const browserCtx = new browserContext();
    const context = await browserCtx.createContextWithLocalStorage(browser);
    const page = await browserCtx.createPageWithContext(context);

    const homepage = new HomePage(page);
    const ethereumPage = new EthereumPage(page);

    await page.goto(`${baseURL}`);
    await homepage.clickConnectWalletButton();
    await homepage.accountLogin(email);
    await ethereumPage.clickOnEthereumChain();
    await ethereumPage.sortFloor();
    await ethereumPage.buyEthereumNft();
    await page.waitForTimeout(8000);
    const toastMessage = await ethereumPage.toastMessage();
    console.log(await toastMessage.textContent());
    expect(await toastMessage.textContent()).toContain('Successfully ');
    await browser.close();

})

test('Searching for a custom nft', async ({ browser, baseURL }) => {

    const browserCtx = new browserContext();
    const context = await browserCtx.createContextWithLocalStorage(browser);
    const page = await browserCtx.createPageWithContext(context);

    const homepage = new HomePage(page);

    await page.goto(`${baseURL}`);
    await homepage.clickConnectWalletButton();
    await homepage.accountLogin(email);
    await homepage.searchForNft('Phantom Messages');
    await page.waitForTimeout(5000);
    const nftCollectionName = await homepage.nftCollectionName();
    expect(await nftCollectionName).toContainText('Phantom Messages');
    await browser.close();
})