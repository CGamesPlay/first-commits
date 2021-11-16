/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  transform: {
    // Unfortunately this has to be whitelist extensions, and happens after the
    // name is already been resolved to a real file. It would be possible to
    // avoid this by writing a custom resolver instead.
    "\\.(png|jpg|ttf|woff|woff2)$": "<rootDir>/src/__mocks__/static.js",
  },
  moduleNameMapper: {
    "^.+\\.css$": "identity-obj-proxy",
    "^url:(.*)": "$1",
  },
};
