"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePropertyThrow = (target, p) => {
    console.log('↓ Object is immutable', target);
    throw new Error(`Attempt to delete property '${p}'`);
};
