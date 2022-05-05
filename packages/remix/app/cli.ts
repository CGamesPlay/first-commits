import { Command } from "commander";

const program = new Command();
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

program
  .command("greet")
  .argument("[name]")
  .description("say a greeting")
  .option("--shout", "greet louder")
  .action(async (name, options) => {
    let greeting = `Hello, ${name ?? "world"}!`;
    if (options.shout) {
      greeting = greeting.toUpperCase();
    }
    console.log(greeting);
    await sleep(1000);
  });

program.parseAsync().catch((e) => {
  console.error(e.stack);
  process.exit(1);
});
