const chalk = require('chalk')
const semver = require('semver')
const requiredVersion = require('../package.json').engines.node
const didYouMean = require('didyoumean')
const minimist = require('minimist');
didYouMean.threshold = 0.6

const program = require('commander');

program
  .version(require('../package').version)
  .usage('<command> [options]');

program
  .command('create <app-name>')
  .description('创建')
  .action((name,cmd) => {
    require('../lib/create')(name)
  })

program.parse(process.argv)
