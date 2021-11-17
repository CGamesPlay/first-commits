import { Command } from "commander";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const command = new Command("greet")
  .argument("[name]")
  .description("say a greeting")
  .option("--shout", "greet louder")
  .action(async (name) => {
    let greeting = `Hello, ${name ?? "world"}!`;
    if (command.opts().shout) {
      greeting = greeting.toUpperCase();
    }
    console.log(greeting);
    await sleep(1000);
  });

export default command;
