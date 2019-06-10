"use strict";

const fs = require("fs-extra");
const path = require("path");
const Generator = require("./Generator");
const defaults = require('lodash.defaults');
const { defaultConfig } = require('./utils/const')


async function create(name, options = {}) {
  const cwd = options.cwd || process.cwd();
  const pkgOpts = require(path.join(cwd,'package.json')).bbm || {}
  const config = defaults(options,pkgOpts,defaultConfig);
  if (name) {
    const generate = new Generator(name, config);
    generate.generage();
  } else {
    const files = fs.readdirSync(path.join(cwd, config.src));
    for (const file of files) {
      await new Generator(file, config).generage();
    }
  }
}
module.exports = create;
