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

driver.get(‘http: //www.softpost.org/selenium-test-page/’);

        Setting data

        To set the data in editbox, you can use below syntax.driver.findElement(By.id(“myeditboxid”)).sendKeys(“hi”);

        To select or unselect the checkbox, radiobuttons, you can use below syntax.driver.findElement(By.id(“mycheckboxid”)).click();

        To submit the form, use below method.submit() driver.submit().then(function() {
            console.log(“Form is submitted”);
        });

        To clear the data from input box, use below method.clear()

        driver.findElement(By.id(“myid”)).clear().then(function() {
            console.log(“myid is cleared”);
        });

        Sending keys

        driver.findElement(By.id(‘fn’)).sendKeys(‘Shaun’);

        driver.findElement(By.id(‘fn’)).getAttribute(‘value’).then(function(value) {
            console.log(“First value entered in edit box - > ”+value);
            assert(value == ’Shaun’);
        });

        driver.findElement(By.id(‘fn’)).clear(); driver.findElement(By.id(‘fn’)).sendKeys(‘Hyden’);

        driver.findElement(By.xpath(“ //input[@value=’QTP’]”)).click();

                //Below statement will force driver to wait for 5 seconds before performing next actions
                driver.sleep(5000);

                Reading data from page

                To get css value of an element, use below method.getCssValue()

                driver.findElement(By.id(“myid”)).getCssValue(‘width’).then(function(value) {
                    console.log(“Width is” + value);
                });

                To get tag name of an element, use below method.getTagName()

                driver.findElement(By.linkText(“Open New Window”)).getTagName().then(function(value) {
                    console.log(“TagName is” + value);
                });

                To get value of an attribute of an element, use below method.getAttribute(attributeName)

                driver.findElement(By.id(“myid”)).getAttribute(‘class’).then(function(value) {
                    console.log(“Class value is” + value);
                });

                To get inner text of an element, use below method.driver.findElement(By.id(“myid”)).getText().then(function(value) {
                    console.log(“Text is” + value);
                });

                To check
                if an element is enabled or not, use below method.isEnabled()

                driver.findElement(By.id(“myid”)).isEnabled().then(function(value) {
                    console.log(“is myid enabled ? ”+value);
                }); To check
                if an checkbox or radio button is selected or not, use below method.isSelected()

                driver.findElement(By.id(“myid”)).isSelected().then(function(value) {
                    console.log(“is myid selected ? ”+value);
                }); To check
                if an element is displayed or not, use below method.isDisplayed()

                driver.findElement(By.id(“myid”)).isDisplayed().then(function(value) {
                    console.log(“myid is displayed ? ”+value);
                });

                driver.findElement(By.id(‘fn’)).isEnabled().then(function(value) {
                    console.log(“First name edit box is enabled ? - > ”+value);
                    assert(value == true);
                });

                driver.findElement(By.xpath(“ //input[@value=’QTP’]”)).isSelected().then(function(value) {
                    console.log(“QTP checkbox is selected ? - > ”+value); assert(value == true);
                });

                driver.findElement(By.tagName(“p”)).getText().then(function(txt) {
                    console.log(“Text in first paragraph - > ”+txt);
                    assert(txt.toLowerCase().indexOf(“selenium”) > 0);
                }); driver.findElement(By.xpath(“ //input[@value=’QTP’]”)).getTagName().then(function(value) {
                    console.log(“tag name of QTP checkbox is - > ”+value); assert(value == ”input”);
                }); driver.findElement(By.xpath(“ //input[@value=’Sign up’]”)).isDisplayed().then(function(value) {
                    console.log(“is Sign up button displayed ? - > ”+value); assert(value == true);
                });

                driver.sleep(5000);

                driver.quit();