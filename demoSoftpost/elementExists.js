ar assert = require(‘assert’);
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

//We can use below code block to check if element exists on the webpage.

driver.get(“http: //www.softpost.org”);

        var webElements = driver.findElements(By.id(“myid”));

        webElements.then(function(elements) {

            if (elements.length == 0)
                console.log(“Element myid not present”);
            else
                console.log(“Element myid present”);
        });

        driver.quit();