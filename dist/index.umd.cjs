(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('dotenv'), require('path')) :
    typeof define === 'function' && define.amd ? define(['exports', 'dotenv', 'path'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["arrowy-env"] = {}, global.dotenv, global.path));
})(this, (function (exports, dotenv, path) { 'use strict';

    dotenv.config({
        path: path.join(process.cwd(), '.env')
    });
    const env = (variable, defaultValue) => {
        return process.env[variable] || (typeof defaultValue == 'undefined' ? null : defaultValue);
    };

    exports.env = env;

}));
