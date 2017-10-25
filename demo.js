<<<<<<< HEAD
var fs = require("fs"),
    selenium = require ('selenium-webdriver'),
=======
var Promise = require("bluebird");
Promise.longStackTraces(); // nice stack traces for promises!


async function test () {

var selenium = require ('selenium-webdriver'),
>>>>>>> dd41f2bd25f5e318298cdc0d997ca1c99d387c1f
    By = selenium.By,
    until = selenium.until,
    Select = selenium.Select,
    Key = selenium.Key,
    ActionSequence = selenium.ActionSequence,
    Window = selenium.Window,
    sleep = require("sleep-promise");


var seleniumDriver = require ("./seleniumDriver.js");

<<<<<<< HEAD
=======

console.log(`gettin chromium with downloadDir: ${downloadDir} profileDir: ${profileDir} `);
var driver = seleniumDriver.getChromium(downloadDir, profileDir);
//var driver = seleniumDriver.getSauce();
//var driver = seleniumDriver.getFirefox(downloadDir, profileDir)
>>>>>>> dd41f2bd25f5e318298cdc0d997ca1c99d387c1f

async function getBody (driver )  {
   var innerHTML = await driver.executeScript( function() { 
         var b =document.querySelector('body');
         if (b===null) {
             return "";
          }
          return b.innerHTML; 
    });
    return innerHTML;   
}




async function demo () {
    var downloadDir = "/tmp/demo";
    var profileDir = "/tmp/demo";
    var browserVisible = false; // true;

    //var driver = seleniumDriver.getChrome(downloadDir, profileDir, browserVisible);
    var driver = seleniumDriver.getChromium(downloadDir, profileDir);
    //var driver = seleniumDriver.getSauce();
    //var driver = seleniumDriver.getFirefox(downloadDir, profileDir)

    console.log("driver capabilities:");
    await driver.getCapabilities().then(console.log);

    console.log("opening new tab");
    await driver.executeScript('window.open();');

    console.log("getting window (tab) list");
    var handles = await driver.getAllWindowHandles();
    console.log ("window handles: " , handles);

    console.log("switching to google window (right side)");
    await driver.switchTo().window(handles[1]);


    //await new ActionSequence(driver).sendKeys(Key.CONTROL + "t").perform();
    //await new ActionSequence(driver).keyDown(Key.CONTROL).sendKeys("t").keyUp(Key.CONTROL).perform();
    //driver.findElement(By.css("body")).sendKeys(Key.CONTROL + "t");
    //var newTabInstance = driver.WindowHandles[driver.WindowHandles.Count-1].ToString();

    console.log("getting news.google.com");
    await driver.get ("http://news.google.com");

    await sleep (3000);

    var body_element = await driver.findElement( By.tagName("body"));
   // var t = body_element.getText();
   var t = await getBody (driver);
    console.log(t);


    console.log("taking Screenshot of google");
    var image = await driver.takeScreenshot();
    fs.writeFile('output/google.png', image, 'base64', function(err) { if (err) console.log("ERROR Saving google.png");    });
    

    //console.log("sending CTRL + TAB (to switch the tab)");
    //await new ActionSequence(driver).keyDown(Key.CONTROL).sendKeys(Key.TAB).keyUp(Key.CONTROL).perform();
    //driver.findElement(By.css("body")).sendKeys(Key.CONTROL + "t");

    console.log("switching to bing window (left window)");
    await driver.switchTo().window(handles[0]);
    console.log("getting bing..");
    await driver.get ("http://www.bing.com");

    console.log("getting title..");
    var t = await driver.getTitle();
    console.log("title: ", t);
    console.log("taking Screenshot of bing");
    var imageBing = await driver.takeScreenshot();
    fs.writeFile('output/bing.png', imageBing, 'base64', function(err, msg) { if (err) console.log("Error: " + err);  });

    console.log ("switching to google window");
    driver.switchTo().window(handles[1]);
    console.log("closing google handle");
    driver.close ();

    console.log("getting window list..");
    var handles = await driver.getAllWindowHandles();
    console.log("handles: " , handles);

    console.log("switching to bing window (left window)");
    await driver.switchTo().window(handles[0]);

    console.log("getting current window handle..");
    var myhandle = await driver.getWindowHandle();
    console.log("my window handle:" , myhandle);

    driver.quit();

    return;

    var myElement =  driver.findElement ( By.css('div') );
    myElement.then (e=> console.log (e) );

    driver.executeScript(function() {
        return document.querySelector('div').innerHTML;
    }).then(function(innerHTML) {
        //check content here 
        console.log(innerHTML);
    });

    //console.log(myElement);
    driver.getHTML("body", false).then(function(html) {
        console.log("*** INNER HTML:");
        console.log(html);
    });

    //driver.get('http://static.mozilla.com/moco/en-US/pdf/mozilla_privacypolicy.pdf')
    driver.get ("http://dev-builds.libreoffice.org/tmp/test.xlsx");

    driver.quit();

}

demo();
