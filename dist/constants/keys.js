"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Keys = void 0;
var Keys;
(function (Keys) {
    let Type;
    (function (Type) {
        Type[Type["nodeKey"] = 0] = "nodeKey";
        Type[Type["userKey"] = 1] = "userKey";
    })(Type = Keys.Type || (Keys.Type = {}));
    let FORMATS;
    (function (FORMATS) {
        FORMATS["TYPE"] = "pkcs1";
        FORMATS["FORMAT"] = "pem";
    })(FORMATS = Keys.FORMATS || (Keys.FORMATS = {}));
    let TRANSFER_AES;
    (function (TRANSFER_AES) {
        TRANSFER_AES["ENCODER"] = "aes-256-gcm";
        TRANSFER_AES[TRANSFER_AES["IV_LENGTH"] = 12] = "IV_LENGTH";
        TRANSFER_AES[TRANSFER_AES["AUTH_TAG_LENGTH"] = 16] = "AUTH_TAG_LENGTH";
        TRANSFER_AES[TRANSFER_AES["KEY_LENGTH_BYTES"] = 32] = "KEY_LENGTH_BYTES";
    })(TRANSFER_AES = Keys.TRANSFER_AES || (Keys.TRANSFER_AES = {}));
    let STATIC_AES;
    (function (STATIC_AES) {
        STATIC_AES["ENCODER"] = "aes-256-cbc";
        STATIC_AES[STATIC_AES["IV_LENGTH"] = 16] = "IV_LENGTH";
        STATIC_AES[STATIC_AES["KEY_LENGTH_BYTES"] = 32] = "KEY_LENGTH_BYTES";
    })(STATIC_AES = Keys.STATIC_AES || (Keys.STATIC_AES = {}));
    Keys.HASH = "sha256";
})(Keys || (exports.Keys = Keys = {}));
