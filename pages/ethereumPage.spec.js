import { Page } from '@playwright/test'
import { timeout } from '../playwright.config';

export default class EthereumPage{

constructor(page){
this.page = page;
this.ethereumChainBttn = this.page.locator("//div[@data-test-id='chain-select-button-ethereum-inactive']/button");
this.sortByFloorBttn = this.page.locator("//h3[substring(text(), string-length(text()) - string-length('Floor') + 1) = 'Floor']");

}

async clickOnEthereumChain(){
    await this.ethereumChainBttn.click();
}

async sortFloor (){
    await this.sortByFloorBttn.dblclick();
}

async buyEthereumNft() {
    const firstNftElement = this.page.locator("//tr[7]/td[2]/div/div[contains(text(),'6')]");
    await firstNftElement.click();

    const nftElement = await this.page.locator("//div[@data-index='1']/div/div/div/img");
    await nftElement.hover();
    await nftElement.click();

    const buyNftBttn = await this.page.locator("//button[@type='button' and contains(text(),'Buy ')]");
    await buyNftBttn.click();
}

async toastMessage(){
    const toastLocator = this.page.locator("//div[@id='nmcr3sz']/div/div/following-sibling::div");
    return toastLocator;
}


}