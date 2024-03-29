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
        ApiRequestType[ApiRequestType["system"] = 6] = "system";
        ApiRequestType[ApiRequestType["messages"] = 7] = "messages";
        ApiRequestType[ApiRequestType["storage"] = 8] = "storage";
        ApiRequestType[ApiRequestType["prefix"] = 9] = "prefix";
        ApiRequestType[ApiRequestType["prefixes"] = 10] = "prefixes";
    })(ApiRequestType = API.ApiRequestType || (API.ApiRequestType = {}));
    let ApiRequestAction;
    (function (ApiRequestAction) {
        /**
         * Get a value or a state
         */
        ApiRequestAction[ApiRequestAction["get"] = 0] = "get";
        /**
         * Replace a value or a state
         */
        ApiRequestAction[ApiRequestAction["set"] = 1] = "set";
        /**
         * Append a value or a state
         */
        ApiRequestAction[ApiRequestAction["push"] = 2] = "push";
        /**
         * Delete a value or a state
         */
        ApiRequestAction[ApiRequestAction["delete"] = 3] = "delete";
        /**
         * Only in node responces
         */
        ApiRequestAction[ApiRequestAction["result"] = 4] = "result";
        /**
         * Return error
         */
        ApiRequestAction[ApiRequestAction["error"] = 5] = "error";
    })(ApiRequestAction = API.ApiRequestAction || (API.ApiRequestAction = {}));
})(API || (exports.API = API = {}));
