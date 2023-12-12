"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.System = void 0;
var System;
(function (System) {
    let LogLevel;
    (function (LogLevel) {
        LogLevel[LogLevel["nothing"] = 0] = "nothing";
        LogLevel[LogLevel["errors"] = 1] = "errors";
        LogLevel[LogLevel["warnings"] = 2] = "warnings";
        LogLevel[LogLevel["info"] = 3] = "info";
        LogLevel[LogLevel["logs"] = 4] = "logs";
        LogLevel[LogLevel["debug"] = 5] = "debug";
    })(LogLevel = System.LogLevel || (System.LogLevel = {}));
    let States;
    (function (States) {
        States[States["error"] = -1] = "error";
        States[States["disabled"] = 0] = "disabled";
        States[States["ready"] = 1] = "ready";
        States[States["empty"] = 2] = "empty";
        States[States["reload"] = 3] = "reload";
        States[States["limited"] = 4] = "limited";
        States[States["ok"] = 5] = "ok";
        States[States["full"] = 6] = "full";
    })(States = System.States || (System.States = {}));
})(System || (exports.System = System = {}));
