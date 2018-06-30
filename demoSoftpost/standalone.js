You can also use standalone server to run your tests.Just start the server using below command.

java - jar selenium - server - standalone.jar

By
default server(Hub) starts running at http: //localhost:4444/wd/hub

    //To connect to Grid, you will have to use below syntax.

    var assert = require(‘assert’);
var webdriver = require(‘selenium - webdriver’),
    By = webdriver.By,
    until = webdriver.until;

var chrome = require(“selenium - webdriver / chrome”);

var driver = new webdriver.Builder()
    .forBrowser(‘chrome’)
    .usingServer(‘http: //localhost:4444/wd/hub’)
        .build();

        driver.get(“http: //www.softpost.org”);

            driver.quit();

            You can use below command to run tests on grid.
            //SELENIUM_REMOTE_URL=”http://localhost:4444/wd/hub” node yourscript.js