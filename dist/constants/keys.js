"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keys = void 0;
var Keys;
(function (Keys) {
    let Type;
    (function (Type) {
        Type[Type["nodeKey"] = 0] = "nodeKey";
        Type[Type["masterKey"] = 1] = "masterKey";
    })(Type = Keys.Type || (Keys.Type = {}));
    let FORMATS;
    (function (FORMATS) {
        FORMATS["TYPE"] = "pkcs1";
        FORMATS["FORMAT"] = "pem";
    })(FORMATS = Keys.FORMATS || (Keys.FORMATS = {}));
})(Keys || (exports.Keys = Keys = {}));
