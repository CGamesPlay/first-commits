import { Command } from "commander";

const program = new Command();

const context = require.context("./cli", true, /.*\/[^.]*$/);
context.keys().forEach((script) => {
  const mod = context(script);
  program.addCommand(mod.default);
});

program.parseAsync();
