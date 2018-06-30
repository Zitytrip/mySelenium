Element identification in Selenium in Node.js
BY ADMIN· PUBLISHED NOVEMBER 21, 2016· UPDATED AUGUST 24, 2017

We can identify the web elements using below Element locators in Node.js

className
tagName
name
id
xpath
css
linkText
partialLinkText
Here are some of the examples that illustrate how to identify elements in Node.js

driver.findElement(By.className(‘myclassName’)).sendKeys(‘watson’);
driver.findElement(By.tagName(‘input’)).sendKeys(‘watson’);
driver.findElement(By.name(‘fname’)).sendKeys(‘watson’);
driver.findElement(By.id(‘myid’)).sendKeys(‘watson’);
driver.findElement(By.xpath(‘ //input[@name=’fname’]’)).sendKeys(‘watson’);
            driver.findElement(By.css(‘input[name = ’fname’]’)).sendKeys(‘watson’); driver.findElement(By.linkText(‘Home’)).click(); driver.findElement(By.partialLintText(‘me’)).click();

            findElements method returns array of elements.This method returns all elements matching given locator.

            Here is an example on findElements method

            var webdriver = require(‘selenium - webdriver’);
            //create shortcuts for By and until classes

            By = webdriver.By,
            until = webdriver.until;
            var driver = new webdriver.Builder()
                .forBrowser(‘chrome’)
                .build();

            driver.get(‘http: //www.softpost.org’);

                var webElements = driver.findElements(By.partialLinkText(“torial”));

                webElements.then(function(elements) {

                    //Work on each element
                    for (var i = 0; i < elements.length; i++) {
                        elements[i].getText().then(function(txt) {
                            console.log(txt + “\n”);
                        });
                    }
                });

                //close the browser

                driver.close();

                driver.quit();