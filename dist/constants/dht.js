"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DHT = void 0;
var DHT;
(function (DHT) {
    let Type;
    (function (Type) {
        Type[Type["dhtAnnounce"] = 0] = "dhtAnnounce";
        Type[Type["dhtLookup"] = 1] = "dhtLookup";
        Type[Type["dhtBootstrap"] = 2] = "dhtBootstrap";
    })(Type = DHT.Type || (DHT.Type = {}));
    let Action;
    (function (Action) {
        Action[Action["get"] = 0] = "get";
        Action[Action["set"] = 1] = "set";
        Action[Action["push"] = 2] = "push";
    })(Action = DHT.Action || (DHT.Action = {}));
    let Request;
    (function (Request) {
        Request[Request["announce"] = 0] = "announce";
        Request[Request["lookup"] = 1] = "lookup";
        Request[Request["revoke"] = 2] = "revoke";
    })(Request = DHT.Request || (DHT.Request = {}));
    let Response;
    (function (Response) {
        Response[Response["error"] = -1] = "error";
        Response[Response["alreadyPresent"] = 0] = "alreadyPresent";
        Response[Response["ok"] = 1] = "ok";
    })(Response = DHT.Response || (DHT.Response = {}));
})(DHT || (exports.DHT = DHT = {}));
