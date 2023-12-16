"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sync = void 0;
var Sync;
(function (Sync) {
    let SIZES;
    (function (SIZES) {
        SIZES[SIZES["USER_ID"] = 5] = "USER_ID";
        SIZES[SIZES["NODE_ID"] = 5] = "NODE_ID";
    })(SIZES = Sync.SIZES || (Sync.SIZES = {}));
    let Type;
    (function (Type) {
        Type[Type["users"] = 0] = "users";
        Type[Type["nodes"] = 1] = "nodes";
        Type[Type["storage"] = 2] = "storage";
        Type[Type["mail"] = 3] = "mail";
        Type[Type["messages"] = 4] = "messages";
        Type[Type["dht"] = 5] = "dht";
    })(Type = Sync.Type || (Sync.Type = {}));
    let Action;
    (function (Action) {
        Action[Action["get"] = 0] = "get";
        Action[Action["push"] = 1] = "push";
        Action[Action["notify"] = 2] = "notify";
    })(Action = Sync.Action || (Sync.Action = {}));
})(Sync || (exports.Sync = Sync = {}));
