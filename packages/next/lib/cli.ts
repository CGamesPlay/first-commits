import { Command } from "commander";

const program = new Command();

const context = require.context("./cli", true, /^\.\/[^.]*$/);

async function main() {
  await Promise.all(
    context.keys().map(async (script) => {
      const mod = await context(script);
      program.addCommand(mod.default);
    })
  );

  await program.parseAsync();
}

main().catch((e) => {
  console.error(e.stack);
  process.exit(1);
});
