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

        //To get the window handle, you can use getWindowHandle method.
        driver.getWindowHandle().then(function(mainWindowHandle) {
            console.log(“Main window handle is” + mainWindowHandle);

            var e1 = driver.findElement(By.partialLinkText(‘Selenium in Java’));
            driver.executeScript(f1, e1);
            driver.getAllWindowHandles().then(function(windowHandles) {
                console.log(“Total number of windows” + windowHandles.length);
                //Here you can switch to the another window using windowHandles variable
                windowHandles.forEach(function(handle) {
                    console.log(handle + “\n”);
                    if (!(handle === mainWindowHandle)) {
                        //Switch to new browser window
                        console.log(“Switching to other window”);
                        driver.switchTo().window(handle);
                        driver.getTitle().then(function(title) {
                            console.log(“Title of new window - > ”+title);
                        });
                    }
                });
            });

            //Switch to original window
            driver.switchTo().window(mainWindowHandle);
            driver.getTitle().then(function(title) {
                console.log(“Title of original window - > ”+title);
            });
        });

        //Below function is used to click on the element using native javascript in browser
        var f1 = function(element) {
            element.click();
        }

        driver.quit();