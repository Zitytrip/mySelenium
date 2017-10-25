var fs = require("fs");
var selenium = require('selenium-webdriver'),
    By = selenium.By,
    until = selenium.until,
    Select = selenium.Select;

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


module.exports.getFirefox = getFirefox;