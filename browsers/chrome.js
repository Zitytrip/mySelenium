var fs = require("fs");
var selenium = require('selenium-webdriver'),
    By = selenium.By,
    until = selenium.until,
    Select = selenium.Select;

var chrome = require("selenium-webdriver/chrome");

function getChrome(downloadDir, profileDir, browserVisible) {
    //var binPath = "/opt/google/chrome/chrome" // chrome 62 on manjaro
    var binPath = "/usr/bin/google-chrome"; // chrome 62 on debian jessie


    console.log(`Getting Google-Chrome: downloadDir: ${downloadDir} profileDir:${profileDir} binPath:${binPath} browserVisible: ${browserVisible}`);

    // Set OPTIONS
    var o = new chrome.Options();
    o.setChromeBinaryPath(binPath);


    o.addArguments("profile.block_third_party_cookies=false");


    // Download Directory
    if (downloadDir != undefined) {
        o.setUserPreferences({
            "download.default_directory": downloadDir,
            "download.prompt_for_download": "false",
            "download.extensions_to_open": "",
            "download.directory_upgrade": "true"
        });
        o.addArguments("download.default_directory=" + downloadDir); 
    }


    // Profile Directory
    if (profileDir != undefined) {
        // --user-data-dir=/tmp/.org.chromium.Chromium.vRCwC6
        o.addArguments("user-data-dir=" + profileDir);

        // --data-path ⊗ 	Makes Content Shell use the given path for its data directory.
        // --parent-profile ⊗	Specifies the path to the user data folder for the parent profile. ↪
       // --profile-directory ⊗	Selects directory of profile to associate with the first browser launched. ↪
       // --user-data-dir ⊗	Directory where the browser stores the user profile. ↪
    }

   

    //o.addArguments("--disable-extensions");
 

    if (browserVisible) {
         o.addArguments("--start-maximized");
    } else {
        //o.addArguments("window-size=1200x600");
        o.addArguments("window-size=1980,960");
        // o.addArguments("headless");
        o.addArguments("--headless"); // Runs Chrome in headless mode.
        o.addArguments("--disable-gpu"); // # Temporarily needed for now.
        o.addArguments("--enable-screenshot-testing-with-mod");
    }

   
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
    //    .setProxy(proxy.manual({ http: '127.0.0.1:9000'}))
    //   .build();

    driver.getWindowHandle();

    return driver;
}

module.exports.getChrome = getChrome;
