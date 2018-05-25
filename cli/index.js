//Node
const os = require('os');
const path = require('path');

//Third-party
const yargs = require('yargs');
const chalk = require('chalk');
const download = require('download-git-repo');
const emoji = require('node-emoji');

console.log(chalk.bgWhite.yellow(`${emoji.get('bird')}please input your tpl, like: kq --tpl=(what template you want!)`));
const argv = yargs.argv;

if (argv.tpl) {
  // start download the template from args's tpl
  download(`flipxfx/download-git-repo-fixture`, `./${argv.tpl}`, function (err) {
    if (!err) {
      console.log(chalk.bgGreen.white('SUCCESS!'));
    } else {
      console.log(chalk.gbRed.white(err));
    }
  });
}