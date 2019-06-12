"use strict";

const path = require("path");
const fs = require("fs-extra");
const chalk = require("chalk");
const Diff = require("diff");
const inquirer = require('inquirer');
const transformCode = require("./utils/transformCode");


class Generator {
  constructor(name, {
    src,
    dest,
    context,
    diff,
    force,
    languages
  }) {
    this.name = /\.js$/.test(name)
      ? name
      : `${name}.js`;
    this.from = src;
    this.to = dest;
    this.context = context || process.cwd();
    this.text = this._read();
    this.diff = diff;
    this.force = force;
    this.languages = languages;
    if (this.text) {
      this.transformText = transformCode(this.text, languages);
    }
  }

  _read() {
    const srcFile = path.resolve(this.context, this.from, this.name);
    if (!fs.existsSync(srcFile)) {
      console.log(chalk.red(`文件不存在：${srcFile}`));
      throw new Error(`文件不存在：${srcFile}`);
    }
    return fs.readFileSync(srcFile);
  }

  _appendExport(filename, value) {
    fs.ensureFileSync(filename);
    const contentText = fs.readFileSync(filename, "utf-8");
    if (contentText.includes(value))
      return;
    fs.appendFileSync(filename, `\r\n${value};`, {encoding: "utf8"});
  }

  async generage() {
    if (!this.text) {
      const srcFile = path.resolve(this.context, this.from, this.name);
      console.log(chalk.red(`${srcFile}内容为空`));
      return;
    }
    let {to} = this;
    if (typeof to === "string") {
      to = this
        .languages
        .reduce((pre, key) => ({
          ...pre,
          [key]: path.resolve(this.context, to, key)
        }), {});
    }
    if (typeof to !== "object") {
      console.log(chalk.red("desc目录配置错误！"));
      console.log(chalk.red(to));
      return;
    }

    for (let index = 0; index < this.languages.length; index++) {
      const key = this.languages[index];
      const filename = path.join(to[key], this.name);
      const text = this.transformText[key];
      // 当强制更新时不需要diff
      if (!this.force) {
        let isContinue = await this.diffFile(text, filename)
        if (!isContinue) {
          continue;
        }
      }
      fs.ensureDirSync(to[key]);
      fs.writeFileSync(filename, text);
      console.log(chalk.green(`${filename}生成完成！`));
      this._appendExport(path.join(to[key], "index.js"), `export ${this.name.slice(0, -3)} from "./${this.name}"`);
    }
  }

  /**
   * 返回true就会生成
   * @param {string} text
   * @param {*} filename
   */
  async diffFile(text, filename) {
    // 目标文件不存在，不需要diff直接生成
    if (!fs.pathExistsSync(filename))
      return true;
    let value = fs.readFileSync(filename, "utf8");
    // 没有强制diff时，当目标目录内容小于自己书写目录时不需要diff
    if (value.length < text.length && !this.diff) {
      return true;
    }
    const diff = Diff.diffLines(text, value, {ignoreWhitespace: true,newlineIsToken: true});
    let isSame = true;

    diff.forEach(function (part) {
      // green for additions, red for deletions grey for common parts
      const color = part.added
        ? "red"
        : part.removed
          ? "green"
          : "grey";
      const prefix = part.added
      ? "--"
      : part.removed
        ? "++"
        : "";
      if (color === "grey") {
        return;
      }
      isSame = false;
      console.log(chalk[color](`${prefix} ${part.value}`));
    });
    if (isSame) {
      console.log(chalk.grey(`${filename}文件没有变动`))
      return false;
    }

    let needRun = false;

    if (!text.includes(value)) {
      console.log(chalk.red(`${filename}有改动，是否覆盖`));
      const {action} = await inquirer.prompt([
        {
          type: 'list',
          message: '继续选择true，跳过选择false',
          name: 'action',
          choices: [
            {
              name: 'true',
              value: true
            }, {
              name: 'false',
              value: false
            }
          ]
        }
      ])
      needRun = action
      if (!action) {
        console.log(chalk.green(`跳过${filename}的生成`))
      }
    }
    return needRun;
  }
}

module.exports = Generator;
