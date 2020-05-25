// const IS_EE = require('./is_ee_env');
// const path = require('path');
const paths = require('./paths');

const aliases = {
  // the following resolves files which are different between CE and EE
  ee_else_ce: paths.appSrc,
};

// if (IS_EE) {
//   Object.assign(aliases, {
//     ee_else_ce: path.join(paths.appSrc, 'ee'),
//   });
// }

module.exports = aliases;
