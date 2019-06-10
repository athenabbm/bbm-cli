"use strict"

const path = require('path');
const fs = require("fs-extra");
const defaults = require('lodash.defaults');
const Merger = require('./Merger')
const { defaultConfig: _defConfig } = require('./utils/const');
const getConfig = (def) => ({
  ...def,
  src: def.dest,
  dest: def.src
})


async function merge(name, opts) {
  const cwd = opts.cwd || process.cwd();
  const pkgOpts = require(path.resolve(cwd,'package.json')).bbm || {}
  const config = defaults(
    opts,
    getConfig(defaults(pkgOpts,_defConfig))
  );

  if (name) {
     new Merger(name,config).run()
  }else {
    const files = fs.readdirSync(path.join(cwd, config.src,config.languages[0]));
    for (const file of files) {
      if (file === 'index.js') continue;
      await new Merger(file, config).run();
    }
  }

}


module.exports = merge;
