import { System } from "./system";

export const Defaults = {
  router: 24601,
  logLevel: System.LogLevel.info,
  external:
    "http://ifconfig.io/ip \nhttp://whatismyip.akamai.com/ \nhttp://ipv4bot.whatismyipaddress.com \nhttp://api.ipify.org \nhttp://trackip.net/ip \nhttp://diagnostic.opendns.com/myip",
  autoDefineIp: true,
  localDiscovery: true,
  localDiscoveryPort: true,
  userName: "Dogma User",
  nodeName: "Dogma Node",
};
