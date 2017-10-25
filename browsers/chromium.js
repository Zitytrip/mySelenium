var fs = require("fs");
var selenium = require('selenium-webdriver'),
    By = selenium.By,
    until = selenium.until,
    Select = selenium.Select;

 var chrome = require("selenium-webdriver/chrome");


function getChromium(downloadDir, profileDir, browserVisible) {
    var logToFile = '/tmp/chromescraper.txt';
    var binPath = "/usr/lib/chromium/chromium"; // on debian and also on manjaro
   

    if  (fs.existsSync (logToFile)) {
        console.log("Unlinking old file: " + logToFile);
        fs.unlinkSync(logToFile);
    }

    console.log(`Getting Chromium: binPath: ${binPath} downloadDir: ${downloadDir} profileDir:${profileDir}`);
   

    // Set OPTIONS
    var o = new chrome.Options();
    o.setChromeBinaryPath(binPath);
    o.addArguments("--disable-extensions");


    if (browserVisible) {
        o.addArguments("--start-maximized");
    }
    else {
        o.addArguments("window-size=1900,900");
        o.addArguments("--headless"); // Runs Chrome in headless mode.
        o.addArguments("headless"); // 2017 10 26 fh: it appears, that "--headless and also "headless" both work
        o.addArguments("--disable-gpu"); // # Temporarily needed for now.
    }  


    if (profileDir !== undefined) {
        o.addArguments("user-data-dir=" + profileDir);
    } else {
        console.log("ERR: No profileDir defined!");
    }

    if(downloadDir != undefined) {
        o.addArguments("download.default_directory=" + downloadDir);
        o.setUserPreferences({
            "download.default_directory": downloadDir
        });
    } else {
        console.log("ERR: No DownloadDir Defined!");
    }

    var service = new chrome.ServiceBuilder()
        .loggingTo(logToFile)
        .enableVerboseLogging()
        .build();

    var driver = chrome.Driver.createSession(o, service);

    //driver = new selenium.Builder()
    //   .withCapabilities(selenium.Capabilities.chrome())
    //   .setChromeOptions(o)
    //.setProxy(proxy.manual({ http: '127.0.0.1:9000'}))
    //   .build();

    return driver;
}


module.exports.getChromium = getChromium;