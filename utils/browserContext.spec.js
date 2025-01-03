
export default class browserContext {

  async createContextWithLocalStorage(browser) {
  
    const context = await browser.newContext();
    await context.addInitScript(() => {
      window.localStorage.setItem('hzwzmhvhbofhtmyu', "true");
    });
    return context;
  }

  async createPageWithContext(context) {
    return await context.newPage();
  }

}
