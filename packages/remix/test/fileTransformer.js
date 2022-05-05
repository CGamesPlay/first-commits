/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const path = require("path");

const appDir = path.resolve(__dirname, "../app");

module.exports = {
  process(_, sourcePath) {
    return {
      code: `module.exports = ${JSON.stringify(
        path.relative(appDir, sourcePath)
      )};`,
    };
  },
};
