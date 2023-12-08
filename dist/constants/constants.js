"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constants = void 0;
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
