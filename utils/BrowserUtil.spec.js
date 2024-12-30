const { chromium } = require('@playwright/test');

export default class BrowserUtil {
  static instance;

  constructor() {
    if (BrowserUtil.instance) {
      return BrowserUtil.instance;
    }else{
    this.browser = null;
    BrowserUtil.instance = this;
    }
  }

  static getInstance() {
    if (!BrowserUtil.instance) {
      BrowserUtil.instance = new BrowserUtil();
    }
    return BrowserUtil.instance;
  }

  async getBrowserInstance() {
    if (!this.browser) {
      this.browser = await chromium.launch({ headless: false });
    }
    return this.browser;
  }

  async createContextWithLocalStorage() {
    const browser = await this.getBrowserInstance();
    const context = await browser.newContext();
    await context.addInitScript(() => {
      window.localStorage.setItem('hzwzmhvhbofhtmyu', "true");
    });
    return context;
  }

  async createPageWithContext(context) {
    return await context.newPage();
  }

  async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
      this.browser = null; 
    }
  }
}
