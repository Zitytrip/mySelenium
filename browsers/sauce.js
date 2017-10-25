var fs = require("fs");
var selenium = require('selenium-webdriver'),
    By = selenium.By,
    until = selenium.until,
    Select = selenium.Select;


function getSauce() {

    var username = "hoertlehner";
    var access_key = "dbb8ab72-a937-4d43-9a0e-a96d7102d211";

    var test_environment_details = {
        "platform": "OS X 10.11",
        "browserName": "firefox",
        "version": "44.0",
        "name": "longo dongo mongo"
    };
    var server = `http://${username}:${access_key}@ondemand.saucelabs.com:80/wd/hub`;
    var driver = new selenium.Builder()
        .forBrowser('firefox')
        .usingServer(server)
        .build();

    driver.getWindowHandle();
    return driver;
}

module.exports.getSauce = getSauce;
