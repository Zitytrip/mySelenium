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

        //You can use below code to send the keys to elements.

        driver.findElement(By.id(“fn”)).sendKeys(“Shaun” + webdriver.Key.ENTER); driver.findElement(By.id(“fn”)).sendKeys(webdriver.Key.chord(webdriver.Key.CONTROL, “a”));

        driver.sleep(4000);

        driver.quit();