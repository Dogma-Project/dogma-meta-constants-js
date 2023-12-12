"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Defaults = void 0;
const system_1 = require("./system");
exports.Defaults = {
    router: 24601,
    prodManagerPort: 25601,
    devManagerPort: 25602,
    minApiPort: 26000,
    maxApiPort: 26999,
    devApiPort: 26001,
    localDiscoveryPort: 27601,
    logLevel: system_1.System.LogLevel.info,
    external: "http://ifconfig.io/ip \nhttp://whatismyip.akamai.com/ \nhttp://ipv4bot.whatismyipaddress.com \nhttp://api.ipify.org \nhttp://trackip.net/ip \nhttp://diagnostic.opendns.com/myip",
    autoDefineIp: true,
    localDiscovery: true,
    friendshipRequests: true,
    userName: "Dogma User",
    nodeName: "Dogma Node",
};
