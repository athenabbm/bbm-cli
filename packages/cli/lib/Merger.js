"use strict";

const path = require("path");
const fs = require("fs-extra");
const chalk = require("chalk");
const Diff = require("diff");
const inquirer = require('inquirer');
const {parseLanguage} = require("./utils/transformCode");
const { getDirs } = require('./utils');

class Merger {
  constructor(name, {
    src,
    dest,
    context,
    diff,
    force,
    language
  }) {
    this.name = /\.js$/.test(name)
      ? name
      : `${name}.js`;
    this.from = src;
    this.dest = dest;
    this.to = path.resolve(dest,this.name);
    this.context = context || process.cwd();
    this.dirs = getDirs(src,language);
  }

  _read() {
    const vals = {}
    this.dirs.forEach(dir =>  {
      let file = path.resolve(this.context,this.from,dir,this.name);
      let val = fs.readFileSync(file,{encoding: 'utf8'})
      vals[dir] = val;
    });
    return vals;
  }

  transform() {
    let vals = this._read();
    return 'module.exports = ' + parseLanguage(vals).slice(1,-2)
  }



  run() {
    let targetFile = this.to
    if (fs.existsSync(targetFile)) {
      // todo prompt
      console.log(chalk.red(`${targetFile}文件已经存在！`))
      return;
    }
    let val = this.transform();
    fs.ensureDirSync(this.dest);
    fs.writeFileSync(targetFile,val);
    console.log(chalk.green(`${targetFile}生成完成！`))
  }
}

module.exports = Merger
