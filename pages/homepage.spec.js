import { Page } from '@playwright/test'

export default class HomePage{

    constructor( page ){
        this.page = page; 
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

    async searchNft(name){
        await this.page.locator("#react-select-header-async-search-input").fill(name);
        await this.page.locator("//div[@data-index='1']").click();
    }

    async buyNft(){
        await this.page.locator("//div[@data-index='0']").click();
        await this.page.locator("//button[contains(text(),'Buy ')]").click();
    }

    async buyToastMessage(){
        return this.page.locator("//div[contains(text(),'Successfully')]")
    }
    

}