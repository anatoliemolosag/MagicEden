import { Page } from '@playwright/test'
import { timeout } from '../playwright.config';

export default class SideBarModal{

    constructor( page ){
        this.profileBttn = this.page.locator("//p[contains(text(),'Profile')]");
    }

    async clickPofileBtutton(){
        this.profileBttn.click();
    }


}