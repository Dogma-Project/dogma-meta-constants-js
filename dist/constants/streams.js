"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Streams = void 0;
var Streams;
(function (Streams) {
    let MX;
    (function (MX) {
        /**
         * Not encrypted MX used for handshake
         */
        MX[MX["handshake"] = 0] = "handshake";
        /**
         * RSA assymmetric-encrypted MX used for set AES symmetric keys
         */
        MX[MX["key"] = 1] = "key";
        /**
         * AES symmetric-encrypted MX
         */
        MX[MX["test"] = 2] = "test";
        /**
         * AES symmetric-encrypted MX
         */
        MX[MX["control"] = 3] = "control";
        /**
         * AES symmetric-encrypted MX
         */
        MX[MX["messages"] = 4] = "messages";
        /**
         * AES symmetric-encrypted MX
         */
        MX[MX["mail"] = 5] = "mail";
        /**
         * AES symmetric-encrypted MX
         */
        MX[MX["dht"] = 6] = "dht";
        /**
         * AES symmetric-encrypted MX
         */
        MX[MX["web"] = 7] = "web";
        /**
         * AES symmetric-encrypted MX
         */
        MX[MX["file"] = 8] = "file";
        /**
         * AES symmetric-encrypted MX
         */
        MX[MX["relay"] = 9] = "relay";
        /**
         * AES symmetric-encrypted MX for sync
         */
        MX[MX["sync"] = 10] = "sync";
    })(MX = Streams.MX || (Streams.MX = {}));
    let SIZES;
    (function (SIZES) {
        /**
         * MX descriptor size in bytes
         */
        SIZES[SIZES["MX"] = 1] = "MX";
        /**
         * Packet length in bytes
         */
        SIZES[SIZES["LEN"] = 2] = "LEN";
    })(SIZES = Streams.SIZES || (Streams.SIZES = {}));
})(Streams || (exports.Streams = Streams = {}));
