"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handler(setFn, deletePropertyFn) {
    return {
        set: (target, p, value, receiver) => {
            setFn.call(null, target, p, value);
            return true;
        },
        deleteProperty: (target, p) => {
            deletePropertyFn.call(null, target, p);
            return true;
        }
    };
}
exports.handler = handler;
