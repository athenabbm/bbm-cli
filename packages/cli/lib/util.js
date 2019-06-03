"use strict";

const readline = require("readline");

exports.clearConsole = () => {
  const blank = "\n".repeat(process.stdout.rows);
  console.log(blank);
  readline.cursorTo(process.stdout, 0, 0);
  readline.clearScreenDown(process.stdout);
};
