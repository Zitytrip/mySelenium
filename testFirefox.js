async function demo ()  {
var webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until,
   Key =  webdriver.Key;




var driver = new webdriver.Builder()
  .withCapabilities({
    browserName: "firefox",
    loggingPrefs: {
      driver: "ALL",
      performance: "ALL"
    },
    "moz:firefoxOptions": {
      prefs: {
        "dom.ipc.processCount": 8
      },
      log: {
        level: "trace"
      }
    }
  })
  .build();

driver.getCapabilities().then(console.log);


driver.findElement(By.css("body")).sendKeys(Key.CONTROL + "t");        

var newTabInstance = driver.WindowHandles[driver.WindowHandles.Count-1].ToString();
driver.SwitchTo().Window(newTabInstance);
driver.Navigate().GoToUrl(url);


await driver.get("http://www.google.com/ncr");

//driver.send_keys(Key.CONTROL + 'T')

await driver.get ("http://bing.com");


driver.getAllWindowHandles().then ( h => { console.log (h); } );

//var second_driver = driver.Firefox()

return;


console.log("sending query..");
driver.findElement(By.name("q")).sendKeys("webdriver");

return;

console.log("clicking..");
driver.findElement(By.name("btnG")).click();

console.log("waiting for search to come back..");
//driver.wait(until.titleIs("webdriver - Google Search"), 1000);
           driver.wait(function() {
               return driver.getTitle().then(function(t) {
               return t.includes ("webdriver");
             });
           }, 5000);





driver.getAllWindowHandles().then ( h => { console.log (h); } );

var second_driver = driver.Firefox()



//driver.quit();
}

demo();
