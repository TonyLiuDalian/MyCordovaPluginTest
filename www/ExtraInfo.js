//var exec = require('cordova/exec');

// exports.getExtra = function(success, error) {
//     exec(success, error, "ExtraInfo", "getExtra", []);
// };



var ExtraInfo = function() {};

ExtraInfo.prototype.getExtra = function() {
    //alert("I am a js plugin");
    exec(success, error, "ExtraInfo", "getExtra", []);
};

if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.extraInfo) {
    window.plugins.extraInfo = new ExtraInfo();
}

if (typeof module != 'undefined' && module.exports) {
  module.exports = ExtraInfo;
}

// var extraInfo = new ExtraInfo();
// module.exports = extraInfo;