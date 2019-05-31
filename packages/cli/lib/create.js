const path = require('path');
const chalk = require('chalk');
const fs = require('fs-extra')
const inquirer = require('inquirer');
const validateProjectName = require('validate-npm-package-name')

module.exports = async function create(name) {
  const cwd = process.cwd();
  const isCurrent = name === '.';
  const projectName = isCurrent
    ? path.relative('../', cwd)
    : name;
  const targetDir = path.resolve(cwd, projectName || '.')
  const result = validateProjectName(projectName);

  if (!result.validForNewPackages) {
    console.log(chalk.red(`Invalid project name: "${projectName}"`));
    result.errors && result
      .errors
      .forEach(err => {
        console.error(chalk.red.dim('Error: ' + err))
      })
    result.warnings && result
      .warnings
      .forEach(warn => {
        console.error(chalk.red.dim('Warning: ' + warn))
      });

    process.exit(1)
  }

  if (fs.existsSync(targetDir)) {
    if (isCurrent) {
      const { ok } = await inquirer.prompt([
        {
          name: 'ok',
          type: 'confirm',
          message: '在当前目录生成项目？'
        }
      ])
      if (!ok) {
        return;
      }
    }else {
      const { action } = await inquirer.prompt([
        {
          name: 'action',
          type: 'list',
          message: `Target directory ${chalk.cyan(targetDir)} already exists. Pick an action:`,
          choices: [
            { name: 'Overwrite', value: 'overwrite' },
            { name: 'Merge', value: 'merge' },
            { name: 'Cancel', value: false }
          ]
        }
      ]);

      if (!action) return;
      if (action === 'overwrite') {
        console.log(`删除目录：${targetDir}`);
        await fs.remove(targetDir)
      }
    }
  }



}
