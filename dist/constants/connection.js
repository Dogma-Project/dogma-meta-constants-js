"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
var Connection;
(function (Connection) {
    let Status;
    (function (Status) {
        Status[Status["error"] = -1] = "error";
        Status[Status["notConnected"] = 0] = "notConnected";
        Status[Status["connected"] = 1] = "connected";
        Status[Status["notAuthorized"] = 2] = "notAuthorized";
        Status[Status["authorized"] = 3] = "authorized";
    })(Status = Connection.Status || (Connection.Status = {}));
    let Group;
    (function (Group) {
        Group[Group["unknown"] = 0] = "unknown";
        Group[Group["all"] = 1] = "all";
        Group[Group["friends"] = 2] = "friends";
        Group[Group["selfUser"] = 3] = "selfUser";
        Group[Group["selfNode"] = 4] = "selfNode";
        Group[Group["nobody"] = 5] = "nobody";
    })(Group = Connection.Group || (Connection.Group = {}));
    let Direction;
    (function (Direction) {
        Direction[Direction["outcoming"] = 0] = "outcoming";
        Direction[Direction["incoming"] = 1] = "incoming";
    })(Direction = Connection.Direction || (Connection.Direction = {}));
    let Stage;
    (function (Stage) {
        Stage[Stage["init"] = 0] = "init";
        Stage[Stage["verification"] = 1] = "verification";
    })(Stage = Connection.Stage || (Connection.Stage = {}));
})(Connection || (exports.Connection = Connection = {}));
