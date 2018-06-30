Synchronization in Selenium in Node.js
BY ADMIN· PUBLISHED NOVEMBER 21, 2016· UPDATED AUGUST 24, 2017

We can have 3 types of timeouts.

pageLoadTimeout
implicitlyWait
explicit wait
Below line of code shows how to set page load timeout
driver.manage().timeouts().pageLoadTimeout(50, TimeUnit.SECONDS);

Below line of code shows how to set implicit wait timeout
driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

Below line of code shows explicit wait timeout syntax.
driver.wait(condition, optional_timeout, optional_message)

For example– If you want to wait until title of the page becomes say“ Selenium Test Page”, you can use below syntax.
driver.wait(until.titleIs(‘Selenium Test Page’), 1000);

Here are all of the wait conditions that you can use in your scripts.

ableToSwitchToFrame(frame)
attemptToSwitchFrames(driver, frame)
alertIsPresent()
titleIs(title)
titleContains(substr)
titleMatches(regex)
urlIs(url)
urlContains(substrUrl)

function urlMatches(regex)
elementLocated(locator)
elementsLocated(locator)
stalenessOf(element)
elementIsVisible(element)
elementIsNotVisible(element)
elementIsEnabled(element)
elementIsDisabled(element)
elementIsSelected(element)
elementIsNotSelected(element)
elementTextIs(element, text)
elementTextContains(element, substr)
elementTextMatches(element, regex)
Below example illustrates how to wait until title of page becomes as expected.

var assert = require(‘assert’);
var webdriver = require(‘selenium - webdriver’),
    By = webdriver.By,
    until = webdriver.until;

var chrome = require(“selenium - webdriver / chrome”);

var options = new chrome.Options();
options.addArguments(“start - maximized”);
options.addArguments(“test - type”);
var driver = new webdriver.Builder().
withCapabilities(options.toCapabilities()).build();

//Pageload time out of 50 seconds
driver.manage().timeouts().pageLoadTimeout(1000 * 50);

//Implicit wait of 20 seconds
driver.manage().timeouts().implicitlyWait(1000 * 20);

driver.get(‘http: //www.softpost.org/selenium-test-page/’);

        //For example – If you want to wait until title of the page becomes say “Selenium Test Page”, you can use below syntax.
        //Wait for 4 seconds for title to become “Selenium Test Page | Free Software Tutorials” 
        driver.wait(until.titleIs(‘Selenium Test Page | Free Software Tutorials’), 1000 * 4);

        driver.getTitle().then(function(title) {
            console.log(“title is” + title);
            assert(title === ”Selenium Test Page | Free Software Tutorials”);
        });

        driver.quit();