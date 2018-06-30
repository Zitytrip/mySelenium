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

//We can use below code to click on Ok button on alert dialog.
driver.switchTo().alert().accept();

//We can use below code to click on cancel button on alert dialog.
driver.switchTo().alert().dismiss();