"use strict";

const path = require("path");

exports.languageList = ["en", "enTh", "zh"];

exports.destFn = (key, cwd) => path.resolve(cwd, key);
