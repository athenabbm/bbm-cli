#!/usr/bin/env node

"use strict";

const program = require("commander");
const { pick } = require("../lib/utils/transformCode");

program.version(require("../package").version).usage("<command> [options]");

program
  .command("generate")
  .alias("g")
  .description("创建")
  .option("--diff", "开启diff")
  .option("-F, --force", "强制生成，不会比较文件！")
  .option("-S, --src <src>", "自定义语言文件编辑目录")
  .option("-D, --dest <dest>", "自定义语言文件存放目录")
  .option("-C, --cwd <cwd>", "cwd")
  .action((name, cmd) => {
    if (!cmd) {
      cmd = name;
      name = null;
    }
    require("../lib/create")(
      name,
      pick(cmd, ["src", "dest", "cwd", "diff", "force"])
    );
  });

program.parse(process.argv);
