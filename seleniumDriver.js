

//

module.exports.getChrome = require("./browsers/chrome.js").getChrome;
module.exports.getChromium = require("./browsers/chromium.js").getChromium;
module.exports.getFirefox = require("./browsers/firefox.js").getFirefox;
module.exports.getSauce = require("./browsers/sauce.js").getSauce;


var helper = require("./helper.js");
module.exports.getBody =helper.getBody;
module.exports.saveHtml = helper.saveHtml;
module.exports.takeScreenshot=helper.takeScreenshot;