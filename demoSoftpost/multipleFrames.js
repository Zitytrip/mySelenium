ar assert = require(‘assert’);
var webdriver = require(‘selenium - webdriver’),
    By = webdriver.By,
    until = webdriver.until;

var chrome = require(“selenium - webdriver / chrome”);

var options = new chrome.Options();
options.addArguments(“start - maximized”);
options.addArguments(“test - type”);
var driver = new webdriver.Builder().
withCapabilities(options.toCapabilities()).build();

driver.get(‘http: //www.softpost.org/selenium-test-page/’);

        /*
        We can use below code to switch to default content.
        driver.switchTo().defaultContent();
        */
        driver.switchTo().frame(“g”); driver.getPageSource().then(function(source) {
            console.log(“HTML Source of frame - > ”+source);
        });

        driver.sleep(5000);

        driver.switchTo().defaultContent(); driver.getPageSource().then(function(source) {
            console.log(“HTML Source of main page - > ”+source);
        }); driver.quit();