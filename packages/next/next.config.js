/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) return config;
    return {
      ...config,
      entry() {
        return config.entry().then((entry) => ({
          ...entry,
          cli: path.resolve(process.cwd(), "lib/cli.ts"),
        }));
      },
    };
  },
};
