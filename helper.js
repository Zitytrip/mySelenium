
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

async function saveHtml(driver,fullFn) {
    try {
        var body = await getBody (driver);
        var pWriteFile = Promise.promisify (fs.writeFile);
        await pWriteFile(fullFn, body);
    }
    catch (err) {
        console.log(`saveToFile error for ${fullFn}: ${err}.` );
    };
}

async function takeScreenshot (driver, name ) {
    if (name==undefined) name ="screenshot";
    var fn = `/tmp/${moment().format("YYYYMMDD_HHmmss")}_selenium_${name}.png`;

    await driver.takeScreenshot().then(function(data){
        var base64Data = data.replace(/^data:image\/png;base64,/,"")
        fs.writeFile(fn, base64Data, 'base64', function(err) {
            if(err) console.log("takeScreenshot error: " + err);
        });
    });
}

module.exports.getBody =getBody;
module.exports.saveHtml = saveHtml;
module.exports.takeScreenshot=takeScreenshot;