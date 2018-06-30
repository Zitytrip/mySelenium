var webdriver = require(‘selenium - webdriver’);

var driver = new webdriver.Builder()
    .forBrowser(‘firefox’)
    .build();
driver.get(‘http: //www.softpost.org’);
        driver.close(); driver.quit();

        You should have geckodriver in your PATH
        for firefox 47.0 .1 onwards

        You may get below error on windows 64
        if you use 64 bit Geckodriver.To fix that error, use 32 bit driver.

        WebDriverError: Unable to parse new session response: {“
            error”: ”unknown error”,
            ”
            message”: ”Expected browser binary location,
            but unable to find binary in
            default
            location,
            no‘ moz: firefoxOptions.binary’ capability provided,
            and no binary flagset on the command line”
        }