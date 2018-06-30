# mySelenium

my helpers to use selenium webdriverjs more easily.

tests how to use it.


demo.sh
    - Downloads google and bing website in 2 tabs; 
    - Saves screenshots to output/*.png
    - closes the google tab

Selenium is a tool that uses normal browsers to do testing of websites, 
but it also can be used for scraping.

All browsers can be used via Xvfb virtual terminal.
Chromium v59 above supports headless mode, so can be used without Xvfb. 


INSTALLATION

1. // Use npm package manager to install selenium
   npm install selenium-webdriver
   "selenium-webdriver": "^3.6.0",

2. DRIVERS for Selenium (Chromium, Chrome, Firefox, etc)

2a. Chromium driver
   Chromium installs to /usr/lib/chromium
   To test if it is installed, enter 'chromedriver' in terminal, shows 2.29
   Debian:  see debianInstallChromedriver.sh
   NPM: in package.json:  "chromedriver": "^2.33.1",
   Arch: yaourt -S chromedriver  Note: IT SEEMS Chromium already comes installed with Chromedriver;
   the package chromedriver is in conflict. 

2b. Chrome
    Chrome installs to /opt/google/chrome-unstable/chrome
    Chrome v60 itself does not work. This gets errors: 
    https://stackoverflow.com/questions/43982934/selenium-webdriverjs-javascript-with-chrome
    https://github.com/SeleniumHQ/selenium/issues/3070

2c. Firefox:   
    yaourt -S geckodriver   
    installs selenium driver for firefox.
    https://github.com/mozilla/geckodriver/issues/683
    selenium has some issue with TEXT vs string that does not allow the scraping. This should be fixed soon.


3. xvfb  Virtual Screen Managment


http://webdriver.io/guide/usage/repl.html

http://webdriver.io/guide/usage/selectors.html

FIND ELEMENTS BY TEXT
    .click('div=Welcome to my Page') 
    .click('div*=Welcome to my')


    get - Navigate the browser to a URL.

findElements - Similar to document.querySelectorAll in the browser.

executeScript - Execute raw JavaScript onto the current page.

getText - Get the text content of an element including its children.

isDisplayed - Find out if an element is displayed on the page.

browser.findElements(webdriver.By.css('[href^="/wiki/"]')).then(function(links){

    console.log('Found', links.length, 'Wiki links.' )

    browser.quit();

});

We construct a CSS selector which matches elements that have an attribute of href and a value starting with /wiki/ (e.g. internal Wiki links

function findTutsPlusLink() {
    return browser.findElements(webdriver.By.css('[href="http://code.tutsplus.com/"]')).then(function(result) {
        return result[0];
    });
}
 
function closeBrowser() {
    browser.quit();
}
 
browser.get('https://www.google.com');
browser.findElement(webdriver.By.name('q')).sendKeys('tuts+ code');
browser.findElement(webdriver.By.name('btnG')).click();
browser.wait(findTutsPlusLink, 2000).then(clickLink).then(logTitle).then(closeBrowser, handleFailure);
Running


