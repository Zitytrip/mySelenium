var fs = require("fs");
var selenium = require('selenium-webdriver'),
    By = selenium.By,
    until = selenium.until,
    Select = selenium.Select;



async function getChrome1(downloadDir, profileDir) {
    console.log(`Getting Chrome: downloadDir: ${downloadDir} profileDir:${profileDir}`);

    var chrome = require("selenium-webdriver/chrome");
    var o = new chrome.Options();
    o.setChromeBinaryPath("/opt/google/chrome-unstable/");

    o.addArguments("download.default_directory=" + downloadDir);
    //o.addArguments ("--start-maximized");
    o.addArguments("--disable-extensions");
    o.addArguments("user-data-dir=" + profileDir);

    o.setUserPreferences({
        "download.default_directory": downloadDir
    });

    var driver = new selenium.Builder()
        .withCapabilities(selenium.Capabilities.chrome())
        .setChromeOptions(o)
        //.setProxy(proxy.manual({ http: '127.0.0.1:9000'}))
        .build();

    driver.getWindowHandle();
    return driver;
}

function getChrome(downloadDir, profileDir) {
    //var binPath = "/opt/google/chrome-unstable"; // on debian
    var binPath = "/usr/lib/chromium" // on manjaro Xfce

    console.log(`Getting Chrome: downloadDir: ${downloadDir} profileDir:${profileDir} binPath:${binPath} `);
    var chrome = require("selenium-webdriver/chrome");

    // Set OPTIONS
    var o = new chrome.Options();
    o.setChromeBinaryPath(binPath);
    o.addArguments("--start-maximized");
    //o.addArguments("--disable-extensions");
    if (profileDir !== undefined) {
        //  o.addArguments("user-data-dir="+ profileDir);
    }
    o.addArguments("download.default_directory=" + downloadDir); // /tmp/bookingScraper");
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
        .loggingTo('/tmp/chromescraper.txt')
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

function getChromium(downloadDir, profileDir) {
    var logToFile = '/tmp/chromescraper.txt';
    var binPath = "/usr/lib/chromium/chromium"; // on debian
    //var binPath = "/usr/lib/chromium"; // on manjaro Xfce (DOES NOT WORK!)

    fs.unlinkSync(logToFile);

    console.log(`Getting Chromium: binDir: ${binPath} downloadDir: ${downloadDir} profileDir:${profileDir}`);
    var chrome = require("selenium-webdriver/chrome");

    // Set OPTIONS
    var o = new chrome.Options();
    o.setChromeBinaryPath(binPath);
    o.addArguments("--start-maximized");
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


function getFirefox(downloadDir, profileDir) {
    console.log(`Getting Firefox: downloadDir: ${downloadDir} profileDir:${profileDir}`);
    var firefox = require('selenium-webdriver/firefox');

    var profile = new firefox.Profile(profileDir + "/");
    profile.setAcceptUntrustedCerts(true);
    profile.setAssumeUntrustedCertIssuer(false);
    profile.setPreference("javascript.enabled", true);


    var opts = new firefox.Options();
    opts.setProfile(profile);
    opts["browser.download.folderList"] = 2
    opts["browser.download.dir"] = downloadDir;
    opts["browser.helperApps.neverAsk.saveToDisk"] = 'application/pdf'
    opts["pdfjs.disabled"] = true
        // disable Adobe Acrobat PDF preview plugin
    opts["plugin.scan.plid.all"] = false
    opts["plugin.scan.Acrobat"] = "99.0"


    var driver = new selenium.Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(opts)
        .build();

    driver.getWindowHandle();

    profile.writeToDisk();


    return driver;
}


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





module.exports.getChrome = getChrome;
module.exports.getChrome1 = getChrome1;
module.exports.getChromium = getChromium;
module.exports.getFirefox = getFirefox;
module.exports.getSauce = getSauce;