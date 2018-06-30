/You can execute the Java Script using below syntax.
var assert = require(‘assert’);
var webdriver = require(‘selenium - webdriver’),
    By = webdriver.By,
    until = webdriver.until;

var chrome = require(“selenium - webdriver / chrome”);

var options = new chrome.Options();
var driver = new webdriver.Builder().
withCapabilities(options.toCapabilities()).build();

driver.get(‘http: //www.softpost.org/selenium-test-page/’);

        //simple javascript
        driver.executeScript(“
            return document.body.innerHTML;”).then(function(returnValue) {
            console.log(“Return Value - > ”+returnValue);
        });

        //using javascript function
        var myfunction = function() {
            return document.body.innerHTML;
        }

        driver.executeScript(myfunction).then(function(returnValue) {
            console.log(“Return Value by myfunction - > ”+returnValue);
        });

        //passing arguments to javascript function 
        var f1 = function(element) {
            element.click();
        }

        var e1 = driver.findElement(By.xpath(“ //input[@value=’female’]”))
                    driver.executeScript(f1, e1).then(function(returnValue) {
                        console.log(“Return Value of f1 - > ”+returnValue);
                    }); driver.sleep(5000);

                    driver.findElement(By.id(‘fn’)).sendKeys(‘Shaun’);

                    //Returning value from javascript function 
                    var f2 = function(element) {
                        return element.value;
                    }

                    var e2 = driver.findElement(By.id(‘fn’)); driver.executeScript(f2, e2).then(function(returnValue) {
                        console.log(“Return Value of f2 - > ”+returnValue);
                    }); driver.quit();