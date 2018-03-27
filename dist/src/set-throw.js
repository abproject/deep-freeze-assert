"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setThrow = (target, p, value) => {
    console.log('↓ Object is immutable', target);
    throw new Error(`Attempt to set value=${value} to property='${p}'`);
};
