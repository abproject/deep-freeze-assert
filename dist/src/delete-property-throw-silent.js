"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePropertyThrowSilent = (target, p) => {
    console.warn(`Object is immutable, attempt to delete property '${p}'\n`, target);
    return true;
};
