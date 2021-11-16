/* eslint-disable */
const path = require("path");

module.exports = {
  process(data, filename, opts) {
    const url = path.relative(opts.config.rootDir, filename);
    return {
      code: `module.exports = "url:<rootDir>/" + ${JSON.stringify(url)};`,
    };
  },
};
