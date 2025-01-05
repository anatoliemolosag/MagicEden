import { Page, Locator  } from "@playwright/test";

export default class HomePage {

    private page: Page;
    private connectButton: Locator;
    private searchBar: Locator;


    constructor ( page : Page ){
        
        this.page = page;
        this.connectButton = this.page.locator("div[class='dynamic-shadow-dom'] .input");
        this.searchBar = this.page.locator("//input[@placeholder='Search collections on Magic Eden']");


    }

}