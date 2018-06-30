Directory Layout of Selenium Webdriver Node.js Package
BY ADMIN· PUBLISHED NOVEMBER 21, 2016· UPDATED AUGUST 24, 2017

When you install the selenium - webdriver package, selenium - webdriver directory is created in node_modules.

index.js is the main file of selenium - webdriver package.

Below things are exported from index.js of selenium - webdriver package.

exports.ActionSequence = actions.ActionSequence;
exports.Browser = capabilities.Browser;
exports.Builder = Builder;
exports.Button = input.Button;
exports.By = by.By;
exports.Capabilities = capabilities.Capabilities;
exports.Capability = capabilities.Capability;
exports.Condition = webdriver.Condition;
exports.EventEmitter = events.EventEmitter;
exports.FileDetector = input.FileDetector;
exports.Key = input.Key;
exports.Session = session.Session;
exports.WebDriver = webdriver.WebDriver;
exports.WebElement = webdriver.WebElement;
exports.WebElementCondition = webdriver.WebElementCondition;
exports.WebElementPromise = webdriver.WebElementPromise;
exports.error = error;
exports.logging = logging;
exports.promise = promise;
exports.until = until;
selenium - webdriver / lib directory contains important modules like webdriver, actions, by etc.

Below things are exported from selenium - webdriver / lib / webdriver.js

Alert: Alert
AlertPromise: AlertPromise
Condition: Condition
Logs: Logs
Navigation: Navigation
Options: Options
TargetLocator: TargetLocator
Timeouts: Timeouts
WebDriver: WebDriver
WebElement: WebElement
WebElementCondition: WebElementCondition
WebElementPromise: WebElementPromise
Window: Window