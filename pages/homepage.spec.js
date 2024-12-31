import { Page } from '@playwright/test'
import { timeout } from '../playwright.config';

export default class HomePage{

    constructor( page ){
        this.page = page; 
        this.searchBar = this.page.locator("//input[@placeholder='Search collections on Magic Eden']");
        this.connectBttn = this.page.locator("(//button[contains(text(), 'Connect')])[2]");
        this.emailInput = this.page.locator("div[class='dynamic-shadow-dom'] .input");
        this.submitBttn = this.page.locator("div[class='dynamic-shadow-dom'] button[type='submit']");
    }

    async clickConnectWalletButton(){
        await this.connectBttn.click();
    }

    async accountLogin(email){
        await this.emailInput.fill(email);
        await this.submitBttn.click();
    }

    async enterOneTimePassCode(digit1,digit2,digit3,digit4,digit5,digit6){
        await this.page.locator("div[class='dynamic-shadow-dom'] input[data-testid='0']").fill(digit1);
        await this.page.locator("div[class='dynamic-shadow-dom'] input[data-testid='1']").fill(digit2);
        await this.page.locator("div[class='dynamic-shadow-dom'] input[data-testid='2']").fill(digit3);
        await this.page.locator("div[class='dynamic-shadow-dom'] input[data-testid='3']").fill(digit4);
        await this.page.locator("div[class='dynamic-shadow-dom'] input[data-testid='4']").fill(digit5);
        await this.page.locator("div[class='dynamic-shadow-dom'] input[data-testid='5']").fill(digit6);
    }

    async loginErrorMessage(){
        return await this.page.locator("div[class='dynamic-shadow-dom'] div[class='error-container error-container--error email-verification__error-message']").textContent();
    };

    async searchForNft(name){
       await this.searchBar.waitFor( {state: 'visible', timeout: 10000});
       await this.searchBar.click();
       await this.searchBar.fill(name);
       await this.page.getByText('Phantom Messages').first().click();
    }

    async buyNft(){
        const nftElement = await this.page.locator("//div[@data-index='0']/div/div/div/img");
        await nftElement.hover();
        await nftElement.click();

        const buyNftBttn = await this.page.locator("//following-sibling::button[@type='button' and contains(text(),'Buy ')]");
        await buyNftBttn.click();
    }

    async toastMessage(){
         const toastLocator = this.page.locator("//div[contains(text(),'Successfully')]");
         return toastLocator;
    }
    

}