const fs = require('fs-extra');
const path = require('path');
const appPaths = require('./paths');

module.exports = fs.existsSync(path.join(appPaths.appSrc, 'ee'));
