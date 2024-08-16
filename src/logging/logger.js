const chalk = require('chalk');
const appName = require('../../package.json').name;

module.exports = {
    log(text, { by = appName, color = 'blue' } = {}) {
        console.log(chalk[color](`[${by}] ${text}`));
    }
}