import { Page } from '@playwright/test'
import { timeout } from '../playwright.config';

export default class HomePage{

    constructor( page ){
        this.page = page; 
        this.searchBar = this.page.locator("//input[@placeholder='Search collections on Magic Eden']");

    }

    async clickConnectWalletButton(){
        await this.page.click("(//button[contains(text(), 'Connect')])[2]")
    }

    async accountLogin(email){
        await this.page.locator("div[class='dynamic-shadow-dom'] .input").fill(email);
        await this.page.click("div[class='dynamic-shadow-dom'] button[type='submit']");
    }

    async enterOneTimePassCode(digit1,digit2,digit3,digit4,digit5,digit6){
        await this.page.locator("div[class='dynamic-shadow-dom'] input[data-testid='0']").fill(digit1);
        await this.page.locator("div[class='dynamic-shadow-dom'] input[data-testid='1']").fill(digit2);
        await this.page.locator("div[class='dynamic-shadow-dom'] input[data-testid='2']").fill(digit3);
        await this.page.locator("div[class='dynamic-shadow-dom'] input[data-testid='3']").fill(digit4);
        await this.page.locator("div[class='dynamic-shadow-dom'] input[data-testid='4']").fill(digit5);
        await this.page.locator("div[class='dynamic-shadow-dom'] input[data-testid='5']").fill(digit6);
    }

    async errorMessage(){
        return await this.page.locator("div[class='dynamic-shadow-dom'] div[class='error-container error-container--error email-verification__error-message']").textContent();
    };

    async searchForNft(name){
       await this.searchBar.fill(name);
       await this.page.getByText('Oriental Vibes').first().click();


    //    const searchNftLocator = "//div[@data-index='1']";
    //    await this.page.locator(searchNftLocator).waitFor({ state : 'visible', timeout : 6000})
    //    await this.page.locator(searchNftLocator).click();

        //  const nft = "//span[contains(text(),'Oriental Vibes')]";
        //  await this.page.locator(nft).click();
    }

    // async buyNft(){
    //     await this.page.locator("//div[@data-index='0']").click();
    //     await this.page.locator("//button[contains(text(),'Buy ')]").click();
    // }

    // async buyToastMessage(){
    //     return this.page.locator("//div[contains(text(),'Successfully')]")
    // }
    

}