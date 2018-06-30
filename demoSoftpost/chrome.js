var assert = require(‘assert’);
var webdriver = require(‘selenium - webdriver’),
    By = webdriver.By,
    until = webdriver.until;

var chrome = require(“selenium - webdriver / chrome”);

var options = new chrome.Options();

//Start browser using below binary file
//options.setChromeBinaryPath(pathToChromeBinary);

//Start browser in Maximized mode using below option
options.addArguments(“start - maximized”);

//Disable pop ups using below option
options.addArguments(“disable - popup - blocking”);

//disable developer extension using below option
options.addArguments(“chrome.switches”, ”–disable - extensions”);

//security warning is disabled using below option
options.addArguments(“test - type”);

var driver = new webdriver.Builder().
withCapabilities(options.toCapabilities()).build();

driver.get(“http: //www.softpost.org”);
        driver.close(); driver.quit();