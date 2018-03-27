"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handler(setFn, deletePropertyFn) {
    return {
        set: (target, p, value, receiver) => {
            return setFn.call(null, target, p, value);
        },
        deleteProperty: (target, p) => {
            return deletePropertyFn.call(null, target, p);
        }
    };
}
exports.handler = handler;
