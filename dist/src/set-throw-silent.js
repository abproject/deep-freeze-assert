"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setThrowSilent = (target, p, value) => {
    console.warn(`Object is immutable, attempt to set value='${value}' to property='${p}'\n`, target);
    return true;
};
