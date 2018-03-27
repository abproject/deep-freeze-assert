"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const set_throw_silent_1 = require("./set-throw-silent");
const config_default_1 = require("./config-default");
const delete_property_throw_silent_1 = require("./delete-property-throw-silent");
exports.configFactory = config => {
    if (config && config.silent === true) {
        return Object.assign({}, config_default_1.configDefault, { setFn: set_throw_silent_1.setThrowSilent, deletePropertyFn: delete_property_throw_silent_1.deletePropertyThrowSilent }, config);
    }
    return Object.assign({}, config_default_1.configDefault, config);
};
