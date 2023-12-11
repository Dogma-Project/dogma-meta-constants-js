"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
var API;
(function (API) {
    let ApiRequestType;
    (function (ApiRequestType) {
        ApiRequestType[ApiRequestType["services"] = 0] = "services";
        ApiRequestType[ApiRequestType["settings"] = 1] = "settings";
        ApiRequestType[ApiRequestType["keys"] = 2] = "keys";
        ApiRequestType[ApiRequestType["network"] = 3] = "network";
        ApiRequestType[ApiRequestType["user"] = 4] = "user";
        ApiRequestType[ApiRequestType["node"] = 5] = "node";
    })(ApiRequestType = API.ApiRequestType || (API.ApiRequestType = {}));
    let ApiRequestAction;
    (function (ApiRequestAction) {
        ApiRequestAction[ApiRequestAction["get"] = 0] = "get";
        ApiRequestAction[ApiRequestAction["set"] = 1] = "set";
        ApiRequestAction[ApiRequestAction["push"] = 2] = "push";
        ApiRequestAction[ApiRequestAction["delete"] = 3] = "delete";
        ApiRequestAction[ApiRequestAction["result"] = 4] = "result";
    })(ApiRequestAction = API.ApiRequestAction || (API.ApiRequestAction = {}));
})(API || (exports.API = API = {}));
