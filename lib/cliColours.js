// Modularised CLI Colours so that they can be exported and used in both cli.js and renderSvg.js
const cliColours = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    grey: '\x1b[90m',
    end: '\x1b[0m',
};

module.exports = cliColours;