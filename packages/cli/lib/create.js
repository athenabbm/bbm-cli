"use strict";

const fs = require("fs-extra");
const path = require("path");
const Generator = require("./Generator");
const { defaults } = require('./utils/util');

const defaultConfig = {
  src: "language",
  dest: "dest",
  context: process.cwd(),
  diff: false,
  force: false
};
async function create(name, options = {}) {
  const config = defaults(defaultConfig, options);

  const cwd = config.context;
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
