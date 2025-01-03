const { chromium } = require('playwright');

(async () => {
    // Path to the unpacked Chrome extension
    const extensionPath = '/path/to/your/extension';

    // Launch Chromium with the extension loaded
    const browser = await chromium.launchPersistentContext('', {
        headless: false, // Extensions are only supported in non-headless mode
        args: [
            `--disable-extensions-except=${extensionPath}`, // Disable other extensions except this one
            `--load-extension=${extensionPath}` // Load your extension
        ]
    });

    const page = await browser.newPage();
    await page.goto('https://example.com'); // Navigate to the desired page

    // Interact with the extension or the web page
    // Example: Open the extension popup if it has a browser action
    await page.click('#your-extension-button-selector');

    // Close the browser when done
    await browser.close();
})();
