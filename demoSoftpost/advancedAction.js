Performing advanced actions using Selenium in Node.js
BY ADMIN· PUBLISHED NOVEMBER 21, 2016· UPDATED AUGUST 24, 2017

We can below actions using ActionSequence.

Right click on the element
Drag and drop an element
Double click on an element
Simulating mouse over action
Below example illustrates how to perform actions in Selenium in Node.js

var assert = require(‘assert’);
var webdriver = require(‘selenium - webdriver’),
    By = webdriver.By,
    until = webdriver.until;

var chrome = require(“selenium - webdriver / chrome”);

var options = new chrome.Options();
options.addArguments(“start - maximized”);
options.addArguments(“disable - popup - blocking”);
options.addArguments(“test - type”);
var driver = new webdriver.Builder().
withCapabilities(options.toCapabilities()).build();

driver.get(‘http: //www.softpost.org/selenium-test-page/’);
        var e3 = driver.findElement(By.tagName(‘select’));

        //You can use ActionSequence class to perform actions in selenium

        new webdriver.ActionSequence(driver).keyDown(webdriver.Key.SHIFT).click(e3).
        //dragAndDrop(element3, element4).
        keyUp(webdriver.Key.SHIFT).perform();

        //In the same way, you can perform below actions.
        //sendKeys, mouseUp , mouseMove, mouseDown, dragAndDrop, doubleClick

        driver.sleep(5000);

        driver.quit();
        //Similarly we can also do touch actions on mobile phones