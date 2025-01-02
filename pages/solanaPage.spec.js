import { Page } from '@playwright/test'
import { timeout } from '../playwright.config';

export default class SolanaPage{

constructor(page){
this.page = page;
this.solanaChianBttn = this.page.locator("//div[@data-test-id='chain-select-button-solana-inactive']/button");
this.sortByFloorBttn = this.page.locator("//h3[substring(text(), string-length(text()) - string-length('Floor') + 1) = 'Floor']");

}

async clickOnSolana(){
    await this.solanaChianBttn.click();
}

async sortFloor (){
    await this.sortByFloorBttn.dblclick();
    await this.sortByFloorBttn.dblclick();

}

async buySolanaNft() {
    const firstNftElement = this.page.locator("//tr[11]/td[2]/div/div[contains(text(),'10')]");
    await firstNftElement.click();

    const nftElement = await this.page.locator("//div[@data-index='1']/div/div/div/img");
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