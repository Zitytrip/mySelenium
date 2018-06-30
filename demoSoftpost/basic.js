Basic Browser window automation in selenium in Node.js
BY ADMIN· PUBLISHED NOVEMBER 21, 2016· UPDATED AUGUST 24, 2017

Below example illustrates how to automate below things using Selenium Webdriver in Node.js

Navigate back and forward
Maximizing the browser window
Resizing the window
Getting the title of current web page
Getting the url of current page
Getting the HTML source of current page
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
        driver.get(‘http: //www.softpost.org’);

            //We can use below code to navigate forward and backward.
            driver.navigate().back();

            driver.sleep(4000); driver.navigate().forward();

            //You can maximize the browser windows using below code.
            driver.manage().window().maximize();

            //You can set the window size using below code.
            driver.manage().window().setSize(200, 200);

            //Below code shows how you can get the title of web page.
            driver.get(‘http: //www.softpost.org/selenium-test-page/’);

                driver.getTitle().then(function(title) {
                    console.log(“title is” + title);
                    assert(title == ’Selenium Test Page | Free Software Tutorials’);
                });

                //Below code shows alternative syntax to use promises in Node.js
                var promise = driver.getTitle(); promise.then(function(title) {
                    console.log(“title is” + title);
                });

                //To get current url, use getCurrentUrl() method.
                driver.getCurrentUrl().then(function(url) {
                    console.log(“Url is” + url);
                });

                //To get html source of current page, use getPageSource() method.
                driver.getPageSource().then(function(source) {
                    console.log(“Page source is” + source);
                });

                driver.quit();