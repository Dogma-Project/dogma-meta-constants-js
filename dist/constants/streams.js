"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Streams = void 0;
var Streams;
(function (Streams) {
    let MX;
    (function (MX) {
        MX[MX["handshake"] = 0] = "handshake";
        MX[MX["key"] = 1] = "key";
        MX[MX["test"] = 2] = "test";
        MX[MX["control"] = 3] = "control";
        MX[MX["messages"] = 4] = "messages";
        MX[MX["mail"] = 5] = "mail";
        MX[MX["dht"] = 6] = "dht";
        MX[MX["web"] = 7] = "web";
        MX[MX["file"] = 8] = "file";
        MX[MX["relay"] = 9] = "relay";
    })(MX = Streams.MX || (Streams.MX = {}));
    let SIZES;
    (function (SIZES) {
        SIZES[SIZES["MX"] = 1] = "MX";
        SIZES[SIZES["LEN"] = 2] = "LEN";
    })(SIZES = Streams.SIZES || (Streams.SIZES = {}));
})(Streams || (exports.Streams = Streams = {}));
