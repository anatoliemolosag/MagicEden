import { expect, test } from '@playwright/test';
import HomePage from '../pages/homePage.spec';
import BrowserUtil from '../utils/BrowserUtil.spec';
import EthereumPage from '../pages/ethereumPage.spec';
import SolanaPage from '../pages/solanaPage.spec';

const email = "anatolie.molosag@ext.magiceden.io";

test('Successfull Buy cNft on Solana Network', async({ baseURL }) => {

    const browserUtilInstance = BrowserUtil.getInstance();
    const context = await browserUtilInstance.createContextWithLocalStorage();
    const page = await browserUtilInstance.createPageWithContext(context);

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
    await BrowserUtil.getInstance().closeBrowser();

})

test('Successfull Buy nft on Ethereum Network', async({ baseURL }) => {


    const browserUtilInstance = BrowserUtil.getInstance();
    const context = await browserUtilInstance.createContextWithLocalStorage();
    const page = await browserUtilInstance.createPageWithContext(context);

    const homepage = new HomePage(page);
    const ethereumPage = new EthereumPage(page);

    await page.goto(`${baseURL}`);
    await homepage.clickConnectWalletButton();
    await homepage.accountLogin(email);
    await ethereumPage.clickOnEthereumChain();
    await ethereumPage.sortFloor();
    await ethereumPage.buyEthereumNft();
    await page.waitForTimeout(5000);
    const toastMessage = await ethereumPage.toastMessage();
    console.log(await toastMessage.textContent());
    expect(await toastMessage.textContent()).toContain('Successfully ');    

})

test.only('Searching for a custom nft', async({ baseURL }) => {


    const browserUtilInstance = BrowserUtil.getInstance();
    const context = await browserUtilInstance.createContextWithLocalStorage();
    const page = await browserUtilInstance.createPageWithContext(context);

    const homepage = new HomePage(page);

    await page.goto(`${baseURL}`);
    await homepage.clickConnectWalletButton();
    await homepage.accountLogin(email);
    await homepage.searchForNft('Phantom Messages');

    //write validation script




})