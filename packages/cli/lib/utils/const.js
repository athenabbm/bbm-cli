"use strict";

const path = require("path");



exports.defaultConfig = {
  src: "language",
  dest: "dest",
  diff: false,
  force: false,
  languages: ["en", "enTh", "zh"]
}

exports.destFn = (key, cwd) => path.resolve(cwd, key);
