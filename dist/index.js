"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_factory_1 = require("./src/config-factory");
const handler_1 = require("./src/handler");
function deepFreezeAssert(target, config) {
    const opts = config_factory_1.configFactory(config);
    if (Array.isArray(target)) {
        const array = [...target].map(item => deepFreezeAssert(item));
        return new Proxy(array, handler_1.handler(opts.setFn, opts.deletePropertyFn));
    }
    else if (target !== null && typeof target === "object") {
        const obj = Object.assign({}, target);
        Object.keys(obj).map(prop => {
            obj[prop] = deepFreezeAssert(obj[prop]);
        });
        return new Proxy(obj, handler_1.handler(opts.setFn, opts.deletePropertyFn));
    }
    else {
        return target;
    }
}
exports.deepFreezeAssert = deepFreezeAssert;
