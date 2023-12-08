"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Defaults = exports.Constants = void 0;
const system_1 = require("./system");
var Constants;
(function (Constants) {
    let Messages;
    (function (Messages) {
        Messages["test"] = "hello";
    })(Messages = Constants.Messages || (Constants.Messages = {}));
    let MessageCode;
    (function (MessageCode) {
        MessageCode[MessageCode["error"] = -1] = "error";
        MessageCode[MessageCode["unknown"] = 0] = "unknown";
        MessageCode[MessageCode["success"] = 1] = "success";
        MessageCode[MessageCode["confirmed"] = 2] = "confirmed";
    })(MessageCode = Constants.MessageCode || (Constants.MessageCode = {}));
})(Constants || (exports.Constants = Constants = {}));
exports.Defaults = {
    router: 24601,
    logLevel: system_1.System.LogLevel.info,
    external: "http://ifconfig.io/ip \nhttp://whatismyip.akamai.com/ \nhttp://ipv4bot.whatismyipaddress.com \nhttp://api.ipify.org \nhttp://trackip.net/ip \nhttp://diagnostic.opendns.com/myip",
    autoDefineIp: true,
    localDiscovery: true,
    localDiscoveryPort: true,
    userName: "Dogma User",
    nodeName: "Dogma Node",
};
