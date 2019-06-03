"use strict";

const fs = require("fs-extra");
const path = require("path");
const Generator = require("./Generator");

const defaultConfig = {
  src: "language",
  dest: "dest",
  context: process.cwd(),
  diff: false,
  force: false
};
async function create(name, options = {}) {
  const config = Object.assign({}, defaultConfig, options);

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
