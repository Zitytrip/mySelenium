const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const { Builder, By, Key, until } = require('selenium-webdriver');

const width = 640;
const height = 480;

let driver = new Builder()
    //.forBrowser('firefox')
    .forBrowser('chrome')
    .setChromeOptions(
        new chrome.Options()
        //.headless()
        .windowSize({ width, height }))
    .setFirefoxOptions(
        new firefox.Options()
        .headless()
        .windowSize({ width, height }))
    .build();


async function demo() {
    try {
        await driver.get('http://www.google.com/ncr');
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
        var t = await driver.getTitle();
        console.log(t);

        await driver.switchTo().alert().accept();
        await driver.switchTo().alert().dismiss(); //cancel button on alert dialog.

        driver.quit();
    } catch (e) {
        await driver.quit();
        throw e;
    }

}

demo();