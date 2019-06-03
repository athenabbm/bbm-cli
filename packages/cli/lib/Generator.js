const path = require("path");
const fs = require("fs-extra");
const chalk = require("chalk");
const Diff = require("diff");
const transformCode = require("./utils/transformCode");
const { languageList } = require("./utils/const");

class Generator {
  constructor(
    name,
    { src, dest, context, diff, force, languages = languageList }
  ) {
    this.name = /\.js$/.test(name) ? name : `${name}.js`;
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
    if (contentText.includes(value)) return;
    fs.appendFileSync(filename, `\r\n${value};`, { encoding: "utf8" });
  }

  generage() {
    if (!this.text) {
      const srcFile = path.resolve(this.context, this.from, this.name);
      console.log(chalk.red(`${srcFile}内容为空`));
      return;
    }
    let { to } = this;
    if (typeof to === "string") {
      to = this.languages.reduce(
        (pre, key) => ({
          ...pre,
          [key]: path.resolve(this.context, to, key)
        }),
        {}
      );
    }
    if (typeof to !== "object") {
      console.log(chalk.red("配置错误！"));
      console.log(chalk.red(to));
      return;
    }

    this.languages.forEach(key => {
      const filename = path.join(to[key], this.name);
      const text = this.transformText[key];
      if (!this.diffFile(text, filename)) {
        return;
      }
      fs.ensureDirSync(to[key]);
      fs.writeFileSync(filename, text);
      console.log(chalk.green(`${filename}生成完成！`));
      this._appendExport(
        path.join(to[key], "index.js"),
        `export ${this.name.slice(0, -3)} from "./${this.name}"`
      );
    });
  }

  diffFile(text, filename) {
    // 当强制更新时直接返回
    if (this.force) return true;
    if (!fs.pathExistsSync(filename)) return true;
    const value = fs.readFileSync(filename, "utf8");
    // 当目标目录内容小于自己书写目录时不需要diff
    if (value.length < text.length && !this.diff) {
      return true;
    }
    const diff = Diff.diffLines(text, value);
    let isSame = true;

    diff.forEach(function(part) {
      // green for additions, red for deletions grey for common parts
      const color = part.added ? "red" : part.removed ? "green" : "grey";
      if (color === "grey") {
        return;
      }
      isSame = false;
      console.log(chalk[color](`${filename}:\n${part.value}`));
    });
    isSame
      ? console.log(chalk.grey(`${filename}文件没有变动`))
      : console.log(chalk.red(`可能会覆盖文件：${filename}`));
    return !isSame;
  }
}

module.exports = Generator;
