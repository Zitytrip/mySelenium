var fs = require("fs");
var selenium = require('selenium-webdriver'),
    By = selenium.By,
    until = selenium.until,
    Select = selenium.Select;

 var chrome = require("selenium-webdriver/chrome");


function getChromium(downloadDir, profileDir, browserVisible) {
    var logToFile = '/tmp/chromescraper.txt';
    var binPath = "/usr/lib/chromium/chromium"; // on debian
    //var binPath = "/usr/lib/chromium"; // on manjaro Xfce (DOES NOT WORK!)

    fs.unlinkSync(logToFile);

    console.log(`Getting Chromium: binDir: ${binPath} downloadDir: ${downloadDir} profileDir:${profileDir}`);
   

    // Set OPTIONS
    var o = new chrome.Options();
    o.setChromeBinaryPath(binPath);
  

    if (browserVisible) {
        o.addArguments("--start-maximized");
    }
    else {
        o.addArguments("--headless"); // Runs Chrome in headless mode.
        o.addArguments("--disable-gpu"); // # Temporarily needed for now.
    }  

    //o.addArguments("--disable-extensions");
    if (profileDir !== undefined) {
        o.addArguments("user-data-dir=" + profileDir);
    } else {
        console.log("ERR: No profileDir defined!");
    }
    o.addArguments("download.default_directory=" + downloadDir);
    // o.addArguments("headless");
    // o.addArguments("window-size=1200x600");
    o.setUserPreferences({
        "download.default_directory": downloadDir
    });

    // var cap = selenium.Capabilities.chrome();
    //  console.log(cap);
    //  var driver = new selenium.Builder()
    //    .withCapabilities(cap)
    //     .setChromeOptions(o)
    //.setProxy(proxy.manual({ http: '127.0.0.1:9000'}))
    //    .build();

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