/**
 * @type {import('@remix-run/dev').AppConfig}
 */

/**
 * We build CLI scripts by overriding the "custom server" support in remix,
 * based on the value of the REMIX_BUILD_CONFIG environment variable. It should
 * be set ot either "server" (the default) or "cli".
 */
const isBuildingCli = process.env.REMIX_TARGET === "cli";

const baseConfig = {
  ignoredRouteFiles: ["**/.*", "**/*.test.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
};

if (isBuildingCli) {
  module.exports = {
    ...baseConfig,
    server: "app/cli.ts",
    serverBuildPath: "build/cli.js",
  };
} else {
  module.exports = baseConfig;
}
