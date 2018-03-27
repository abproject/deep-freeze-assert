"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const set_throw_1 = require("./set-throw");
const delete_property_throw_1 = require("./delete-property-throw");
exports.configDefault = {
    silent: false,
    setFn: set_throw_1.setThrow,
    deletePropertyFn: delete_property_throw_1.deletePropertyThrow
};
