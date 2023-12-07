"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var Message;
(function (Message) {
    let Type;
    (function (Type) {
        Type[Type["direct"] = 0] = "direct";
        Type[Type["user"] = 1] = "user";
        Type[Type["chat"] = 2] = "chat";
    })(Type = Message.Type || (Message.Type = {}));
    let Action;
    (function (Action) {
        Action[Action["send"] = 0] = "send";
        Action[Action["sync"] = 1] = "sync";
        Action[Action["edit"] = 2] = "edit";
        Action[Action["delete"] = 3] = "delete";
    })(Action = Message.Action || (Message.Action = {}));
})(Message || (exports.Message = Message = {}));
