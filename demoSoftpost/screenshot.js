var assert = require(‘assert’);
var fs = require(‘fs’);
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
        //You can use below code to take the Screenshot of the web page.

        driver.takeScreenshot().then(
            function(image, err) {
                //Screenshot will be saved under current directory with name myscreenshot.png
                fs.writeFile(‘myscreenshot.png’, image, ‘base64’, function(error) {
                    if (error != null)
                        console.log(“Error occured
                            while saving screenshot” + error);
                });
            }
        );

        driver.quit();